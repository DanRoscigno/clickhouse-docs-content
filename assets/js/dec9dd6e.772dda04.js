"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[3500],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return f}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=l,E=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(E,c(c({ref:t},i),{},{components:n})):r.createElement(E,c({ref:t},i))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,c[1]=o;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94224:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),c=["components"],o={sidebar_label:"INTERSECT"},s="\u0421\u0435\u043a\u0446\u0438\u044f INTERSECT",u={unversionedId:"ru/sql-reference/statements/select/intersect",id:"ru/sql-reference/statements/select/intersect",title:"\u0421\u0435\u043a\u0446\u0438\u044f INTERSECT",description:"intersect-clause}",source:"@site/docs/ru/sql-reference/statements/select/intersect.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/intersect",permalink:"/docs/ru/sql-reference/statements/select/intersect",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/select/intersect.md",tags:[],version:"current",frontMatter:{sidebar_label:"INTERSECT"},sidebar:"russia",previous:{title:"HAVING",permalink:"/docs/ru/sql-reference/statements/select/having"},next:{title:"INTO OUTFILE",permalink:"/docs/ru/sql-reference/statements/select/into-outfile"}},i={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,l.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intersect-clause"},"\u0421\u0435\u043a\u0446\u0438\u044f INTERSECT"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INTERSECT")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0435\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u0445 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0438 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432. \u0412 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0438\u0445 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0438 \u0442\u0438\u043f. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERSECT")," \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u0435\u0441\u044f \u0441\u0442\u0440\u043e\u043a\u0438."),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERSECT")," \u0438 \u0441\u043a\u043e\u0431\u043a\u0438 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u044b, \u043f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0432\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043e. \u0423 ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERSECT")," \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f, \u0447\u0435\u043c \u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"EXCEPT"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column1 [, column2 ]\nFROM table1\n[WHERE condition]\n\nINTERSECT\n\nSELECT column1 [, column2 ]\nFROM table2\n[WHERE condition]\n\n")),(0,a.kt)("p",null,"\u0423\u0441\u043b\u043e\u0432\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u044e\u0431\u044b\u043c \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0432\u0430\u0448\u0438\u0445 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT number FROM numbers(1,10) INTERSECT SELECT number FROM numbers(3,6);\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u2510\n\u2502      3 \u2502\n\u2502      4 \u2502\n\u2502      5 \u2502\n\u2502      6 \u2502\n\u2502      7 \u2502\n\u2502      8 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t1(one String, two String, three String) ENGINE=Memory();\nCREATE TABLE t2(four String, five String, six String) ENGINE=Memory();\n\nINSERT INTO t1 VALUES ('q', 'm', 'b'), ('s', 'd', 'f'), ('l', 'p', 'o'), ('s', 'd', 'f'), ('s', 'd', 'f'), ('k', 't', 'd'), ('l', 'p', 'o');\nINSERT INTO t2 VALUES ('q', 'm', 'b'), ('b', 'd', 'k'), ('s', 'y', 't'), ('s', 'd', 'f'), ('m', 'f', 'o'), ('k', 'k', 'd');\n\nSELECT * FROM t1 INTERSECT SELECT * FROM t2;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500one\u2500\u252c\u2500two\u2500\u252c\u2500three\u2500\u2510\n\u2502 q   \u2502 m   \u2502 b     \u2502\n\u2502 s   \u2502 d   \u2502 f     \u2502\n\u2502 s   \u2502 d   \u2502 f     \u2502\n\u2502 s   \u2502 d   \u2502 f     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/select/union#union-clause"},"UNION")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/select/except#except-clause"},"EXCEPT"))))}f.isMDXComponent=!0}}]);