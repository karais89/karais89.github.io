"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10263],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),g=a,f=s["".concat(c,".").concat(g)]||s[g]||m[g]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},45961:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={title:"3D \uadf8\ub798\ud53d\uc2a4\uc5d0\uc11c \uceec\ub9c1 \uc774\ub780?",authors:["karais89"],tags:["interview"]},o=void 0,l={permalink:"/2017/11/08/3d-Graphics-Culling",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2017-11-08-3d-Graphics-Culling/index.md",source:"@site/blog/2017-11-08-3d-Graphics-Culling/index.md",title:"3D \uadf8\ub798\ud53d\uc2a4\uc5d0\uc11c \uceec\ub9c1 \uc774\ub780?",description:"Culling(\uceec\ub9c1)\uc774\ub780?",date:"2017-11-08T00:00:00.000Z",formattedDate:"2017\ub144 11\uc6d4 8\uc77c",tags:[{label:"interview",permalink:"/tags/interview"}],readingTime:1.565,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"3D \uadf8\ub798\ud53d\uc2a4\uc5d0\uc11c \uceec\ub9c1 \uc774\ub780?",authors:["karais89"],tags:["interview"]},prevItem:{title:"[HackerRank #13] Implementation - Kangaroo",permalink:"/2017/11/09/HackerRank-Implementation-Kangaroo"},nextItem:{title:"[HackerRank #12] Implementation - Apple and Orange",permalink:"/2017/11/08/HackerRank-Implementation-Apple-and-Orange"}},c={authorsImageUrls:[void 0]},p=[{value:"Culling(\uceec\ub9c1)\uc774\ub780?",id:"culling\uceec\ub9c1\uc774\ub780",level:2},{value:"\uc720\ub2c8\ud2f0\uc758 \uc624\ud074\ub8e8\uc804 \uceec\ub9c1\uc774\ub780?",id:"\uc720\ub2c8\ud2f0\uc758-\uc624\ud074\ub8e8\uc804-\uceec\ub9c1\uc774\ub780",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"culling\uceec\ub9c1\uc774\ub780"},"Culling(\uceec\ub9c1)\uc774\ub780?"),(0,a.yg)("p",null,"\uce74\uba54\ub77c\uc5d0 \ubcf4\uc774\uc9c0 \uc54a\ub294 \ubd80\ubd84\uc744 \uc81c\uac70\ud558\ub294 \uc791\uc5c5\uc744 \ucd1d\uce6d\ud55c\ub2e4."),(0,a.yg)("h2",{id:"\uc720\ub2c8\ud2f0\uc758-\uc624\ud074\ub8e8\uc804-\uceec\ub9c1\uc774\ub780"},"\uc720\ub2c8\ud2f0\uc758 \uc624\ud074\ub8e8\uc804 \uceec\ub9c1\uc774\ub780?"),(0,a.yg)("p",null,"\uc624\ud074\ub8e8\uc804 \uceec\ub9c1\uc740 \ub2e4\ub978 \uc624\ube0c\uc81d\ud2b8\uc5d0 \uac00\ub824\uc838 \uce74\uba54\ub77c\uc5d0 \ube44\uce58\uc9c0 \uc54a\uac8c \ub418\uc5b4 \ubc84\ub9b0 \uc624\ube0c\uc81d\ud2b8\uc758 \ub80c\ub354\ub9c1\uc744 \ubb34\ud6a8\ud654\ud558\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4. 3D \ucef4\ud4e8\ud130 \uadf8\ub798\ud53d\uc758 \uc138\uacc4\uc5d0\uc11c\ub294 \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \uce74\uba54\ub77c\uc5d0\uc11c \uba3c \uc624\ube0c\uc81d\ud2b8\uc5d0\uc11c \uba3c\uc800 \uadf8\ub824\uc9c0\uba70, \ub354 \uac00\uae4c\uc774 \uc788\ub294 \uc624\ube0c\uc81d\ud2b8\uac00 \ucc28\ub840\ucc28\ub840 \ub36e\uc5b4\uc368\uc9c0\uac8c \ub429\ub2c8\ub2e4(\u201c\uc624\ubc84 \ub4dc\ub85c\uc6b0\u201d\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4). \uc624\ud074\ub8e8\uc804 \uceec\ub9c1\uc740 \uadf8\ub9cc\ud07c \ub2f9\uc5f0\ud55c \uae30\ub2a5\uc774 \uc544\ub2d9\ub2c8\ub2e4. \uc624\ud074\ub8e8\uc804 \uceec\ub9c1\uc740 \uc808\ub450\uccb4 \uceec\ub9c1(Frustum Culling)\uacfc\ub294 \ub2e4\ub985\ub2c8\ub2e4. \uc808\ub450\uccb4 \uceec\ub9c1\uc740 \uce74\uba54\ub77c\uc758 \ud45c\uc2dc \uc601\uc5ed\uc5d0\uc11c \ubc97\uc5b4\ub09c \uc624\ube0c\uc81d\ud2b8\uc758 \ub80c\ub354\ub9c1\uc744 \ube44\ud65c\uc131\ud654\ud558\ub294 \uac83\uc774\uace0, \uc624\ud074\ub8e8\uc804 \uceec\ub9c1\uacfc \uac19\uc774 \uc624\ubc84 \ub4dc\ub85c\uc6b0\uc5d0 \uc758\ud574 \uc548 \ubcf4\uc774\uac8c \ub418\ub294 \uc624\ube0c\uc81d\ud2b8 \ub80c\ub354\ub9c1\uc740 \ubb34\ud6a8\ud654\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub610\ud55c,\uc624\ud074\ub8e8\uc804 \uceec\ub9c1\uc744 \uc0ac\uc6a9\ud558\uba74\uc11c \ub3d9\uc2dc\uc5d0 \uc808\ub450\uccb4 \uceec\ub9c1\uc758 \ud61c\ud0dd\uc744 \ub204\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);