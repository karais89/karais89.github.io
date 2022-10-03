"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1640],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>f});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),s=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u=function(n){var e=s(n.components);return a.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),m=s(t),f=r,k=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return t?a.createElement(k,l(l({ref:e},u),{},{components:t})):a.createElement(k,l({ref:e},u))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o.mdxType="string"==typeof n?n:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83014:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"[HackerRank #5] Warmup - Diagonal Difference",authors:["karais89"],tags:["hackerrank"]},l=void 0,o={permalink:"/2017/11/02/HackerRank-Warmup-Diagonal-Difference",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2017-11-02-HackerRank-Warmup-Diagonal-Difference/index.md",source:"@site/blog/2017-11-02-HackerRank-Warmup-Diagonal-Difference/index.md",title:"[HackerRank #5] Warmup - Diagonal Difference",description:"\ubb38\uc81c \uc694\uc57d",date:"2017-11-02T00:00:00.000Z",formattedDate:"2017\ub144 11\uc6d4 2\uc77c",tags:[{label:"hackerrank",permalink:"/tags/hackerrank"}],readingTime:2.62,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[HackerRank #5] Warmup - Diagonal Difference",authors:["karais89"],tags:["hackerrank"]},prevItem:{title:"[HackerRank #6] Warmup - Plus Minus",permalink:"/2017/11/03/HackerRank-Warmup-Plus-Minus"},nextItem:{title:"[\ub9ac\ubdf0] \uc18c\ud504\ud2b8 \uc2a4\ud0ac",permalink:"/2017/11/02/Soft-Skills"}},c={authorsImageUrls:[void 0]},s=[{value:"\ubb38\uc81c \uc694\uc57d",id:"\ubb38\uc81c-\uc694\uc57d",level:2},{value:"\ub0b4 \uc18c\uc2a4",id:"\ub0b4-\uc18c\uc2a4",level:2},{value:"vatsalchanana\uc758 \ub2f5\uc548",id:"vatsalchanana\uc758-\ub2f5\uc548",level:2},{value:"\ub290\ub080\uc810",id:"\ub290\ub080\uc810",level:2}],u={toc:s};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\ubb38\uc81c-\uc694\uc57d"},"\ubb38\uc81c \uc694\uc57d"),(0,r.kt)("p",null,"\uccab\ubc88\uc9f8 input\uc740 N x N \ubc30\uc5f4\uc744 \ub9cc\ub4e4\uc5b4 \uc904\ub54c \ud544\uc694\ud55c N\uc758 \uac1c\uc218"),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 \ub098\uba38\uc9c0 input\uc740 \uadf8 \ubc30\uc5f4\uc758 \uac01\uac01\uc758 \uc778\uc218\uc758 \uac12."),(0,r.kt)("p",null,"\ubc30\uc5f4\uc758 \uccab\ubc88\uc9f8 \ub300\uac01\uc120\uc758 \ud569(\uc67c\ucabd \uc0c1\ub2e8\uc5d0\uc11c \uc2dc\uc791\ud574\uc11c \uc624\ub978\ucabd \ud558\ub2e8\uc73c\ub85c \ub05d\ub098\ub294)\uacfc \ub450\ubc88\uc9f8 \ub300\uac01\uc120(\uc624\ub978\ucabd \uc0c1\ub2e8\uc5d0\uc11c \uc2dc\uc791\ud574\uc11c \uc67c\ucabd \ud558\ub2e8\uc73c\ub85c \ub05d\ub098\ub294)\uc758 \ucc28\ub97c \uc808\ub300\uac12\uc744 \uad6c\ud558\ub294 \ubb38\uc81c."),(0,r.kt)("p",null,"ex)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"3\n11 2 4\n4 5 6\n10 8 -12\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uccab\ubc88\uc9f8 \ub300\uac01\uc120\uc758 \ud569 : 11 + 5 - 12 = 4"),(0,r.kt)("li",{parentName:"ul"},"\ub450\ubc88\uc9f8 \ub300\uac01\uc120\uc758 \ud569 : 4 + 5 + 10 = 19"),(0,r.kt)("li",{parentName:"ul"},"\ub450 \ub300\uac01\uc120\uc758 \ucc28\uc774\uc758 \uc808\ub300\uac12 : |4 - 19| = 15")),(0,r.kt)("h2",{id:"\ub0b4-\uc18c\uc2a4"},"\ub0b4 \uc18c\uc2a4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.IO;\nusing System.Linq;\nclass Solution {\n\n    static void Main(String[] args) {\n        int n = Convert.ToInt32(Console.ReadLine());\n        int[][] a = new int[n][];\n        for(int a_i = 0; a_i < n; a_i++){\n           string[] a_temp = Console.ReadLine().Split(' ');\n           a[a_i] = Array.ConvertAll(a_temp,Int32.Parse);\n        }\n        \n        // primary diagonal (0,0), (1,1), (2,2)\n        int primarySum = 0;\n        for (int i = 0; i < n; i++)\n        {\n            for (int j = 0; j < n; j++)\n            {\n                if (i == j)\n                    primarySum += a[i][j];\n            }\n        }\n        \n        // secondary diagonal (2,0) (1,1) (0,2)\n        int secondarySum = 0;\n        for (int i = 0; i < n; i++)\n        {\n            for (int j = 0; j < n; j++)\n            {\n                if (i+j == n-1)\n                    secondarySum += a[i][j];\n            }\n        }\n        \n        int diff = primarySum - secondarySum;               \n        Console.Write(Math.Abs(diff));\n    }\n}\n")),(0,r.kt)("h2",{id:"vatsalchanana\uc758-\ub2f5\uc548"},"vatsalchanana\uc758 \ub2f5\uc548"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n\n    int arr[n][n];\n\n    long long int d1=0; //First Diagonal\n    long long int d2=0; //Second Diagonal\n\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            cin >> arr[i][j];\n            if (i == j) d1 += arr[i][j];\n            if (i == n - j - 1) d2 += arr[i][j];\n        }\n    }\n\n    cout << abs(d1 - d2) << endl; //Absolute difference of the sums across the diagonals\n    return 0;\n}\n")),(0,r.kt)("h2",{id:"\ub290\ub080\uc810"},"\ub290\ub080\uc810"),(0,r.kt)("p",null,"\ubc30\uc5f4\uc5d0\uc11c \uccab \ubc88\uc9f8 \ub300\uac01\uc120\uacfc \ub450\ubc88\uc9f8 \ub300\uac01\uc120\uc758 \uc778\ub371\uc2a4 \uac12\uc744 \uad6c\ud558\ub294 \ubc29\ubc95\uc744 \uc0dd\uac01\ud558\uba74 \ud480 \uc218 \uc788\ub294 \ubb38\uc81c."),(0,r.kt)("p",null,"\ub098\uc758 \uacbd\uc6b0\uc5d0\ub294 \uccab\ubc88\uc9f8 \ub300\uac01\uc120\uacfc \ub450\ubc88\uc9f8 \ub300\uac01\uc120\uc744 \uac01\uac01 for\ubb38\uc73c\ub85c \ub3cc\ub824\uc11c \ud478\ub294 \ubc29\uc2dd\uc744 \ud0dd\ud558\uc600\ub2e4."),(0,r.kt)("p",null,"vatsalchanana\uc758 \uacbd\uc6b0\ub294 for\ubb38 \ud558\ub098\uc5d0\uc11c \ub300\uac01\uc120\uc758 \ud569\uc744 \uad6c\ud574\ubc84\ub9ac\ub294 \ubc29\uc2dd\uc73c\ub85c \ubb38\uc81c\ub97c \ud574\uacb0 \ud558\uc600\ub2e4."))}p.isMDXComponent=!0}}]);