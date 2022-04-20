"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[15598],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||i;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97399:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={sidebar_position:221},l="stochasticLinearRegression",c={unversionedId:"en/sql-reference/aggregate-functions/reference/stochasticlinearregression",id:"en/sql-reference/aggregate-functions/reference/stochasticlinearregression",title:"stochasticLinearRegression",description:"agg_functions-stochasticlinearregression}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/stochasticlinearregression.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/stochasticlinearregression",permalink:"/docs/en/sql-reference/aggregate-functions/reference/stochasticlinearregression",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/stochasticlinearregression.md",tags:[],version:"current",sidebarPosition:221,frontMatter:{sidebar_position:221},sidebar:"english",previous:{title:"simpleLinearRegression",permalink:"/docs/en/sql-reference/aggregate-functions/reference/simplelinearregression"},next:{title:"stochasticLogisticRegression",permalink:"/docs/en/sql-reference/aggregate-functions/reference/stochasticlogisticregression"}},u={},p=[{value:"Parameters",id:"agg_functions-stochasticlinearregression-parameters",level:3},{value:"Usage",id:"agg_functions-stochasticlinearregression-usage",level:3},{value:"Notes",id:"agg_functions-stochasticlinearregression-notes",level:3}],m={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agg_functions-stochasticlinearregression"},"stochasticLinearRegression"),(0,i.kt)("p",null,"This function implements stochastic linear regression. It supports custom parameters for learning rate, L2 regularization coefficient, mini-batch size and has few methods for updating weights (",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Stochastic_gradient_descent#Adam"},"Adam")," (used by default), ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Stochastic_gradient_descent"},"simple SGD"),", ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Stochastic_gradient_descent#Momentum"},"Momentum"),", ",(0,i.kt)("a",{parentName:"p",href:"https://mipt.ru/upload/medialibrary/d7e/41-91.pdf"},"Nesterov"),")."),(0,i.kt)("h3",{id:"agg_functions-stochasticlinearregression-parameters"},"Parameters"),(0,i.kt)("p",null,"There are 4 customizable parameters. They are passed to the function sequentially, but there is no need to pass all four - default values will be used, however good model required some parameter tuning."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"stochasticLinearRegression(1.0, 1.0, 10, 'SGD')\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"learning rate")," is the coefficient on step length, when gradient descent step is performed. Too big learning rate may cause infinite weights of the model. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"0.00001"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"l2 regularization coefficient")," which may help to prevent overfitting. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"0.1"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"mini-batch size")," sets the number of elements, which gradients will be computed and summed to perform one step of gradient descent. Pure stochastic descent uses one element, however having small batches(about 10 elements) make gradient steps more stable. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"15"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"method for updating weights"),", they are: ",(0,i.kt)("inlineCode",{parentName:"li"},"Adam")," (by default), ",(0,i.kt)("inlineCode",{parentName:"li"},"SGD"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Momentum"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Nesterov"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"Momentum")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Nesterov")," require little bit more computations and memory, however they happen to be useful in terms of speed of convergance and stability of stochastic gradient methods.")),(0,i.kt)("h3",{id:"agg_functions-stochasticlinearregression-usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stochasticLinearRegression")," is used in two steps: fitting the model and predicting on new data. In order to fit the model and save its state for later usage we use ",(0,i.kt)("inlineCode",{parentName:"p"},"-State")," combinator, which basically saves the state (model weights, etc).\nTo predict we use function ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/machine-learning-functions#machine_learning_methods-evalmlmethod"},"evalMLMethod"),", which takes a state as an argument as well as features to predict on."),(0,i.kt)("a",{name:"stochasticlinearregression-usage-fitting"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," Fitting"),(0,i.kt)("p",null,"Such query may be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS train_data\n(\n    param1 Float64,\n    param2 Float64,\n    target Float64\n) ENGINE = Memory;\n\nCREATE TABLE your_model ENGINE = Memory AS SELECT\nstochasticLinearRegressionState(0.1, 0.0, 5, 'SGD')(target, param1, param2)\nAS state FROM train_data;\n")),(0,i.kt)("p",null,"Here we also need to insert data into ",(0,i.kt)("inlineCode",{parentName:"p"},"train_data")," table. The number of parameters is not fixed, it depends only on number of arguments, passed into ",(0,i.kt)("inlineCode",{parentName:"p"},"linearRegressionState"),". They all must be numeric values.\nNote that the column with target value(which we would like to learn to predict) is inserted as the first argument."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," Predicting"),(0,i.kt)("p",null,"After saving a state into the table, we may use it multiple times for prediction, or even merge with other states and create new even better models."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WITH (SELECT state FROM your_model) AS model SELECT\nevalMLMethod(model, param1, param2) FROM test_data\n")),(0,i.kt)("p",null,"The query will return a column of predicted values. Note that first argument of ",(0,i.kt)("inlineCode",{parentName:"p"},"evalMLMethod")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunctionState")," object, next are columns of features."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test_data")," is a table like ",(0,i.kt)("inlineCode",{parentName:"p"},"train_data")," but may not contain target value."),(0,i.kt)("h3",{id:"agg_functions-stochasticlinearregression-notes"},"Notes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To merge two models user may create such query:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sql  SELECT state1 + state2 FROM your_models"),"\nwhere ",(0,i.kt)("inlineCode",{parentName:"p"},"your_models")," table contains both models. This query will return new ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunctionState")," object.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"User may fetch weights of the created model for its own purposes without saving the model if no ",(0,i.kt)("inlineCode",{parentName:"p"},"-State")," combinator is used.\n",(0,i.kt)("inlineCode",{parentName:"p"},"sql  SELECT stochasticLinearRegression(0.01)(target, param1, param2) FROM train_data"),"\nSuch query will fit the model and return its weights - first are weights, which correspond to the parameters of the model, the last one is bias. So in the example above the query will return a column with 3 values."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/stochasticlogisticregression#agg_functions-stochasticlogisticregression"},"stochasticLogisticRegression")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/12146914/what-is-the-difference-between-linear-regression-and-logistic-regression"},"Difference between linear and logistic regressions"))))}g.isMDXComponent=!0}}]);