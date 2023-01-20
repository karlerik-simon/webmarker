System.register(["react/jsx-runtime", "@testing-library/react", "./App"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, react_1, App_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (App_1_1) {
                App_1 = App_1_1;
            }
        ],
        execute: function () {
            test('renders learn react link', function () {
                react_1.render(_jsx(App_1.default, {}));
                var linkElement = react_1.screen.getByText(/learn react/i);
                expect(linkElement).toBeInTheDocument();
            });
        }
    };
});
//# sourceMappingURL=App.test.js.map