import type { RecipePreview, RecipesApiResponse } from "./types.ts";
import { HEADERS, URL_RECIPE } from "./types.ts";

export async function fetchApi(): Promise<RecipePreview[]> {
    const response = await fetch(URL_RECIPE, {
        method: "GET",
        headers: HEADERS,
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: RecipesApiResponse = await response.json();

    return data.recipes.map((recipe) => ({
        title: recipe.title,
        time: recipe.readyInMinutes,
        imageUrl: recipe.image,
    }));
}
