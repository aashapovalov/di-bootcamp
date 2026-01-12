export type ApiRecipe = {
    title: string;
    readyInMinutes: number;
    image: string;
};

export type RecipesApiResponse = {
    recipes: ApiRecipe[];
};
export type RecipePreview = {
    title: string;
    time: number;
    imageUrl: string;
};

export const HEADERS = {
    "X-RapidAPI-Key": "274a33b616msh085de1047024243p11a8a0jsn81c289977879",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
};

export const URL_RECIPE: string = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=5";
