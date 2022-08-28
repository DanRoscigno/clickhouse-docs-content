"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[60969],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return t?o.createElement(b,i(i({ref:n},u),{},{components:t})):o.createElement(b,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<l;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2759:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var o=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],a={slug:"/en/development/build-cross-osx",sidebar_position:66,title:"How to Build ClickHouse on Linux for Mac OS X",sidebar_label:"Build on Linux for Mac OS X"},c=void 0,s={unversionedId:"en/development/build-cross-osx",id:"en/development/build-cross-osx",title:"How to Build ClickHouse on Linux for Mac OS X",description:"This is for the case when you have a Linux machine and want to use it to build clickhouse binary that will run on OS X.",source:"@site/docs/en/development/build-cross-osx.md",sourceDirName:"en/development",slug:"/en/development/build-cross-osx",permalink:"/docs/en/development/build-cross-osx",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/development/build-cross-osx.md",tags:[],version:"current",sidebarPosition:66,frontMatter:{slug:"/en/development/build-cross-osx",sidebar_position:66,title:"How to Build ClickHouse on Linux for Mac OS X",sidebar_label:"Build on Linux for Mac OS X"},sidebar:"english",previous:{title:"Build on Mac OS X",permalink:"/docs/en/development/build-osx"},next:{title:"Build on Linux for AARCH64 (ARM64)",permalink:"/docs/en/development/build-cross-arm"}},u={},p=[{value:"Install Clang-14",id:"install-clang-14",level:2},{value:"Install Cross-Compilation Toolset",id:"install-cross-compilation-toolset",level:2},{value:"Build ClickHouse",id:"build-clickhouse",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is for the case when you have a Linux machine and want to use it to build ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse")," binary that will run on OS X.\nThis is intended for continuous integration checks that run on Linux servers. If you want to build ClickHouse directly on Mac OS X, then proceed with ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/development/build-osx"},"another instruction"),"."),(0,l.kt)("p",null,"The cross-build for Mac OS X is based on the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/development/build"},"Build instructions"),", follow them first."),(0,l.kt)("h2",{id:"install-clang-14"},"Install Clang-14"),(0,l.kt)("p",null,"Follow the instructions from ",(0,l.kt)("a",{parentName:"p",href:"https://apt.llvm.org/"},"https://apt.llvm.org/")," for your Ubuntu or Debian setup.\nFor example the commands for Bionic are like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sudo echo "deb [trusted=yes] http://apt.llvm.org/bionic/ llvm-toolchain-bionic-14 main" >> /etc/apt/sources.list\nsudo apt-get install clang-14\n')),(0,l.kt)("h2",{id:"install-cross-compilation-toolset"},"Install Cross-Compilation Toolset"),(0,l.kt)("p",null,"Let\u2019s remember the path where we install ",(0,l.kt)("inlineCode",{parentName:"p"},"cctools")," as ${CCTOOLS}"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export CCTOOLS=$(cd ~/cctools && pwd)\nmkdir ${CCTOOLS}\ncd ${CCTOOLS}\n\ngit clone https://github.com/tpoechtrager/apple-libtapi.git\ncd apple-libtapi\nINSTALLPREFIX=${CCTOOLS} ./build.sh\n./install.sh\ncd ..\n\ngit clone https://github.com/tpoechtrager/cctools-port.git\ncd cctools-port/cctools\n./configure --prefix=$(readlink -f ${CCTOOLS}) --with-libtapi=$(readlink -f ${CCTOOLS}) --target=x86_64-apple-darwin\nmake install\n")),(0,l.kt)("p",null,"Also, we need to download macOS X SDK into the working tree."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse/cmake/toolchain/darwin-x86_64\ncurl -L 'https://github.com/phracker/MacOSX-SDKs/releases/download/10.15/MacOSX10.15.sdk.tar.xz' | tar xJ --strip-components=1\n")),(0,l.kt)("h2",{id:"build-clickhouse"},"Build ClickHouse"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nmkdir build-darwin\ncd build-darwin\nCC=clang-14 CXX=clang++-14 cmake -DCMAKE_AR:FILEPATH=${CCTOOLS}/bin/x86_64-apple-darwin-ar -DCMAKE_INSTALL_NAME_TOOL=${CCTOOLS}/bin/x86_64-apple-darwin-install_name_tool -DCMAKE_RANLIB:FILEPATH=${CCTOOLS}/bin/x86_64-apple-darwin-ranlib -DLINKER_NAME=${CCTOOLS}/bin/x86_64-apple-darwin-ld -DCMAKE_TOOLCHAIN_FILE=cmake/darwin/toolchain-x86_64.cmake ..\nninja\n")),(0,l.kt)("p",null,"The resulting binary will have a Mach-O executable format and can\u2019t be run on Linux."))}m.isMDXComponent=!0}}]);