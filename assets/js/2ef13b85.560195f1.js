"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[88010],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),k=i,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28116:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=t(87462),i=t(63366),l=(t(67294),t(3905)),a=["components"],o={sidebar_position:43,sidebar_label:"\u0423\u0441\u043b\u043e\u0432\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"},p="\u0423\u0441\u043b\u043e\u0432\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",u={unversionedId:"ru/sql-reference/functions/conditional-functions",id:"ru/sql-reference/functions/conditional-functions",title:"\u0423\u0441\u043b\u043e\u0432\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",description:"uslovnye-funktsii}",source:"@site/docs/ru/sql-reference/functions/conditional-functions.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/conditional-functions",permalink:"/ru/sql-reference/functions/conditional-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/functions/conditional-functions.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43,sidebar_label:"\u0423\u0441\u043b\u043e\u0432\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"},sidebar:"russia",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u0438\u0441\u043a\u0430 \u0438 \u0437\u0430\u043c\u0435\u043d\u044b \u0432 \u0441\u0442\u0440\u043e\u043a\u0430\u0445",permalink:"/ru/sql-reference/functions/string-replace-functions"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0444\u0430\u0439\u043b\u0430\u043c\u0438",permalink:"/ru/sql-reference/functions/files"}},c={},s=[{value:"if",id:"if",level:2},{value:"\u0422\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u0439 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440",id:"ternary-operator",level:2},{value:"multiIf",id:"multiif",level:2}],m={toc:s};function k(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"uslovnye-funktsii"},"\u0423\u0441\u043b\u043e\u0432\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"),(0,l.kt)("h2",{id:"if"},"if"),(0,l.kt)("p",null,"\u0423\u0441\u043b\u043e\u0432\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435. \u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0430 \u0441\u0438\u0441\u0442\u0435\u043c, ClickHouse \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u043e\u0431\u0430 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"else"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"if(cond, then, else)\n")),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"cond")," \u043d\u0435 \u0440\u0430\u0432\u043d\u043e \u043d\u0443\u043b\u044e, \u0442\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"then"),". \u0415\u0441\u043b\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"cond")," \u0440\u0430\u0432\u043d\u043e \u043d\u0443\u043b\u044e \u0438\u043b\u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f NULL, \u0442\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"else"),"."),(0,l.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," \u043f\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0439 \u0441\u0445\u0435\u043c\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,l.kt)("a",{parentName:"p",href:"/ru/operations/settings/#short-circuit-function-evaluation"},"short_circuit_function_evaluation"),". \u0415\u0441\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430, \u0442\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u0442\u0440\u043e\u043a, \u0433\u0434\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"cond")," \u0432\u0435\u0440\u043d\u043e, \u0430 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"else")," \u2013 \u0434\u043b\u044f \u0441\u0442\u0440\u043e\u043a, \u0433\u0434\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"cond")," \u043d\u0435\u0432\u0435\u0440\u043d\u043e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT if(number = 0, 0, intDiv(42, number)) FROM numbers(10)")," \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438\u0437-\u0437\u0430 \u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u043d\u043e\u043b\u044c, \u0442\u0430\u043a \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"intDiv(42, number)")," \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0447\u0438\u0441\u0435\u043b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u044f\u044e\u0442 \u0443\u0441\u043b\u043e\u0432\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"number = 0"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cond")," \u2013 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c\u043e\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435. \u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/functions/conditional-functions"},"UInt8")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"then")," \u2013 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"cond")," \u0438\u0441\u0442\u0438\u043d\u043d\u043e."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"else")," \u2013 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"cond")," \u043b\u043e\u0436\u043d\u043e.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,l.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"else")," \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0435\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e, \u0431\u044b\u043b\u043e \u043b\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"cond")," \u0440\u0430\u0432\u043d\u043e \u043d\u0443\u043b\u044e \u0438\u043b\u0438 \u043d\u0435\u0442."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT if(1, plus(2, 2), plus(2, 6));\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500plus(2, 2)\u2500\u2510\n\u2502          4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT if(0, plus(2, 2), plus(2, 6));\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500plus(2, 6)\u2500\u2510\n\u2502          8 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"ternary-operator"},"\u0422\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u0439 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"),(0,l.kt)("p",null,"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u0430\u043a \u0436\u0435, \u043a\u0430\u043a \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"if"),"."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441: ",(0,l.kt)("inlineCode",{parentName:"p"},"cond ? then : else")),(0,l.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"then"),", \u0435\u0441\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"cond")," \u0432\u0435\u0440\u043d\u043e (\u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f), \u0432 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"else"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"cond")," \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0442\u0438\u043f\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt8"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"else")," \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u043a \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u043c\u0443 \u043e\u0431\u0449\u0435\u043c\u0443 \u0442\u0438\u043f\u0443.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"else")," \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),"."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/functions/other-functions#ifnotfinite"},"ifNotFinite"),".")),(0,l.kt)("h2",{id:"multiif"},"multiIf"),(0,l.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/operators/#operator_case"},"CASE")," \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"multiIf(cond_1, then_1, cond_2, then_2, ..., else)\n")),(0,l.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"multiIf")," \u043f\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0439 \u0441\u0445\u0435\u043c\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,l.kt)("a",{parentName:"p",href:"/ru/operations/settings/#short-circuit-function-evaluation"},"short_circuit_function_evaluation"),". \u0415\u0441\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430, \u0442\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"then_i")," \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u0442\u0440\u043e\u043a, \u0433\u0434\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"((NOT cond_1) AND (NOT cond_2) AND ... AND (NOT cond_{i-1}) AND cond_i)")," \u0432\u0435\u0440\u043d\u043e, ",(0,l.kt)("inlineCode",{parentName:"p"},"cond_i")," \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u0442\u0440\u043e\u043a, \u0433\u0434\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"((NOT cond_1) AND (NOT cond_2) AND ... AND (NOT cond_{i-1}))")," \u0432\u0435\u0440\u043d\u043e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT multiIf(number = 2, intDiv(1, number), number = 5) FROM numbers(10)")," \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438\u0437-\u0437\u0430 \u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u043d\u043e\u043b\u044c."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cond_N")," \u2014 \u0443\u0441\u043b\u043e\u0432\u0438\u0435, \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u0435\u0440\u043d\u0451\u0442 ",(0,l.kt)("inlineCode",{parentName:"li"},"then_N"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"then_N")," \u2014 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"else")," \u2014 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0435\u0441\u043b\u0438 \u043d\u0438 \u043e\u0434\u043d\u043e \u0438\u0437 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e.")),(0,l.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"2N+1")," \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,l.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0434\u043d\u043e \u0438\u0437 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"then_N")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"else"),", \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"cond_N"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u043c \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT multiIf(isNull(y), x, y < 3, y, NULL) FROM t_null"),". \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500multiIf(isNull(y), x, less(y, 3), y, NULL)\u2500\u2510\n\u2502                                          1 \u2502\n\u2502                                       \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}k.isMDXComponent=!0}}]);