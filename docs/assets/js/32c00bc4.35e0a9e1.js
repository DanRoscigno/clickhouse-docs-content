"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[21171,41270],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(86010),s="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,i),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),s=a(86010),i=a(72389),o=a(67392),l=a(7094),c=a(12466),p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,a,i=e.lazy,d=e.block,m=e.defaultValue,h=e.values,k=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:v[0].props.value;if(null!==w&&!f.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),y=N.tabGroupChoices,T=N.setTabGroupChoices,E=(0,r.useState)(w),C=E[0],A=E[1],S=[],R=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var x=y[k];null!=x&&x!==C&&f.some((function(e){return e.value===x}))&&A(x)}var O=function(e){var t=e.currentTarget,a=S.indexOf(t),n=f[a].value;n!==C&&(R(t),A(n),null!=k&&T(k,String(n)))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=S.indexOf(e.currentTarget)+1;a=null!=(n=S[r])?n:S[0];break;case"ArrowLeft":var s,i=S.indexOf(e.currentTarget)-1;a=null!=(s=S[i])?s:S[S.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},b)},f.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:D,onFocus:O,onClick:O},i,{className:(0,s.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},90148:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return h}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=a(982),o=a(65488),l=a(85162),c=["components"],p={sidebar_label:"Backups",sidebar_position:1,slug:"/en/manage/backups"},u="Backups",d={unversionedId:"en/manage/backups",id:"en/manage/backups",title:"Backups",description:"Backup status list",source:"@site/docs/en/manage/backups.mdx",sourceDirName:"en/manage",slug:"/en/manage/backups",permalink:"/docs/en/manage/backups",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/manage/backups.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Backups",sidebar_position:1,slug:"/en/manage/backups"},sidebar:"english",previous:{title:"Updates",permalink:"/docs/en/manage/updates"},next:{title:"Monitoring",permalink:"/docs/en/operations/monitoring"}},m={},h=[{value:"Backup status list",id:"backup-status-list",level:2},{value:"Restore a backup",id:"restore-a-backup",level:2},{value:"Working with your restored service",id:"working-with-your-restored-service",level:2},{value:"Use the <strong>new restored service</strong>",id:"use-the-new-restored-service",level:3},{value:"Migrate data from the <strong>new restored service</strong> back to the <strong>original service</strong>",id:"migrate-data-from-the-new-restored-service-back-to-the-original-service",level:3},{value:"Allow remote access to the newly restored service",id:"allow-remote-access-to-the-newly-restored-service",level:4},{value:"On the newly restored ClickHouse service (the system that hosts the restored data)",id:"on-the-newly-restored-clickhouse-service-the-system-that-hosts-the-restored-data",level:4},{value:"On the destination ClickHouse Cloud system (the one that had the damaged table):",id:"on-the-destination-clickhouse-cloud-system-the-one-that-had-the-damaged-table",level:4}],k={toc:h};function b(e){var t=e.components,p=(0,r.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},k,p,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"backups"},"Backups"),(0,s.kt)(o.Z,{groupId:"deployMethod",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"serverless",label:"ClickHouse Cloud",default:!0,mdxType:"TabItem"},(0,s.kt)("h2",{id:"backup-status-list"},"Backup status list"),(0,s.kt)("p",null,"Each of your services are backed up daily.  You can see the backup list for a service on the ",(0,s.kt)("strong",{parentName:"p"},"Backups")," tab of the service.  From there you can restore a backup, or delete a backup:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"List of backups",src:a(42933).Z,width:"1637",height:"535"})),(0,s.kt)("h2",{id:"restore-a-backup"},"Restore a backup"),(0,s.kt)("p",null,"Backups are restored to a new ClickHouse Cloud service.  After clicking on the ",(0,s.kt)("strong",{parentName:"p"},"Restore backup")," icon you can specify the ",(0,s.kt)("strong",{parentName:"p"},"Service name")," of the new service that will be created, and then ",(0,s.kt)("strong",{parentName:"p"},"Restore this backup"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Restore details",src:a(56).Z,width:"697",height:"272"})),(0,s.kt)("p",null,"The new service will show in the services list as ",(0,s.kt)("strong",{parentName:"p"},"Provisioning")," until it is ready:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"New service provisioning",src:a(59985).Z,width:"1058",height:"573"})),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Please do not use the ",(0,s.kt)("inlineCode",{parentName:"p"},"BACKUP")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"RESTORE")," commands in your SQL client when working with ClickHouse Cloud services.  Cloud backups should be managed from the UI."))),(0,s.kt)("h2",{id:"working-with-your-restored-service"},"Working with your restored service"),(0,s.kt)("p",null,"You now have two similar services, the ",(0,s.kt)("strong",{parentName:"p"},"original service")," one that for some reason needed to be restored, and a ",(0,s.kt)("strong",{parentName:"p"},"new restored service")," that was restored from a backup of the original.  You have two choices:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Use the ",(0,s.kt)("strong",{parentName:"li"},"new restored service")," and remove the ",(0,s.kt)("strong",{parentName:"li"},"original service"),"."),(0,s.kt)("li",{parentName:"ol"},"Migrate data from the ",(0,s.kt)("strong",{parentName:"li"},"new restored service")," back to the ",(0,s.kt)("strong",{parentName:"li"},"original service")," and remove the ",(0,s.kt)("strong",{parentName:"li"},"new restored service"),".")),(0,s.kt)("h3",{id:"use-the-new-restored-service"},"Use the ",(0,s.kt)("strong",{parentName:"h3"},"new restored service")),(0,s.kt)("p",null,"To use the new service perform these steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Verify that the new service has the IP Access List entries required by your use cases."),(0,s.kt)("li",{parentName:"ol"},"Verify that the new service contains the data that you need."),(0,s.kt)("li",{parentName:"ol"},"Remove the original service.")),(0,s.kt)("h3",{id:"migrate-data-from-the-new-restored-service-back-to-the-original-service"},"Migrate data from the ",(0,s.kt)("strong",{parentName:"h3"},"new restored service")," back to the ",(0,s.kt)("strong",{parentName:"h3"},"original service")),(0,s.kt)("p",null,"Suppose you cannot work with the newly restored service for any reason; for example, if you have users or applications that connect to the existing service, you may decide to migrate the newly restored data into the original service.  The migration can be accomplished by following these steps:"),(0,s.kt)("h4",{id:"allow-remote-access-to-the-newly-restored-service"},"Allow remote access to the newly restored service"),(0,s.kt)("p",null,"The new service is restored from backup with the same IP Allow List as the original service, this means that connections will not be allowed from other ClickHouse Cloud services unless you had allowed access from everywhere.  Modify the allow list and allow access from ",(0,s.kt)("strong",{parentName:"p"},"Anywhere")," temporarily.  See the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/manage/security/ip-access-list"},"IP Access List")," docs for details."),(0,s.kt)("h4",{id:"on-the-newly-restored-clickhouse-service-the-system-that-hosts-the-restored-data"},"On the newly restored ClickHouse service (the system that hosts the restored data)"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You will need to reset the password for the new service in order to access it, you can do that from the service list."))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Add a read only user that can read the source table (",(0,s.kt)("inlineCode",{parentName:"p"},"db.table")," in this example)"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER exporter\nIDENTIFIED WITH SHA256_PASSWORD BY 'password-here'\nSETTINGS readonly = 1;\n")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON db.table TO exporter;\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Copy the table definition"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"select create_table_query\nfrom system.tables\nwhere database = 'db' and table = 'table'\n")))),(0,s.kt)("h4",{id:"on-the-destination-clickhouse-cloud-system-the-one-that-had-the-damaged-table"},"On the destination ClickHouse Cloud system (the one that had the damaged table):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Create the destination database:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Using the CREATE TABLE statement from the source, create the destination."),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Change the ENGINE to to ReplicatedMergeTree without any parameters when you run the CREATE statement.  ClickHouse Cloud always replicates tables and provides the correct parameters."))),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db.table ...\n# highlight-next-line\nENGINE = ReplicatedMergeTree\nORDER BY ...\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"remoteSecure")," function to pull the data from the newly restored ClickHouse Cloud service"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db.table SELECT * FROM\nremoteSecure('source-hostname', db, table, 'exporter', 'password-here')\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Verify the data in the service")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Delete the newly restored service once the data is verified")))),(0,s.kt)(l.Z,{value:"selfmanaged",label:"Self-managed",mdxType:"TabItem"},(0,s.kt)(i.default,{mdxType:"SelfManagedBackup"}))))}b.isMDXComponent=!0},982:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=["components"],o={slug:"/en/operations/backup",sidebar_position:49,sidebar_label:"Data backup and restore",title:"Data backup and restore"},l=void 0,c={unversionedId:"en/operations/backup",id:"en/operations/backup",title:"Data backup and restore",description:"While replication provides protection from hardware failures, it does not protect against human errors: accidental deletion of data, deletion of the wrong table or a table on the wrong cluster, and software bugs that result in incorrect data processing or data corruption. In many cases mistakes like these will affect all replicas. ClickHouse has built-in safeguards to prevent some types of mistakes \u2014 for example, by default you can\u2019t just drop tables with a MergeTree-like engine containing more than 50 Gb of data. However, these safeguards do not cover all possible cases and can be circumvented.",source:"@site/docs/en/operations/backup.md",sourceDirName:"en/operations",slug:"/en/operations/backup",permalink:"/docs/en/operations/backup",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/backup.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{slug:"/en/operations/backup",sidebar_position:49,sidebar_label:"Data backup and restore",title:"Data backup and restore"}},p={},u=[{value:"Configure a backup destination",id:"configure-a-backup-destination",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage examples",id:"usage-examples",level:2},{value:"Incremental backups",id:"incremental-backups",level:2},{value:"Assign a password to the backup",id:"assign-a-password-to-the-backup",level:2},{value:"Compression settings",id:"compression-settings",level:2},{value:"Restore specific partitions",id:"restore-specific-partitions",level:2},{value:"Check the status of backups",id:"check-the-status-of-backups",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Duplicating Source Data Somewhere Else",id:"duplicating-source-data-somewhere-else",level:3},{value:"Filesystem Snapshots",id:"filesystem-snapshots",level:3},{value:"clickhouse-copier",id:"clickhouse-copier",level:3},{value:"Manipulations with Parts",id:"manipulations-with-parts",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"While ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"replication")," provides protection from hardware failures, it does not protect against human errors: accidental deletion of data, deletion of the wrong table or a table on the wrong cluster, and software bugs that result in incorrect data processing or data corruption. In many cases mistakes like these will affect all replicas. ClickHouse has built-in safeguards to prevent some types of mistakes \u2014 for example, by default ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#max-table-size-to-drop"},"you can\u2019t just drop tables with a MergeTree-like engine containing more than 50 Gb of data"),". However, these safeguards do not cover all possible cases and can be circumvented."),(0,s.kt)("p",null,"In order to effectively mitigate possible human errors, you should carefully prepare a strategy for backing up and restoring your data ",(0,s.kt)("strong",{parentName:"p"},"in advance"),"."),(0,s.kt)("p",null,"Each company has different resources available and business requirements, so there\u2019s no universal solution for ClickHouse backups and restores that will fit every situation. What works for one gigabyte of data likely won\u2019t work for tens of petabytes. There are a variety of possible approaches with their own pros and cons, which will be discussed below. It is a good idea to use several approaches instead of just one in order to compensate for their various shortcomings."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Keep in mind that if you backed something up and never tried to restore it, chances are that restore will not work properly when you actually need it (or at least it will take longer than business can tolerate). So whatever backup approach you choose, make sure to automate the restore process as well, and practice it on a spare ClickHouse cluster regularly."))),(0,s.kt)("h2",{id:"configure-a-backup-destination"},"Configure a backup destination"),(0,s.kt)("p",null,"In the examples below you will see the backup destination specified like ",(0,s.kt)("inlineCode",{parentName:"p"},"Disk('backups', '1.zip')"),".  To prepare the destination add a file to ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.d/backup_disk.xml")," specifying the backup destination.  For example, this file defines disk named ",(0,s.kt)("inlineCode",{parentName:"p"},"backups")," and then adds that disk to the ",(0,s.kt)("strong",{parentName:"p"},"backups > allowed_disk")," list:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n\x3c!--highlight-next-line --\x3e\n            <backups>\n                <type>local</type>\n                <path>/backups/</path>\n            </backups>\n        </disks>\n    </storage_configuration>\n\x3c!--highlight-start --\x3e\n    <backups>\n        <allowed_disk>backups</allowed_disk>\n        <allowed_path>/backups/</allowed_path>\n    </backups>\n\x3c!--highlight-end --\x3e\n</clickhouse>\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("p",null,"Backups can be either full or incremental, and can include tables (including materialized views, projections, and dictionaries), and databases.  Backups can be synchronous (default) or asynchronous.  They can be compressed.  Backups can be password protected."),(0,s.kt)("p",null,"The BACKUP and RESTORE statements take a list of DATABASE and TABLE names, a destination (or source), options and settings:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The destination for the backup, or the source for the restore.  This is based on the disk defined earlier.  For example ",(0,s.kt)("inlineCode",{parentName:"li"},"Disk('backups', 'filename.zip')")),(0,s.kt)("li",{parentName:"ul"},"ASYNC: backup or restore asynchronously"),(0,s.kt)("li",{parentName:"ul"},"PARTITIONS: a list of partitions to restore"),(0,s.kt)("li",{parentName:"ul"},"SETTINGS:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"en/sql-reference/statements/create/table/#column-compression-codecs"},(0,s.kt)("inlineCode",{parentName:"a"},"compression_method"))," and compression_level"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"password")," for the file on disk"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"base_backup"),": the destination of the previous backup of this source.  For example, ",(0,s.kt)("inlineCode",{parentName:"li"},"Disk('backups', '1.zip')")," ")))),(0,s.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,s.kt)("p",null,"Backup and then restore a table:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"BACKUP TABLE test.table TO Disk('backups', '1.zip')\n")),(0,s.kt)("p",null,"Corresponding restore:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"RESTORE TABLE test.table FROM Disk('backups', '1.zip')\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The above RESTORE would fail if the table ",(0,s.kt)("inlineCode",{parentName:"p"},"test.table")," contains data, you would have to drop the table in order to test the RESTORE, or use the setting ",(0,s.kt)("inlineCode",{parentName:"p"},"allow_non_empty_tables=true"),":"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre"},"RESTORE TABLE test.table FROM Disk('backups', '1.zip') \nSETTINGS allow_non_empty_tables=true\n")))),(0,s.kt)("p",null,"Tables can be restored, or backed up, with new names:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"RESTORE TABLE test.table AS test.table2 FROM Disk('backups', '1.zip')\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"BACKUP TABLE test.table3 AS test.table4 TO Disk('backups', '2.zip')\n")),(0,s.kt)("h2",{id:"incremental-backups"},"Incremental backups"),(0,s.kt)("p",null,"Incremental backups can be taken by specifying the ",(0,s.kt)("inlineCode",{parentName:"p"},"base_backup"),"."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Incremental backups depend on the base backup.  The base backup must be kept available in order to be able to restore from an incremental backup."))),(0,s.kt)("p",null,"Incrementally store new data. The setting ",(0,s.kt)("inlineCode",{parentName:"p"},"base_backup")," causes data since a previous backup to ",(0,s.kt)("inlineCode",{parentName:"p"},"Disk('backups', 'd.zip')")," to be stored to ",(0,s.kt)("inlineCode",{parentName:"p"},"Disk('backups', 'incremental-a.zip')"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"BACKUP TABLE test.table TO Disk('backups', 'incremental-a.zip')\n  SETTINGS base_backup = Disk('backups', 'd.zip')\n")),(0,s.kt)("p",null,"Restore all data from the incremental backup and the base_backup into a new table ",(0,s.kt)("inlineCode",{parentName:"p"},"test.table2"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"RESTORE TABLE test.table AS test.table2 \n  FROM Disk('backups', 'incremental-a.zip');\n")),(0,s.kt)("h2",{id:"assign-a-password-to-the-backup"},"Assign a password to the backup"),(0,s.kt)("p",null,"Backups written to disk can have a password applied to the file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"BACKUP TABLE test.table\n  TO Disk('backups', 'password-protected.zip')\n  SETTINGS password='qwerty'\n")),(0,s.kt)("p",null,"Restore:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"RESTORE TABLE test.table\n  FROM Disk('backups', 'password-protected.zip')\n  SETTINGS password='qwerty'\n")),(0,s.kt)("h2",{id:"compression-settings"},"Compression settings"),(0,s.kt)("p",null,"If you would like to specify the compression method or level:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"BACKUP TABLE test.table\n  TO Disk('backups', 'filename.zip')\n  SETTINGS compression_method='lzma', compression_level=3\n")),(0,s.kt)("h2",{id:"restore-specific-partitions"},"Restore specific partitions"),(0,s.kt)("p",null,"If specific partitions associated with a table need to be restored these can be specified.  To restore partitions 1 and 4 from backup:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"RESTORE TABLE test.table PARTITIONS '2', '3'\n  FROM Disk('backups', 'filename.zip')\n")),(0,s.kt)("h2",{id:"check-the-status-of-backups"},"Check the status of backups"),(0,s.kt)("p",null,"The backup command returns an ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"status"),", and that ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," can be used to get the status of the backup.  This is very useful to check the progress of long ASYNC backups.  The example below shows a failure that happened when trying to overwrite an existing backup file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"BACKUP TABLE helloworld.my_first_table TO Disk('backups', '1.zip') ASYNC\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500id\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500status\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 7678b0b3-f519-4e6e-811f-5a0781a4eb52 \u2502 CREATING_BACKUP \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set. Elapsed: 0.001 sec.\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SELECT\n    *\nFROM system.backups\nwhere id='7678b0b3-f519-4e6e-811f-5a0781a4eb52'\nFORMAT Vertical\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nid:                7678b0b3-f519-4e6e-811f-5a0781a4eb52\nname:              Disk('backups', '1.zip')\n#highlight-next-line\nstatus:            BACKUP_FAILED\nnum_files:         0\nuncompressed_size: 0\ncompressed_size:   0\n#highlight-next-line\nerror:             Code: 598. DB::Exception: Backup Disk('backups', '1.zip') already exists. (BACKUP_ALREADY_EXISTS) (version 22.8.2.11 (official build))\nstart_time:        2022-08-30 09:21:46\nend_time:          2022-08-30 09:21:46\n\n1 row in set. Elapsed: 0.002 sec.\n")),(0,s.kt)("h2",{id:"alternatives"},"Alternatives"),(0,s.kt)("p",null,"ClickHouse stores data on disk, and there are many ways to backup disks.  These are some alternatives that have been used in the past, and that may fit in well in your environment."),(0,s.kt)("h3",{id:"duplicating-source-data-somewhere-else"},"Duplicating Source Data Somewhere Else"),(0,s.kt)("p",null,"Often data that is ingested into ClickHouse is delivered through some sort of persistent queue, such as ",(0,s.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Apache Kafka"),". In this case it is possible to configure an additional set of subscribers that will read the same data stream while it is being written to ClickHouse and store it in cold storage somewhere. Most companies already have some default recommended cold storage, which could be an object store or a distributed filesystem like ",(0,s.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"},"HDFS"),"."),(0,s.kt)("h3",{id:"filesystem-snapshots"},"Filesystem Snapshots"),(0,s.kt)("p",null,"Some local filesystems provide snapshot functionality (for example, ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ZFS"},"ZFS"),"), but they might not be the best choice for serving live queries. A possible solution is to create additional replicas with this kind of filesystem and exclude them from the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/distributed"},"Distributed")," tables that are used for ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," queries. Snapshots on such replicas will be out of reach of any queries that modify data. As a bonus, these replicas might have special hardware configurations with more disks attached per server, which would be cost-effective."),(0,s.kt)("h3",{id:"clickhouse-copier"},"clickhouse-copier"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/utilities/clickhouse-copier"},"clickhouse-copier")," is a versatile tool that was initially created to re-shard petabyte-sized tables. It can also be used for backup and restore purposes because it reliably copies data between ClickHouse tables and clusters."),(0,s.kt)("p",null,"For smaller volumes of data, a simple ",(0,s.kt)("inlineCode",{parentName:"p"},"INSERT INTO ... SELECT ...")," to remote tables might work as well."),(0,s.kt)("h3",{id:"manipulations-with-parts"},"Manipulations with Parts"),(0,s.kt)("p",null,"ClickHouse allows using the ",(0,s.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... FREEZE PARTITION ...")," query to create a local copy of table partitions. This is implemented using hardlinks to the ",(0,s.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/shadow/")," folder, so it usually does not consume extra disk space for old data. The created copies of files are not handled by ClickHouse server, so you can just leave them there: you will have a simple backup that does not require any additional external system, but it will still be prone to hardware issues. For this reason, it\u2019s better to remotely copy them to another location and then remove the local copies. Distributed filesystems and object stores are still a good options for this, but normal attached file servers with a large enough capacity might work as well (in this case the transfer will occur via the network filesystem or maybe ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rsync"},"rsync"),").\nData can be restored from backup using the ",(0,s.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... ATTACH PARTITION ...")),(0,s.kt)("p",null,"For more information about queries related to partition manipulations, see the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/partition#alter_manipulations-with-partitions"},"ALTER documentation"),"."),(0,s.kt)("p",null,"A third-party tool is available to automate this approach: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/AlexAkulov/clickhouse-backup"},"clickhouse-backup"),"."))}m.isMDXComponent=!0},42933:function(e,t,a){t.Z=a.p+"assets/images/cloud-backup-list-8869e660a34f5d00b2312d36b1fed970.png"},59985:function(e,t,a){t.Z=a.p+"assets/images/cloud-backup-new-service-5c4c28b4c16c197b9ab89fa0a49e8fde.png"},56:function(e,t,a){t.Z=a.p+"assets/images/cloud-backup-restore-164583a320bf985d1aece65944602413.png"}}]);