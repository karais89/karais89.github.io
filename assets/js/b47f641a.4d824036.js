"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30654],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),b=i,d=p["".concat(l,".").concat(b)]||p[b]||y[b]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},48130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(58168),i=(n(96540),n(15680));const a={title:"[Codewars #6] Is n divisible by x and y? (8kyu)",authors:["karais89"],tags:["codewars","kata"]},s=void 0,o={permalink:"/2019/01/01/codewars-Is-n-divisible-by-x-and-y",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-01-codewars-Is-n-divisible-by-x-and-y/index.md",source:"@site/blog/2019-01-01-codewars-Is-n-divisible-by-x-and-y/index.md",title:"[Codewars #6] Is n divisible by x and y? (8kyu)",description:"Instructions",date:"2019-01-01T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 1\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.435,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #6] Is n divisible by x and y? (8kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #5] Invert values (8kyu)",permalink:"/2019/01/01/codewars-Invert-values"},nextItem:{title:"[Codewars #4] Keep Hydrated! (8kyu)",permalink:"/2018/12/31/codewars-Keep-Hydrated"}},l={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:c},p="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"instructions"},"Instructions"),(0,i.yg)("p",null,"Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Example:\nisDivisible(3,1,3)--\x3e true because 3 is divisible by 1 and 3\nisDivisible(12,2,6)--\x3e true because 12 is divisible by 2 and 6\nisDivisible(100,5,3)--\x3e false because 100 is not divisible by 3\nisDivisible(12,7,5)--\x3e false because 12 is neither divisible by 7 nor 5\n")),(0,i.yg)("h2",{id:"my-solution"},"My Solution"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"public class DivisibleNb {\n public static bool isDivisible(long n, long x, long y) {\n  // your code\n    return n % x == 0 && n % y == 0;\n }\n}\n\n")),(0,i.yg)("p",null,"\uc870\uac74 \uc790\uccb4\uac00 \ubaa8\ub4e0 \uc218\ub294 0\uc774 \uc544\ub2c8\uace0, \uc790\uc5f0\uc218\uc774\uae30\ub54c\ubb38\uc5d0 \ub530\ub85c \uc870\uac74 \uccb4\ud06c\ub294 \ud558\uc9c0 \uc54a\uace0, \ub450\uac1c\uc758 \uc218\ub97c \ub098\ub204\uc5c8\uc744\ub54c \ub098\uba38\uc9c0\uac00 0\uc774 \uc544\ub2cc \uacbd\uc6b0\ub97c \uad6c\ud558\uc5ec \ub9ac\ud134 \ud574 \uc8fc\uc5c8\ub2e4."),(0,i.yg)("h2",{id:"best-practices"},"Best Practices"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"public class DivisibleNb {\n    public static bool isDivisible(long n, long x, long y) {\n        return (x != 0 && y != 0 && n % x == 0 && n % y == 0);\n    }\n}\n")),(0,i.yg)("p",null,"\ubb38\uc81c \ud574\uacb0 \ubc29\ubc95\uc740 \ub611\uac19\uc740\uac83 \uac19\uace0, \uc5ec\uae30\uc11c\ub294 x, y\uc5d0 \ub300\ud55c 0 \uac80\uc0ac\ub97c \ud574\uc8fc\uc5b4 Division by zero\uc5d0 \ub300\ud55c \ucc98\ub9ac\ub97c \ud574\uc8fc\uc5c8\ub2e4. "),(0,i.yg)("p",null,"\uc774 \ud574\uacb0\uc5d0 \ub300\ud55c \uc758\uacac\uc73c\ub85c \uc544\ub798\uc640 \uac19\uc740 \uc758\uacac\uc774 \ub2ec\ub9bc."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"All inputs are positive, non-zero digits!\nx != 0 && y != 0 superfluous\n")))}y.isMDXComponent=!0}}]);