(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),o=n(6),r=n(8),i=(n(13),n(14),n(1)),a=n(4),u=n.n(a),l=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="alphabet",h="length";var d=function(){var t=Object(i.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)(!1),a=Object(o.a)(s,2),d=a[0],g=a[1],p=function(t){return function(){return c(t)}},f=function(t,e,n){var c=Object(r.a)(t);return e&&c.sort((function(t,n){switch(e){case j:return t.localeCompare(n);case h:return t.length-n.length;default:return 0}})),n&&c.reverse(),c}(b,n,d);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:"button is-info ".concat(u()({"is-light":n!==j})),onClick:p(j),children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:"button is-success ".concat(u()({"is-light":n!==h})),onClick:p(h),children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:"button is-warning ".concat(u()({"is-light":!d})),onClick:function(){return g((function(t){return!t}))},children:"Reverse"}),(n||d)&&Object(l.jsx)("button",{onClick:function(){c(""),g(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(l.jsx)("ul",{children:f.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.78f693a1.chunk.js.map