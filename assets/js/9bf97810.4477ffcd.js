"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2731],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>g});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),y=a,g=m["".concat(u,".").concat(y)]||m[y]||s[y]||i;return n?t.createElement(g,o(o({ref:r},p),{},{components:n})):t.createElement(g,o({ref:r},p))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},14588:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(58168),a=(n(96540),n(15680));const i={title:"[HackerRank #8] Warmup - Mini-Max Sum",authors:["karais89"],tags:["hackerrank"]},o=void 0,l={permalink:"/2017/11/05/HackerRank-Warmup-Mini-Max-Sum",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2017-11-05-HackerRank-Warmup-Mini-Max-Sum/index.md",source:"@site/blog/2017-11-05-HackerRank-Warmup-Mini-Max-Sum/index.md",title:"[HackerRank #8] Warmup - Mini-Max Sum",description:"\ubb38\uc81c \uc694\uc57d",date:"2017-11-05T00:00:00.000Z",formattedDate:"2017\ub144 11\uc6d4 5\uc77c",tags:[{label:"hackerrank",permalink:"/tags/hackerrank"}],readingTime:1.15,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[HackerRank #8] Warmup - Mini-Max Sum",authors:["karais89"],tags:["hackerrank"]},prevItem:{title:"[HackerRank #9] Warmup - Birthday Cake Candles",permalink:"/2017/11/06/HackerRank-Warmup-Birthday-Cake-Candles"},nextItem:{title:"[HackerRank #7] Warmup - Staircase",permalink:"/2017/11/04/HackerRank-Warmup-Staircase"}},u={authorsImageUrls:[void 0]},c=[{value:"\ubb38\uc81c \uc694\uc57d",id:"\ubb38\uc81c-\uc694\uc57d",level:2},{value:"\ub0b4 \uc18c\uc2a4",id:"\ub0b4-\uc18c\uc2a4",level:2},{value:"\ub290\ub080\uc810",id:"\ub290\ub080\uc810",level:2}],p={toc:c},m="wrapper";function s(e){let{components:r,...n}=e;return(0,a.yg)(m,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\ubb38\uc81c-\uc694\uc57d"},"\ubb38\uc81c \uc694\uc57d"),(0,a.yg)("p",null,"5\uac1c\uc758 \uc815\uc218\uac00 \uc8fc\uc5b4\uc9c0\uace0 \uadf8 \uc911\uc5d0 4\uac1c\ub97c \uc120\ud0dd\ud560\ub54c \ub098\uc62c \uc218 \uc788\ub294 \ucd5c\uc18c\uac12\uacfc \ucd5c\ub300\uac12\uc744 \uad6c\ud574\ub77c."),(0,a.yg)("p",null,"Sample Input"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"1 2 3 4 5\n")),(0,a.yg)("p",null,"Sample Output"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"10 14\n")),(0,a.yg)("h2",{id:"\ub0b4-\uc18c\uc2a4"},"\ub0b4 \uc18c\uc2a4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.IO;\nusing System.Linq;\nclass Solution {\n\n    static void Main(String[] args) {\n        string[] arr_temp = Console.ReadLine().Split(' ');\n        int[] arr = Array.ConvertAll(arr_temp,Int32.Parse);\n        \n        int min = arr[0];\n        int max = arr[0];\n        long sum = 0;\n        for (int i = 0; i < arr.Length; i++)\n        {\n            if (min > arr[i])\n            {\n                min = arr[i];\n            }\n            \n            if (max < arr[i])\n            {\n                max = arr[i];\n            }\n            \n            sum += arr[i];\n        }\n        \n        Console.Write(\"{0} {1}\", sum-max, sum-min);\n    }\n}\n")),(0,a.yg)("h2",{id:"\ub290\ub080\uc810"},"\ub290\ub080\uc810"),(0,a.yg)("p",null,"\ubb38\uc81c \uc790\uccb4\ub294 5\uac1c \uc911\uc5d0 4\uac1c\ub97c \uc120\ud0dd\ud574\uc11c \ub098\uc62c \uc218 \uc788\ub294 \ucd5c\uc18c\uac12\uacfc \ucd5c\ub300\uac12\uc744 \uad6c\ud558\ub294 \uac83\uc774\ub2e4."),(0,a.yg)("p",null,"\ud558\uc9c0\ub9cc \uc774\uac78 \ub2e4\ub978\uc2dd\uc73c\ub85c \uc0dd\uac01\ud558\uba74 5\uac1c \uc911\uc5d0 \uac00\uc7a5 \ud070 \uc218\ub97c \uc120\ud0dd\ud574\uc11c \ube80 \uac12\uc774 \ucd5c\uc18c\uac12 5\uac1c \uc911\uc5d0 \uac00\uc7a5 \uc791\uc740 \uac12\uc744 \uad6c\ud574\uc11c \ube80 \uac12\uc774 \ucd5c\ub300\uac12\uc774\ub2e4."))}s.isMDXComponent=!0}}]);