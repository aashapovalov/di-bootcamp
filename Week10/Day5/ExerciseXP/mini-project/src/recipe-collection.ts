import {RecipeItem} from "./recipe-item.ts";

export class RecipeCollection {
    recipes: RecipeItem[];
    private storageKey = "recipes";
    constructor(recipes: RecipeItem[] = []) {
        this.recipes = recipes;
    }

    addRecipe(title: string, ingredients: string[], instructions: string) {
        const titleIndex = this.recipes.findIndex(recipe => recipe.title === title);
        if (titleIndex === -1) {
            const newRecipe = new RecipeItem(title, ingredients, instructions);
            this.recipes.push(newRecipe);
            this.saveToLS();
            return true;
        } else {
            return false;
        }
    }

    removeRecipe(id: string) {
        const idIndex = this.recipes.findIndex(recipe => recipe.id === id);
        if (idIndex === -1) {
            return false;
        } else {
            this.recipes.splice(idIndex, 1);
            this.saveToLS();
            return true;
        }
    }

    toggleRecipeFavorite(id: string) {
        const idIndex = this.recipes.findIndex(recipe => recipe.id === id);
        if (idIndex === -1) {
            return false;
        } else {
            this.recipes[idIndex].isFavorite = !this.recipes[idIndex].isFavorite;
            this.saveToLS();
            return true;
        }
    }

    saveToLS() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.recipes));
    }

    loadFromLS() {
        const recipesFromLSStr: string | null = localStorage.getItem(this.storageKey);
        if (!recipesFromLSStr) {
            this.recipes = [];
            return;
        }

        const parsed = JSON.parse(recipesFromLSStr) as Array<{
            id: string;
            title: string;
            ingredients: string[];
            instructions: string;
            isFavorite: boolean;
        }>;

        this.recipes = parsed.map((recipe) => {
            const item = new RecipeItem(recipe.title, recipe.ingredients, recipe.instructions);
            item.id = recipe.id;
            item.isFavorite = recipe.isFavorite;
            return item;
        });
    }
}