"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[69860],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(a),u=i,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||s;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},43889:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var n=a(87462),i=a(63366),s=(a(67294),a(3905)),r=["components"],o={sidebar_label:"Use S3 Object Storage as a ClickHouse disk",description:"Configure AWS IAM user, create an S3 bucket, and use that bucket as a ClickHouse disk."},c="Use S3 Object Storage as a ClickHouse disk",l={unversionedId:"en/guides/sre/configuring-s3-for-clickhouse-use",id:"en/guides/sre/configuring-s3-for-clickhouse-use",title:"Use S3 Object Storage as a ClickHouse disk",description:"Configure AWS IAM user, create an S3 bucket, and use that bucket as a ClickHouse disk.",source:"@site/docs/en/guides/sre/configuring-s3-for-clickhouse-use.md",sourceDirName:"en/guides/sre",slug:"/en/guides/sre/configuring-s3-for-clickhouse-use",permalink:"/docs/en/guides/sre/configuring-s3-for-clickhouse-use",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/sre/configuring-s3-for-clickhouse-use.md",tags:[],version:"current",frontMatter:{sidebar_label:"Use S3 Object Storage as a ClickHouse disk",description:"Configure AWS IAM user, create an S3 bucket, and use that bucket as a ClickHouse disk."},sidebar:"english",previous:{title:"Rebalancing Shards",permalink:"/docs/en/guides/sre/scaling-clusters"},next:{title:"Improving Query Performance",permalink:"/docs/en/guides/improving-query-performance"}},p={},d=[{value:"Create an AWS IAM user",id:"create-an-aws-iam-user",level:2},{value:"Create an S3 bucket",id:"create-an-s3-bucket",level:2},{value:"Configure ClickHouse to use the S3 bucket as a disk",id:"configure-clickhouse-to-use-the-s3-bucket-as-a-disk",level:2},{value:"Testing",id:"testing",level:2},{value:"Summary",id:"summary",level:2}],m={toc:d};function u(e){var t=e.components,o=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-s3-object-storage-as-a-clickhouse-disk"},"Use S3 Object Storage as a ClickHouse disk"),(0,s.kt)("p",null,"This article demonstrates the basics of how to configure an AWS IAM user, create an S3 bucket and configure ClickHouse to use the bucket as an S3 disk.\nYou should work with your security team to determine the permissions to be used, and consider these as a starting point."),(0,s.kt)("h2",{id:"create-an-aws-iam-user"},"Create an AWS IAM user"),(0,s.kt)("p",null,"In this procedure, we'll be creating a service account user, not a login user."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Log into the AWS IAM Management Console.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'In "users", select ',(0,s.kt)("strong",{parentName:"p"},"Add users"),"  "),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_iam_user_0",src:a(83708).Z,width:"1493",height:"307"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Enter the user name and set the credential type to ",(0,s.kt)("strong",{parentName:"p"},"Access key - Programmatic access")," and select ",(0,s.kt)("strong",{parentName:"p"},"Next: Permissions")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_iam_user_1",src:a(20615).Z,width:"984",height:"556"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Do not add the user to any group; select ",(0,s.kt)("strong",{parentName:"p"},"Next: Tags")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_iam_user_2",src:a(74533).Z,width:"999",height:"557"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Unless you need to add any tags, select ",(0,s.kt)("strong",{parentName:"p"},"Next: Review")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_iam_user_3",src:a(79437).Z,width:"983",height:"386"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select ",(0,s.kt)("strong",{parentName:"p"},"Create User")),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The warning message stating that the user has no permissions can be ignored; permissions will be granted on the bucket for the user in the next section"))),(0,s.kt)("p",{parentName:"li"},"  ",(0,s.kt)("img",{alt:"create_iam_user_4",src:a(96334).Z,width:"987",height:"581"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The user is now created; click on ",(0,s.kt)("strong",{parentName:"p"},"show")," and copy the access and secret keys."),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Save the keys somewhere else; this is the only time that the secret access key will be available."))),(0,s.kt)("p",{parentName:"li"},"  ",(0,s.kt)("img",{alt:"create_iam_user_5",src:a(47910).Z,width:"983",height:"576"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click close, then find the user in the users screen."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_iam_user_6",src:a(47855).Z,width:"837",height:"54"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Copy the ARN (Amazon Resource Name) and save it for use when configuring the access policy for the bucket."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_iam_user_7",src:a(72715).Z,width:"595",height:"265"})))),(0,s.kt)("h2",{id:"create-an-s3-bucket"},"Create an S3 bucket"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the S3 bucket section, select ",(0,s.kt)("strong",{parentName:"p"},"Create bucket")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_s3_bucket_0",src:a(58345).Z,width:"1465",height:"326"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Enter a bucket name, leave other options default"),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The bucket name must be unique across AWS, not just the organization, or it will emit an error.")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Leave ",(0,s.kt)("inlineCode",{parentName:"p"},"Block all Public Access")," enabled; public access is not needed."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_s3_bucket_2",src:a(57735).Z,width:"841",height:"754"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select ",(0,s.kt)("strong",{parentName:"p"},"Create Bucket")," at the bottom of the page"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_s3_bucket_3",src:a(8570).Z,width:"826",height:"132"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select the link, copy the ARN, and save it for use when configuring the access policy for the bucket.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Once the bucket has been created, find the new S3 bucket in the S3 buckets list and select the link"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_s3_bucket_4",src:a(98588).Z,width:"1088",height:"56"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select ",(0,s.kt)("strong",{parentName:"p"},"Create folder")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_s3_bucket_5",src:a(70066).Z,width:"1134",height:"448"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Enter a folder name which will be the target for the ClickHouse S3 disk and select ",(0,s.kt)("strong",{parentName:"p"},"Create folder")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_s3_bucket_6",src:a(77752).Z,width:"853",height:"788"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The folder should now be visible on the bucket list"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_s3_bucket_7",src:a(11575).Z,width:"1207",height:"569"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select the checkbox for the new folder and click on ",(0,s.kt)("strong",{parentName:"p"},"Copy URL")," Save the URL copied to be used in the ClickHouse storage configuration in the next section."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_s3_bucket_8",src:a(62438).Z,width:"1200",height:"569"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select the ",(0,s.kt)("strong",{parentName:"p"},"Permissions")," tab and click on the ",(0,s.kt)("strong",{parentName:"p"},"Edit")," button in the ",(0,s.kt)("strong",{parentName:"p"},"Bucket Policy")," section"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"create_s3_bucket_9",src:a(93844).Z,width:"1176",height:"762"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Add a bucket policy, example below:"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Id": "Policy123456",\n    "Statement": [\n        {\n            "Sid": "abc123",\n            "Effect": "Allow",\n            "Principal": {\n                "AWS": "arn:aws:iam::921234567898:user/mars-s3-user"\n            },\n            "Action": "s3:*",\n            "Resource": [\n                "arn:aws:s3:::mars-doc-test",\n                "arn:aws:s3:::mars-doc-test/*"\n            ]\n        }\n    ]\n}\n')),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Example Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Version"),(0,s.kt)("td",{parentName:"tr",align:null},"Version of the policy interpreter, leave as-is"),(0,s.kt)("td",{parentName:"tr",align:null},"2012-10-17")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Sid"),(0,s.kt)("td",{parentName:"tr",align:null},"User-defined policy id"),(0,s.kt)("td",{parentName:"tr",align:null},"abc123")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Effect"),(0,s.kt)("td",{parentName:"tr",align:null},"Whether user requests will be allowed or denied"),(0,s.kt)("td",{parentName:"tr",align:null},"Allow")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Principal"),(0,s.kt)("td",{parentName:"tr",align:null},"The accounts or user that will be allowed"),(0,s.kt)("td",{parentName:"tr",align:null},"arn:aws:iam::921234567898:user/mars-s3-user")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Action"),(0,s.kt)("td",{parentName:"tr",align:null},"What operations are allowed on the bucket"),(0,s.kt)("td",{parentName:"tr",align:null},"s3:*")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Resource"),(0,s.kt)("td",{parentName:"tr",align:null},"Which resources in the bucket will operations be allowed in"),(0,s.kt)("td",{parentName:"tr",align:null},'"arn:aws:s3:::mars-doc-test", "arn:aws:s3:::mars-doc-test/*"')))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You should work with your security team to determine the permissions to be used, consider these as a starting point.\nFor more information on Policies and settings, refer to AWS documentation:\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-policy-language-overview.html"},"https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-policy-language-overview.html")))),(0,s.kt)("ol",{start:13},(0,s.kt)("li",{parentName:"ol"},"Save the policy configuration.")),(0,s.kt)("h2",{id:"configure-clickhouse-to-use-the-s3-bucket-as-a-disk"},"Configure ClickHouse to use the S3 bucket as a disk"),(0,s.kt)("p",null,"The following example is based on a Linux Deb package installed as a service with default ClickHouse directories."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create a new file in the ClickHouse ",(0,s.kt)("inlineCode",{parentName:"li"},"config.d")," directory to store the storage configuration.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vim /etc/clickhouse-server/config.d/storage_config.xml\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Add the following for storage configuration; substituting the bucket path, access key and secret keys from earlier steps")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n  <storage_configuration>\n     <disks>\n        <s3_disk>\n           <type>s3</type>\n           <endpoint>https://mars-doc-test.s3.amazonaws.com/clickhouse3/</endpoint>\n           <access_key_id>ABC123</access_key_id>\n           <secret_access_key>Abc+123</secret_access_key>\n           <metadata_path>/var/lib/clickhouse/disks/s3_disk/</metadata_path>\n           <cache_enabled>true</cache_enabled>\n           <data_cache_enabled>true</data_cache_enabled>\n           <cache_path>/var/lib/clickhouse/disks/s3_disk/cache/</cache_path>\n         </s3_disk>\n </disks>\n        <policies>\n            <s3_main>\n                <volumes>\n                    <main>\n                        <disk>s3_disk</disk>\n                    </main>\n                </volumes>\n            </s3_main>\n    </policies>\n   </storage_configuration>\n</clickhouse>\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The tag ",(0,s.kt)("inlineCode",{parentName:"p"},"<s3_disk>")," within the ",(0,s.kt)("inlineCode",{parentName:"p"},"<disks>")," tag is an arbitrary label. This can be set to something else but the same label must be used in the ",(0,s.kt)("inlineCode",{parentName:"p"},"<disk>")," tab under the ",(0,s.kt)("inlineCode",{parentName:"p"},"<policies>")," tab to reference the disk.\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"<metadata_path>")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"<cache_path>")," are recommended to also include the name in the path to be able to identify the locations on disk.\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"<S3_main>")," tag is also arbitrary and is the name of the policy which will be used as the identifier storage target when creating resources in ClickHouse."),(0,s.kt)("p",{parentName:"div"},"For more information about using S3:\nIntegrations Guide: ",(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/integrations/s3/s3-merge-tree"},"S3 Backed MergeTree")))),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Update the owner of the file to the clickhouse user and group")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chown clickhouse:clickhouse /etc/clickhouse-server/config.d/storage_config.xml\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Restart the ClickHouse instance to have the changes take effect.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"service clickhouse-server restart\n")),(0,s.kt)("h2",{id:"testing"},"Testing"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Log in with the ClickHouse client, something like the following")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client --user default --password ClickHouse123!\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Create a table specifying the new S3 storage policy")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"chnode4 :) CREATE TABLE s3_table1\n           (\n               `id` UInt64,\n               `column1` String\n           )\n           ENGINE = MergeTree\n           ORDER BY id\n           SETTINGS storage_policy = 's3_main';\n\nCREATE TABLE s3_table1\n(\n    `id` UInt64,\n    `column1` String\n)\nENGINE = MergeTree\nORDER BY id\nSETTINGS storage_policy = 's3_main'\n\nQuery id: fefd97b5-cce5-4fe3-a1d6-8cdda5616451\n\nOk.\n\n0 rows in set. Elapsed: 0.254 sec.\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Show that the table was created with the correct policy")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"chnode4 :) SHOW CREATE TABLE s3_table1;\n\nSHOW CREATE TABLE s3_table1\n\nQuery id: e7a00995-351c-41cb-a3aa-272a5849b134\n\n\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE default.s3_table1\n(\n    `id` UInt64,\n    `column1` String\n)\nENGINE = MergeTree\nORDER BY id\nSETTINGS storage_policy = 's3_main', index_granularity = 8192 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set. Elapsed: 0.004 sec.\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Insert test rows into the table")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"chnode4 :) INSERT INTO s3_table1\n           (id, column1)\n           VALUES\n           (1, 'abc'),\n           (2, 'xyz');\n\nINSERT INTO s3_table1 (id, column1) FORMAT Values\n\nQuery id: 0265dd92-3890-4d56-9d12-71d4038b85d5\n\nOk.\n\n2 rows in set. Elapsed: 0.337 sec.\n")),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"View the rows")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"chnode4 :) SELECT * FROM s3_table1;\n\nSELECT *\nFROM s3_table1\n\nQuery id: 967a8f0c-3b67-4154-830f-33bd6ad386ce\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 abc     \u2502\n\u2502  2 \u2502 xyz     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n2 rows in set. Elapsed: 0.284 sec.\n")),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the AWS console, navigate to the buckets, select the new one and the folder.\nYou should see something like the following:"),(0,s.kt)("p",{parentName:"li"},"  ",(0,s.kt)("img",{alt:"create_s3_bucket_10",src:a(13653).Z,width:"1208",height:"736"})))),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"This article provided simple step-by-step instructions on configuring AWS S3 bucket for access and use as a disk for ClickHouse."))}u.isMDXComponent=!0},83708:function(e,t,a){t.Z=a.p+"assets/images/s3-1-03bea40f47bb9ae0f8a38b921fb5fc65.png"},20615:function(e,t,a){t.Z=a.p+"assets/images/s3-2-d1769946c5baf28dec5266388f46ca6d.png"},74533:function(e,t,a){t.Z=a.p+"assets/images/s3-3-e687a417d48603c3a1a4c456639691e6.png"},79437:function(e,t,a){t.Z=a.p+"assets/images/s3-4-8bc97d7d71749ecca4b0ca006ec3e659.png"},96334:function(e,t,a){t.Z=a.p+"assets/images/s3-5-d9258893409b46a1cceeb1fb26938d3a.png"},47910:function(e,t,a){t.Z=a.p+"assets/images/s3-6-0f6f4bbe29c6b238875fe1b0e28f6764.png"},47855:function(e,t){t.Z="data:image/png;base64,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UC6r76tQvrq/Xt+cOq58P+bJ5LXgk6LExESTYjYzh7BsRk+XMlPHwyhzr3NhmIxh0eZTaP/+FtM8zh/inJzZllChF8nTGF4XfSTOvEvI3te2bsl0c4TsfWwPw9b+/M89aDxsvdnMsLrZVqrrcMsDNbXnY/jPz/ZgwKep6YIZ2jbSSh/OOn0Z02h3sNKJj7TShfOHiSLYLoo0f+djyu/YuGSTMY/103M0tmtNVLPC53Yev+rrlNouAtmSAFMPuxtfjMlUw8woR2OcNTN1jR492mSP47aiRYua7HJMkZyRMeV2/vz5zXuQRo4c6XqhJiehM+uXLDQJMGTOU/xwnWLJV4Y5z/C6rJDxHNN2XfZ2ZlBkmnl6cvhD45wivsSRxr8BJhixxUyTJk0QGRlpxL0p4OcX5ytxvNPrSmOqewqhhQsXol27dnj//fcxatQo88MHDjz3pk2bTEgqy/trH8s41exraPdf31c2CX1mhYDGFZDDShLACKv7Nk7ajImJcaWl9VcRBRGfEhUvHnppmq0oNPOOn7zhuVAwby6DgimqIwvlscIHvJO5npwChqMVzhfuOsZ7ydStPMdFK+SN85UoijznODE1OMP4IgvnyXSSA56f9fB9R57m73wMvWN7fL0LybM+rYtAsBNgSBGfgjPE6H4sPj7ePBhieJAstAlQ/FAI+TMKpaENej2U0DnPtnAs8/94REREOsHD24MLFy6YhwL3M175LiJmbSxWrJgROwyPo/eI60zHXbduXZPCng8OKND4niR6YJm+27aM2meX0advAvq+8s1Ge+6fQKiOqyyLovtHqiNFQAREQAREIPQJuKfj9uwtBRG9Sk6zl19+2XSZ8+z4hHr27Nlmnh7D+e5HgDmNn/orAiIQeAISRYFnqhpFQAREQAREIB0Beo7sdxgxy5znvKN0B4TwBiYqmTZtGvbs2WN6ydThFEiV7yYlCeGuq2siIALZlIBEUTa9MGqWCIiACIiACIiACIiACIjAwyGQdnbxwzmnziICIiACIiACIiACIiACIiAC2YZA+pn12aZpaogIiIAIiIAIBB+BNm3auBodFRVllrUNCDQDF2QtiIAIiEAACCh8LgAQVYUIiIAIiIAIiIAIiIAIiEDwElD4XPBeO7VcBERABERABERABERABEQgAAQkigIAUVWIgAiIgAiIgAiIgAiIgAgELwGJouC9dmq5CIiACIiACIiACIiACIhAAAhIFAUAoqoQAREQAREQAREQAREQAREIXgISRcF77dRyERABERABERABERABERCBABCQKAoARFUhAiIgAiIgAiIgAiIgAiIQvAQkioL32qnlIiACIiACIiACIiACIiACASAQFh0dHYBqVIUIiIAIiIAIiIAIiIAIiIAIBCcBvbw1OK+bWi0CIiACIiACIiACIiACIhAgAgqfCxBIVSMCIiACIiACIiACIiACIhCcBCSKgvO6qdUiIAIiIAIiIAIiIAIiIAIBIiBRFCCQqkYEREAEREAEREAEREAERCA4CUgUBed1U6tFQAREQAREQAREQAREQAQCRECiKEAgVY0IiIAIiIAIiIAIiIAIiEBwEvh/+v/MlF2Dy9gAAAAASUVORK5CYII="},72715:function(e,t,a){t.Z=a.p+"assets/images/s3-8-629425bf3160cfe75e44876e5c71eb8b.png"},58345:function(e,t,a){t.Z=a.p+"assets/images/s3-9-4aa76542e482dff3894ec423231dd1b0.png"},57735:function(e,t,a){t.Z=a.p+"assets/images/s3-a-0e6dc95b7af088e0bd74a31fbef15076.png"},8570:function(e,t,a){t.Z=a.p+"assets/images/s3-b-63b4e2c1dae1494a8abbb0298c70d606.png"},98588:function(e,t,a){t.Z=a.p+"assets/images/s3-c-2d809bd0ea2cd6138cd8ec16a07b29f1.png"},70066:function(e,t,a){t.Z=a.p+"assets/images/s3-d-8b4bb75da064d5d60ccb01b78026b4b2.png"},77752:function(e,t,a){t.Z=a.p+"assets/images/s3-e-3d5076dfc4d904eb6e1df91fd5a7f540.png"},11575:function(e,t,a){t.Z=a.p+"assets/images/s3-f-d6312cc21827dfaaf0177e642286bec0.png"},62438:function(e,t,a){t.Z=a.p+"assets/images/s3-g-fc09549f49847b6c59c04123a76baae6.png"},93844:function(e,t,a){t.Z=a.p+"assets/images/s3-h-bfc7b2b7bfd8dac081ed4a10b34a9e03.png"},13653:function(e,t,a){t.Z=a.p+"assets/images/s3-j-5dcc986c9002270f2d67ba97e8d7474e.png"}}]);