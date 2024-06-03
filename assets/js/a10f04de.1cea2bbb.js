"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4222],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,y=p["".concat(s,".").concat(g)]||p[g]||m[g]||i;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},45075:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const i={title:"[Codewars #65] Return Negative (8kyu)",authors:["karais89"],tags:["codewars","kata"]},l=void 0,o={permalink:"/2019/02/09/codewars-Return-Negative",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-02-09-codewars-Return-Negative/index.md",source:"@site/blog/2019-02-09-codewars-Return-Negative/index.md",title:"[Codewars #65] Return Negative (8kyu)",description:"Instructions",date:"2019-02-09T00:00:00.000Z",formattedDate:"2019\ub144 2\uc6d4 9\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.415,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #65] Return Negative (8kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"Extend the Unity3d Editor",permalink:"/2019/03/17/Extend-the-Unity3d-Editor"},nextItem:{title:"[Codewars #63] Find the smallest integer in the array (8kyu)",permalink:"/2019/01/31/codewars-Find the smallest-integer-in-the-array"}},s={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"instructions"},"Instructions"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.codewars.com/kata/55685cd7ad70877c23000102/train/csharp"},"\ub9c1\ud06c")),(0,a.yg)("p",null,"In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?"),(0,a.yg)("p",null,"Example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Kata.MakeNegative(1); // return -1\nKata.MakeNegative(-5); // return -5\nKata.MakeNegative(0); // return 0\n")),(0,a.yg)("p",null,"Notes:"),(0,a.yg)("p",null,"The number can be negative already, in which case no change is required.\nZero (0) is not checked for any specific sign. Negative zeros make no mathematical sense."),(0,a.yg)("h2",{id:"my-solution"},"My Solution"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\npublic static class Kata\n{\n  public static int MakeNegative(int number)\n  {\n    return number > 0 ? -number : number;\n  }\n}\n\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uc624\ub79c\ub9cc\uc5d0 \ucf54\ub4dc\uc6cc \ubb38\uc81c\ub97c \ub2e4\uc2dc \ud480\uc5c8\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\ub09c\uc774\ub3c4 \uc790\uccb4\ub294 \ub9d0\ub3c4 \uc548\ub418\uac8c \uc26c\uc6b4 \ubb38\uc81c\uc774\uace0, \ub2e4\uc591\ud55c \ubc29\ubc95\uc73c\ub85c \ud480 \uc218 \uc788\uc744 \uac83\uc774\ub77c\uace0 \uae30\ub300\ub97c \ud558\uace0 \ub9cc\ub4e0 \ubb38\uc81c\uc778\ub4ef \ud558\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\uc77c\ub2e8 \ub09c \ub0b4\uac00 \uc0dd\uac01\ud558\ub294 \uc815\uc11d\uc801\uc778 \ubc29\ubc95\uc73c\ub85c \ubb38\uc81c\ub97c \ud480\uaca0\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\uc774\uc815\ub3c4 \ubb38\uc81c\uc758 \uacbd\uc6b0 ",(0,a.yg)("a",{parentName:"li",href:"https://ko.wikipedia.org/wiki/%3F:"},"\uc0bc\ud56d \uc5f0\uc0b0\uc790"),"\ub97c \uc0ac\uc6a9\ud558\ub294\uac8c \uae54\ub054\ud560 \uac83 \uac19\ub2e4.")),(0,a.yg)("h2",{id:"best-practices"},"Best Practices"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\npublic static class Kata\n{\n  public static int MakeNegative(int number)\n  {\n    return -Math.Abs(number);\n  }\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ubb38\uc81c \uc790\uccb4\uac00 \ubb34\uc870\uac74 \ub9c8\uc774\ub108\uc2a4(-)\ub97c \ubd99\uc774\ub294 \ubb38\uc81c\ub77c, \uc774\uac8c \ub354 \uc9c1\uad00\uc801\uc778 \ud574\uacb0 \ubc29\ubc95\uc778 \uac83 \uac19\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\ub0b4\uac00 \ud47c \ubc29\uc2dd\uc740 2\ubc88\uc9f8\ub85c \ud45c\ub97c \ub9ce\uc774 \ubc1b\uc558\ub2e4.")))}m.isMDXComponent=!0}}]);