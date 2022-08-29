"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[75942],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61298:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={slug:"/en/sql-reference/functions/geo/coordinates",sidebar_label:"Geographical Coordinates",sidebar_position:62,title:"Functions for Working with Geographical Coordinates"},s=void 0,p={unversionedId:"en/sql-reference/functions/geo/coordinates",id:"en/sql-reference/functions/geo/coordinates",title:"Functions for Working with Geographical Coordinates",description:"greatCircleDistance",source:"@site/docs/en/sql-reference/functions/geo/coordinates.md",sourceDirName:"en/sql-reference/functions/geo",slug:"/en/sql-reference/functions/geo/coordinates",permalink:"/docs/en/sql-reference/functions/geo/coordinates",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/geo/coordinates.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{slug:"/en/sql-reference/functions/geo/coordinates",sidebar_label:"Geographical Coordinates",sidebar_position:62,title:"Functions for Working with Geographical Coordinates"},sidebar:"english",previous:{title:"Geo",permalink:"/docs/en/sql-reference/functions/geo/"},next:{title:"Geohash",permalink:"/docs/en/sql-reference/functions/geo/geohash"}},c={},u=[{value:"greatCircleDistance",id:"greatcircledistance",level:2},{value:"geoDistance",id:"geodistance",level:2},{value:"greatCircleAngle",id:"greatcircleangle",level:2},{value:"pointInEllipses",id:"pointinellipses",level:2},{value:"pointInPolygon",id:"pointinpolygon",level:2}],d={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"greatcircledistance"},"greatCircleDistance"),(0,i.kt)("p",null,"Calculates the distance between two points on the Earth\u2019s surface using ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Great-circle_distance"},"the great-circle formula"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"greatCircleDistance(lon1Deg, lat1Deg, lon2Deg, lat2Deg)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Input parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lon1Deg")," \u2014 Longitude of the first point in degrees. Range: ",(0,i.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lat1Deg")," \u2014 Latitude of the first point in degrees. Range: ",(0,i.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lon2Deg")," \u2014 Longitude of the second point in degrees. Range: ",(0,i.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lat2Deg")," \u2014 Latitude of the second point in degrees. Range: ",(0,i.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]"),".")),(0,i.kt)("p",null,"Positive values correspond to North latitude and East longitude, and negative values correspond to South latitude and West longitude."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("p",null,"The distance between two points on the Earth\u2019s surface, in meters."),(0,i.kt)("p",null,"Generates an exception when the input parameter values fall outside of the range."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT greatCircleDistance(55.755831, 37.617673, -55.755831, -37.617673)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500greatCircleDistance(55.755831, 37.617673, -55.755831, -37.617673)\u2500\u2510\n\u2502                                                14132374.194975413 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"geodistance"},"geoDistance"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"greatCircleDistance")," but calculates the distance on WGS-84 ellipsoid instead of sphere. This is more precise approximation of the Earth Geoid.\nThe performance is the same as for ",(0,i.kt)("inlineCode",{parentName:"p"},"greatCircleDistance")," (no performance drawback). It is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"geoDistance")," to calculate the distances on Earth."),(0,i.kt)("p",null,"Technical note: for close enough points we calculate the distance using planar approximation with the metric on the tangent plane at the midpoint of the coordinates."),(0,i.kt)("h2",{id:"greatcircleangle"},"greatCircleAngle"),(0,i.kt)("p",null,"Calculates the central angle between two points on the Earth\u2019s surface using ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Great-circle_distance"},"the great-circle formula"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"greatCircleAngle(lon1Deg, lat1Deg, lon2Deg, lat2Deg)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Input parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lon1Deg")," \u2014 Longitude of the first point in degrees."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lat1Deg")," \u2014 Latitude of the first point in degrees."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lon2Deg")," \u2014 Longitude of the second point in degrees."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lat2Deg")," \u2014 Latitude of the second point in degrees.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("p",null,"The central angle between two points in degrees."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT greatCircleAngle(0, 0, 45, 0) AS arc\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arc\u2500\u2510\n\u2502  45 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"pointinellipses"},"pointInEllipses"),(0,i.kt)("p",null,"Checks whether the point belongs to at least one of the ellipses.\nCoordinates are geometric in the Cartesian coordinate system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"pointInEllipses(x, y, x\u2080, y\u2080, a\u2080, b\u2080,...,x\u2099, y\u2099, a\u2099, b\u2099)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Input parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x, y")," \u2014 Coordinates of a point on the plane."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x\u1d62, y\u1d62")," \u2014 Coordinates of the center of the ",(0,i.kt)("inlineCode",{parentName:"li"},"i"),"-th ellipsis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"a\u1d62, b\u1d62")," \u2014 Axes of the ",(0,i.kt)("inlineCode",{parentName:"li"},"i"),"-th ellipsis in units of x, y coordinates.")),(0,i.kt)("p",null,"The input parameters must be ",(0,i.kt)("inlineCode",{parentName:"p"},"2+4\u22c5n"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," is the number of ellipses."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned values")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1")," if the point is inside at least one of the ellipses; ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"if it is not."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT pointInEllipses(10., 10., 10., 9.1, 1., 0.9999)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500pointInEllipses(10., 10., 10., 9.1, 1., 0.9999)\u2500\u2510\n\u2502                                               1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"pointinpolygon"},"pointInPolygon"),(0,i.kt)("p",null,"Checks whether the point belongs to the polygon on the plane."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"pointInPolygon((x, y), [(a, b), (c, d) ...], ...)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Input values")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(x, y)")," \u2014 Coordinates of a point on the plane. Data type \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple")," \u2014 A tuple of two numbers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[(a, b), (c, d) ...]")," \u2014 Polygon vertices. Data type \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array"},"Array"),". Each vertex is represented by a pair of coordinates ",(0,i.kt)("inlineCode",{parentName:"li"},"(a, b)"),". Vertices should be specified in a clockwise or counterclockwise order. The minimum number of vertices is 3. The polygon must be constant."),(0,i.kt)("li",{parentName:"ul"},"The function also supports polygons with holes (cut out sections). In this case, add polygons that define the cut out sections using additional arguments of the function. The function does not support non-simply-connected polygons.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned values")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1")," if the point is inside the polygon, ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," if it is not.\nIf the point is on the polygon boundary, the function may return either 0 or 1."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT pointInPolygon((3., 3.), [(6, 0), (8, 4), (5, 8), (0, 2)]) AS res\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502   1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/geo/coordinates"},"Original article")," "))}g.isMDXComponent=!0}}]);