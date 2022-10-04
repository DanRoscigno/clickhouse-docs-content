"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[52243],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54677:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],i={slug:"/en/operations/access-rights",sidebar_position:48,sidebar_label:"Access Control and Account Management",title:"Access Control and Account Management"},l=void 0,c={unversionedId:"en/operations/access-rights",id:"en/operations/access-rights",title:"Access Control and Account Management",description:"ClickHouse supports access control management based on RBAC approach.",source:"@site/docs/en/operations/access-rights.md",sourceDirName:"en/operations",slug:"/en/operations/access-rights",permalink:"/docs/en/operations/access-rights",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/access-rights.md",tags:[],version:"current",sidebarPosition:48,frontMatter:{slug:"/en/operations/access-rights",sidebar_position:48,sidebar_label:"Access Control and Account Management",title:"Access Control and Account Management"}},u={},p=[{value:"Usage",id:"access-control-usage",level:2},{value:"Properties of Current Solution",id:"access-control-properties",level:3},{value:"User Account",id:"user-account-management",level:2},{value:"Settings Applying",id:"access-control-settings-applying",level:3},{value:"Role",id:"role-management",level:2},{value:"Row Policy",id:"row-policy-management",level:2},{value:"Settings Profile",id:"settings-profiles-management",level:2},{value:"Quota",id:"quotas-management",level:2},{value:"Enabling SQL-driven Access Control and Account Management",id:"enabling-access-control",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"ClickHouse supports access control management based on ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Role-based_access_control"},"RBAC")," approach."),(0,s.kt)("p",null,"ClickHouse access entities:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#user-account-management"},"User account")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#role-management"},"Role")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#row-policy-management"},"Row Policy")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#settings-profiles-management"},"Settings Profile")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#quotas-management"},"Quota"))),(0,s.kt)("p",null,"You can configure access entities using:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"SQL-driven workflow."),(0,s.kt)("p",{parentName:"li"},"You need to ",(0,s.kt)("a",{parentName:"p",href:"#enabling-access-control"},"enable")," this functionality.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Server ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/configuration-files"},"configuration files")," ",(0,s.kt)("inlineCode",{parentName:"p"},"users.xml")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"config.xml"),"."))),(0,s.kt)("p",null,"We recommend using SQL-driven workflow. Both of the configuration methods work simultaneously, so if you use the server configuration files for managing accounts and access rights, you can smoothly switch to SQL-driven workflow."),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You can\u2019t manage the same access entity by both configuration methods simultaneously."))),(0,s.kt)("p",null,"To see all users, roles, profiles, etc. and all their grants use ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/show#show-access-statement"},"SHOW ACCESS")," statement."),(0,s.kt)("h2",{id:"access-control-usage"},"Usage"),(0,s.kt)("p",null,"By default, the ClickHouse server provides the ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," user account which is not allowed using SQL-driven access control and account management but has all the rights and permissions. The ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," user account is used in any cases when the username is not defined, for example, at login from client or in distributed queries. In distributed query processing a default user account is used, if the configuration of the server or cluster does not specify the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/distributed"},"user and password")," properties."),(0,s.kt)("p",null,"If you just started using ClickHouse, consider the following scenario:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#enabling-access-control"},"Enable")," SQL-driven access control and account management for the ",(0,s.kt)("inlineCode",{parentName:"li"},"default")," user."),(0,s.kt)("li",{parentName:"ol"},"Log in to the ",(0,s.kt)("inlineCode",{parentName:"li"},"default")," user account and create all the required users. Don\u2019t forget to create an administrator account (",(0,s.kt)("inlineCode",{parentName:"li"},"GRANT ALL ON *.* TO admin_user_account WITH GRANT OPTION"),")."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/permissions-for-queries#permissions_for_queries"},"Restrict permissions")," for the ",(0,s.kt)("inlineCode",{parentName:"li"},"default")," user and disable SQL-driven access control and account management for it.")),(0,s.kt)("h3",{id:"access-control-properties"},"Properties of Current Solution"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"You can grant permissions for databases and tables even if they do not exist."),(0,s.kt)("li",{parentName:"ul"},"If a table was deleted, all the privileges that correspond to this table are not revoked. This means that even if you create a new table with the same name later, all the privileges remain valid. To revoke privileges corresponding to the deleted table, you need to execute, for example, the ",(0,s.kt)("inlineCode",{parentName:"li"},"REVOKE ALL PRIVILEGES ON db.table FROM ALL")," query."),(0,s.kt)("li",{parentName:"ul"},"There are no lifetime settings for privileges.")),(0,s.kt)("h2",{id:"user-account-management"},"User Account"),(0,s.kt)("p",null,"A user account is an access entity that allows to authorize someone in ClickHouse. A user account contains:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Identification information."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/grant#grant-privileges"},"Privileges")," that define a scope of queries the user can execute."),(0,s.kt)("li",{parentName:"ul"},"Hosts allowed to connect to the ClickHouse server."),(0,s.kt)("li",{parentName:"ul"},"Assigned and default roles."),(0,s.kt)("li",{parentName:"ul"},"Settings with their constraints applied by default at user login."),(0,s.kt)("li",{parentName:"ul"},"Assigned settings profiles.")),(0,s.kt)("p",null,"Privileges can be granted to a user account by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/grant"},"GRANT")," query or by assigning ",(0,s.kt)("a",{parentName:"p",href:"#role-management"},"roles"),". To revoke privileges from a user, ClickHouse provides the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/revoke"},"REVOKE")," query. To list privileges for a user, use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/show#show-grants-statement"},"SHOW GRANTS")," statement."),(0,s.kt)("p",null,"Management queries:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/user"},"CREATE USER")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/user#alter-user-statement"},"ALTER USER")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/drop"},"DROP USER")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/show#show-create-user-statement"},"SHOW CREATE USER")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/show#show-users-statement"},"SHOW USERS"))),(0,s.kt)("h3",{id:"access-control-settings-applying"},"Settings Applying"),(0,s.kt)("p",null,"Settings can be configured differently: for a user account, in its granted roles and in settings profiles. At user login, if a setting is configured for different access entities, the value and constraints of this setting are applied as follows (from higher to lower priority):"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User account settings."),(0,s.kt)("li",{parentName:"ol"},"The settings of default roles of the user account. If a setting is configured in some roles, then order of the setting application is undefined."),(0,s.kt)("li",{parentName:"ol"},"The settings from settings profiles assigned to a user or to its default roles. If a setting is configured in some profiles, then order of setting application is undefined."),(0,s.kt)("li",{parentName:"ol"},"Settings applied to all the server by default or from the ",(0,s.kt)("a",{parentName:"li",href:"/docs/en/operations/server-configuration-parameters/settings#default-profile"},"default profile"),".")),(0,s.kt)("h2",{id:"role-management"},"Role"),(0,s.kt)("p",null,"Role is a container for access entities that can be granted to a user account."),(0,s.kt)("p",null,"Role contains:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/grant#grant-privileges"},"Privileges")),(0,s.kt)("li",{parentName:"ul"},"Settings and constraints"),(0,s.kt)("li",{parentName:"ul"},"List of assigned roles")),(0,s.kt)("p",null,"Management queries:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/role"},"CREATE ROLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/role#alter-role-statement"},"ALTER ROLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/drop"},"DROP ROLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/set-role"},"SET ROLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/set-role#set-default-role-statement"},"SET DEFAULT ROLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/show#show-create-role-statement"},"SHOW CREATE ROLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/show#show-roles-statement"},"SHOW ROLES"))),(0,s.kt)("p",null,"Privileges can be granted to a role by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/grant"},"GRANT")," query. To revoke privileges from a role ClickHouse provides the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/revoke"},"REVOKE")," query."),(0,s.kt)("h2",{id:"row-policy-management"},"Row Policy"),(0,s.kt)("p",null,"Row policy is a filter that defines which of the rows are available to a user or a role. Row policy contains filters for one particular table, as well as a list of roles and/or users which should use this row policy."),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Row policies makes sense only for users with readonly access. If user can modify table or copy partitions between tables, it defeats the restrictions of row policies."))),(0,s.kt)("p",null,"Management queries:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/row-policy"},"CREATE ROW POLICY")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/row-policy#alter-row-policy-statement"},"ALTER ROW POLICY")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/drop#drop-row-policy-statement"},"DROP ROW POLICY")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/show#show-create-row-policy-statement"},"SHOW CREATE ROW POLICY")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/show#show-policies-statement"},"SHOW POLICIES"))),(0,s.kt)("h2",{id:"settings-profiles-management"},"Settings Profile"),(0,s.kt)("p",null,"Settings profile is a collection of ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/"},"settings"),". Settings profile contains settings and constraints, as well as a list of roles and/or users to which this profile is applied."),(0,s.kt)("p",null,"Management queries:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/settings-profile#create-settings-profile-statement"},"CREATE SETTINGS PROFILE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/settings-profile#alter-settings-profile-statement"},"ALTER SETTINGS PROFILE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/drop#drop-settings-profile-statement"},"DROP SETTINGS PROFILE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/show#show-create-settings-profile-statement"},"SHOW CREATE SETTINGS PROFILE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/show#show-profiles-statement"},"SHOW PROFILES"))),(0,s.kt)("h2",{id:"quotas-management"},"Quota"),(0,s.kt)("p",null,"Quota limits resource usage. See ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/quotas"},"Quotas"),"."),(0,s.kt)("p",null,"Quota contains a set of limits for some durations, as well as a list of roles and/or users which should use this quota."),(0,s.kt)("p",null,"Management queries:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/quota"},"CREATE QUOTA")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/quota#alter-quota-statement"},"ALTER QUOTA")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/drop#drop-quota-statement"},"DROP QUOTA")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/show#show-create-quota-statement"},"SHOW CREATE QUOTA")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/show#show-quota-statement"},"SHOW QUOTA")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/show#show-quotas-statement"},"SHOW QUOTAS"))),(0,s.kt)("h2",{id:"enabling-access-control"},"Enabling SQL-driven Access Control and Account Management"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Setup a directory for configurations storage."),(0,s.kt)("p",{parentName:"li"},"ClickHouse stores access entity configurations in the folder set in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#access_control_path"},"access_control_path")," server configuration parameter.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Enable SQL-driven access control and account management for at least one user account."),(0,s.kt)("p",{parentName:"li"},"By default, SQL-driven access control and account management is disabled for all users. You need to configure at least one user in the ",(0,s.kt)("inlineCode",{parentName:"p"},"users.xml")," configuration file and set the value of the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings-users#access_management-user-setting"},"access_management")," setting to 1."))))}d.isMDXComponent=!0}}]);