System.register(["react/jsx-runtime", "./Website"], function (exports_1, context_1) {
    "use strict";
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var jsx_runtime_1, Website_1;
    var __moduleName = context_1 && context_1.id;
    function WebsiteList(props) {
        var data = {};
        var result;
        var elements = [];
        for (var i = 0; i < 10; i++) {
            elements.push(_jsx(Website_1.default, { name: "test #".concat(i + 1), url: "https://www.api-testing.com", desc: "Testing unit #".concat(i + 1) }));
        }
        return (_jsxs("div", __assign({ className: "WebsiteList" }, { children: [_jsx("header", { children: _jsx("h1", { children: props.category }) }), _jsx("main", { children: elements })] })));
    }
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (Website_1_1) {
                Website_1 = Website_1_1;
            }
        ],
        execute: function () {
            exports_1("default", WebsiteList);
        }
    };
});
//# sourceMappingURL=WebsiteList.js.map