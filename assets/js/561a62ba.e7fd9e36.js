"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40565],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},g),{},{components:n})):a.createElement(f,i({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21090:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:37,sidebar_label:"Combinators"},u="Aggregate Function Combinators",s={unversionedId:"en/sql-reference/aggregate-functions/combinators",id:"en/sql-reference/aggregate-functions/combinators",title:"Aggregate Function Combinators",description:"aggregatefunctionscombinators}",source:"@site/docs/en/sql-reference/aggregate-functions/combinators.md",sourceDirName:"en/sql-reference/aggregate-functions",slug:"/en/sql-reference/aggregate-functions/combinators",permalink:"/en/sql-reference/aggregate-functions/combinators",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/combinators.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37,sidebar_label:"Combinators"},sidebar:"english",previous:{title:"sparkbar",permalink:"/en/sql-reference/aggregate-functions/reference/sparkbar"},next:{title:"Parametric",permalink:"/en/sql-reference/aggregate-functions/parametric-functions"}},g={},p=[{value:"-If",id:"agg-functions-combinator-if",level:2},{value:"-Array",id:"agg-functions-combinator-array",level:2},{value:"-Map",id:"agg-functions-combinator-map",level:2},{value:"-SimpleState",id:"agg-functions-combinator-simplestate",level:2},{value:"-State",id:"agg-functions-combinator-state",level:2},{value:"-Merge",id:"aggregate_functions_combinators-merge",level:2},{value:"-MergeState",id:"aggregate_functions_combinators-mergestate",level:2},{value:"-ForEach",id:"agg-functions-combinator-foreach",level:2},{value:"-Distinct",id:"agg-functions-combinator-distinct",level:2},{value:"-OrDefault",id:"agg-functions-combinator-ordefault",level:2},{value:"-OrNull",id:"agg-functions-combinator-ornull",level:2},{value:"-Resample",id:"agg-functions-combinator-resample",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"aggregate_functions_combinators"},"Aggregate Function Combinators"),(0,l.kt)("p",null,"The name of an aggregate function can have a suffix appended to it. This changes the way the aggregate function works."),(0,l.kt)("h2",{id:"agg-functions-combinator-if"},"-If"),(0,l.kt)("p",null,"The suffix -If can be appended to the name of any aggregate function. In this case, the aggregate function accepts an extra argument \u2013 a condition (Uint8 type). The aggregate function processes only the rows that trigger the condition. If the condition was not triggered even once, it returns a default value (usually zeros or empty strings)."),(0,l.kt)("p",null,"Examples: ",(0,l.kt)("inlineCode",{parentName:"p"},"sumIf(column, cond)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"countIf(cond)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"avgIf(x, cond)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesTimingIf(level1, level2)(x, cond)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"argMinIf(arg, val, cond)")," and so on."),(0,l.kt)("p",null,"With conditional aggregate functions, you can calculate aggregates for several conditions at once, without using subqueries and ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN"),"s. For example, conditional aggregate functions can be used to implement the segment comparison functionality."),(0,l.kt)("h2",{id:"agg-functions-combinator-array"},"-Array"),(0,l.kt)("p",null,"The -Array suffix can be appended to any aggregate function. In this case, the aggregate function takes arguments of the \u2018Array(T)\u2019 type (arrays) instead of \u2018T\u2019 type arguments. If the aggregate function accepts multiple arguments, this must be arrays of equal lengths. When processing arrays, the aggregate function works like the original aggregate function across all array elements."),(0,l.kt)("p",null,"Example 1: ",(0,l.kt)("inlineCode",{parentName:"p"},"sumArray(arr)")," - Totals all the elements of all \u2018arr\u2019 arrays. In this example, it could have been written more simply: ",(0,l.kt)("inlineCode",{parentName:"p"},"sum(arraySum(arr))"),"."),(0,l.kt)("p",null,"Example 2: ",(0,l.kt)("inlineCode",{parentName:"p"},"uniqArray(arr)")," \u2013 Counts the number of unique elements in all \u2018arr\u2019 arrays. This could be done an easier way: ",(0,l.kt)("inlineCode",{parentName:"p"},"uniq(arrayJoin(arr))"),", but it\u2019s not always possible to add \u2018arrayJoin\u2019 to a query."),(0,l.kt)("p",null,"-If and -Array can be combined. However, \u2018Array\u2019 must come first, then \u2018If\u2019. Examples: ",(0,l.kt)("inlineCode",{parentName:"p"},"uniqArrayIf(arr, cond)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesTimingArrayIf(level1, level2)(arr, cond)"),". Due to this order, the \u2018cond\u2019 argument won\u2019t be an array."),(0,l.kt)("h2",{id:"agg-functions-combinator-map"},"-Map"),(0,l.kt)("p",null,"The -Map suffix can be appended to any aggregate function. This will create an aggregate function which gets Map type as an argument, and aggregates values of each key of the map separately using the specified aggregate function. The result is also of a Map type."),(0,l.kt)("p",null,"Examples: ",(0,l.kt)("inlineCode",{parentName:"p"},"sumMap(map(1,1))"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"avgMap(map('a', 1))"),"."),(0,l.kt)("h2",{id:"agg-functions-combinator-simplestate"},"-SimpleState"),(0,l.kt)("p",null,"If you apply this combinator, the aggregate function returns the same value but with a different type. This is a ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/simpleaggregatefunction"},"SimpleAggregateFunction(...)")," that can be stored in a table to work with ",(0,l.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/aggregatingmergetree"},"AggregatingMergeTree")," tables."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"<aggFunction>SimpleState(x)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Aggregate function parameters.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("p",null,"The value of an aggregate function with the ",(0,l.kt)("inlineCode",{parentName:"p"},"SimpleAggregateFunction(...)")," type."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WITH anySimpleState(number) AS c SELECT toTypeName(c), c FROM numbers(1);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(c)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500c\u2500\u2510\n\u2502 SimpleAggregateFunction(any, UInt64) \u2502 0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"agg-functions-combinator-state"},"-State"),(0,l.kt)("p",null,"If you apply this combinator, the aggregate function does not return the resulting value (such as the number of unique values for the ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")," function), but an intermediate state of the aggregation (for ",(0,l.kt)("inlineCode",{parentName:"p"},"uniq"),", this is the hash table for calculating the number of unique values). This is an ",(0,l.kt)("inlineCode",{parentName:"p"},"AggregateFunction(...)")," that can be used for further processing or stored in a table to finish aggregating later."),(0,l.kt)("p",null,"To work with these states, use:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/engines/table-engines/mergetree-family/aggregatingmergetree"},"AggregatingMergeTree")," table engine."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/functions/other-functions#function-finalizeaggregation"},"finalizeAggregation")," function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/functions/other-functions#runningaccumulate"},"runningAccumulate")," function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#aggregate_functions_combinators-merge"},"-Merge")," combinator."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#aggregate_functions_combinators-mergestate"},"-MergeState")," combinator.")),(0,l.kt)("h2",{id:"aggregate_functions_combinators-merge"},"-Merge"),(0,l.kt)("p",null,"If you apply this combinator, the aggregate function takes the intermediate aggregation state as an argument, combines the states to finish aggregation, and returns the resulting value."),(0,l.kt)("h2",{id:"aggregate_functions_combinators-mergestate"},"-MergeState"),(0,l.kt)("p",null,"Merges the intermediate aggregation states in the same way as the -Merge combinator. However, it does not return the resulting value, but an intermediate aggregation state, similar to the -State combinator."),(0,l.kt)("h2",{id:"agg-functions-combinator-foreach"},"-ForEach"),(0,l.kt)("p",null,"Converts an aggregate function for tables into an aggregate function for arrays that aggregates the corresponding array items and returns an array of results. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"sumForEach")," for the arrays ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"[3, 4, 5]"),"and",(0,l.kt)("inlineCode",{parentName:"p"},"[6, 7]"),"returns the result ",(0,l.kt)("inlineCode",{parentName:"p"},"[10, 13, 5]")," after adding together the corresponding array items."),(0,l.kt)("h2",{id:"agg-functions-combinator-distinct"},"-Distinct"),(0,l.kt)("p",null,"Every unique combination of arguments will be aggregated only once. Repeating values are ignored.\nExamples: ",(0,l.kt)("inlineCode",{parentName:"p"},"sum(DISTINCT x)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"groupArray(DISTINCT x)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"corrStableDistinct(DISTINCT x, y)")," and so on."),(0,l.kt)("h2",{id:"agg-functions-combinator-ordefault"},"-OrDefault"),(0,l.kt)("p",null,"Changes behavior of an aggregate function."),(0,l.kt)("p",null,"If an aggregate function does not have input values, with this combinator it returns the default value for its return data type. Applies to the aggregate functions that can take empty input data."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-OrDefault")," can be used with other combinators."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"<aggFunction>OrDefault(x)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Aggregate function parameters.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("p",null,"Returns the default value of an aggregate function\u2019s return type if there is nothing to aggregate."),(0,l.kt)("p",null,"Type depends on the aggregate function used."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avg(number), avgOrDefault(number) FROM numbers(0)\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500avg(number)\u2500\u252c\u2500avgOrDefault(number)\u2500\u2510\n\u2502         nan \u2502                    0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Also ",(0,l.kt)("inlineCode",{parentName:"p"},"-OrDefault")," can be used with another combinators. It is useful when the aggregate function does not accept the empty input."),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avgOrDefaultIf(x, x > 10)\nFROM\n(\n    SELECT toDecimal32(1.23, 2) AS x\n)\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500avgOrDefaultIf(x, greater(x, 10))\u2500\u2510\n\u2502                              0.00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"agg-functions-combinator-ornull"},"-OrNull"),(0,l.kt)("p",null,"Changes behavior of an aggregate function."),(0,l.kt)("p",null,"This combinator converts a result of an aggregate function to the ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/nullable"},"Nullable")," data type. If the aggregate function does not have values to calculate it returns ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/syntax#null-literal"},"NULL"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-OrNull")," can be used with other combinators."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"<aggFunction>OrNull(x)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Aggregate function parameters.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The result of the aggregate function, converted to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Nullable")," data type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),", if there is nothing to aggregate.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable(aggregate function return type)"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"-orNull")," to the end of aggregate function."),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sumOrNull(number), toTypeName(sumOrNull(number)) FROM numbers(10) WHERE number > 10\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sumOrNull(number)\u2500\u252c\u2500toTypeName(sumOrNull(number))\u2500\u2510\n\u2502              \u1d3a\u1d41\u1d38\u1d38 \u2502 Nullable(UInt64)              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Also ",(0,l.kt)("inlineCode",{parentName:"p"},"-OrNull")," can be used with another combinators. It is useful when the aggregate function does not accept the empty input."),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avgOrNullIf(x, x > 10)\nFROM\n(\n    SELECT toDecimal32(1.23, 2) AS x\n)\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500avgOrNullIf(x, greater(x, 10))\u2500\u2510\n\u2502                           \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"agg-functions-combinator-resample"},"-Resample"),(0,l.kt)("p",null,"Lets you divide data into groups, and then separately aggregates the data in those groups. Groups are created by splitting the values from one column into intervals."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"<aggFunction>Resample(start, end, step)(<aggFunction_params>, resampling_key)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"start")," \u2014 Starting value of the whole required interval for ",(0,l.kt)("inlineCode",{parentName:"li"},"resampling_key")," values."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stop")," \u2014 Ending value of the whole required interval for ",(0,l.kt)("inlineCode",{parentName:"li"},"resampling_key")," values. The whole interval does not include the ",(0,l.kt)("inlineCode",{parentName:"li"},"stop")," value ",(0,l.kt)("inlineCode",{parentName:"li"},"[start, stop)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"step")," \u2014 Step for separating the whole interval into subintervals. The ",(0,l.kt)("inlineCode",{parentName:"li"},"aggFunction")," is executed over each of those subintervals independently."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resampling_key")," \u2014 Column whose values are used for separating data into intervals."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aggFunction_params")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"aggFunction")," parameters.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Array of ",(0,l.kt)("inlineCode",{parentName:"li"},"aggFunction")," results for each subinterval.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Consider the ",(0,l.kt)("inlineCode",{parentName:"p"},"people")," table with the following data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u252c\u2500age\u2500\u252c\u2500wage\u2500\u2510\n\u2502 John   \u2502  16 \u2502   10 \u2502\n\u2502 Alice  \u2502  30 \u2502   15 \u2502\n\u2502 Mary   \u2502  35 \u2502    8 \u2502\n\u2502 Evelyn \u2502  48 \u2502 11.5 \u2502\n\u2502 David  \u2502  62 \u2502  9.9 \u2502\n\u2502 Brian  \u2502  60 \u2502   16 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Let\u2019s get the names of the people whose age lies in the intervals of ",(0,l.kt)("inlineCode",{parentName:"p"},"[30,60)")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"[60,75)"),". Since we use integer representation for age, we get ages in the ",(0,l.kt)("inlineCode",{parentName:"p"},"[30, 59]")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"[60,74]")," intervals."),(0,l.kt)("p",null,"To aggregate names in an array, we use the ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/grouparray#agg_function-grouparray"},"groupArray")," aggregate function. It takes one argument. In our case, it\u2019s the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," column. The ",(0,l.kt)("inlineCode",{parentName:"p"},"groupArrayResample")," function should use the ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," column to aggregate names by age. To define the required intervals, we pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"30, 75, 30")," arguments into the ",(0,l.kt)("inlineCode",{parentName:"p"},"groupArrayResample")," function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayResample(30, 75, 30)(name, age) FROM people\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayResample(30, 75, 30)(name, age)\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [['Alice','Mary','Evelyn'],['David','Brian']] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Consider the results."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Jonh")," is out of the sample because he\u2019s too young. Other people are distributed according to the specified age intervals."),(0,l.kt)("p",null,"Now let\u2019s count the total number of people and their average wage in the specified age intervals."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    countResample(30, 75, 30)(name, age) AS amount,\n    avgResample(30, 75, 30)(wage, age) AS avg_wage\nFROM people\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500amount\u2500\u252c\u2500avg_wage\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [3,2]  \u2502 [11.5,12.949999809265137] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);