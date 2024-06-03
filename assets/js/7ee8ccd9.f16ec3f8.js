"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73523],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=u(a),c=r,m=g["".concat(o,".").concat(c)]||g[c]||y[c]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[g]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88812:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));const l={title:"FastAPI \uc785\ubb38 3 - \ud29c\ud1a0\ub9ac\uc5bc - \ub3c4\uc785",authors:["karais89"],tags:["python","fastapi"]},i=void 0,p={permalink:"/2021/06/21/FastAPI-Getting-Started-3",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2021-06-21-FastAPI-Getting-Started-3/index.md",source:"@site/blog/2021-06-21-FastAPI-Getting-Started-3/index.md",title:"FastAPI \uc785\ubb38 3 - \ud29c\ud1a0\ub9ac\uc5bc - \ub3c4\uc785",description:"\ud658\uacbd",date:"2021-06-21T00:00:00.000Z",formattedDate:"2021\ub144 6\uc6d4 21\uc77c",tags:[{label:"python",permalink:"/tags/python"},{label:"fastapi",permalink:"/tags/fastapi"}],readingTime:4.235,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"FastAPI \uc785\ubb38 3 - \ud29c\ud1a0\ub9ac\uc5bc - \ub3c4\uc785",authors:["karais89"],tags:["python","fastapi"]},prevItem:{title:"\ucf54\ub529\uc6a9 \uace0\uc815\ud3ed \ud3f0\ud2b8 Cascadia Code \uc0ac\uc6a9\uae30",permalink:"/2022/03/16/jekyll-font"},nextItem:{title:"FastAPI \uc785\ubb38 2 - \uc5f0\uc2b5 \uc608\uc81c",permalink:"/2021/06/20/FastAPI-Getting-Started-2"}},o={authorsImageUrls:[void 0]},u=[{value:"\ud658\uacbd",id:"\ud658\uacbd",level:2},{value:"\ud3ec\uc2a4\ud305 \ubaa9\uc801",id:"\ud3ec\uc2a4\ud305-\ubaa9\uc801",level:2},{value:"0. \ucf54\ub4dc \uc2e4\ud589",id:"0-\ucf54\ub4dc-\uc2e4\ud589",level:2},{value:"1. FastAPI \uc124\uce58",id:"1-fastapi-\uc124\uce58",level:2},{value:"2. \uace0\uae09 \uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc",id:"2-\uace0\uae09-\uc0ac\uc6a9\uc790-\uac00\uc774\ub4dc",level:2},{value:"3. \uacb0\ub860",id:"3-\uacb0\ub860",level:2}],s={toc:u},g="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\ud658\uacbd"},"\ud658\uacbd"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Windows 10"),(0,r.yg)("li",{parentName:"ul"},"Pycharm 2021.1.2"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/karais89/home-fast-api"},"Github"))),(0,r.yg)("h2",{id:"\ud3ec\uc2a4\ud305-\ubaa9\uc801"},"\ud3ec\uc2a4\ud305 \ubaa9\uc801"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"FastAPI\uc758 \uc0ac\uc6a9 \ubc29\ubc95\uc5d0 \ub300\ud574 \ud559\uc2b5 \uc6a9\ub3c4."),(0,r.yg)("li",{parentName:"ul"},"\ub2e4\ub4ec\uc5b4\uc9c4 \ud3ec\uc2a4\ud305\ub9cc \uc791\uc131\ud558\ub824\uace0 \ud558\ub2c8 \uae00 \uc790\uccb4\ub97c \uc791\uc131\ud558\uc9c0 \uc54a\uac8c \ub418\ubc84\ub9ac\ub294 \uac83 \uac19\uc544, \uc6b0\uc120 \ud3ec\uc2a4\ud305\uc744 \ud558\uace0 \uc218\uc815 \ubc0f \uacc4\uc18d\ud574\uc11c \uc791\uc131\ud558\ub294 \ud615\ud0dc\ub85c \ubcc0\uacbd. \uc2e4\uc81c \uae00\uc740 \uc601\uc591\uac00\uac00 \uc5c6\uc744 \uac00\ub2a5\uc131\uc774 \ud07d\ub2c8\ub2e4."),(0,r.yg)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc73c\ub85c FastAPI \ubb38\uc11c \uc790\uccb4\ub97c \ubc88\uc5ed \ud558\ub294 \ud615\ud0dc\ub97c \ucde8\ud560 \uc608\uc815\uc774\uace0, \uad6c\uae00 \ubc88\uc5ed\uc744 \ubc14\ud0d5\uc73c\ub85c \uc9c4\ud589\ud560 \uc608\uc815\uc774\ub77c \uc601\uc5b4\uc5d0 \uc775\uc219\ud55c \ubd84\ub4e4\uc740 \uc6d0\ubb38\uc744 \ubcf4\ub294\uac8c \ub354 \uc88b\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4.")),(0,r.yg)("h2",{id:"0-\ucf54\ub4dc-\uc2e4\ud589"},"0. \ucf54\ub4dc \uc2e4\ud589"),(0,r.yg)("p",null,"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc740 \ub300\ubd80\ubd84\uc758 \uae30\ub2a5\uc73c\ub85c FastAPI\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.yg)("p",null,"\uac01 \uc139\uc158\uc740 \uc810\uc9c4\uc801\uc73c\ub85c \uc774\uc804 \uc139\uc158\uc744 \uae30\ubc18\uc73c\ub85c \uc791\uc131\ub418\uc9c0\ub9cc \uac1c\ubcc4 \uc8fc\uc81c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c \ud2b9\uc815 API \uc694\uad6c \uc0ac\ud56d\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574 \ud2b9\uc815 \uc8fc\uc81c\ub85c \uc9c1\uc811 \uc774\ub3d9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.yg)("p",null,"\ub610\ud55c \ud5a5\ud6c4 \ucc38\uc870\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc81c\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.yg)("p",null,"\ub530\ub77c\uc11c \ub3cc\uc544\uc640\uc11c \ud544\uc694\ud55c \uac83\uc744 \uc815\ud655\ud788 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.yg)("p",null,"\ubaa8\ub4e0 \ucf54\ub4dc \ube14\ub85d\uc740 \uc9c1\uc811 \ubcf5\uc0ac\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4 (\uc2e4\uc81c\ub85c \ud14c\uc2a4\ud2b8 \ub41c Python \ud30c\uc77c \uc784)."),(0,r.yg)("p",null,"\uc608\uc81c\ub97c \uc2e4\ud589\ud558\ub824\uba74 \ucf54\ub4dc\ub97c ",(0,r.yg)("a",{parentName:"p",href:"http://main.py/"},"main.py")," \ud30c\uc77c\uc5d0 \ubcf5\uc0ac\ud558\uace0 \ub2e4\uc74c\uc744 \uc0ac\uc6a9\ud558\uc5ec ",(0,r.yg)("inlineCode",{parentName:"p"},"uvicorn"),"\uc744 \uc2dc\uc791\ud558\uc2ed\uc2dc\uc624."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"uvicorn main:app --reload\n")),(0,r.yg)("p",null,"\ucf54\ub4dc\ub97c \uc791\uc131\ud558\uac70\ub098 \ubcf5\uc0ac\ud558\uace0 \ud3b8\uc9d1\ud558\uace0 \ub85c\uceec\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.yg)("p",null,"\ud3b8\uc9d1\uae30\uc5d0\uc11c \uc774\ub97c \uc0ac\uc6a9\ud558\uba74 FastAPI\uc758 \uc774\uc810, \uc791\uc131\ud574\uc57c\ud558\ub294 \ucf54\ub4dc\uc758 \uc591, \ubaa8\ub4e0 \uc720\ud615 \uac80\uc0ac, \uc790\ub3d9 \uc644\uc131 \ub4f1\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.yg)("h2",{id:"1-fastapi-\uc124\uce58"},"1. FastAPI \uc124\uce58"),(0,r.yg)("p",null,"\uccab \ubc88\uc9f8 \ub2e8\uacc4\ub294 FastAPI\ub97c \uc124\uce58\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.yg)("p",null,"\uc790\uc2b5\uc11c\uc758 \uacbd\uc6b0 \ubaa8\ub4e0 \uc120\ud0dd\uc801 \uc885\uc18d\uc131 \ubc0f \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip install fastapi[all]\n")),(0,r.yg)("p",null,"... \uc5ec\uae30\uc5d0\ub294 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \uc11c\ubc84\ub85c \uc0ac\uc6a9\ud560 \uc218\uc788\ub294 ",(0,r.yg)("inlineCode",{parentName:"p"},"uvicorn"),"\ub3c4 \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\ucc38\uace0")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\ubd80\ubd84\uc801\uc73c\ub85c \uc124\uce58\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ud504\ub85c\ub355\uc158\uc5d0 \ubc30\ud3ec\ud558\ub824\ub294 \uacbd\uc6b0 \ub2e4\uc74c \uc791\uc5c5\uc744 \uc218\ud589 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip install fastapi\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\ub610\ud55c \uc11c\ubc84\ub85c \uc791\ub3d9\ud558\ub3c4\ub85d ",(0,r.yg)("inlineCode",{parentName:"li"},"uvicorn"),"\uc744 \uc124\uce58\ud558\uc2ed\uc2dc\uc624.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip install uvicorn[standard]\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\uc0ac\uc6a9\ud558\ub824\ub294 \uac01 \uc120\ud0dd\uc801 \uc885\uc18d\uc131\uc5d0 \ub300\ud574 \ub3d9\uc77c\ud569\ub2c8\ub2e4.")),(0,r.yg)("h2",{id:"2-\uace0\uae09-\uc0ac\uc6a9\uc790-\uac00\uc774\ub4dc"},"2. \uace0\uae09 \uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc"),(0,r.yg)("p",null,"\uc774 ",(0,r.yg)("strong",{parentName:"p"},"\ud29c\ud1a0\ub9ac\uc5bc-\uc0ac\uc6a9\uc790 \uc548\ub0b4\uc11c")," \uc774\ud6c4\uc5d0 \uc77d\uc744 \uc218 \uc788\ub294 ",(0,r.yg)("strong",{parentName:"p"},"\uace0\uae09 \uc0ac\uc6a9\uc790 \uc548\ub0b4\uc11c"),"\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\uace0\uae09 \uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc"),"\ub294 \uc774\ub97c \uae30\ubc18\uc73c\ub85c \ub3d9\uc77c\ud55c \uac1c\ub150\uc744 \uc0ac\uc6a9\ud558\uba70 \uba87 \uac00\uc9c0 \ucd94\uac00 \uae30\ub2a5\uc744 \uc54c\ub824\uc90d\ub2c8\ub2e4."),(0,r.yg)("p",null,"\uadf8\ub7ec\ub098 \uba3c\uc800 ",(0,r.yg)("strong",{parentName:"p"},"\ud29c\ud1a0\ub9ac\uc5bc-\uc0ac\uc6a9\uc790 \uc548\ub0b4\uc11c"),"(\uc9c0\uae08 \uc77d\uace0\uc788\ub294 \ub0b4\uc6a9)\ub97c \uc77d\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\ud29c\ud1a0\ub9ac\uc5bc-\uc0ac\uc6a9\uc790 \uc548\ub0b4\uc11c")," \ub9cc\uc73c\ub85c \uc644\uc804\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ucd95 \ud55c \ub2e4\uc74c,",(0,r.yg)("strong",{parentName:"p"},"\uace0\uae09 \uc0ac\uc6a9\uc790 \uc548\ub0b4\uc11c")," \uc758 \uba87 \uac00\uc9c0 \ucd94\uac00 \uc544\uc774\ub514\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud544\uc694\uc5d0 \ub530\ub77c \ub2e4\uc591\ud55c \ubc29\uc2dd\uc73c\ub85c \ud655\uc7a5 \ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.yg)("h2",{id:"3-\uacb0\ub860"},"3. \uacb0\ub860"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\uc2dc\uc791\uc740 FastAPI\uc5d0\uc11c \uc81c\uacf5 \ud574\uc8fc\ub294 \ud29c\ud1a0\ub9ac\uc5bc \uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc\ub97c \ubcf4\uace0 \uad6c\ud604")))}y.isMDXComponent=!0}}]);