"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Props = /** @class */ (function () {
    function Props() {
        this.handle = function (stream) { return stream; };
    }
    return Props;
}());
var State = /** @class */ (function () {
    function State() {
        this.data = null;
    }
    return State;
}());
var Stream = /** @class */ (function (_super) {
    __extends(Stream, _super);
    function Stream() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new State();
        _this.subscription = null;
        return _this;
    }
    Stream.prototype.componentWillMount = function () {
        var _this = this;
        var child = React.Children.only(this.props.children);
        // Subscribe on nearest stream component
        if (child.type.streamClass !== Stream && this.props.handle && this.props.stream) {
            this.subscription = this.props.handle(this.props.stream).subscribe(function (data) {
                _this.setState({ data: data });
            });
        }
    };
    Stream.prototype.componentWillUnmount = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    Stream.prototype.render = function () {
        var child = React.Children.only(this.props.children);
        // Stream children
        if (child.type.streamClass === Stream && this.props.handle && this.props.stream) {
            return React.cloneElement(child, {
                stream: this.props.handle(this.props.stream)
            });
        }
        // Normal chilren
        if (!this.state.data) {
            return null;
        }
        if (typeof this.state.data !== "object") {
            throw Error("Data should be object when pass to normal component");
        }
        return React.cloneElement(child, __assign({}, this.state.data));
    };
    Stream.defaultProps = new Props();
    Stream.streamClass = Stream;
    Stream.create = function (handle) {
        var Wrapper = /** @class */ (function (_super) {
            __extends(Wrapper, _super);
            function Wrapper() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Wrapper.prototype.render = function () {
                var _a = this.props, stream = _a.stream, propsHandle = _a.handle, others = __rest(_a, ["stream", "handle"]);
                return (React.createElement(Stream, __assign({}, others, { stream: stream, handle: handle || propsHandle })));
            };
            Wrapper.streamClass = Stream;
            return Wrapper;
        }(React.PureComponent));
        return Wrapper;
    };
    return Stream;
}(React.PureComponent));
exports.Stream = Stream;
//# sourceMappingURL=index.js.map