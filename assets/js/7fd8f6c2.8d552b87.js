"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[22832],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33125:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={sidebar_position:17,sidebar_label:"WikiStat"},c="WikiStat",p={unversionedId:"zh/getting-started/example-datasets/wikistat",id:"zh/getting-started/example-datasets/wikistat",title:"WikiStat",description:"wikistat}",source:"@site/docs/zh/getting-started/example-datasets/wikistat.md",sourceDirName:"zh/getting-started/example-datasets",slug:"/zh/getting-started/example-datasets/wikistat",permalink:"/zh/getting-started/example-datasets/wikistat",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/getting-started/example-datasets/wikistat.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,sidebar_label:"WikiStat"},sidebar:"chinese",previous:{title:"Star Schema Benchmark",permalink:"/zh/getting-started/example-datasets/star-schema"},next:{title:"Terabyte Click Logs from Criteo",permalink:"/zh/getting-started/example-datasets/criteo"}},l={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wikistat"},"WikiStat"),(0,i.kt)("p",null,"\u53c2\u8003: ",(0,i.kt)("a",{parentName:"p",href:"http://dumps.wikimedia.org/other/pagecounts-raw/"},"http://dumps.wikimedia.org/other/pagecounts-raw/")),(0,i.kt)("p",null,"\u521b\u5efa\u8868\u7ed3\u6784\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE wikistat\n(\n    date Date,\n    time DateTime,\n    project String,\n    subproject String,\n    path String,\n    hits UInt64,\n    size UInt64\n) ENGINE = MergeTree(date, (path, time), 8192);\n")),(0,i.kt)("p",null,"\u52a0\u8f7d\u6570\u636e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ for i in {2007..2016}; do for j in {01..12}; do echo $i-$j >&2; curl -sSL \"http://dumps.wikimedia.org/other/pagecounts-raw/$i/$i-$j/\" | grep -oE 'pagecounts-[0-9]+-[0-9]+\\.gz'; done; done | sort | uniq | tee links.txt\n$ cat links.txt | while read link; do wget http://dumps.wikimedia.org/other/pagecounts-raw/$(echo $link | sed -r 's/pagecounts-([0-9]{4})([0-9]{2})[0-9]{2}-[0-9]+\\.gz/\\1/')/$(echo $link | sed -r 's/pagecounts-([0-9]{4})([0-9]{2})[0-9]{2}-[0-9]+\\.gz/\\1-\\2/')/$link; done\n$ ls -1 /opt/wikistat/ | grep gz | while read i; do echo $i; gzip -cd /opt/wikistat/$i | ./wikistat-loader --time=\"$(echo -n $i | sed -r 's/pagecounts-([0-9]{4})([0-9]{2})([0-9]{2})-([0-9]{2})([0-9]{2})([0-9]{2})\\.gz/\\1-\\2-\\3 \\4-00-00/')\" | clickhouse-client --query=\"INSERT INTO wikistat FORMAT TabSeparated\"; done\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/getting_started/example_datasets/wikistat/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);