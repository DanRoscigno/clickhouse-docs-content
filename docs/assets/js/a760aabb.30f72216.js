"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[66203],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(v,o(o({ref:n},u),{},{components:t})):a.createElement(v,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),r=t(86010),i="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(87462),r=t(67294),i=t(86010),o=t(72389),l=t(67392),s=t(7094),c=t(12466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t,o=e.lazy,d=e.block,m=e.defaultValue,v=e.values,f=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,l.l)(k,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(n=null!=m?m:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),x=y.tabGroupChoices,w=y.setTabGroupChoices,T=(0,r.useState)(N),O=T[0],C=T[1],E=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var Z=x[f];null!=Z&&Z!==O&&k.some((function(e){return e.value===Z}))&&C(Z)}var I=function(e){var n=e.currentTarget,t=E.indexOf(n),a=k[t].value;a!==O&&(P(n),C(a),null!=f&&w(f,String(a)))},M=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;t=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var i,o=E.indexOf(e.currentTarget)-1;t=null!=(i=E[o])?i:E[E.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return E.push(e)},onKeyDown:M,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function m(e){var n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},70098:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(65488),l=t(85162),s=["components"],c={slug:"/en/native-protocol/basics",sidebar_position:1},u="Basics",p={unversionedId:"en/native-protocol/basics",id:"en/native-protocol/basics",title:"Basics",description:"Client protocol reference is in progress.",source:"@site/docs/en/native-protocol/basics.md",sourceDirName:"en/native-protocol",slug:"/en/native-protocol/basics",permalink:"/docs/en/native-protocol/basics",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/native-protocol/basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/en/native-protocol/basics",sidebar_position:1},sidebar:"english",previous:{title:"Native protocol",permalink:"/docs/en/native-protocol"},next:{title:"Client packets",permalink:"/docs/en/native-protocol/client"}},d={},m=[{value:"Varint",id:"varint",level:2},{value:"String",id:"string",level:2},{value:"Integers",id:"integers",level:2},{value:"Int32",id:"int32",level:3},{value:"Boolean",id:"boolean",level:2}],v={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basics"},"Basics"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\ud83d\udea7 Under construction \ud83d\udea7")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Client protocol reference is in progress."),(0,i.kt)("p",{parentName:"div"},"Most examples are only in Go."))),(0,i.kt)("p",null,"This document describes binary protocol for ClickHouse TCP clients."),(0,i.kt)("h2",{id:"varint"},"Varint"),(0,i.kt)("p",null,"For lengths, packet codes and other cases the ",(0,i.kt)("em",{parentName:"p"},"unsigned varint")," encoding is used.\nUse ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/encoding/binary#PutUvarint"},"binary.PutUvarint")," and ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/encoding/binary#ReadUvarint"},"binary.ReadUvarint"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Signed")," varint is not used."))),(0,i.kt)("h2",{id:"string"},"String"),(0,i.kt)("p",null,"Variable length strings are encoded as ",(0,i.kt)("em",{parentName:"p"},"(length, value)"),", where ",(0,i.kt)("em",{parentName:"p"},"length")," is ",(0,i.kt)("a",{parentName:"p",href:"#varint"},"varint")," and ",(0,i.kt)("em",{parentName:"p"},"value")," is utf8 string."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Validate length to prevent OOM:"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"0 \u2264 len < MAX")))),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"encode",label:"Encode",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'s := "Hello, world!"\n\n// Writing string length as uvarint.\nbuf := make([]byte, binary.MaxVarintLen64)\nn := binary.PutUvarint(buf, uint64(len(s)))\nbuf = buf[:n]\n\n// Writing string value.\nbuf = append(buf, s...)\n'))),(0,i.kt)(l.Z,{value:"decode",label:"Decode",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'r := bytes.NewReader([]byte{\n    0xd, 0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c,\n    0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21,\n})\n\n// Read length.\nn, err := binary.ReadUvarint(r)\nif err != nil {\n    panic(err)\n}\n\n// Check n to prevent OOM or runtime exception in make().\nconst maxSize = 1024 * 1024 * 10 // 10 MB\nif n > maxSize || n < 0 {\n    panic("invalid n")\n}\n\nbuf := make([]byte, n)\nif _, err := io.ReadFull(r, buf); err != nil {\n    panic(err)\n}\n\nfmt.Println(string(buf))\n// Hello, world!\n')))),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"hexdump",label:"Hex dump",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hexdump"},"00000000  0d 48 65 6c 6c 6f 2c 20  77 6f 72 6c 64 21        |.Hello, world!|\n"))),(0,i.kt)(l.Z,{value:"base64",label:"Base64",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"DUhlbGxvLCB3b3JsZCE\n"))),(0,i.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"data := []byte{\n    0xd, 0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c,\n    0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21,\n}\n")))),(0,i.kt)("h2",{id:"integers"},"Integers"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"ClickHouse uses ",(0,i.kt)("strong",{parentName:"p"},"Little Endian")," for fixed size integers."))),(0,i.kt)("h3",{id:"int32"},"Int32"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"v := int32(1000)\n\n// Encode.\nbuf := make([]byte, 8)\nbinary.LittleEndian.PutUint32(buf, uint32(v))\n\n// Decode.\nd := int32(binary.LittleEndian.Uint32(buf))\nfmt.Println(d) // 1000\n")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"hexdump",label:"Hex dump",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hexdump"},"00000000  e8 03 00 00 00 00 00 00                           |........|\n"))),(0,i.kt)(l.Z,{value:"base64",label:"Base64",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"6AMAAAAAAAA\n")))),(0,i.kt)("h2",{id:"boolean"},"Boolean"),(0,i.kt)("p",null,"Booleans are represented by single byte, ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."))}f.isMDXComponent=!0}}]);