"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,f=m["".concat(c,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"[Codewars #12] Factorial (7kyu)",authors:["karais89"],tags:["codewars","kata"]},o=void 0,l={permalink:"/2019/01/04/codewars-Factorial",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-04-codewars-Factorial/index.md",source:"@site/blog/2019-01-04-codewars-Factorial/index.md",title:"[Codewars #12] Factorial (7kyu)",description:"Instructions",date:"2019-01-04T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 4\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:2.1,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #12] Factorial (7kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[\ub9ac\ubdf0] \uac8c\uc784 \ud504\ub85c\uadf8\ub798\uba38\ub85c \uc0b0\ub2e4\ub294 \uac83",permalink:"/2019/01/04/How-to-live-as-a-game-programmer"},nextItem:{title:"[Codewars #11] Who likes it? (6kyu)",permalink:"/2019/01/04/codewars-Who-likes-it"}},c={authorsImageUrls:[void 0]},s=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices 1",id:"best-practices-1",level:2},{value:"Best Practices 2",id:"best-practices-2",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,"In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 ",(0,a.kt)("em",{parentName:"p"}," 4 ")," 3 ",(0,a.kt)("em",{parentName:"p"}," 2 ")," 1 = 120. By convention the value of 0! is 1."),(0,a.kt)("p",null,"Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript).\n")),(0,a.kt)("p",null,"More details about factorial can be found here: ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Factorial"},"http://en.wikipedia.org/wiki/Factorial")),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\n\npublic static class Kata\n{\n  public static int Factorial(int n)\n  {\n    if (n < 0 || n > 12)\n      throw new ArgumentOutOfRangeException("invalid value");\n\n    int sum = 1;\n    for (int i = 1; i <= n; i++)\n    {\n      sum *= i;\n    }\n    return sum;\n  }\n}\n')),(0,a.kt)("p",null,"\ud329\ud1a0\ub9ac\uc5bc \ubb38\uc81c.\n\uc608\uc678\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\ub294 \ucf54\ub4dc\ub294 \uc0ac\uc2e4 \uc798 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc544\uc11c.. \uc608\uc678 \ubc1c\uc0dd \ubd80\ubd84\uc740 \ucc3e\uc544\ubd24\ub2e4."),(0,a.kt)("h2",{id:"best-practices-1"},"Best Practices 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\npublic static class Kata\n{\n  public static int Factorial(int n)\n  {\n    if(n < 0 || n > 12)\n      throw new ArgumentOutOfRangeException();\n    return n > 0 ? n * Factorial(n - 1) : 1;\n  }\n}\n")),(0,a.kt)("p",null,"\uc7ac\uadc0 \ud568\uc218 \uc0ac\uc6a9. \uc7ac\uadc0 \ud568\uc218 \ubd80\ubd84\ub3c4 \uc0dd\uac01\ud574 \ubcf4\uc558\ub294\ub370..\n\uc18d\ub41c\ub9d0\ub85c ",(0,a.kt)("del",{parentName:"p"},"\uc2a4\ud0dd \ubf55\ube68 \ub09c\ub2e4.."),"\ub780 \ub9d0\uc774 \uc788\uc5b4\uc11c \uadf8\ub0e5 \uc2dc\ub3c4 \uc870\ucc28 \uc548\ud588\ub2e4.\n\uc0ac\uc2e4 \ubb38\uc81c\uc5d0\uc11c\ub294 12\uac1c \uae4c\uc9c0\uc758 \uac12\uc744 \uc81c\ud55c \ud558\uae30 \ub54c\ubb38\uc5d0 \uc5b4\ub5bb\uac8c \ubcf8\ub2e4\uba74 \uc774\uac8c \uac00\uc7a5 \uc88b\uc740 \ucf54\ub4dc \uc77c \uc218\ub3c4 \uc788\uc744 \uac83 \uac19\ub2e4."),(0,a.kt)("h2",{id:"best-practices-2"},"Best Practices 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Linq;\n\npublic static class Kata\n{\n  public static int Factorial(int n)\n  {\n    if(n < 0 || n > 12) throw new ArgumentOutOfRangeException();\n\n    return Enumerable.Range(1, n).Aggregate(1, (x,y) => x * y);\n  }\n}\n")),(0,a.kt)("p",null,"Aggregate\ub780 \uba54\uc11c\ub4dc\ub294 \ucc98\uc74c \ubd04."),(0,a.kt)("p",null,"\ud655\uc778\ud574\ubcf4\ub2c8 \ub204\uc0b0\uae30\uc5d0 \uac12\uc744 \ub204\uc801\ud574\uc900\ub2e4\uace0 \uc0dd\uac01\ud558\uba74 \ub420 \ub4ef."),(0,a.kt)("p",null,"1\ubd80\ud130 \uc2dc\uc791\ud574\uc11c n\uae4c\uc9c0\uc758 \uac12\uc744 \ub204\uc801\ud574\uc11c \uacc4\uc18d \uacf1\ud574\uc900\ub2e4\uace0 \uc0dd\uac01\ud558\uba74 \ub420\ub4ef."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/ko-kr/dotnet/api/system.linq.enumerable.aggregate?view=netframework-4.7.2"},"https://docs.microsoft.com/ko-kr/dotnet/api/system.linq.enumerable.aggregate?view=netframework-4.7.2")))}u.isMDXComponent=!0}}]);