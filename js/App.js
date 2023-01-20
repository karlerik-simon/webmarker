System.register(["react/jsx-runtime", "./App.css", "./logo.svg"], function (exports_1, context_1) {
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
    var jsx_runtime_1, logo_svg_1;
    var __moduleName = context_1 && context_1.id;
    function App() {
        return (_jsx("div", __assign({ className: "App" }, { children: _jsxs("header", __assign({ className: "App-header" }, { children: [_jsx("img", { src: logo_svg_1.default, className: "App-logo", alt: "logo" }), _jsxs("p", { children: ["Edit ", _jsx("code", { children: "src/App.js" }), " and save to reload."] }), _jsx("a", __assign({ className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, { children: "Learn React" }))] })) })));
    }
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (_1) {
            },
            function (logo_svg_1_1) {
                logo_svg_1 = logo_svg_1_1;
            }
        ],
        execute: function () {
            exports_1("default", App);
        }
    };
});
//# sourceMappingURL=App.js.map