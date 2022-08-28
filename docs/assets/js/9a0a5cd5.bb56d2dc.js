"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[55725,60969],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(b,l(l({ref:t},u),{},{components:n})):o.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2759:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],a={slug:"/en/development/build-cross-osx",sidebar_position:66,title:"How to Build ClickHouse on Linux for Mac OS X",sidebar_label:"Build on Linux for Mac OS X"},s=void 0,c={unversionedId:"en/development/build-cross-osx",id:"en/development/build-cross-osx",title:"How to Build ClickHouse on Linux for Mac OS X",description:"This is for the case when you have a Linux machine and want to use it to build clickhouse binary that will run on OS X.",source:"@site/docs/en/development/build-cross-osx.md",sourceDirName:"en/development",slug:"/en/development/build-cross-osx",permalink:"/docs/en/development/build-cross-osx",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/development/build-cross-osx.md",tags:[],version:"current",sidebarPosition:66,frontMatter:{slug:"/en/development/build-cross-osx",sidebar_position:66,title:"How to Build ClickHouse on Linux for Mac OS X",sidebar_label:"Build on Linux for Mac OS X"},sidebar:"english",previous:{title:"Build on Mac OS X",permalink:"/docs/en/development/build-osx"},next:{title:"Build on Linux for AARCH64 (ARM64)",permalink:"/docs/en/development/build-cross-arm"}},u={},d=[{value:"Install Clang-14",id:"install-clang-14",level:2},{value:"Install Cross-Compilation Toolset",id:"install-cross-compilation-toolset",level:2},{value:"Build ClickHouse",id:"build-clickhouse",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is for the case when you have a Linux machine and want to use it to build ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse")," binary that will run on OS X.\nThis is intended for continuous integration checks that run on Linux servers. If you want to build ClickHouse directly on Mac OS X, then proceed with ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/development/build-osx"},"another instruction"),"."),(0,i.kt)("p",null,"The cross-build for Mac OS X is based on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/development/build"},"Build instructions"),", follow them first."),(0,i.kt)("h2",{id:"install-clang-14"},"Install Clang-14"),(0,i.kt)("p",null,"Follow the instructions from ",(0,i.kt)("a",{parentName:"p",href:"https://apt.llvm.org/"},"https://apt.llvm.org/")," for your Ubuntu or Debian setup.\nFor example the commands for Bionic are like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo echo "deb [trusted=yes] http://apt.llvm.org/bionic/ llvm-toolchain-bionic-14 main" >> /etc/apt/sources.list\nsudo apt-get install clang-14\n')),(0,i.kt)("h2",{id:"install-cross-compilation-toolset"},"Install Cross-Compilation Toolset"),(0,i.kt)("p",null,"Let\u2019s remember the path where we install ",(0,i.kt)("inlineCode",{parentName:"p"},"cctools")," as ${CCTOOLS}"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export CCTOOLS=$(cd ~/cctools && pwd)\nmkdir ${CCTOOLS}\ncd ${CCTOOLS}\n\ngit clone https://github.com/tpoechtrager/apple-libtapi.git\ncd apple-libtapi\nINSTALLPREFIX=${CCTOOLS} ./build.sh\n./install.sh\ncd ..\n\ngit clone https://github.com/tpoechtrager/cctools-port.git\ncd cctools-port/cctools\n./configure --prefix=$(readlink -f ${CCTOOLS}) --with-libtapi=$(readlink -f ${CCTOOLS}) --target=x86_64-apple-darwin\nmake install\n")),(0,i.kt)("p",null,"Also, we need to download macOS X SDK into the working tree."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse/cmake/toolchain/darwin-x86_64\ncurl -L 'https://github.com/phracker/MacOSX-SDKs/releases/download/10.15/MacOSX10.15.sdk.tar.xz' | tar xJ --strip-components=1\n")),(0,i.kt)("h2",{id:"build-clickhouse"},"Build ClickHouse"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nmkdir build-darwin\ncd build-darwin\nCC=clang-14 CXX=clang++-14 cmake -DCMAKE_AR:FILEPATH=${CCTOOLS}/bin/x86_64-apple-darwin-ar -DCMAKE_INSTALL_NAME_TOOL=${CCTOOLS}/bin/x86_64-apple-darwin-install_name_tool -DCMAKE_RANLIB:FILEPATH=${CCTOOLS}/bin/x86_64-apple-darwin-ranlib -DLINKER_NAME=${CCTOOLS}/bin/x86_64-apple-darwin-ld -DCMAKE_TOOLCHAIN_FILE=cmake/darwin/toolchain-x86_64.cmake ..\nninja\n")),(0,i.kt)("p",null,"The resulting binary will have a Mach-O executable format and can\u2019t be run on Linux."))}m.isMDXComponent=!0},63638:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(2759),a=["components"],s={slug:"/ru/development/build-cross-osx",sidebar_position:67,sidebar_label:"Build on Linux for Mac OS X",title:"How to Build ClickHouse on Linux for Mac OS X"},c=void 0,u={unversionedId:"ru/development/build-cross-osx",id:"ru/development/build-cross-osx",title:"How to Build ClickHouse on Linux for Mac OS X",description:"",source:"@site/docs/ru/development/build-cross-osx.mdx",sourceDirName:"ru/development",slug:"/ru/development/build-cross-osx",permalink:"/docs/ru/development/build-cross-osx",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/development/build-cross-osx.mdx",tags:[],version:"current",sidebarPosition:67,frontMatter:{slug:"/ru/development/build-cross-osx",sidebar_position:67,sidebar_label:"Build on Linux for Mac OS X",title:"How to Build ClickHouse on Linux for Mac OS X"},sidebar:"russia",previous:{title:"Build on Linux for AARCH64 (ARM64)",permalink:"/docs/ru/development/build-cross-arm"},next:{title:"Build on Linux for RISC-V 64",permalink:"/docs/ru/development/build-cross-riscv"}},d={},p=[],m={toc:p};function b(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.default,{mdxType:"Content"}))}b.isMDXComponent=!0}}]);