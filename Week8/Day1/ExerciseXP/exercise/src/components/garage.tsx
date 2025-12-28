type GarageType = {
    size: string,
}

export function Garage(props: GarageType) {
    return (
        <p>Who lives in my {props.size} garage</p>
    )
}