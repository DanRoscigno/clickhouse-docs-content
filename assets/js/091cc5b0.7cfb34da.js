"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[86884],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16239:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),s=["components"],o={sidebar_position:45,sidebar_label:"s3"},i="S3 \u8868\u51fd\u6570",c={unversionedId:"zh/sql-reference/table-functions/s3",id:"zh/sql-reference/table-functions/s3",title:"S3 \u8868\u51fd\u6570",description:"s3-table-function}",source:"@site/docs/zh/sql-reference/table-functions/s3.md",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/s3",permalink:"/docs/zh/sql-reference/table-functions/s3",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/table-functions/s3.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,sidebar_label:"s3"},sidebar:"chinese",previous:{title:"hdfs",permalink:"/docs/zh/sql-reference/table-functions/hdfs"},next:{title:"input",permalink:"/docs/zh/sql-reference/table-functions/input"}},p={},u=[{value:"\u7528\u6cd5",id:"usage-examples",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"s3-table-function"},"S3 \u8868\u51fd\u6570"),(0,l.kt)("p",null,"\u63d0\u4f9b\u7c7b\u4f3c\u4e8e\u8868\u7684\u63a5\u53e3\u6765 select/insert ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3"),"\u4e2d\u7684\u6587\u4ef6\u3002\u8fd9\u4e2a\u8868\u51fd\u6570\u7c7b\u4f3c\u4e8e",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/table-functions/hdfs"},"hdfs"),"\uff0c\u4f46\u63d0\u4f9b\u4e86 S3 \u7279\u6709\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"s3(path, [aws_access_key_id, aws_secret_access_key,] format, structure, [compression])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," \u2014 \u5e26\u6709\u6587\u4ef6\u8def\u5f84\u7684 Bucket url\u3002\u5728\u53ea\u8bfb\u6a21\u5f0f\u4e0b\u652f\u6301\u4ee5\u4e0b\u901a\u914d\u7b26: ",(0,l.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"{abc,def}")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"M")," \u662f\u6570\u5b57, ",(0,l.kt)("inlineCode",{parentName:"li"},"'abc'"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"'def'")," \u662f\u5b57\u7b26\u4e32. \u66f4\u591a\u4fe1\u606f\u89c1",(0,l.kt)("a",{parentName:"li",href:"#wildcards-in-path"},"\u4e0b\u6587"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"format")," \u2014 \u6587\u4ef6\u7684",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/formats#formats"},"\u683c\u5f0f"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 \u8868\u7684\u7ed3\u6784. \u683c\u5f0f\u50cf\u8fd9\u6837 ",(0,l.kt)("inlineCode",{parentName:"li"},"'column1_name column1_type, column2_name column2_type, ...'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"compression")," \u2014 \u538b\u7f29\u7c7b\u578b. \u652f\u6301\u7684\u503c: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"gzip/gz"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"brotli/br"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"xz/LZMA"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"zstd/zst"),". \u53c2\u6570\u662f\u53ef\u9009\u7684. \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7\u6587\u4ef6\u6269\u5c55\u540d\u81ea\u52a8\u68c0\u6d4b\u538b\u7f29\u7c7b\u578b.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("p",null,"\u4e00\u4e2a\u5177\u6709\u6307\u5b9a\u7ed3\u6784\u7684\u8868\uff0c\u7528\u4e8e\u8bfb\u53d6\u6216\u5199\u5165\u6307\u5b9a\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u4ece S3 \u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"https://storage.yandexcloud.net/my-test-bucket-768/data.csv"),"\u4e2d\u9009\u62e9\u8868\u683c\u7684\u524d\u4e24\u884c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM s3('https://storage.yandexcloud.net/my-test-bucket-768/data.csv', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32')\nLIMIT 2;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u7c7b\u4f3c\u7684\u60c5\u51b5\uff0c\u4f46\u6765\u6e90\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"gzip"),"\u538b\u7f29\u7684\u6587\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM s3('https://storage.yandexcloud.net/my-test-bucket-768/data.csv.gz', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32', 'gzip')\nLIMIT 2;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"usage-examples"},"\u7528\u6cd5"),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5728S3\u4e0a\u6709\u51e0\u4e2a\u6587\u4ef6\uff0cURI\u5982\u4e0b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_1.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_1.csv'")),(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_2.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_2.csv'")),(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_3.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_3.csv'")),(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_4.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_4.csv'")),(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_1.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_1.csv'")),(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_2.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_2.csv'")),(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_3.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_3.csv'")),(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_4.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_4.csv'"))),(0,l.kt)("p",null,"\u8ba1\u7b97\u4ee5\u6570\u5b571\u81f33\u7ed3\u5c3e\u7684\u6587\u4ef6\u7684\u603b\u884c\u6570:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM s3('https://storage.yandexcloud.net/my-test-bucket-768/{some,another}_prefix/some_file_{1..3}.csv', 'CSV', 'name String, value UInt32')\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502      18 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u8ba1\u7b97\u8fd9\u4e24\u4e2a\u76ee\u5f55\u4e2d\u6240\u6709\u6587\u4ef6\u7684\u884c\u7684\u603b\u91cf:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM s3('https://storage.yandexcloud.net/my-test-bucket-768/{some,another}_prefix/*', 'CSV', 'name String, value UInt32')\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502      24 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,'!!! warning "Warning"\n\u5982\u679c\u6587\u4ef6\u5217\u8868\u4e2d\u5305\u542b\u6709\u4ece\u96f6\u5f00\u5934\u7684\u6570\u5b57\u8303\u56f4\uff0c\u8bf7\u5bf9\u6bcf\u4e2a\u6570\u5b57\u5206\u522b\u4f7f\u7528\u5e26\u62ec\u53f7\u7684\u7ed3\u6784\uff0c\u6216\u8005\u4f7f\u7528',(0,l.kt)("inlineCode",{parentName:"p"},"?"),"\u3002"),(0,l.kt)("p",null,"\u8ba1\u7b97\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"file-000.csv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"file-001.csv"),", \u2026 , ",(0,l.kt)("inlineCode",{parentName:"p"},"file-999.csv")," \u6587\u4ef6\u7684\u603b\u884c\u6570:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM s3('https://storage.yandexcloud.net/my-test-bucket-768/big_prefix/file-{000..999}.csv', 'CSV', 'name String, value UInt32');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502      12 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u63d2\u5165\u6570\u636e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"test-data.csv.gz")," \u6587\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION s3('https://storage.yandexcloud.net/my-test-bucket-768/test-data.csv.gz', 'CSV', 'name String, value UInt32', 'gzip')\nVALUES ('test-data', 1), ('test-data-2', 2);\n")),(0,l.kt)("p",null,"\u4ece\u5df2\u6709\u7684\u8868\u63d2\u5165\u6570\u636e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"test-data.csv.gz")," \u6587\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION s3('https://storage.yandexcloud.net/my-test-bucket-768/test-data.csv.gz', 'CSV', 'name String, value UInt32', 'gzip')\nSELECT name, value FROM existing_table;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/s3"},"S3 \u5f15\u64ce"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/s3/"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);