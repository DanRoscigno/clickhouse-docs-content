"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[93072,58471],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59782:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={slug:"/en/operations/external-authenticators/ssl-x509",title:"SSL X.509 certificate authentication"},c=void 0,l={unversionedId:"en/operations/external-authenticators/ssl-x509",id:"en/operations/external-authenticators/ssl-x509",title:"SSL X.509 certificate authentication",description:"SSL 'strict' option enables mandatory certificate validation for the incoming connections. In this case, only connections with trusted certificates can be established. Connections with untrusted certificates will be rejected. Thus, certificate validation allows to uniquely authenticate an incoming connection. Common Name field of the certificate is used to identify connected user. This allows to associate multiple certificates with the same user. Additionally, reissuing and revoking of the certificates does not affect the ClickHouse configuration.",source:"@site/docs/en/operations/external-authenticators/ssl-x509.md",sourceDirName:"en/operations/external-authenticators",slug:"/en/operations/external-authenticators/ssl-x509",permalink:"/docs/en/operations/external-authenticators/ssl-x509",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/external-authenticators/ssl-x509.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/external-authenticators/ssl-x509",title:"SSL X.509 certificate authentication"},sidebar:"english",previous:{title:"LDAP",permalink:"/docs/en/operations/external-authenticators/ldap"},next:{title:"Data Backup",permalink:"/docs/en/operations/backup"}},u={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-openssl"},"SSL 'strict' option")," enables mandatory certificate validation for the incoming connections. In this case, only connections with trusted certificates can be established. Connections with untrusted certificates will be rejected. Thus, certificate validation allows to uniquely authenticate an incoming connection. ",(0,o.kt)("inlineCode",{parentName:"p"},"Common Name")," field of the certificate is used to identify connected user. This allows to associate multiple certificates with the same user. Additionally, reissuing and revoking of the certificates does not affect the ClickHouse configuration."),(0,o.kt)("p",null,"To enable SSL certificate authentication, a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Common Name"),"'s for each ClickHouse user must be specified in the settings file ",(0,o.kt)("inlineCode",{parentName:"p"},"users.xml "),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <users>\n        <user_name>\n            <ssl_certificates>\n                <common_name>host.domain.com:example_user</common_name>\n                <common_name>host.domain.com:example_user_dev</common_name>\n                \x3c!-- More names --\x3e\n            </ssl_certificates>\n            \x3c!-- Other settings --\x3e\n        </user_name>\n    </users>\n</clickhouse>\n")),(0,o.kt)("p",null,"For the SSL ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chain_of_trust"},(0,o.kt)("inlineCode",{parentName:"a"},"chain of trust"))," to work correctly, it is also important to make sure that the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-openssl"},(0,o.kt)("inlineCode",{parentName:"a"},"caConfig"))," parameter is configured properly."))}m.isMDXComponent=!0},91364:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=n(59782),s=["components"],c={sidebar_label:"SSL X.509 certificate authentication",slug:"/zh/operations/external-authenticators/ssl-x509",title:"SSL X.509 certificate authentication"},l=void 0,u={unversionedId:"zh/operations/external-authenticators/ssl-x509",id:"zh/operations/external-authenticators/ssl-x509",title:"SSL X.509 certificate authentication",description:"",source:"@site/docs/zh/operations/external-authenticators/ssl-x509.mdx",sourceDirName:"zh/operations/external-authenticators",slug:"/zh/operations/external-authenticators/ssl-x509",permalink:"/docs/zh/operations/external-authenticators/ssl-x509",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/external-authenticators/ssl-x509.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"SSL X.509 certificate authentication",slug:"/zh/operations/external-authenticators/ssl-x509",title:"SSL X.509 certificate authentication"},sidebar:"chinese",previous:{title:"LDAP",permalink:"/docs/zh/operations/external-authenticators/ldap"},next:{title:"\u6570\u636e\u5907\u4efd",permalink:"/docs/zh/operations/backup"}},p={},f=[],m={toc:f};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.default,{mdxType:"Content"}))}d.isMDXComponent=!0}}]);