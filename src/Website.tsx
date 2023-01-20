import React from "react";
import './Website.css';
import { websiteStruct } from "./WebsiteStruct.js";

function Website(props: websiteStruct)
{
    return (
        <article className="Website">
            <h1 className="Website-Name">{props.name}</h1>
            <p className="Website-Desc">{props.desc}</p>
            <a className="Website-Url" href={props.url}>Link to website</a>
        </article>
    );
}

export default Website;