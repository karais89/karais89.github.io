"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),k=a,f=p["".concat(s,".").concat(k)]||p[k]||m[k]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},12646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"[HackerRank #1] Warmup - Solve Me First",authors:["karais89"],tags:["hackerrank"]},o=void 0,l={permalink:"/2017/10/29/HackerRank-Warmup-Solve-Me-First",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2017-10-29-HackerRank-Warmup-Solve-Me-First/index.md",source:"@site/blog/2017-10-29-HackerRank-Warmup-Solve-Me-First/index.md",title:"[HackerRank #1] Warmup - Solve Me First",description:"\ubb38\uc81c \uc694\uc57d",date:"2017-10-29T00:00:00.000Z",formattedDate:"2017\ub144 10\uc6d4 29\uc77c",tags:[{label:"hackerrank",permalink:"/tags/hackerrank"}],readingTime:.675,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[HackerRank #1] Warmup - Solve Me First",authors:["karais89"],tags:["hackerrank"]},prevItem:{title:"[HackerRank #2] Warmup - Simple Array Sum",permalink:"/2017/10/30/HackerRank-Warmup-Simple-Array-Sum"},nextItem:{title:"[\ub9ac\ubdf0] IT \uc804\ubb38\uac00\ub85c \uc0ac\ub294 \ubc95",permalink:"/2017/10/13/How-to-live-as-an-IT-professional"}},s={authorsImageUrls:[void 0]},c=[{value:"\ubb38\uc81c \uc694\uc57d",id:"\ubb38\uc81c-\uc694\uc57d",level:2},{value:"\ub0b4 \uc18c\uc2a4",id:"\ub0b4-\uc18c\uc2a4",level:2},{value:"\ub290\ub080\uc810",id:"\ub290\ub080\uc810",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ubb38\uc81c-\uc694\uc57d"},"\ubb38\uc81c \uc694\uc57d"),(0,a.kt)("p",null,"stdin\uc73c\ub85c \uc77d\uc740 \ub450 \uc815\uc218\uc758 \ud569\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\ub97c \ub9cc\ub4e4\uc5b4\ub77c."),(0,a.kt)("h2",{id:"\ub0b4-\uc18c\uc2a4"},"\ub0b4 \uc18c\uc2a4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.IO;\nclass Solution {\n    static int solveMeFirst(int a, int b) { \n      // Hint: Type return a+b; below  \n      return a + b;\n    }\n    static void Main(String[] args) {\n        int val1 = Convert.ToInt32(Console.ReadLine());\n        int val2 = Convert.ToInt32(Console.ReadLine());\n        int sum = solveMeFirst(val1,val2);\n        Console.WriteLine(sum);\n    }\n}      \n")),(0,a.kt)("h2",{id:"\ub290\ub080\uc810"},"\ub290\ub080\uc810"),(0,a.kt)("p",null,"\uc6cc\ubc0d\uc5c5 \ub2e8\uacc4\ub77c \uc8fc\uc11d\uc5d0 \uc774\ubbf8 \ub2f5\uc774 \ub098\uc640 \uc788\ub2e4."),(0,a.kt)("p",null,"\uc775\uc219\ud55c C#\uc73c\ub85c \uc791\uc131\ud588\ub2e4."),(0,a.kt)("p",null,"\ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\uac00 \uc791\uc131\ub418\uc5b4 \ud14c\uc2a4\ud2b8 \ud1b5\uacfc \ud6c4 \ub2f5\uc744 \uc81c\ucd9c\ud558\uba74 \ub41c\ub2e4."))}m.isMDXComponent=!0}}]);