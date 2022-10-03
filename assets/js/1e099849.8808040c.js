"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,g=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"[Codewars #18] Maximum Length Difference (7kyu)",authors:["karais89"],tags:["codewars","kata"]},o=void 0,s={permalink:"/2019/01/07/codewars-Maximum-Length-Difference",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-07-codewars-Maximum-Length-Difference/index.md",source:"@site/blog/2019-01-07-codewars-Maximum-Length-Difference/index.md",title:"[Codewars #18] Maximum Length Difference (7kyu)",description:"Instructions",date:"2019-01-07T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 7\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.455,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #18] Maximum Length Difference (7kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #20] Steps in Primes (6kyu)",permalink:"/2019/01/08/codewars-Steps-in-Primes"},nextItem:{title:"[Codewars #17] Speed Control (7kyu)",permalink:"/2019/01/07/codewars-Speed-Control"}},l={authorsImageUrls:[void 0]},u=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("p",null,"You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array."),(0,r.kt)("p",null,"Find max(abs(length(x) \u2212 length(y)))"),(0,r.kt)("p",null,"If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None)."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]\na2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]\nmxdiflg(a1, a2) --\x3e 13\n')),(0,r.kt)("p",null,"Bash note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"input : 2 strings with substrings separated by ,"),(0,r.kt)("li",{parentName:"ul"},"output: number as a string")),(0,r.kt)("h2",{id:"my-solution"},"My Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\npublic class MaxDiffLength\n{\n\n    public static int Mxdiflg(string[] a1, string[] a2)\n    {\n        if (a1 == null || a1.Length == 0 || a2 == null || a2.Length == 0)\n          return -1;\n\n        int maxVal = int.MinValue;\n        for (int i = 0; i < a1.Length; i++)\n        {\n          for (int j = 0; j < a2.Length; j++)\n          {\n            int diff = Math.Abs(a1[i].Length - a2[j].Length);\n            if (diff > maxVal)\n              maxVal = diff;\n          }\n        }\n\n        return maxVal;\n    }\n}\n")),(0,r.kt)("p",null,"\ub450 \ubc30\uc5f4\uc758 \uae38\uc774\uc758 \uac12 \ucc28\uc774 \uc911 \uac00\uc7a5 \ud070 \uac12\uc744 \uad6c\ud558\ub294 \ubb38\uc81c"),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Linq;\n\npublic class MaxDiffLength\n{\n\n    public static int Mxdiflg(string[] a1, string[] a2)\n    {\n        if(a1.Length <= 0 || a2.Length <= 0)\n          return -1;\n        var first = Math.Abs(a1.Max(x => x.Length) - a2.Min(x => x.Length));\n        var second = Math.Abs(a2.Max(x => x.Length) - a1.Min(x => x.Length));\n        return Math.Max(first, second);\n    }\n}\n")),(0,r.kt)("p",null,"Linq \uc0ac\uc6a9"),(0,r.kt)("p",null,"a1 \ucd5c\ub300\uac12 - a2 \ucd5c\uc18c\uac12 \ud639\uc740 a2 \ucd5c\ub300\uac12 - a1 \ucd5c\uc18c\uac12 \uc911\uc5d0 \uac00\uc7a5 \ud070 \uac12 \ubc18\ud658"))}p.isMDXComponent=!0}}]);