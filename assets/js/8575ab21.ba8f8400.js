"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),f=i,g=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"[Codewars #2] Count of positives / sum of negatives (8kyu)",authors:["karais89"],tags:["codewars","kata"]},s=void 0,o={permalink:"/2018/12/30/codewars-Count-of-positives-sum-of-negatives",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2018-12-30-codewars-Count-of-positives-sum-of-negatives/index.md",source:"@site/blog/2018-12-30-codewars-Count-of-positives-sum-of-negatives/index.md",title:"[Codewars #2] Count of positives / sum of negatives (8kyu)",description:"Instructions",date:"2018-12-30T00:00:00.000Z",formattedDate:"2018\ub144 12\uc6d4 30\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.57,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #2] Count of positives / sum of negatives (8kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #3] Sum without highest and lowest number (8kyu)",permalink:"/2018/12/31/codewars-Sum-without-highest-and-lowest-number"},nextItem:{title:"[Codewars #1] Printer Errors (7kyu)",permalink:"/2018/12/30/codewars-Printer-Errors"}},u={authorsImageUrls:[void 0]},l=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"Given an array of integers."),(0,i.kt)("p",null,"Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers."),(0,i.kt)("p",null,"If the input array is empty or null, return an empty array."),(0,i.kt)("h2",{id:"my-solution"},"My Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic class Kata\n{\n    public static int[] CountPositivesSumNegatives(int[] input)\n    {\n        if (input == null || input.Length == 0)\n        {\n            return new int[] { };\n        }\n\n        int positiveCount = 0;\n        int negativeSum = 0;\n        for (int i = 0; i < input.Length; i++)\n        {\n            if (input[i] > 0)\n            {\n                positiveCount++;\n            }\n            else\n            {\n                negativeSum += input[i];\n            }\n        }\n\n        return new int[] { positiveCount, negativeSum };\n    }\n}\n")),(0,i.kt)("p",null,"\ubc30\uc5f4\uc5d0\uc11c \uc591\uc218\uc758 \uacbd\uc6b0 \uc591\uc218\uac00 \uba87\uac1c \uc788\ub294\uc9c0 \uad6c\ud558\uace0, \uc74c\uc218\uc758 \uacbd\uc6b0 \uc74c\uc218\uac12 \ud569\uc744 \uad6c\ud558\uc5ec \ubc30\uc5f4\ub85c \ubc18\ud658\ud558\ub77c."),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic class Kata\n{\n    public static int[] CountPositivesSumNegatives(int[] input)\n    {\n        if(input == null || !input.Any())\n        {\n            return new int[] {};\n        }\n\n        int countPositives = input.Count(n => n > 0);\n        int sumNegatives = input.Where(n => n < 0).Sum();\n\n        return new int[] { countPositives, sumNegatives };\n    }\n}\n")),(0,i.kt)("p",null,"Linq\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud574\uacb0.\nCodwars\uc5d0\uc11c C# \ubb38\uc81c\uc758 \uacbd\uc6b0 Best Practices\uc758 \uacbd\uc6b0 Linq\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud480\uc774\ud55c \uc815\ub2f5\uc774 \ucc44\ud0dd\ub418\ub294 \uac83 \uac19\ub2e4.\n\ub17c\ub9ac \uc790\uccb4\ub294 Linq\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc544\ub3c4 \ucda9\ubd84\ud788 \ud574\uacb0 \uac00\ub2a5\ud558\uc9c0\ub9cc Linq \uc790\uccb4\uc758 \uc7a5\uc810\uc774 \ubd84\uba85\ud788 \uc874\uc7ac\ud558\uae30 \ub54c\ubb38\uc5d0 Linq\ucabd\uc73c\ub85c \ud574\uacb0\ud558\uba74 Best Practices\ub85c \ucc44\ud0dd\ub418\ub294 \uac83 \uac19\ub2e4."))}p.isMDXComponent=!0}}]);