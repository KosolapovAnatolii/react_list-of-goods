(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n,r=s(4),c=s.n(r),o=s(5),i=s(6),a=s(9),l=s(7),u=s(8),h=s(1),b=s.n(h),d=(s(14),s(15),s(2)),p=s.n(d),j=s(0),y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(n||(n={}));var N=function(e){Object(a.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(o.a)(this,s);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={isReversed:!1,sortType:n.NONE},e.sortByAlphabet=function(){e.setState({sortType:n.ALPHABET})},e.sortByLength=function(){e.setState({sortType:n.LENGTH})},e.handleReset=function(){e.setState({sortType:n.NONE,isReversed:!1})},e.handleReverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state,t=e.isReversed,s=e.sortType,r=this.sortByAlphabet,c=this.sortByLength,o=this.handleReset,i=this.handleReverse,a=s!==n.NONE||t,l=function(e,t){var s=t.sortType,r=t.isReversed,c=Object(u.a)(e);return c.sort((function(e,t){switch(s){case n.NONE:return 0;case n.ALPHABET:return e.localeCompare(t);case n.LENGTH:return e.length-t.length;default:return 0}})),r&&c.reverse(),c}(y,{isReversed:t,sortType:s});return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button is-info",{"is-light":s!==n.ALPHABET}),onClick:r,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":s!==n.LENGTH}),onClick:c,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button is-warning",{"is-light":!t}),onClick:i,children:"Reverse"}),a&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:o,children:"Reset"})]}),Object(j.jsx)("ul",{children:l.map((function(e){return Object(j.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})}}]),s}(b.a.Component);c.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.11ab959a.chunk.js.map