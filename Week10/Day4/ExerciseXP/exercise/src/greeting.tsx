interface GreetingInterface {
    name: string;
    messageCount: number;
}

export function Greeting(greeting: GreetingInterface) {
    return (
        <>
            <p>{greeting.name}</p>
            <p>{greeting.messageCount}</p>
        </>
    )
}