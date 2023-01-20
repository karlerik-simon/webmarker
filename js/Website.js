System.register(["react/jsx-runtime", "./Website.css"], function (exports_1, context_1) {
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
    var jsx_runtime_1;
    var __moduleName = context_1 && context_1.id;
    function Website(props) {
        return (_jsxs("article", __assign({ className: "Website" }, { children: [_jsx("h1", __assign({ className: "Website-Name" }, { children: props.name })), _jsx("p", __assign({ className: "Website-Desc" }, { children: props.desc })), _jsx("a", __assign({ className: "Website-Url", href: props.url }, { children: "Link to website" }))] })));
    }
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            exports_1("default", Website);
        }
    };
});
//# sourceMappingURL=Website.js.map