"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[90033],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(k,l(l({ref:n},p),{},{components:t})):a.createElement(k,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7900:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],o={sidebar_position:65,sidebar_label:"\u0421\u0431\u043e\u0440\u043a\u0430 \u043d\u0430 Mac OS X"},c="\u041a\u0430\u043a \u0441\u043e\u0431\u0440\u0430\u0442\u044c ClickHouse \u043d\u0430 Mac OS X",s={unversionedId:"ru/development/build-osx",id:"ru/development/build-osx",title:"\u041a\u0430\u043a \u0441\u043e\u0431\u0440\u0430\u0442\u044c ClickHouse \u043d\u0430 Mac OS X",description:"how-to-build-clickhouse-on-mac-os-x}",source:"@site/docs/ru/development/build-osx.md",sourceDirName:"ru/development",slug:"/ru/development/build-osx",permalink:"/docs/ru/development/build-osx",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/development/build-osx.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{sidebar_position:65,sidebar_label:"\u0421\u0431\u043e\u0440\u043a\u0430 \u043d\u0430 Mac OS X"},sidebar:"russia",previous:{title:"Build on Linux",permalink:"/docs/ru/development/build"},next:{title:"Build on Linux for Mac OS X",permalink:"/docs/ru/development/build-cross-osx"}},p={},m=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Homebrew",id:"install-homebrew",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Xcode \u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438",id:"install-xcode-and-command-line-tools",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u043e\u0432, \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a",id:"install-required-compilers-tools-and-libraries",level:2},{value:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0438\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u043e\u0432 ClickHouse",id:"checkout-clickhouse-sources",level:2},{value:"\u0421\u0431\u043e\u0440\u043a\u0430 ClickHouse",id:"build-clickhouse",level:2},{value:"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f",id:"caveats",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-build-clickhouse-on-mac-os-x"},"\u041a\u0430\u043a \u0441\u043e\u0431\u0440\u0430\u0442\u044c ClickHouse \u043d\u0430 Mac OS X"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"\u0412\u0430\u043c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c ClickHouse \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"}," \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0439 ClickHouse, \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 [\u0411\u044b\u0441\u0442\u0440\u043e\u043c \u0441\u0442\u0430\u0440\u0442\u0435](https://clickhouse.com/#quick-start).\n \u0421\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u043f\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u0434\u043b\u044f `macOS (Intel)` \u0438\u043b\u0438 `macOS (Apple Silicon)`.\n")))),(0,i.kt)("p",null,"\u0421\u0431\u043e\u0440\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c\u0441\u044f \u0441 x86_64 (Intel) \u043d\u0430 macOS \u0432\u0435\u0440\u0441\u0438\u0438 10.15 (Catalina) \u0438 \u0432\u044b\u0448\u0435 \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430 Xcode's native AppleClang, Homebrew's vanilla Clang \u0438\u043b\u0438 \u0432 GCC-\u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430\u0445."),(0,i.kt)("h2",{id:"install-homebrew"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Homebrew"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,i.kt)("h2",{id:"install-xcode-and-command-line-tools"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Xcode \u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0438\u0437 App Store \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u0432\u0435\u0440\u0441\u0438\u044e ",(0,i.kt)("a",{parentName:"p",href:"https://apps.apple.com/am/app/xcode/id497799835?mt=12"},"Xcode"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0435\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u043e\u043d\u043d\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0417\u0430\u0442\u0435\u043c \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo rm -rf /Library/Developer/CommandLineTools\n$ sudo xcode-select --install\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435\u0441\u044c."))),(0,i.kt)("h2",{id:"install-required-compilers-tools-and-libraries"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u043e\u0432, \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew update\n$ brew install cmake ninja libtool gettext llvm gcc\n")),(0,i.kt)("h2",{id:"checkout-clickhouse-sources"},"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0438\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u043e\u0432 ClickHouse"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone --recursive git@github.com:ClickHouse/ClickHouse.git # or https://github.com/ClickHouse/ClickHouse.git\n")),(0,i.kt)("h2",{id:"build-clickhouse"},"\u0421\u0431\u043e\u0440\u043a\u0430 ClickHouse"),(0,i.kt)("p",null,"  \u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0431\u043e\u0440\u043a\u0443 \u0432 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0435 Xcode's native AppleClang:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ClickHouse\n$ rm -rf build\n$ mkdir build\n$ cd build\n$ cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo -DENABLE_JEMALLOC=OFF ..\n$ cmake --build . --config RelWithDebInfo\n$ cd ..\n")),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0431\u043e\u0440\u043a\u0443 \u0432 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0435 Homebrew's vanilla Clang:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ClickHouse\n$ rm -rf build\n$ mkdir build\n$ cd build\n$ cmake -DCMAKE_C_COMPILER=$(brew --prefix llvm)/bin/clang -DCMAKE_CXX_COMPILER==$(brew --prefix llvm)/bin/clang++ -DCMAKE_BUILD_TYPE=RelWithDebInfo -DENABLE_JEMALLOC=OFF ..\n$ cmake -DCMAKE_C_COMPILER=$(brew --prefix llvm)/bin/clang -DCMAKE_CXX_COMPILER=$(brew --prefix llvm)/bin/clang++ -DCMAKE_BUILD_TYPE=RelWithDebInfo -DENABLE_JEMALLOC=OFF ..\n$ cmake --build . --config RelWithDebInfo\n$ cd ..\n")),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430 Homebrew's vanilla GCC:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ClickHouse\n$ rm -rf build\n$ mkdir build\n$ cd build\n$ cmake -DCMAKE_C_COMPILER=$(brew --prefix gcc)/bin/gcc-11 -DCMAKE_CXX_COMPILER=$(brew --prefix gcc)/bin/g++-11 -DCMAKE_BUILD_TYPE=RelWithDebInfo -DENABLE_JEMALLOC=OFF ..\n$ cmake --build . --config RelWithDebInfo\n$ cd ..\n")),(0,i.kt)("h2",{id:"caveats"},"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f"),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0431\u0443\u0434\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),", \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u043b\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u0443\u044e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"maxfiles"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"Note"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"\u0412\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 `sudo`.\n")))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b ",(0,i.kt)("inlineCode",{parentName:"p"},"/Library/LaunchDaemons/limit.maxfiles.plist")," \u0438 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u0432 \u043d\u0435\u0433\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"\n        "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n  <dict>\n    <key>Label</key>\n    <string>limit.maxfiles</string>\n    <key>ProgramArguments</key>\n    <array>\n      <string>launchctl</string>\n      <string>limit</string>\n      <string>maxfiles</string>\n      <string>524288</string>\n      <string>524288</string>\n    </array>\n    <key>RunAtLoad</key>\n    <true/>\n    <key>ServiceIPC</key>\n    <false/>\n  </dict>\n</plist>\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo chown root:wheel /Library/LaunchDaemons/limit.maxfiles.plist\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435\u0441\u044c.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u043a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"ulimit -n"),"."))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/development/build_osx/"},"Original article")," "))}d.isMDXComponent=!0}}]);