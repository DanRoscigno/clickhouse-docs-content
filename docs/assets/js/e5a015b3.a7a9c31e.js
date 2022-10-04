"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[86520,11313],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10331:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={toc:[]};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This page is not applicable to ClickHouse Cloud. The feature documented here is not available in ClickHouse Cloud services.\nSee the ClickHouse ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," guide for more information."))))}s.isMDXComponent=!0},32335:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(10331),o=["components"],s={slug:"/en/operations/external-authenticators/ldap",title:"LDAP"},c=void 0,p={unversionedId:"en/operations/external-authenticators/ldap",id:"en/operations/external-authenticators/ldap",title:"LDAP",description:"LDAP server can be used to authenticate ClickHouse users. There are two different approaches for doing this:",source:"@site/docs/en/operations/external-authenticators/ldap.md",sourceDirName:"en/operations/external-authenticators",slug:"/en/operations/external-authenticators/ldap",permalink:"/docs/en/operations/external-authenticators/ldap",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/external-authenticators/ldap.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/external-authenticators/ldap",title:"LDAP"},sidebar:"english",previous:{title:"Kerberos",permalink:"/docs/en/operations/external-authenticators/kerberos"},next:{title:"SSL X.509 certificate authentication",permalink:"/docs/en/operations/external-authenticators/ssl-x509"}},d={},u=[{value:"LDAP Server Definition",id:"ldap-server-definition",level:2},{value:"LDAP External Authenticator",id:"ldap-external-authenticator",level:2},{value:"LDAP Exernal User Directory",id:"ldap-external-user-directory",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.ZP,{mdxType:"SelfManaged"}),(0,i.kt)("p",null,"LDAP server can be used to authenticate ClickHouse users. There are two different approaches for doing this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use LDAP as an external authenticator for existing users, which are defined in ",(0,i.kt)("inlineCode",{parentName:"li"},"users.xml")," or in local access control paths."),(0,i.kt)("li",{parentName:"ul"},"Use LDAP as an external user directory and allow locally undefined users to be authenticated if they exist on the LDAP server.")),(0,i.kt)("p",null,"For both of these approaches, an internally named LDAP server must be defined in the ClickHouse config so that other parts of the config can refer to it."),(0,i.kt)("h2",{id:"ldap-server-definition"},"LDAP Server Definition"),(0,i.kt)("p",null,"To define LDAP server you must add ",(0,i.kt)("inlineCode",{parentName:"p"},"ldap_servers")," section to the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <ldap_servers>\n        <!- Typical LDAP server. --\x3e\n        <my_ldap_server>\n            <host>localhost</host>\n            <port>636</port>\n            <bind_dn>uid={user_name},ou=users,dc=example,dc=com</bind_dn>\n            <verification_cooldown>300</verification_cooldown>\n            <enable_tls>yes</enable_tls>\n            <tls_minimum_protocol_version>tls1.2</tls_minimum_protocol_version>\n            <tls_require_cert>demand</tls_require_cert>\n            <tls_cert_file>/path/to/tls_cert_file</tls_cert_file>\n            <tls_key_file>/path/to/tls_key_file</tls_key_file>\n            <tls_ca_cert_file>/path/to/tls_ca_cert_file</tls_ca_cert_file>\n            <tls_ca_cert_dir>/path/to/tls_ca_cert_dir</tls_ca_cert_dir>\n            <tls_cipher_suite>ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:AES256-GCM-SHA384</tls_cipher_suite>\n        </my_ldap_server>\n\n        <!- Typical Active Directory with configured user DN detection for further role mapping. --\x3e\n        <my_ad_server>\n            <host>localhost</host>\n            <port>389</port>\n            <bind_dn>EXAMPLE\\{user_name}</bind_dn>\n            <user_dn_detection>\n                <base_dn>CN=Users,DC=example,DC=com</base_dn>\n                <search_filter>(&amp;(objectClass=user)(sAMAccountName={user_name}))</search_filter>\n            </user_dn_detection>\n            <enable_tls>no</enable_tls>\n        </my_ad_server>\n    </ldap_servers>\n</clickhouse>\n")),(0,i.kt)("p",null,"Note, that you can define multiple LDAP servers inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"ldap_servers")," section using distinct names."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host")," \u2014 LDAP server hostname or IP, this parameter is mandatory and cannot be empty."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," \u2014 LDAP server port, default is ",(0,i.kt)("inlineCode",{parentName:"li"},"636")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"enable_tls")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"389")," otherwise."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bind_dn")," \u2014 Template used to construct the DN to bind to.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The resulting DN will be constructed by replacing all ",(0,i.kt)("inlineCode",{parentName:"li"},"{user_name}")," substrings of the template with the actual user name during each authentication attempt."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user_dn_detection")," \u2014 Section with LDAP search parameters for detecting the actual user DN of the bound user.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This is mainly used in search filters for further role mapping when the server is Active Directory. The resulting user DN will be used when replacing ",(0,i.kt)("inlineCode",{parentName:"li"},"{user_dn}")," substrings wherever they are allowed. By default, user DN is set equal to bind DN, but once search is performed, it will be updated with to the actual detected user DN value.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"base_dn")," \u2014 Template used to construct the base DN for the LDAP search.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The resulting DN will be constructed by replacing all ",(0,i.kt)("inlineCode",{parentName:"li"},"{user_name}")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"{bind_dn}")," substrings of the template with the actual user name and bind DN during the LDAP search."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scope")," \u2014 Scope of the LDAP search.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Accepted values are: ",(0,i.kt)("inlineCode",{parentName:"li"},"base"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"one_level"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"children"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"subtree")," (the default)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"search_filter")," \u2014 Template used to construct the search filter for the LDAP search.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The resulting filter will be constructed by replacing all ",(0,i.kt)("inlineCode",{parentName:"li"},"{user_name}"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"{bind_dn}"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"{base_dn}")," substrings of the template with the actual user name, bind DN, and base DN during the LDAP search."),(0,i.kt)("li",{parentName:"ul"},"Note, that the special characters must be escaped properly in XML."))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verification_cooldown")," \u2014 A period of time, in seconds, after a successful bind attempt, during which the user will be assumed to be successfully authenticated for all consecutive requests without contacting the LDAP server.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Specify ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," (the default) to disable caching and force contacting the LDAP server for each authentication request."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enable_tls")," \u2014 A flag to trigger the use of the secure connection to the LDAP server.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Specify ",(0,i.kt)("inlineCode",{parentName:"li"},"no")," for plain text ",(0,i.kt)("inlineCode",{parentName:"li"},"ldap://")," protocol (not recommended)."),(0,i.kt)("li",{parentName:"ul"},"Specify ",(0,i.kt)("inlineCode",{parentName:"li"},"yes")," for LDAP over SSL/TLS ",(0,i.kt)("inlineCode",{parentName:"li"},"ldaps://")," protocol (recommended, the default)."),(0,i.kt)("li",{parentName:"ul"},"Specify ",(0,i.kt)("inlineCode",{parentName:"li"},"starttls")," for legacy StartTLS protocol (plain text ",(0,i.kt)("inlineCode",{parentName:"li"},"ldap://")," protocol, upgraded to TLS)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tls_minimum_protocol_version")," \u2014 The minimum protocol version of SSL/TLS.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Accepted values are: ",(0,i.kt)("inlineCode",{parentName:"li"},"ssl2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ssl3"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tls1.0"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tls1.1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tls1.2")," (the default)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tls_require_cert")," \u2014 SSL/TLS peer certificate verification behavior.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Accepted values are: ",(0,i.kt)("inlineCode",{parentName:"li"},"never"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"allow"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"try"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"demand")," (the default)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tls_cert_file")," \u2014 Path to certificate file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tls_key_file")," \u2014 Path to certificate key file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tls_ca_cert_file")," \u2014 Path to CA certificate file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tls_ca_cert_dir")," \u2014 Path to the directory containing CA certificates."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tls_cipher_suite")," \u2014 Allowed cipher suite (in OpenSSL notation).")),(0,i.kt)("h2",{id:"ldap-external-authenticator"},"LDAP External Authenticator"),(0,i.kt)("p",null,"A remote LDAP server can be used as a method for verifying passwords for locally defined users (users defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"users.xml")," or in local access control paths). To achieve this, specify previously defined LDAP server name instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," or similar sections in the user definition."),(0,i.kt)("p",null,'At each login attempt, ClickHouse tries to "bind" to the specified DN defined by the ',(0,i.kt)("inlineCode",{parentName:"p"},"bind_dn")," parameter in the ",(0,i.kt)("a",{parentName:"p",href:"#ldap-server-definition"},"LDAP server definition"),' using the provided credentials, and if successful, the user is considered authenticated. This is often called a "simple bind" method.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <users>\n        <!- ... --\x3e\n        <my_user>\n            <!- ... --\x3e\n            <ldap>\n                <server>my_ldap_server</server>\n            </ldap>\n        </my_user>\n    </users>\n</clickhouse>\n")),(0,i.kt)("p",null,"Note, that user ",(0,i.kt)("inlineCode",{parentName:"p"},"my_user")," refers to ",(0,i.kt)("inlineCode",{parentName:"p"},"my_ldap_server"),". This LDAP server must be configured in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," file as described previously."),(0,i.kt)("p",null,"When SQL-driven ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#access-control"},"Access Control and Account Management")," is enabled, users that are authenticated by LDAP servers can also be created using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/user#create-user-statement"},"CREATE USER")," statement."),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER my_user IDENTIFIED WITH ldap SERVER 'my_ldap_server';\n")),(0,i.kt)("h2",{id:"ldap-external-user-directory"},"LDAP Exernal User Directory"),(0,i.kt)("p",null,"In addition to the locally defined users, a remote LDAP server can be used as a source of user definitions. To achieve this, specify previously defined LDAP server name (see ",(0,i.kt)("a",{parentName:"p",href:"#ldap-server-definition"},"LDAP Server Definition"),") in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ldap")," section inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"users_directories")," section of the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," file."),(0,i.kt)("p",null,'At each login attempt, ClickHouse tries to find the user definition locally and authenticate it as usual. If the user is not defined, ClickHouse will assume the definition exists in the external LDAP directory and will try to "bind" to the specified DN at the LDAP server using the provided credentials. If successful, the user will be considered existing and authenticated. The user will be assigned roles from the list specified in the ',(0,i.kt)("inlineCode",{parentName:"p"},"roles"),' section. Additionally, LDAP "search" can be performed and results can be transformed and treated as role names and then be assigned to the user if the ',(0,i.kt)("inlineCode",{parentName:"p"},"role_mapping")," section is also configured. All this implies that the SQL-driven ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#access-control"},"Access Control and Account Management")," is enabled and roles are created using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/role#create-role-statement"},"CREATE ROLE")," statement."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Goes into ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <user_directories>\n        <!- Typical LDAP server. --\x3e\n        <ldap>\n            <server>my_ldap_server</server>\n            <roles>\n                <my_local_role1 />\n                <my_local_role2 />\n            </roles>\n            <role_mapping>\n                <base_dn>ou=groups,dc=example,dc=com</base_dn>\n                <scope>subtree</scope>\n                <search_filter>(&amp;(objectClass=groupOfNames)(member={bind_dn}))</search_filter>\n                <attribute>cn</attribute>\n                <prefix>clickhouse_</prefix>\n            </role_mapping>\n        </ldap>\n\n        <!- Typical Active Directory with role mapping that relies on the detected user DN. --\x3e\n        <ldap>\n            <server>my_ad_server</server>\n            <role_mapping>\n                <base_dn>CN=Users,DC=example,DC=com</base_dn>\n                <attribute>CN</attribute>\n                <scope>subtree</scope>\n                <search_filter>(&amp;(objectClass=group)(member={user_dn}))</search_filter>\n                <prefix>clickhouse_</prefix>\n            </role_mapping>\n        </ldap>\n    </user_directories>\n</clickhouse>\n")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"my_ldap_server")," referred in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ldap")," section inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_directories")," section must be a previously defined LDAP server that is configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," (see ",(0,i.kt)("a",{parentName:"p",href:"#ldap-server-definition"},"LDAP Server Definition"),")."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"server")," \u2014 One of LDAP server names defined in the ",(0,i.kt)("inlineCode",{parentName:"li"},"ldap_servers")," config section above. This parameter is mandatory and cannot be empty."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"roles")," \u2014 Section with a list of locally defined roles that will be assigned to each user retrieved from the LDAP server.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If no roles are specified here or assigned during role mapping (below), user will not be able to perform any actions after authentication."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"role_mapping")," \u2014 Section with LDAP search parameters and mapping rules.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When a user authenticates, while still bound to LDAP, an LDAP search is performed using ",(0,i.kt)("inlineCode",{parentName:"li"},"search_filter")," and the name of the logged-in user. For each entry found during that search, the value of the specified attribute is extracted. For each attribute value that has the specified prefix, the prefix is removed, and the rest of the value becomes the name of a local role defined in ClickHouse, which is expected to be created beforehand by the ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/role#create-role-statement"},"CREATE ROLE")," statement."),(0,i.kt)("li",{parentName:"ul"},"There can be multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"role_mapping")," sections defined inside the same ",(0,i.kt)("inlineCode",{parentName:"li"},"ldap")," section. All of them will be applied.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"base_dn")," \u2014 Template used to construct the base DN for the LDAP search.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The resulting DN will be constructed by replacing all ",(0,i.kt)("inlineCode",{parentName:"li"},"{user_name}"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"{bind_dn}"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"{user_dn}")," substrings of the template with the actual user name, bind DN, and user DN during each LDAP search."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scope")," \u2014 Scope of the LDAP search.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Accepted values are: ",(0,i.kt)("inlineCode",{parentName:"li"},"base"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"one_level"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"children"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"subtree")," (the default)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"search_filter")," \u2014 Template used to construct the search filter for the LDAP search.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The resulting filter will be constructed by replacing all ",(0,i.kt)("inlineCode",{parentName:"li"},"{user_name}"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"{bind_dn}"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"{user_dn}"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"{base_dn}")," substrings of the template with the actual user name, bind DN, user DN, and base DN during each LDAP search."),(0,i.kt)("li",{parentName:"ul"},"Note, that the special characters must be escaped properly in XML."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attribute")," \u2014 Attribute name whose values will be returned by the LDAP search. ",(0,i.kt)("inlineCode",{parentName:"li"},"cn"),", by default."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefix")," \u2014 Prefix, that will be expected to be in front of each string in the original list of strings returned by the LDAP search. The prefix will be removed from the original strings and the resulting strings will be treated as local role names. Empty by default.")))))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/external-authenticators/ldap/"},"Original article")," "))}h.isMDXComponent=!0},32234:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(32335),o=["components"],s={sidebar_label:"LDAP",slug:"/zh/operations/external-authenticators/ldap",title:"LDAP"},c=void 0,p={unversionedId:"zh/operations/external-authenticators/ldap",id:"zh/operations/external-authenticators/ldap",title:"LDAP",description:"",source:"@site/docs/zh/operations/external-authenticators/ldap.mdx",sourceDirName:"zh/operations/external-authenticators",slug:"/zh/operations/external-authenticators/ldap",permalink:"/docs/zh/operations/external-authenticators/ldap",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/external-authenticators/ldap.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"LDAP",slug:"/zh/operations/external-authenticators/ldap",title:"LDAP"},sidebar:"chinese",previous:{title:"Kerberos\u8ba4\u8bc1",permalink:"/docs/zh/operations/external-authenticators/kerberos"},next:{title:"SSL X.509 certificate authentication",permalink:"/docs/zh/operations/external-authenticators/ssl-x509"}},d={},u=[],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.default,{mdxType:"Content"}))}h.isMDXComponent=!0}}]);