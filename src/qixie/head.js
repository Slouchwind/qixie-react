import React from "react";

export function LinkBlock(props) {
    return (
        <a href={props.href}>
            <img src={props.src} id={props.id} />
        </a>
    );
}