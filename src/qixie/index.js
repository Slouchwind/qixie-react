import React from "react";
import { LinkBlock } from "./head";
import "./index.css";

export class Head extends React.Component {
    componentDidMount() {
        setInterval(() => {
            document.getElementById("header").style.height = (document.getElementById("head").clientHeight * 0.9) + "px";
            document.getElementById("header").style.marginTop = (document.getElementById("head").clientHeight * 0.05) + "px";
        }, 0);
    }

    render() {
        return (
            <>
                <div id="head">
                    <LinkBlock
                        href="./"
                        src="https://pic.lienav.com/i/2022/04/18/625d72251ee33.png"
                        id="index"
                    />
                    <LinkBlock
                        href="./about.html"
                        src="https://pic.lienav.com/i/2022/04/18/625d0474af435.png"
                        id="about"
                    />
                </div>
                <div id="header"></div>
            </>
        );
    }
}

export class Basic extends React.Component {
    constructor(props) {
        super(props);
        document.onselectstart = function () { return false; }
        document.oncontextmenu = function () { return false; }
    }

    render() {
        return (
            <>
                <Head />
                {this.props.children}
            </>
        );
    }
}