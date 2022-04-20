"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[46308],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},15710:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={sidebar_position:41,sidebar_label:"ORDER BY"},l="\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u0442\u0430\u0431\u043b\u0438\u0446",c={unversionedId:"ru/sql-reference/statements/alter/order-by",id:"ru/sql-reference/statements/alter/order-by",title:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u0442\u0430\u0431\u043b\u0438\u0446",description:"manipuliatsii-s-kliuchevymi-vyrazheniiami-tablits}",source:"@site/docs/ru/sql-reference/statements/alter/order-by.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/order-by",permalink:"/docs/ru/sql-reference/statements/alter/order-by",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/alter/order-by.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,sidebar_label:"ORDER BY"},sidebar:"russia",previous:{title:"UPDATE",permalink:"/docs/ru/sql-reference/statements/alter/update"},next:{title:"SAMPLE BY",permalink:"/docs/ru/sql-reference/statements/alter/sample-by"}},u={},p=[],f={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manipuliatsii-s-kliuchevymi-vyrazheniiami-tablits"},"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u0442\u0430\u0431\u043b\u0438\u0446"),(0,o.kt)("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"MODIFY ORDER BY new_expression\n")),(0,o.kt)("p",null,"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/alter/"},(0,o.kt)("inlineCode",{parentName:"a"},"MergeTree"))," (\u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/alter/"},"\u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445"),"). \u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430\n",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/alter/"},"\u043a\u043b\u044e\u0447 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438")," \u0442\u0430\u0431\u043b\u0438\u0446\u044b\n\u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"new_expression")," (\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u043a\u043e\u0440\u0442\u0435\u0436 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439). \u041f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043e\u0441\u0442\u0430\u0451\u0442\u0441\u044f \u043f\u0440\u0435\u0436\u043d\u0438\u043c."),(0,o.kt)("p",null,"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435. \u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u043a\u043b\u044e\u0447\u0443\n\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438, \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0432 \u043a\u043b\u044e\u0447 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u043e\u0432\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b (\u0442.\u0435. \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 ",(0,o.kt)("inlineCode",{parentName:"p"},"ADD COLUMN"),"\n\u0432 \u0442\u043e\u043c \u0436\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"ALTER"),"), \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0435\u0442 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."))}m.isMDXComponent=!0}}]);