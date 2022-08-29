"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[68093],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,g=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82410:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],s={slug:"/en/sql-reference/functions/nlp-functions",sidebar_position:67,sidebar_label:"NLP",title:"[experimental] Natural Language Processing functions"},o=void 0,p={unversionedId:"en/sql-reference/functions/nlp-functions",id:"en/sql-reference/functions/nlp-functions",title:"[experimental] Natural Language Processing functions",description:"This is an experimental feature that is currently in development and is not ready for general use. It will change in unpredictable backwards-incompatible ways in future releases. Set allowexperimentalnlp_functions = 1 to enable it.",source:"@site/docs/en/sql-reference/functions/nlp-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/nlp-functions",permalink:"/docs/en/sql-reference/functions/nlp-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/nlp-functions.md",tags:[],version:"current",sidebarPosition:67,frontMatter:{slug:"/en/sql-reference/functions/nlp-functions",sidebar_position:67,sidebar_label:"NLP",title:"[experimental] Natural Language Processing functions"},sidebar:"english",previous:{title:"Encryption",permalink:"/docs/en/sql-reference/functions/encryption-functions"},next:{title:"Other",permalink:"/docs/en/sql-reference/functions/other-functions"}},u={},c=[{value:"stem",id:"stem",level:2},{value:"lemmatize",id:"lemmatize",level:2},{value:"synonyms",id:"synonyms",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is an experimental feature that is currently in development and is not ready for general use. It will change in unpredictable backwards-incompatible ways in future releases. Set ",(0,l.kt)("inlineCode",{parentName:"p"},"allow_experimental_nlp_functions = 1")," to enable it."))),(0,l.kt)("h2",{id:"stem"},"stem"),(0,l.kt)("p",null,"Performs stemming on a given word."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"stem('language', word)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"language")," \u2014 Language which rules will be applied. Must be in lowercase. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string#string"},"String"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"word")," \u2014 word that needs to be stemmed. Must be in lowercase. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string#string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT arrayMap(x -> stem('en', x), ['I', 'think', 'it', 'is', 'a', 'blessing', 'in', 'disguise']) as res;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['I','think','it','is','a','bless','in','disguis'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"lemmatize"},"lemmatize"),(0,l.kt)("p",null,"Performs lemmatization on a given word. Needs dictionaries to operate, which can be obtained ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/vpodpecan/lemmagen3/tree/master/src/lemmagen3/models"},"here"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"lemmatize('language', word)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"language")," \u2014 Language which rules will be applied. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string#string"},"String"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"word")," \u2014 Word that needs to be lemmatized. Must be lowercase. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string#string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT lemmatize('en', 'wolves');\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'\u250c\u2500lemmatize("wolves")\u2500\u2510\n\u2502              "wolf" \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),(0,l.kt)("p",null,"Configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<lemmatizers>\n    <lemmatizer>\n        <lang>en</lang>\n        <path>en.bin</path>\n    </lemmatizer>\n</lemmatizers>\n")),(0,l.kt)("h2",{id:"synonyms"},"synonyms"),(0,l.kt)("p",null,"Finds synonyms to a given word. There are two types of synonym extensions: ",(0,l.kt)("inlineCode",{parentName:"p"},"plain")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"wordnet"),"."),(0,l.kt)("p",null,"With the ",(0,l.kt)("inlineCode",{parentName:"p"},"plain")," extension type we need to provide a path to a simple text file, where each line corresponds to a certain synonym set. Words in this line must be separated with space or tab characters."),(0,l.kt)("p",null,"With the ",(0,l.kt)("inlineCode",{parentName:"p"},"wordnet")," extension type we need to provide a path to a directory with WordNet thesaurus in it. Thesaurus must contain a WordNet sense index."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"synonyms('extension_name', word)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"extension_name")," \u2014 Name of the extension in which search will be performed. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string#string"},"String"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"word")," \u2014 Word that will be searched in extension. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string#string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT synonyms('list', 'important');\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500synonyms('list', 'important')\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['important','big','critical','crucial'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<synonyms_extensions>\n    <extension>\n        <name>en</name>\n        <type>plain</type>\n        <path>en.txt</path>\n    </extension>\n    <extension>\n        <name>en</name>\n        <type>wordnet</type>\n        <path>en/</path>\n    </extension>\n</synonyms_extensions>\n")))}d.isMDXComponent=!0}}]);