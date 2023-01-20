import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Website from './Website';
import { websiteStruct } from './WebsiteStruct';
import WebsiteList from './WebsiteList';

let websiteTest: websiteStruct = {url: 'https:://www.if.se', name: 'If', desc: 'Insurance company based in Sweden'};

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <WebsiteList category="Favorites" sort="false" max={10} />
  </React.StrictMode>
);