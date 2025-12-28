import {Component } from "react";

import type { JSX } from "react"

type Props = {
    animals: string[];
};

export class UserFavoriteAnimals extends Component<Props> {
    render(): JSX.Element {
        return (
            <ul>
                {this.props.animals.map((item: string) => (
                        <li key={item}>{item}</li>
                    ))}
            </ul>
        );
    }
}
