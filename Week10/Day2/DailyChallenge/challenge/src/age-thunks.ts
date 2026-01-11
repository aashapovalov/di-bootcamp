import { ageIncrement, ageDecrement } from "./age-slice";
import type {AppDispatch} from "./store.ts";
type DirectionType = "increment" | "decrement";

export const ageChange =
    (direction: DirectionType, amount: number, delayMs = 1000) => {
        return async (dispatch: AppDispatch) => {
            await new Promise((resolve) => setTimeout(resolve, delayMs));

            if (direction === "increment") {
                dispatch(ageIncrement(amount));
            } else {
                dispatch(ageDecrement(amount));
            }
        };
    };
