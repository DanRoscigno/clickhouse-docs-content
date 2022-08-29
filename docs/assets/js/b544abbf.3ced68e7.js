"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[16190,68179],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return p}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(t),p=a,m=g["".concat(l,".").concat(p)]||g[p]||f[p]||o;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=g;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},69155:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return f}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],i={slug:"/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",sidebar_position:250,title:"categoricalInformationValue"},l=void 0,s={unversionedId:"en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",id:"en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",title:"categoricalInformationValue",description:"Calculates the value of (P(tag = 1) - P(tag = 0))(log(P(tag = 1)) - log(P(tag = 0))) for each category.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",permalink:"/docs/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue.md",tags:[],version:"current",sidebarPosition:250,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",sidebar_position:250,title:"categoricalInformationValue"},sidebar:"english",previous:{title:"stochasticLogisticRegression",permalink:"/docs/en/sql-reference/aggregate-functions/reference/stochasticlogisticregression"},next:{title:"studentTTest",permalink:"/docs/en/sql-reference/aggregate-functions/reference/studentttest"}},u={},f=[],g={toc:f};function p(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Calculates the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"(P(tag = 1) - P(tag = 0))(log(P(tag = 1)) - log(P(tag = 0)))")," for each category."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"categoricalInformationValue(category1, category2, ..., tag)\n")),(0,o.kt)("p",null,"The result indicates how a discrete (categorical) feature ",(0,o.kt)("inlineCode",{parentName:"p"},"[category1, category2, ...]")," contribute to a learning model which predicting the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"tag"),"."))}p.isMDXComponent=!0},48607:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return g}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),c=t(69155),i=["components"],l={slug:"/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue",sidebar_position:250,sidebad_label:"categoricalInformationValue",title:"categoricalInformationValue"},s=void 0,u={unversionedId:"ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue",id:"ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue",title:"categoricalInformationValue",description:"",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue.mdx",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue.mdx",tags:[],version:"current",sidebarPosition:250,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue",sidebar_position:250,sidebad_label:"categoricalInformationValue",title:"categoricalInformationValue"},sidebar:"russia",previous:{title:"stochasticLogisticRegression",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/stochasticlogisticregression"},next:{title:"studentTTest",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/studentttest"}},f={},g=[],p={toc:g};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)(c.default,{mdxType:"Content"}))}m.isMDXComponent=!0}}]);