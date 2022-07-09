import React from "react";
import ReactDOM from "react-dom/client";
import { Basic } from "./";
import { Card, CardMore, Icon, Title, User } from "./small";
import "../index.css";

// eslint-disable-next-line
const index =
    <Basic>
        <Icon />
        <Title>齐谐者</Title>
        <Title>志怪者也</Title>
        <div className="card">
            <Card
                name="名字1"
                info="这里是内容和信息和简介和一大堆乱七八糟的东西"
                author="作者1"
            />
            <Card
                name="名字2"
                info="这里是内容和信息和简介和一大堆乱七八糟的东西"
                author="作者2"
            />
            <Card
                name="名字3"
                info="这里是内容和信息和简介和一大堆乱七八糟的东西"
                author="作者3"
            />
            <Card
                name="测试测试测试"
                info="测试测试测试测试测试测试测试测试测试测试测试"
                author="测试测试测试"
            />
            <CardMore />
        </div>
    </Basic>

// eslint-disable-next-line
const about =
    <Basic>
        <div id="allUser">
            <User
                id="2241051890"
                name="春鹄"
                do="前端设计与开发"
            />
            <User
                id="2592589198"
                name="敛翮"
                do="提供主要设计方案"
            />
            <User
                id="2975537244"
                name="凤翎"
                do="与设计辩论，并帮助设计"
            />
        </div>
    </Basic>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(about);