"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[76866],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=c(n),s=a,d=k["".concat(o,".").concat(s)]||k[s]||m[s]||l;return n?i.createElement(d,r(r({ref:t},u),{},{components:n})):i.createElement(d,r({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var c=2;c<l;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},44358:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var i=n(87462),a=n(63366),l=(n(67294),n(3905)),r=["components"],p={sidebar_position:17,sidebar_label:"\u547d\u4ee4\u884c\u5ba2\u6237\u7aef"},o="\u547d\u4ee4\u884c\u5ba2\u6237\u7aef",c={unversionedId:"zh/interfaces/cli",id:"zh/interfaces/cli",title:"\u547d\u4ee4\u884c\u5ba2\u6237\u7aef",description:"command-line-client}",source:"@site/docs/zh/interfaces/cli.md",sourceDirName:"zh/interfaces",slug:"/zh/interfaces/cli",permalink:"/zh/interfaces/cli",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/interfaces/cli.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,sidebar_label:"\u547d\u4ee4\u884c\u5ba2\u6237\u7aef"},sidebar:"chinese",previous:{title:"\u63a5\u53e3",permalink:"/zh/interfaces/"},next:{title:"\u539f\u751f\u63a5\u53e3(TCP)",permalink:"/zh/interfaces/tcp"}},u={},m=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"cli_usage",level:2},{value:"\u67e5\u8be2\u53c2\u6570",id:"cli-queries-with-parameters",level:3},{value:"\u67e5\u8be2\u8bed\u6cd5",id:"cli-queries-with-parameters-syntax",level:4},{value:"\u793a\u4f8b",id:"example",level:4},{value:"\u914d\u7f6e",id:"interfaces_cli_configuration",level:2},{value:"\u547d\u4ee4\u884c\u53c2\u6570",id:"command-line-options",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"configuration_files",level:3}],k={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"command-line-client"},"\u547d\u4ee4\u884c\u5ba2\u6237\u7aef"),(0,l.kt)("p",null,"ClickHouse\u63d0\u4f9b\u4e86\u4e00\u4e2a\u539f\u751f\u547d\u4ee4\u884c\u5ba2\u6237\u7aef",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"\u5ba2\u6237\u7aef\u652f\u6301\u547d\u4ee4\u884c\u652f\u6301\u7684\u66f4\u591a\u4fe1\u606f\u8be6\u89c1",(0,l.kt)("a",{parentName:"p",href:"#interfaces_cli_configuration"},"Configuring"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/"},"\u5b89\u88c5\u90e8\u7f72"),"\u540e\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u4f1a\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"(\u540c\u65f6\u5b83\u5c5e\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"\u5b89\u88c5\u5305\u4e2d)\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse-client\nClickHouse client version 19.17.1.1579 (official build).\nConnecting to localhost:9000 as user default.\nConnected to ClickHouse server version 19.17.1 revision 54428.\n\n:)\n")),(0,l.kt)("p",null,"\u4e0d\u540c\u7684\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u7248\u672c\u5f7c\u6b64\u517c\u5bb9\uff0c\u4f46\u662f\u4e00\u4e9b\u7279\u6027\u53ef\u80fd\u5728\u65e7\u5ba2\u6237\u673a\u4e2d\u4e0d\u53ef\u7528\u3002\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u4e0e\u670d\u52a1\u5668\u5e94\u7528\u76f8\u540c\u7248\u672c\u7684\u5ba2\u6237\u7aef\u3002\u5f53\u4f60\u5c1d\u8bd5\u4f7f\u7528\u65e7\u7248\u672c\u7684\u5ba2\u6237\u7aef\u65f6\uff0c\u670d\u52a1\u5668\u4e0a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"\u4f1a\u663e\u793a\u5982\u4e0b\u4fe1\u606f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  ClickHouse client version is older than ClickHouse server. It may lack support for new features.\n")),(0,l.kt)("h2",{id:"cli_usage"},"\u4f7f\u7528\u65b9\u5f0f"),(0,l.kt)("p",null,"\u5ba2\u6237\u7aef\u53ef\u4ee5\u5728\u4ea4\u4e92\u548c\u975e\u4ea4\u4e92(\u6279\u5904\u7406)\u6a21\u5f0f\u4e0b\u4f7f\u7528\u3002\u8981\u4f7f\u7528\u6279\u5904\u7406\u6a21\u5f0f\uff0c\u8bf7\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"query"),"\u53c2\u6570\uff0c\u6216\u5c06\u6570\u636e\u53d1\u9001\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"stdin"),"(\u5b83\u4f1a\u9a8c\u8bc1",(0,l.kt)("inlineCode",{parentName:"p"},"stdin"),"\u662f\u5426\u662f\u7ec8\u7aef)\uff0c\u6216\u4e24\u8005\u540c\u65f6\u8fdb\u884c\u3002\u4e0eHTTP\u63a5\u53e3\u7c7b\u4f3c\uff0c\u5f53\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"query"),"\u53c2\u6570\u5e76\u5411",(0,l.kt)("inlineCode",{parentName:"p"},"stdin"),"\u53d1\u9001\u6570\u636e\u65f6\uff0c\u5ba2\u6237\u7aef\u8bf7\u6c42\u5c31\u662f\u4e00\u884c\u4e00\u884c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"stdin"),"\u8f93\u5165\u4f5c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"query"),"\u7684\u53c2\u6570\u3002\u8fd9\u79cd\u65b9\u5f0f\u5728\u5927\u89c4\u6a21\u7684\u63d2\u5165\u8bf7\u6c42\u4e2d\u975e\u5e38\u65b9\u4fbf\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u5ba2\u6237\u7aef\u63d2\u5165\u6570\u636e\u7684\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo -ne \"1, 'some text', '2016-08-14 00:00:00'\\n2, 'some more text', '2016-08-14 00:00:01'\" | clickhouse-client --database=test --query=\"INSERT INTO test FORMAT CSV\";\n\n$ cat <<_EOF | clickhouse-client --database=test --query=\"INSERT INTO test FORMAT CSV\";\n3, 'some text', '2016-08-14 00:00:00'\n4, 'some more text', '2016-08-14 00:00:01'\n_EOF\n\n$ cat file.csv | clickhouse-client --database=test --query=\"INSERT INTO test FORMAT CSV\";\n")),(0,l.kt)("p",null,"\u5728\u6279\u91cf\u6a21\u5f0f\u4e2d\uff0c\u9ed8\u8ba4\u7684\u6570\u636e\u683c\u5f0f\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"TabSeparated"),"\u5206\u9694\u7684\u3002\u60a8\u53ef\u4ee5\u6839\u636e\u67e5\u8be2\u6765\u7075\u6d3b\u8bbe\u7f6eFORMAT\u683c\u5f0f\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u6279\u91cf\u6a21\u5f0f\u4e2d\u53ea\u80fd\u6267\u884c\u5355\u4e2a\u67e5\u8be2\u3002\u4e3a\u4e86\u4ece\u4e00\u4e2aScript\u4e2d\u6267\u884c\u591a\u4e2a\u67e5\u8be2\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--multiquery"),"\u53c2\u6570\u3002\u9664\u4e86INSERT\u8bf7\u6c42\u5916\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5728\u4efb\u4f55\u5730\u65b9\u90fd\u6709\u7528\u3002\u67e5\u8be2\u7684\u7ed3\u679c\u4f1a\u8fde\u7eed\u4e14\u4e0d\u542b\u5206\u9694\u7b26\u5730\u8f93\u51fa\u3002\n\u540c\u6837\u7684\uff0c\u4e3a\u4e86\u6267\u884c\u5927\u89c4\u6a21\u7684\u67e5\u8be2\uff0c\u60a8\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u67e5\u8be2\u6267\u884c\u4e00\u6b21",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"\u3002\u4f46\u6ce8\u610f\u5230\u6bcf\u6b21\u542f\u52a8",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"\u7a0b\u5e8f\u90fd\u9700\u8981\u6d88\u8017\u51e0\u5341\u6beb\u79d2\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"\u5728\u4ea4\u4e92\u6a21\u5f0f\u4e0b\uff0c\u6bcf\u6761\u67e5\u8be2\u8fc7\u540e\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u8f93\u5165\u4e0b\u4e00\u6761\u67e5\u8be2\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"multiline"),"\u6ca1\u6709\u6307\u5b9a\uff08\u9ed8\u8ba4\u6ca1\u6307\u5b9a\uff09\uff1a\u4e3a\u4e86\u6267\u884c\u67e5\u8be2\uff0c\u6309\u4e0bEnter\u5373\u53ef\u3002\u67e5\u8be2\u8bed\u53e5\u4e0d\u662f\u5fc5\u987b\u4f7f\u7528\u5206\u53f7\u7ed3\u5c3e\u3002\u5982\u679c\u9700\u8981\u5199\u4e00\u4e2a\u591a\u884c\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u53ef\u4ee5\u5728\u6362\u884c\u4e4b\u524d\u8f93\u5165\u4e00\u4e2a\u53cd\u659c\u6760",(0,l.kt)("inlineCode",{parentName:"p"},"\\"),"\uff0c\u7136\u540e\u5728\u60a8\u6309\u4e0bEnter\u952e\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u8f93\u5165\u5f53\u524d\u8bed\u53e5\u7684\u4e0b\u4e00\u884c\u67e5\u8be2\u4e86\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"multiline"),"\uff1a\u4e3a\u4e86\u6267\u884c\u67e5\u8be2\uff0c\u9700\u8981\u4ee5\u5206\u53f7\u7ed3\u5c3e\u5e76\u4e14\u6309\u4e0bEnter\u952e\u3002\u5982\u679c\u884c\u672b\u6ca1\u6709\u5206\u53f7\uff0c\u5c06\u8ba4\u4e3a\u5f53\u524d\u8bed\u53e5\u5e76\u6ca1\u6709\u8f93\u5165\u5b8c\u800c\u8981\u6c42\u7ee7\u7eed\u8f93\u5165\u4e0b\u4e00\u884c\u3002"),(0,l.kt)("p",null,"\u82e5\u53ea\u8fd0\u884c\u5355\u4e2a\u67e5\u8be2\uff0c\u5206\u53f7\u540e\u9762\u7684\u6240\u6709\u5185\u5bb9\u90fd\u4f1a\u88ab\u5ffd\u7565\u3002"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"\\G"),"\u6765\u66ff\u4ee3\u5206\u53f7\u6216\u8005\u5728\u5206\u53f7\u540e\u9762\uff0c\u8fd9\u8868\u793a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Vertical"),"\u7684\u683c\u5f0f\u3002\u5728\u8fd9\u79cd\u683c\u5f0f\u4e0b\uff0c\u6bcf\u4e00\u4e2a\u503c\u90fd\u4f1a\u6253\u5370\u5728\u4e0d\u540c\u7684\u884c\u4e2d\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5bf9\u4e8e\u5bbd\u8868\u6765\u8bf4\u5f88\u65b9\u4fbf\u3002\u8fd9\u4e2a\u4e0d\u5e38\u89c1\u7684\u7279\u6027\u662f\u4e3a\u4e86\u517c\u5bb9MySQL\u547d\u4ee4\u800c\u52a0\u7684\u3002"),(0,l.kt)("p",null,"\u547d\u4ee4\u884c\u5ba2\u6237\u7aef\u662f\u57fa\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"replxx"),"(\u7c7b\u4f3c\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"readline"),")\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5b83\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u719f\u6089\u7684\u5feb\u6377\u952e\u65b9\u5f0f\u6765\u64cd\u4f5c\u4ee5\u53ca\u4fdd\u7559\u5386\u53f2\u547d\u4ee4\u3002\n\u5386\u53f2\u547d\u4ee4\u4f1a\u5199\u5165\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"~/.clickhouse-client-history"),"\u4e2d\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8f93\u51fa\u7684\u683c\u5f0f\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"PrettyCompact"),"\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7FORMAT\u8bbe\u7f6e\u6839\u636e\u4e0d\u540c\u67e5\u8be2\u6765\u4fee\u6539\u683c\u5f0f\uff0c\u6216\u8005\u901a\u8fc7\u5728\u67e5\u8be2\u672b\u5c3e\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"\\G"),"\u5b57\u7b26\uff0c\u6216\u901a\u8fc7\u5728\u547d\u4ee4\u884c\u4e2d\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--format"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"--vertical"),"\u53c2\u6570\uff0c\u6216\u4f7f\u7528\u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u82e5\u8981\u9000\u51fa\u5ba2\u6237\u7aef\uff0c\u4f7f\u7528Ctrl+D\uff08\u6216Ctrl+C\uff09\uff0c\u6216\u8005\u8f93\u5165\u4ee5\u4e0b\u5176\u4e2d\u4e00\u4e2a\u547d\u4ee4\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"exit"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quit"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"logout"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\u0443\u0447\u0448\u0435"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\u0439\u0433\u0448\u0435"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"\u0434\u0449\u043f\u0449\u0433\u0435"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"exit;"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quit;"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"logout;"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"q"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Q"),", ",(0,l.kt)("inlineCode",{parentName:"p"},":q")),(0,l.kt)("p",null,"\u5f53\u6267\u884c\u4e00\u4e2a\u67e5\u8be2\u7684\u65f6\u5019\uff0c\u5ba2\u6237\u7aef\u4f1a\u663e\u793a\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5ea6, \u8fdb\u5ea6\u4f1a\u6bcf\u79d2\u66f4\u65b0\u5341\u6b21\uff08\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff09\u3002\u5bf9\u4e8e\u5f88\u5feb\u7684\u67e5\u8be2\uff0c\u8fdb\u5ea6\u53ef\u80fd\u6ca1\u6709\u65f6\u95f4\u663e\u793a\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u8c03\u8bd5\u4f1a\u663e\u793a\u89e3\u6790\u4e14\u683c\u5f0f\u5316\u540e\u7684\u67e5\u8be2\u8bed\u53e5\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u683c\u5f0f\u7684\u8f93\u51fa\u7ed3\u679c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f93\u51fa\u7ed3\u679c\u7684\u884c\u6570\u7684\u884c\u6570\uff0c\u7ecf\u8fc7\u7684\u65f6\u95f4\uff0c\u4ee5\u53ca\u67e5\u8be2\u5904\u7406\u7684\u901f\u5ea6\u3002")),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7Ctrl+C\u6765\u53d6\u6d88\u4e00\u4e2a\u957f\u65f6\u95f4\u7684\u67e5\u8be2\u3002\u7136\u800c\uff0c\u60a8\u4f9d\u7136\u9700\u8981\u7b49\u5f85\u670d\u52a1\u7aef\u6765\u4e2d\u6b62\u8bf7\u6c42\u3002\u5728\u67d0\u4e2a\u9636\u6bb5\u53bb\u53d6\u6d88\u67e5\u8be2\u662f\u4e0d\u53ef\u80fd\u7684\u3002\u5982\u679c\u60a8\u4e0d\u7b49\u5f85\u5e76\u518d\u6b21\u6309\u4e0bCtrl + C,\u5ba2\u6237\u7aef\u5c06\u4f1a\u9000\u51fa\u3002"),(0,l.kt)("p",null,"\u547d\u4ee4\u884c\u5ba2\u6237\u7aef\u5141\u8bb8\u901a\u8fc7\u5916\u90e8\u6570\u636e\uff08\u5916\u90e8\u4e34\u65f6\u8868\uff09\u6765\u67e5\u8be2\u3002\u66f4\u591a\u76f8\u5173\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 \xab",(0,l.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/special/external-data"},"\u5916\u90e8\u6570\u636e\u67e5\u8be2\u5904\u7406"),"\xbb."),(0,l.kt)("h3",{id:"cli-queries-with-parameters"},"\u67e5\u8be2\u53c2\u6570"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u521b\u5efa\u5e26\u6709\u53c2\u6570\u7684\u67e5\u8be2\uff0c\u5e76\u5c06\u503c\u4ece\u5ba2\u6237\u7aef\u4f20\u9012\u7ed9\u670d\u52a1\u5668\u3002\u8fd9\u5141\u8bb8\u907f\u514d\u5728\u5ba2\u6237\u7aef\u4f7f\u7528\u7279\u5b9a\u7684\u52a8\u6001\u503c\u683c\u5f0f\u5316\u67e5\u8be2\u3002\u4f8b\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-client --param_parName="[1, 2]"  -q "SELECT * FROM table WHERE a = {parName:Array(UInt16)}"\n')),(0,l.kt)("h4",{id:"cli-queries-with-parameters-syntax"},"\u67e5\u8be2\u8bed\u6cd5"),(0,l.kt)("p",null,"\u50cf\u5e73\u5e38\u4e00\u6837\u683c\u5f0f\u5316\u4e00\u4e2a\u67e5\u8be2\uff0c\u7136\u540e\u628a\u4f60\u60f3\u8981\u4eceapp\u53c2\u6570\u4f20\u9012\u5230\u67e5\u8be2\u7684\u503c\u7528\u5927\u62ec\u53f7\u683c\u5f0f\u5316\uff0c\u683c\u5f0f\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"{<name>:<data type>}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," \u2014 \u5360\u4f4d\u7b26\u6807\u8bc6\u7b26\u3002\u5728\u63a7\u5236\u53f0\u5ba2\u6237\u7aef\uff0c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"--param_<name> = value"),"\u6765\u6307\u5b9a"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data type")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/"},"\u6570\u636e\u7c7b\u578b"),"\u53c2\u6570\u503c\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u6570\u636e\u7ed3\u6784",(0,l.kt)("inlineCode",{parentName:"li"},"(integer, ('string', integer))"),"\u62e5\u6709",(0,l.kt)("inlineCode",{parentName:"li"},"Tuple(UInt8, Tuple(String, UInt8))"),"\u6570\u636e\u7c7b\u578b(\u4f60\u4e5f\u53ef\u4ee5\u7528\u53e6\u4e00\u4e2a",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"integer"),"\u7c7b\u578b)\u3002")),(0,l.kt)("h4",{id:"example"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-client --param_tuple_in_tuple="(10, (\'dt\', 10))" -q "SELECT * FROM table WHERE val = {tuple_in_tuple:Tuple(UInt8, Tuple(String, UInt8))}"\n')),(0,l.kt)("h2",{id:"interfaces_cli_configuration"},"\u914d\u7f6e"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4f20\u5165\u53c2\u6570\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"\u4e2d\uff08\u6240\u6709\u7684\u53c2\u6570\u90fd\u6709\u9ed8\u8ba4\u503c\uff09\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7\u547d\u4ee4\u884c"),(0,l.kt)("p",{parentName:"li"},"\u547d\u4ee4\u884c\u53c2\u6570\u4f1a\u8986\u76d6\u9ed8\u8ba4\u503c\u548c\u914d\u7f6e\u6587\u4ef6\u7684\u914d\u7f6e\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u6587\u4ef6\u7684\u914d\u7f6e\u4f1a\u8986\u76d6\u9ed8\u8ba4\u503c"))),(0,l.kt)("h3",{id:"command-line-options"},"\u547d\u4ee4\u884c\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--host, -h")," -\u2013 \u670d\u52a1\u7aef\u7684host\u540d\u79f0, \u9ed8\u8ba4\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"localhost"),"\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528host\u540d\u79f0\u6216\u8005IPv4\u6216IPv6\u5730\u5740\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--port")," \u2013 \u8fde\u63a5\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u503c\uff1a9000\u3002\u6ce8\u610fHTTP\u63a5\u53e3\u4ee5\u53caTCP\u539f\u751f\u63a5\u53e3\u4f7f\u7528\u7684\u662f\u4e0d\u540c\u7aef\u53e3\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--user, -u")," \u2013 \u7528\u6237\u540d\u3002 \u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"default"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--password")," \u2013 \u5bc6\u7801\u3002 \u9ed8\u8ba4\u503c\uff1a\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--query, -q")," \u2013 \u4f7f\u7528\u975e\u4ea4\u4e92\u6a21\u5f0f\u67e5\u8be2\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--database, -d")," \u2013 \u9ed8\u8ba4\u5f53\u524d\u64cd\u4f5c\u7684\u6570\u636e\u5e93. \u9ed8\u8ba4\u503c\uff1a\u670d\u52a1\u7aef\u9ed8\u8ba4\u7684\u914d\u7f6e\uff08\u9ed8\u8ba4\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"default"),"\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--multiline, -m")," \u2013 \u5982\u679c\u6307\u5b9a\uff0c\u5141\u8bb8\u591a\u884c\u8bed\u53e5\u67e5\u8be2\uff08Enter\u4ec5\u4ee3\u8868\u6362\u884c\uff0c\u4e0d\u4ee3\u8868\u67e5\u8be2\u8bed\u53e5\u5b8c\u7ed3\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--multiquery, -n")," \u2013 \u5982\u679c\u6307\u5b9a, \u5141\u8bb8\u5904\u7406\u7528",(0,l.kt)("inlineCode",{parentName:"li"},";"),"\u53f7\u5206\u9694\u7684\u591a\u4e2a\u67e5\u8be2\uff0c\u53ea\u5728\u975e\u4ea4\u4e92\u6a21\u5f0f\u4e0b\u751f\u6548\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--format, -f")," \u2013 \u4f7f\u7528\u6307\u5b9a\u7684\u9ed8\u8ba4\u683c\u5f0f\u8f93\u51fa\u7ed3\u679c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--vertical, -E")," \u2013 \u5982\u679c\u6307\u5b9a\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f7f\u7528\u5782\u76f4\u683c\u5f0f\u8f93\u51fa\u7ed3\u679c\u3002\u8fd9\u4e0e",(0,l.kt)("inlineCode",{parentName:"li"},"\u2013format=Vertical"),"\u76f8\u540c\u3002\u5728\u8fd9\u79cd\u683c\u5f0f\u4e2d\uff0c\u6bcf\u4e2a\u503c\u90fd\u5728\u5355\u72ec\u7684\u884c\u4e0a\u6253\u5370\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5bf9\u663e\u793a\u5bbd\u8868\u5f88\u6709\u5e2e\u52a9\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--time, -t")," \u2013 \u5982\u679c\u6307\u5b9a\uff0c\u975e\u4ea4\u4e92\u6a21\u5f0f\u4e0b\u4f1a\u6253\u5370\u67e5\u8be2\u6267\u884c\u7684\u65f6\u95f4\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"stderr"),"\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--stacktrace")," \u2013 \u5982\u679c\u6307\u5b9a\uff0c\u5982\u679c\u51fa\u73b0\u5f02\u5e38\uff0c\u4f1a\u6253\u5370\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--config-file")," \u2013 \u914d\u7f6e\u6587\u4ef6\u7684\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--secure")," \u2013 \u5982\u679c\u6307\u5b9a\uff0c\u5c06\u901a\u8fc7\u5b89\u5168\u8fde\u63a5\u8fde\u63a5\u5230\u670d\u52a1\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--history_file")," \u2014 \u5b58\u653e\u547d\u4ee4\u5386\u53f2\u7684\u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--param_<name>")," \u2014 \u67e5\u8be2\u53c2\u6570\u914d\u7f6e",(0,l.kt)("a",{parentName:"li",href:"#cli-queries-with-parameters"},"\u67e5\u8be2\u53c2\u6570"),".")),(0,l.kt)("h3",{id:"configuration_files"},"\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"\u4f7f\u7528\u4ee5\u4e0b\u7b2c\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"--config-file"),"\u53c2\u6570\u6307\u5b9a\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"./clickhouse-client.xml")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~/.clickhouse-client/config.xml")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/etc/clickhouse-client/config.xml"))),(0,l.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<config>\n    <user>username</user>\n    <password>password</password>\n    <secure>False</secure>\n</config>\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/interfaces/cli/"},"\u6765\u6e90\u6587\u7ae0")," "))}s.isMDXComponent=!0}}]);