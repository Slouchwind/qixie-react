import React from "react";

export function Title(props) {
    return (
        <div class="title">
            <p>{props.children}</p>
        </div>
    );
}

export function Icon() {
    return <img src="https://pic.lienav.com/i/2022/04/18/625d6ff5c9e3e.jpeg" id="icon" alt="icon"/>;
}

export function Card(props = { name: "", info: "", author: "" }) {
    return (
        <div>
            <p class="name">{props.name}</p>
            <p class="info">{props.info}</p>
            <p class="author">{props.author}</p>
        </div>
    );
}

export function CardMore() {
    return (
        <div id="cardMore">
            <div>
                <div>
                    <div>
                        <div id="p">
                            <p>更多</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function User(props = { id: "", name: "", do: "" }) {
    return (
        <div>
            <img src={`https://q1.qlogo.cn/g?b=qq&s=0&nk=${props.id}`} class="userImg" alt="头像"/>
            <p class="name">{props.name}</p>
            <p class="do">{props.do}</p>
        </div>
    );
}