import type { RecipeCollection } from "./recipe-collection";
import type { RecipeItem } from "./recipe-item";

export class RecipeTemplate {
    container: HTMLElement;
    collection: RecipeCollection;

    constructor(container: HTMLElement, collection: RecipeCollection) {
        this.container = container;
        this.collection = collection;
    }

    render(): void {
        this.container.innerHTML = "";

        this.collection.recipes.forEach((recipe) => {
            const card = this.createRecipeCard(recipe);
            this.container.append(card);
        });
    }

    private createRecipeCard(recipe: RecipeItem): HTMLElement {
        const card = document.createElement("div");
        card.className = "recipe-card";

        // title
        const title = document.createElement("h3");
        title.textContent = recipe.title;

        // favorite label
        if (recipe.isFavorite) {
            const fav = document.createElement("p");
            fav.textContent = "★ Favorite";
            card.append(fav);
        }

        // ingredients
        const ul = document.createElement("ul");
        recipe.ingredients.forEach((ingredient) => {
            const li = document.createElement("li");
            li.textContent = ingredient;
            ul.append(li);
        });

        // instructions (hidden by default)
        const instructions = document.createElement("p");
        instructions.textContent = recipe.instructions;
        instructions.classList.add("hidden");

        // toggle details button
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Show details";
        toggleBtn.addEventListener("click", () => {
            instructions.classList.toggle("hidden");
            toggleBtn.textContent = instructions.classList.contains("hidden")
                ? "Show details"
                : "Hide details";
        });

        // favorite button
        const favBtn = document.createElement("button");
        favBtn.textContent = recipe.isFavorite ? "Unfavorite" : "Favorite";
        favBtn.addEventListener("click", () => {
            this.collection.toggleRecipeFavorite(recipe.id);
            this.render();
        });

        // delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => {
            this.collection.removeRecipe(recipe.id);
            this.render();
        });

        card.append(title, ul, toggleBtn, instructions, favBtn, delBtn);
        return card;
    }
}
