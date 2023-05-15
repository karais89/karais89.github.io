"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[50783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"[Codewars #48] Grasshopper - Summation (8kyu)",authors:["karais89"],tags:["codewars","kata"]},o=void 0,s={permalink:"/2019/01/24/codewars-Grasshopper-Summation",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-24-codewars-Grasshopper-Summation/index.md",source:"@site/blog/2019-01-24-codewars-Grasshopper-Summation/index.md",title:"[Codewars #48] Grasshopper - Summation (8kyu)",description:"Instructions",date:"2019-01-24T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 24\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.25,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #48] Grasshopper - Summation (8kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #47] Alphabet war - Wo lo loooooo priests join the war (5kyu)",permalink:"/2019/01/24/codewars-Alphabet-war-Wo-lo-loooooo-priests-join-the-war"},nextItem:{title:"[Codewars #50] Is this a triangle? (7kyu)",permalink:"/2019/01/24/codewars-Is-this-a-triangle"}},l={authorsImageUrls:[void 0]},u=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices 1",id:"best-practices-1",level:2},{value:"Best Practices 2",id:"best-practices-2",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/csharp"},"\ub9c1\ud06c")),(0,a.kt)("p",null,"Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"summation(2) -> 3\n1 + 2\n\nsummation(8) -> 36\n1 + 2 + 3 + 4 + 5 + 6 + 7 + 8\n")),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"}," using System;\n\npublic static class Kata\n{\n    public static int summation(int num)\n    {\n      //Code here\n      int sum = 0;\n      for (int i = 0; i <= num; i++)\n      {\n        sum += i;\n      }\n      return sum;\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac11\uc790\uae30 1\ubd80\ud130 n\uae4c\uc9c0 \ub354\ud558\ub294 \ubb38\uc81c\uac00 \ub098\uc640\uc11c.. \uc77c\ub2e8 \ud480\uc5b4\ubd24\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub807\uac8c \uac04\ub2e8\ud55c \ubb38\uc81c\ub3c4 \uc0dd\uac01\ud558\ub294 \ubc29\uc2dd\uc774 \uc5ec\ub7ec\uac1c \uad6c\ub098.")),(0,a.kt)("h2",{id:"best-practices-1"},"Best Practices 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\npublic static class Kata\n{\n    public static int summation(int num)\n    {\n      return num*(num+1)/2;\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub354\ud558\ub294 \ubc29\ubc95 \ud558\uba74 \ub531 \uc774\uac78 \uc0dd\uac01\ud560 \uc218\ub3c4 \uc788\uad6c\ub098."),(0,a.kt)("li",{parentName:"ul"},"\uac00\uc6b0\uc2a4\uc758 \uc720\uba85\ud55c \uc77c\ud654..")),(0,a.kt)("h2",{id:"best-practices-2"},"Best Practices 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Linq;\n\npublic static class Kata\n{\n    public static int summation(int num)\n    {\n      return Enumerable.Range(1, num).Sum();\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc774\uac74 Enumerable\uc5d0\uc11c 1\ubd80\ud130 num\uae4c\uc9c0\uc758 \ud569\uc744 \ub354\ud574\uc8fc\ub294 \uc2dd\uc73c\ub85c... \uad6c\ud604"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/ko-kr/dotnet/api/system.linq.enumerable.range?view=netframework-4.7.2"},"Enumerable.Range - Microsoft Docs"))))}m.isMDXComponent=!0}}]);