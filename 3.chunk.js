(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{829:function(e,t,n){"use strict";n.r(t);var a=n(30),l=n.n(a),r=n(24),o=n.n(r),c=n(7),i=n.n(c),u=n(5),s=n.n(u),h=n(6),m=n.n(h),p=n(3),d=n.n(p),g=n(33),E=n(1),f=n(8),y=function e(){d()(this,e)},b=function(e){function t(){d()(this,t);var e=s()(this,(t.__proto__||o()(t)).apply(this,arguments));return e.state=new y,e.freshHighlight=function(){var t=f.findDOMNode(e);t&&l()(t.querySelectorAll("pre")).forEach(function(e){g.highlightBlock(e)})},e}return m()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.freshHighlight()}},{key:"render",value:function(){return E.createElement("div",null,E.createElement("h1",null,"Compare to callback"),E.createElement("p",null,"Normal callback data format:"),E.createElement("pre",{className:"highlight highlight-source-jsx"},["<Table","  dataSource={this.props.value}","  dataSourceFormatter={toObjectArray}","/>"].join("\n")),E.createElement("p",null,E.createElement("code",null,"rc-stream")," ways:"),E.createElement("pre",{className:"highlight highlight-source-jsx"},["<ToObjectArray stream={this.props.value$}>","  <Table />","</ToObjectArray>"].join("\n")),E.createElement("h2",null,"Reactive programming"),E.createElement("p",null,"This is the only way to bind Observable source to components."),E.createElement("h2",null,"Non-invasive"),E.createElement("p",null,"What if ",E.createElement("code",null,"Table")," doesn't have this callback ",E.createElement("code",null,"dataSourceFormatter"),"?"),E.createElement("p",null,E.createElement("code",null,"rc-stream")," help you handle data formatter in midway."),E.createElement("h2",null,"Expansibility"),E.createElement("p",null,"You can intercept any props, by using your custom stream components."),E.createElement("h2",null,"Visualization"),E.createElement("p",null,"Stream is a real component, so you can use it visually! Imagine a data processing container that can be dragged."))}}]),t}(E.PureComponent);t.default=b,b.defaultProps=new function e(){d()(this,e)}}}]);