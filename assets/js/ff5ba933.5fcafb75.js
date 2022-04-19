"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17640],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),o=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=o(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=o(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<l;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47160:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return u}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],c={sidebar_position:42,sidebar_label:"For Replacing in Strings"},p="Functions for Searching and Replacing in Strings",o={unversionedId:"en/sql-reference/functions/string-replace-functions",id:"en/sql-reference/functions/string-replace-functions",title:"Functions for Searching and Replacing in Strings",description:"functions-for-searching-and-replacing-in-strings}",source:"@site/docs/en/sql-reference/functions/string-replace-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/string-replace-functions",permalink:"/en/sql-reference/functions/string-replace-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/string-replace-functions.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42,sidebar_label:"For Replacing in Strings"},sidebar:"english",previous:{title:"For Searching in Strings",permalink:"/en/sql-reference/functions/string-search-functions"},next:{title:"Conditional ",permalink:"/en/sql-reference/functions/conditional-functions"}},s={},u=[{value:"replaceOne(haystack, pattern, replacement)",id:"replaceonehaystack-pattern-replacement",level:2},{value:"replaceAll(haystack, pattern, replacement), replace(haystack, pattern, replacement)",id:"replaceallhaystack-pattern-replacement-replacehaystack-pattern-replacement",level:2},{value:"replaceRegexpOne(haystack, pattern, replacement)",id:"replaceregexponehaystack-pattern-replacement",level:2},{value:"replaceRegexpAll(haystack, pattern, replacement)",id:"replaceregexpallhaystack-pattern-replacement",level:2},{value:"regexpQuoteMeta(s)",id:"regexpquotemetas",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"functions-for-searching-and-replacing-in-strings"},"Functions for Searching and Replacing in Strings"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Functions for ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/string-search-functions"},"searching")," and ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/string-functions"},"other manipulations with strings")," are described separately."))),(0,l.kt)("h2",{id:"replaceonehaystack-pattern-replacement"},"replaceOne(haystack, pattern, replacement)"),(0,l.kt)("p",null,"Replaces the first occurrence, if it exists, of the \u2018pattern\u2019 substring in \u2018haystack\u2019 with the \u2018replacement\u2019 substring.\nHereafter, \u2018pattern\u2019 and \u2018replacement\u2019 must be constants."),(0,l.kt)("h2",{id:"replaceallhaystack-pattern-replacement-replacehaystack-pattern-replacement"},"replaceAll(haystack, pattern, replacement), replace(haystack, pattern, replacement)"),(0,l.kt)("p",null,"Replaces all occurrences of the \u2018pattern\u2019 substring in \u2018haystack\u2019 with the \u2018replacement\u2019 substring."),(0,l.kt)("h2",{id:"replaceregexponehaystack-pattern-replacement"},"replaceRegexpOne(haystack, pattern, replacement)"),(0,l.kt)("p",null,"Replacement using the \u2018pattern\u2019 regular expression. A re2 regular expression.\nReplaces only the first occurrence, if it exists.\nA pattern can be specified as \u2018replacement\u2019. This pattern can include substitutions ",(0,l.kt)("inlineCode",{parentName:"p"},"\\0-\\9"),".\nThe substitution ",(0,l.kt)("inlineCode",{parentName:"p"},"\\0")," includes the entire regular expression. Substitutions ",(0,l.kt)("inlineCode",{parentName:"p"},"\\1-\\9")," correspond to the subpattern numbers.To use the ",(0,l.kt)("inlineCode",{parentName:"p"},"\\")," character in a template, escape it using ",(0,l.kt)("inlineCode",{parentName:"p"},"\\"),".\nAlso keep in mind that a string literal requires an extra escape."),(0,l.kt)("p",null,"Example 1. Converting the date to American format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT\n    EventDate,\n    replaceRegexpOne(toString(EventDate), '(\\\\d{4})-(\\\\d{2})-(\\\\d{2})', '\\\\2/\\\\3/\\\\1') AS res\nFROM test.hits\nLIMIT 7\nFORMAT TabSeparated\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"2014-03-17      03/17/2014\n2014-03-18      03/18/2014\n2014-03-19      03/19/2014\n2014-03-20      03/20/2014\n2014-03-21      03/21/2014\n2014-03-22      03/22/2014\n2014-03-23      03/23/2014\n")),(0,l.kt)("p",null,"Example 2. Copying a string ten times:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT replaceRegexpOne('Hello, World!', '.*', '\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0') AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"replaceregexpallhaystack-pattern-replacement"},"replaceRegexpAll(haystack, pattern, replacement)"),(0,l.kt)("p",null,"This does the same thing, but replaces all the occurrences. Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT replaceRegexpAll('Hello, World!', '.', '\\\\0\\\\0') AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 HHeelllloo,,  WWoorrlldd!! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"As an exception, if a regular expression worked on an empty substring, the replacement is not made more than once.\nExample:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT replaceRegexpAll('Hello, World!', '^', 'here: ') AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 here: Hello, World! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"regexpquotemetas"},"regexpQuoteMeta(s)"),(0,l.kt)("p",null,"The function adds a backslash before some predefined characters in the string.\nPredefined characters: ",(0,l.kt)("inlineCode",{parentName:"p"},"\\0"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\\\\"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"|"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"("),", ",(0,l.kt)("inlineCode",{parentName:"p"},")"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"^"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"$"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"."),", ",(0,l.kt)("inlineCode",{parentName:"p"},"["),", ",(0,l.kt)("inlineCode",{parentName:"p"},"]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"?"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"{"),", ",(0,l.kt)("inlineCode",{parentName:"p"},":"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"-"),".\nThis implementation slightly differs from re2::RE2::QuoteMeta. It escapes zero byte as ",(0,l.kt)("inlineCode",{parentName:"p"},"\\0")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"\\x00")," and it escapes only required characters.\nFor more information, see the link: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/re2/blob/master/re2/re2.cc#L473"},"RE2")))}d.isMDXComponent=!0}}]);