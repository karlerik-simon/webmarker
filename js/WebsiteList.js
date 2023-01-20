System.register(["react/jsx-runtime"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1;
    var __moduleName = context_1 && context_1.id;
    function WebsiteList(props) {
        var data = {};
        fetch('', { method: 'POST', body: JSON.stringify(data) });
        for (var i = 0; i < 10; i++) {
        }
        return (_jsx("h1", { children: "WebsiteList" }));
    }
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            }
        ],
        execute: function () {
            exports_1("default", WebsiteList);
        }
    };
});
//# sourceMappingURL=WebsiteList.js.map