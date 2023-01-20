import React, { FC, JSXElementConstructor, ReactComponentElement, ReactHTML, ReactHTMLElement, ReactInstance } from "react";
import { JsxChild, JsxElement } from "typescript";
import { WebsiteListStruct } from "../structs//WebsiteListStruct";
import Website from "./Website";

function WebsiteList(props: WebsiteListStruct)
{
    let data = {};
    let result: JSX.Element;
    // fetch('', {method: 'POST', body: JSON.stringify(data)})

    let elements: JSX.Element[] = [];
    for (let i = 0; i < 10; i++)
    {
        elements.push(<Website name={`test #${i+1}`} url="https://www.api-testing.com" desc={`Testing unit #${i+1}`}/>);
    }

    return (
        <div className="WebsiteList">
            <header>
                <h1>{props.category}</h1>
            </header>
            <main>
                {elements}
            </main>
        </div>
    );
}

export default WebsiteList;