import React from "react";
import ReactDOM from "react-dom/client";
import { Basic } from "./";
import { Card, CardMore, Icon, Title } from "./small";
import "../index.css";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(index);