System.register(["react/jsx-runtime", "react", "react-dom/client", "./index.css", "./Website", "./WebsiteList"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, react_1, client_1, Website_1, WebsiteList_1, websiteTest, root;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (client_1_1) {
                client_1 = client_1_1;
            },
            function (_1) {
            },
            function (Website_1_1) {
                Website_1 = Website_1_1;
            },
            function (WebsiteList_1_1) {
                WebsiteList_1 = WebsiteList_1_1;
            }
        ],
        execute: function () {
            websiteTest = { url: 'https:://www.if.se', name: 'If', desc: 'Insurance company based in Sweden' };
            root = client_1.default.createRoot(document.getElementById('root'));
            root.render(_jsxs(react_1.default.StrictMode, { children: [_jsx(WebsiteList_1.default, { category: "none", sort: "false", max: 10 }), _jsx(Website_1.default, { name: websiteTest.name, url: websiteTest.url, desc: websiteTest.desc })] }));
        }
    };
});
//# sourceMappingURL=index.js.map