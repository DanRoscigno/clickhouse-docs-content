"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[66150],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),f=l(n),p=i,m=f["".concat(c,".").concat(p)]||f[p]||u[p]||a;return n?r.createElement(m,s(s({ref:t},g),{},{components:n})):r.createElement(m,s({ref:t},g))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90236:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),s=["components"],o={sidebar_position:222},c="stochasticLogisticRegression",l={unversionedId:"en/sql-reference/aggregate-functions/reference/stochasticlogisticregression",id:"en/sql-reference/aggregate-functions/reference/stochasticlogisticregression",title:"stochasticLogisticRegression",description:"agg_functions-stochasticlogisticregression}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/stochasticlogisticregression.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/stochasticlogisticregression",permalink:"/docs/en/sql-reference/aggregate-functions/reference/stochasticlogisticregression",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/stochasticlogisticregression.md",tags:[],version:"current",sidebarPosition:222,frontMatter:{sidebar_position:222},sidebar:"english",previous:{title:"stochasticLinearRegression",permalink:"/docs/en/sql-reference/aggregate-functions/reference/stochasticlinearregression"},next:{title:"categoricalInformationValue",permalink:"/docs/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue"}},g={},u=[{value:"Parameters",id:"agg_functions-stochasticlogisticregression-parameters",level:3}],f={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_functions-stochasticlogisticregression"},"stochasticLogisticRegression"),(0,a.kt)("p",null,"This function implements stochastic logistic regression. It can be used for binary classification problem, supports the same custom parameters as stochasticLinearRegression and works the same way."),(0,a.kt)("h3",{id:"agg_functions-stochasticlogisticregression-parameters"},"Parameters"),(0,a.kt)("p",null,"Parameters are exactly the same as in stochasticLinearRegression:\n",(0,a.kt)("inlineCode",{parentName:"p"},"learning rate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"l2 regularization coefficient"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mini-batch size"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"method for updating weights"),".\nFor more information see ",(0,a.kt)("a",{parentName:"p",href:"#agg_functions-stochasticlinearregression-parameters"},"parameters"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"stochasticLogisticRegression(1.0, 1.0, 10, 'SGD')\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Fitting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"See the `Fitting` section in the [stochasticLinearRegression](#stochasticlinearregression-usage-fitting) description.\n\nPredicted labels have to be in \\[-1, 1\\].\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," Predicting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Using saved state we can predict probability of object having label `1`.\n\n``` sql\nWITH (SELECT state FROM your_model) AS model SELECT\nevalMLMethod(model, param1, param2) FROM test_data\n```\n\nThe query will return a column of probabilities. Note that first argument of `evalMLMethod` is `AggregateFunctionState` object, next are columns of features.\n\nWe can also set a bound of probability, which assigns elements to different labels.\n\n``` sql\nSELECT ans < 1.1 AND ans > 0.5 FROM\n(WITH (SELECT state FROM your_model) AS model SELECT\nevalMLMethod(model, param1, param2) AS ans FROM test_data)\n```\n\nThen the result will be labels.\n\n`test_data` is a table like `train_data` but may not contain target value.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/stochasticlinearregression#agg_functions-stochasticlinearregression"},"stochasticLinearRegression")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/12146914/what-is-the-difference-between-linear-regression-and-logistic-regression"},"Difference between linear and logistic regressions."))))}p.isMDXComponent=!0}}]);