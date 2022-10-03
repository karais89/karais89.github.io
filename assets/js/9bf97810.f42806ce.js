"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[50189],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>k});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),k=a,f=s["".concat(u,".").concat(k)]||s[k]||m[k]||i;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},42843:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={title:"[HackerRank #8] Warmup - Mini-Max Sum",authors:["karais89"],tags:["hackerrank"]},o=void 0,l={permalink:"/2017/11/05/HackerRank-Warmup-Mini-Max-Sum",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2017-11-05-HackerRank-Warmup-Mini-Max-Sum/index.md",source:"@site/blog/2017-11-05-HackerRank-Warmup-Mini-Max-Sum/index.md",title:"[HackerRank #8] Warmup - Mini-Max Sum",description:"\ubb38\uc81c \uc694\uc57d",date:"2017-11-05T00:00:00.000Z",formattedDate:"2017\ub144 11\uc6d4 5\uc77c",tags:[{label:"hackerrank",permalink:"/tags/hackerrank"}],readingTime:1.15,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[HackerRank #8] Warmup - Mini-Max Sum",authors:["karais89"],tags:["hackerrank"]},prevItem:{title:"[HackerRank #9] Warmup - Birthday Cake Candles",permalink:"/2017/11/06/HackerRank-Warmup-Birthday-Cake-Candles"},nextItem:{title:"[HackerRank #7] Warmup - Staircase",permalink:"/2017/11/04/HackerRank-Warmup-Staircase"}},u={authorsImageUrls:[void 0]},c=[{value:"\ubb38\uc81c \uc694\uc57d",id:"\ubb38\uc81c-\uc694\uc57d",level:2},{value:"\ub0b4 \uc18c\uc2a4",id:"\ub0b4-\uc18c\uc2a4",level:2},{value:"\ub290\ub080\uc810",id:"\ub290\ub080\uc810",level:2}],p={toc:c};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ubb38\uc81c-\uc694\uc57d"},"\ubb38\uc81c \uc694\uc57d"),(0,a.kt)("p",null,"5\uac1c\uc758 \uc815\uc218\uac00 \uc8fc\uc5b4\uc9c0\uace0 \uadf8 \uc911\uc5d0 4\uac1c\ub97c \uc120\ud0dd\ud560\ub54c \ub098\uc62c \uc218 \uc788\ub294 \ucd5c\uc18c\uac12\uacfc \ucd5c\ub300\uac12\uc744 \uad6c\ud574\ub77c."),(0,a.kt)("p",null,"Sample Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1 2 3 4 5\n")),(0,a.kt)("p",null,"Sample Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"10 14\n")),(0,a.kt)("h2",{id:"\ub0b4-\uc18c\uc2a4"},"\ub0b4 \uc18c\uc2a4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.IO;\nusing System.Linq;\nclass Solution {\n\n    static void Main(String[] args) {\n        string[] arr_temp = Console.ReadLine().Split(' ');\n        int[] arr = Array.ConvertAll(arr_temp,Int32.Parse);\n        \n        int min = arr[0];\n        int max = arr[0];\n        long sum = 0;\n        for (int i = 0; i < arr.Length; i++)\n        {\n            if (min > arr[i])\n            {\n                min = arr[i];\n            }\n            \n            if (max < arr[i])\n            {\n                max = arr[i];\n            }\n            \n            sum += arr[i];\n        }\n        \n        Console.Write(\"{0} {1}\", sum-max, sum-min);\n    }\n}\n")),(0,a.kt)("h2",{id:"\ub290\ub080\uc810"},"\ub290\ub080\uc810"),(0,a.kt)("p",null,"\ubb38\uc81c \uc790\uccb4\ub294 5\uac1c \uc911\uc5d0 4\uac1c\ub97c \uc120\ud0dd\ud574\uc11c \ub098\uc62c \uc218 \uc788\ub294 \ucd5c\uc18c\uac12\uacfc \ucd5c\ub300\uac12\uc744 \uad6c\ud558\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc \uc774\uac78 \ub2e4\ub978\uc2dd\uc73c\ub85c \uc0dd\uac01\ud558\uba74 5\uac1c \uc911\uc5d0 \uac00\uc7a5 \ud070 \uc218\ub97c \uc120\ud0dd\ud574\uc11c \ube80 \uac12\uc774 \ucd5c\uc18c\uac12 5\uac1c \uc911\uc5d0 \uac00\uc7a5 \uc791\uc740 \uac12\uc744 \uad6c\ud574\uc11c \ube80 \uac12\uc774 \ucd5c\ub300\uac12\uc774\ub2e4."))}m.isMDXComponent=!0}}]);