import {useAppDispatch, useAppSelector} from "./hook.ts";
import {ageChange} from "./age-thunks.ts";

export function AgeTracker() {
    const age = useAppSelector(state);
    const dispatch = useAppDispatch();
    return (
        <>
            <p>{age}</p>
            <button onClick={()=>dispatch(ageChange("increment", 1))}>Increment</button>
            <button onClick={()=>dispatch(ageChange("decrement", 1))}>Decrement</button>
        </>
    )
}