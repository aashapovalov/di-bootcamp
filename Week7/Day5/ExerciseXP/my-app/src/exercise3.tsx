import {Component} from "react";
import "./exercise3.css";

export class Exercise extends Component {
    style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };

    render() {
        return (
            <>
            <h1 style = {this.style_header}>This is a header</h1>
                <p className="para" >This is a paragraph</p>
                <a href="https://reactjs.org/">This is a link</a>
                <form>
                    <label htmlFor="new-input">This is a label</label>
                    <input id="new-input" />
                </form>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooG8JSZjQv-cnwwq8-oX_u3VB3pAcxnOXJ8p51gwH2z3kp5vi1j742C-7KYR_9d_v7Yu2SWNH3XgnIBEU7T1QMFrS0fYpPv77j9vBPB18Ig&s=10}" alt="react logo" />
                <ul>
                    <li>This is a list1</li>
                    <li>This is a list2</li>
                    <li>This is a list3</li>
                </ul>
            </>
        );
    }
}