"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62136],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),y=a,g=m["".concat(u,".").concat(y)]||m[y]||s[y]||l;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7029:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const l={title:"\ud504\ub85c\uc138\uc2a4\uc640 \uc4f0\ub808\ub4dc\uc758 \ucc28\uc774",authors:["karais89"],tags:["interview"]},i=void 0,o={permalink:"/2017/11/08/ProcessAndThread",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2017-11-08-ProcessAndThread/index.md",source:"@site/blog/2017-11-08-ProcessAndThread/index.md",title:"\ud504\ub85c\uc138\uc2a4\uc640 \uc4f0\ub808\ub4dc\uc758 \ucc28\uc774",description:"\ud504\ub85c\uc138\uc2a4\ub780?",date:"2017-11-08T00:00:00.000Z",formattedDate:"2017\ub144 11\uc6d4 8\uc77c",tags:[{label:"interview",permalink:"/tags/interview"}],readingTime:2.105,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"\ud504\ub85c\uc138\uc2a4\uc640 \uc4f0\ub808\ub4dc\uc758 \ucc28\uc774",authors:["karais89"],tags:["interview"]},prevItem:{title:"[HackerRank #12] Implementation - Apple and Orange",permalink:"/2017/11/08/HackerRank-Implementation-Apple-and-Orange"},nextItem:{title:"[HackerRank #11] Implementation - Grading Students",permalink:"/2017/11/07/HackerRank-Implementation-Grading-Students"}},u={authorsImageUrls:[void 0]},p=[{value:"\ud504\ub85c\uc138\uc2a4\ub780?",id:"\ud504\ub85c\uc138\uc2a4\ub780",level:2},{value:"\uc2a4\ub808\ub4dc\ub780?",id:"\uc2a4\ub808\ub4dc\ub780",level:2},{value:"\uc2a4\ub808\ub4dc \uc7a5\uc810",id:"\uc2a4\ub808\ub4dc-\uc7a5\uc810",level:3},{value:"\uc2a4\ub808\ub4dc\uc758 \ub2e8\uc810",id:"\uc2a4\ub808\ub4dc\uc758-\ub2e8\uc810",level:3},{value:"\ud504\ub85c\uc138\uc2a4\uc640 \uc2a4\ub808\ub4dc\uc758 \ucc28\uc774\uc810",id:"\ud504\ub85c\uc138\uc2a4\uc640-\uc2a4\ub808\ub4dc\uc758-\ucc28\uc774\uc810",level:2},{value:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\uc5d0 \ub300\ud55c \ucc28\uc774",id:"\uba54\ubaa8\ub9ac-\uc0ac\uc6a9\uc5d0-\ub300\ud55c-\ucc28\uc774",level:3}],c={toc:p},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\ud504\ub85c\uc138\uc2a4\ub780"},"\ud504\ub85c\uc138\uc2a4\ub780?"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uc2e4\ud589\uc911\uc778 \ud504\ub85c\uadf8\ub7a8"),(0,a.yg)("li",{parentName:"ul"},"\uc8fc\uae30\uc5b5\uc7a5\uce58, CPU\uc758 \uc2e4\ud589\ub2e8\uc704"),(0,a.yg)("li",{parentName:"ul"},"\ub3d9\uc801\uc778 \ud504\ub85c\uadf8\ub7a8"),(0,a.yg)("li",{parentName:"ul"},"\ub9ac\uc18c\uc2a4\uc640 \uc2a4\ub808\ub4dc\uc758 \uad6c\uc131"),(0,a.yg)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ud504\ub85c\uc138\uc2a4\ub294 \ud558\ub098 \uc774\uc0c1\uc758 \uc2a4\ub808\ub4dc\ub97c \uac00\uc9d0")),(0,a.yg)("h2",{id:"\uc2a4\ub808\ub4dc\ub780"},"\uc2a4\ub808\ub4dc\ub780?"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uacbd\ub7c9\ud654\ub41c \ud504\ub85c\uc138\uc2a4"),(0,a.yg)("li",{parentName:"ul"},"\ud504\ub85c\uc138\uc2a4 \ub0b4\uc5d0\uc11c \uc2e4\uc81c \uc791\uc5c5\uc744 \uc218\ud589\ud568"),(0,a.yg)("li",{parentName:"ul"},"\ud55c \ud504\ub85c\uc138\uc2a4 \ub0b4\uc5d0\uc11c \ub3d9\uc791\ub418\ub294 \uc5ec\ub7ec \uc2e4\ud589\uc758 \ud750\ub984")),(0,a.yg)("h3",{id:"\uc2a4\ub808\ub4dc-\uc7a5\uc810"},"\uc2a4\ub808\ub4dc \uc7a5\uc810"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc758 \uc790\uc6d0 \uc18c\ubaa8\uac00 \uc904\uc5b4\ub4e0\ub2e4. \ud504\ub85c\uadf8\ub7a8\uc758 \uc751\ub2f5 \uc2dc\uac04\uc774 \ub2e8\ucd95\ub41c\ub2e4"),(0,a.yg)("li",{parentName:"ul"},"\ud504\ub85c\uc138\uc2a4 \uac04 \ud1b5\uc2e0 \ubc29\ubc95\uc5d0 \ube44\ud574 \uc2a4\ub808\ub4dc\uac04\uc758 \ud1b5\uc2e0 \ubc29\ubc95\uc774 \ud6e8\uc52c \uac04\ub2e8\ud558\ub2e4")),(0,a.yg)("h3",{id:"\uc2a4\ub808\ub4dc\uc758-\ub2e8\uc810"},"\uc2a4\ub808\ub4dc\uc758 \ub2e8\uc810"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ud504\ub85c\uc138\uc2a4 \ubc16\uc5d0\uc11c \uc2a4\ub808\ub4dc \uac01\uac01\uc744 \uc81c\uc5b4\ud560 \uc218 \uc5c6\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\uc5ec\ub7ec \uac1c\uc758 \uc2a4\ub808\ub4dc\ub97c \uc774\uc6a9\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc8fc\uc758 \uae4a\uac8c \uc124\uacc4 \ud574\uc57c \ud55c\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\ubbf8\ubb18\ud55c \uc2dc\uac04\ucc28\ub098 \uc798\ubabb\ub41c \ubcc0\uc218\ub97c \uacf5\uc720\ud568\uc73c\ub85c\uc368 \uc624\ub958\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\ud504\ub85c\uadf8\ub7a8\uc758 \ub514\ubc84\uae45\uc774 \uc5b4\ub835\ub2e4. \ub2e8\uc77c \ud504\ub85c\uc138\uc11c \uc2dc\uc2a4\ud15c\uc5d0\uc11c\ub294 \ud6a8\uacfc\ub97c \uae30\ub300\ud558\uae30 \uc5b4\ub835\ub2e4.")),(0,a.yg)("h2",{id:"\ud504\ub85c\uc138\uc2a4\uc640-\uc2a4\ub808\ub4dc\uc758-\ucc28\uc774\uc810"},"\ud504\ub85c\uc138\uc2a4\uc640 \uc2a4\ub808\ub4dc\uc758 \ucc28\uc774\uc810"),(0,a.yg)("h3",{id:"\uba54\ubaa8\ub9ac-\uc0ac\uc6a9\uc5d0-\ub300\ud55c-\ucc28\uc774"},"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\uc5d0 \ub300\ud55c \ucc28\uc774"),(0,a.yg)("p",null,"\ud504\ub85c\uc138\uc2a4\ub294 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc790\uc2e0\ub9cc\uc758 \uace0\uc720 \uba54\ubaa8\ub9ac\ub97c \ud560\ub2f9 \ubc1b\uc544\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.yg)("p",null,"\uc2a4\ub808\ub4dc\ub294 \ud55c \ud504\ub85c\uc138\uc2a4 \ub0b4\uc758 \uc5ec\ub7ec \ud750\ub984\uc73c\ub85c\uc11c \ud504\ub85c\uc138\uc2a4 \ub0b4 \uc8fc\uc18c \uacf5\uac04\uc774\ub098 \uc790\uc6d0\uc744 \uacf5\uc720\ud574\uc11c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.yg)("p",null,"\uc774\ub7ec\ud55c \ud2b9\uc131\uc73c\ub85c \uc778\ud574 \ud504\ub85c\uc138\uc2a4 \uac04\uc758 \uc804\ud658\ubcf4\ub2e4\ub294 \uc2a4\ub808\ub4dc \uac04\uc758 \uc804\ud658 \uc18d\ub3c4\uac00 \ub354 \ube60\ub985\ub2c8\ub2e4."))}s.isMDXComponent=!0}}]);