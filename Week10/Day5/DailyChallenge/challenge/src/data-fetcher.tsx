import {useAppDispatch, useAppSelector} from "./hook.ts";
import {fetchApi} from "./api.ts";
import type {RecipePreview} from "./types.ts";
import {addRecipe} from "./data-slice.ts";

export function DataFetcher() {
    const recipes = useAppSelector((state) => state.recipes);
    const dispatch = useAppDispatch();

    async function addNewRecipes() {
        const newRecipes: RecipePreview[] = await fetchApi();
        dispatch(addRecipe(newRecipes));
    }

    return (
        <>
            {recipes.map((recipe)=> (
                <>
                <div id={`recipe-${recipe.title}`}>
                    <p>{recipe.title}</p>
                    <p>Time: {recipe.time}</p>
                    <img src={recipe.imageUrl} alt={recipe.title} />

                </div>
            </>
            ))}
            <button onClick={addNewRecipes}>Add New Recipes</button>
        </>
    )
}