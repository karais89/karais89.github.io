"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,y=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"[Codewars #63] Find the smallest integer in the array (8kyu)",authors:["karais89"],tags:["codewars","kata"]},l=void 0,s={permalink:"/2019/01/31/codewars-Find the smallest-integer-in-the-array",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-31-codewars-Find the smallest-integer-in-the-array/index.md",source:"@site/blog/2019-01-31-codewars-Find the smallest-integer-in-the-array/index.md",title:"[Codewars #63] Find the smallest integer in the array (8kyu)",description:"Instructions",date:"2019-01-31T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 31\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:.995,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #63] Find the smallest integer in the array (8kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #65] Return Negative (8kyu)",permalink:"/2019/02/09/codewars-Return-Negative"},nextItem:{title:"[Codewars #64] Growth of a Population (7kyu)",permalink:"/2019/01/31/codewars-Growth-of-a-Population"}},o={authorsImageUrls:[void 0]},u=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices 1",id:"best-practices-1",level:2},{value:"Best Practices 2",id:"best-practices-2",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/csharp"},"\ub9c1\ud06c")),(0,a.kt)("p",null,"Given an array of integers your solution should find the smallest integer."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Given ","[34, 15, 88, 2]"," your solution will return 2"),(0,a.kt)("li",{parentName:"ul"},"Given ","[34, -345, -1, 100]"," your solution will return -345")),(0,a.kt)("p",null,"You can assume, for the purpose of this kata, that the supplied array will not be empty."),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Kata\n{\n    public static int FindSmallestInt(int[] args)\n    {\n      int min = int.MaxValue;\n      for (int i = 0; i < args.Length; i++)\n      {\n        if (min > args[i])\n        {\n          min = args[i];\n        }\n      }\n      return min;\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac00\uc7a5 \uc791\uc740 \uac12\uc744 \uad6c\ud558\ub294 \uac04\ub2e8\ud55c \ubb38\uc81c\ub2e4.")),(0,a.kt)("h2",{id:"best-practices-1"},"Best Practices 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Linq;\n\npublic class Kata\n{\n    public static int FindSmallestInt(int[] args)\n    {\n      return args.Min();\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linq\uc758 Min \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9")),(0,a.kt)("h2",{id:"best-practices-2"},"Best Practices 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Linq;\n\npublic class Kata\n{\n    public static int FindSmallestInt(int[] args) => args.Min();\n\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc704\uc640 \ub611\uac19\uc740 \ubc29\uc2dd\uc778\ub370 C# \uc5d0\uc11c \uc0c8\ub85c \ucd94\uac00\ub41c \uae30\ub2a5\uc73c\ub85c \ub354 \uc9e7\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.")))}p.isMDXComponent=!0}}]);