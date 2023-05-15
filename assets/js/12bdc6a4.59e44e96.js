"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46379:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const s={title:"[Codewars #56] Remove First and Last Character (8kyu)",authors:["karais89"],tags:["codewars","kata"]},i=void 0,o={permalink:"/2019/01/26/codewars-Remove-First-and-Last-Character",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-26-codewars-Remove-First-and-Last-Character/index.md",source:"@site/blog/2019-01-26-codewars-Remove-First-and-Last-Character/index.md",title:"[Codewars #56] Remove First and Last Character (8kyu)",description:"Instructions",date:"2019-01-26T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 26\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:.605,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #56] Remove First and Last Character (8kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #53] List Filtering (7kyu)",permalink:"/2019/01/26/codewars-List-Filtering"},nextItem:{title:"[Codewars #51] Consecutive strings (6kyu)",permalink:"/2019/01/25/codewars-Consecutive-strings"}},c={authorsImageUrls:[void 0]},l=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"instructions"},"Instructions"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/csharp"},"\ub9c1\ud06c")),(0,n.kt)("p",null,"It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters."),(0,n.kt)("h2",{id:"my-solution"},"My Solution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\n        public class Kata\n        {\n            public static string Remove_char(string s)\n            {\n                // Your Code\n                return s.Substring(1, s.Length - 2);\n            }\n        }\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/ko-kr/dotnet/api/system.string.substring"},"c# Substring")," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74 \uc27d\uac8c \ud574\uacb0 \uac00\ub2a5")),(0,n.kt)("h2",{id:"best-practices"},"Best Practices"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\n        public class Kata\n        {\n            public static string Remove_char(string s)\n            {\n                return s.Substring(1,(s.Length - 2));\n            }\n        }\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub611\uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \ud574\uacb0")))}m.isMDXComponent=!0}}]);