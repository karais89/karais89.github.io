"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43101],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,b=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return t?r.createElement(b,s(s({ref:n},c),{},{components:t})):r.createElement(b,s({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},67966:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const i={title:"[Codewars #3] Sum without highest and lowest number (8kyu)",authors:["karais89"],tags:["codewars","kata"]},s=void 0,o={permalink:"/2018/12/31/codewars-Sum-without-highest-and-lowest-number",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2018-12-31-codewars-Sum-without-highest-and-lowest-number/index.md",source:"@site/blog/2018-12-31-codewars-Sum-without-highest-and-lowest-number/index.md",title:"[Codewars #3] Sum without highest and lowest number (8kyu)",description:"Instructions",date:"2018-12-31T00:00:00.000Z",formattedDate:"2018\ub144 12\uc6d4 31\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.905,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #3] Sum without highest and lowest number (8kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #4] Keep Hydrated! (8kyu)",permalink:"/2018/12/31/codewars-Keep-Hydrated"},nextItem:{title:"[Codewars #2] Count of positives / sum of negatives (8kyu)",permalink:"/2018/12/30/codewars-Count-of-positives-sum-of-negatives"}},l={authorsImageUrls:[void 0]},u=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],c={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,"Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!)."),(0,a.kt)("p",null,"(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{ 6, 2, 1, 8, 10 } => 16\n{ 1, 1, 11, 2, 3 } => 6\n")),(0,a.kt)("p",null,"If array is empty, null or None, or if only 1 Element exists, return 0.\nNote:In C++ instead null an empty vector is used. In C there is no null. ;-) "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.\n")),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Linq;\n\npublic static class Kata\n{\n  public static int Sum(int[] numbers)\n  {\n    if (numbers == null || numbers.Length == 0)\n    {\n      return 0;\n    }\n\n    int minVal = numbers[0];\n    int maxVal = numbers[0];\n    for (int i = 1; i < numbers.Length; i++)\n    {\n        if (numbers[i] < minVal)\n        {\n            minVal = numbers[i];\n        }\n\n        if (numbers[i] > maxVal)\n        {\n            maxVal = numbers[i];\n        }\n    }\n\n    int sum = 0;\n    bool isCheckMinVal = false;\n    bool isCheckMaxVal = false;\n    for (int i = 0; i < numbers.Length; i++)\n    {\n        if (numbers[i] == minVal && !isCheckMinVal)\n        {\n            isCheckMinVal = true;\n            continue;\n        }\n\n        if (numbers[i] == maxVal && !isCheckMaxVal)\n        {\n            isCheckMaxVal = true;\n            continue;\n        }\n        sum += numbers[i];\n    }\n    return sum;\n  }\n}\n")),(0,a.kt)("p",null,"8kyu \ubb38\uc81c\uc778\ub370, \ub108\ubb34 \uc5b4\ub835\uac8c \ud480\uc5c8\ub2e4..\n\uc0dd\uac01\ud574\ubcf4\uba74 \ubb38\uc81c \uc790\uccb4\uac00 \ubc30\uc5f4\uc758 \ud569\uc5d0\uc11c \uac00\uc7a5 \ud070 \uc218\uc640 \uac00\uc7a5 \uc791\uc740 \uc218\ub97c \ube7c\ub77c\ub294 \ubb38\uc81c\uc778\ub370.\n\uac00\uc7a5 \ud070 \uc218\uc640 \uac00\uc7a5 \uc791\uc740 \uc218\uc758 \ubc30\uc5f4 \uc790\uccb4\ub97c \uad6c\ud558\ub824\uace0 \ud574\uc11c \ubb38\uc81c \uc790\uccb4\ub97c \uc880 \uc5b4\ub835\uac8c \ud480\uc774 \ud588\ub2e4.\n\uc798\ubabb\ub41c \ubc29\ubc95\uc778\ub4ef."),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Linq;\n\npublic static class Kata\n{\n    public static int Sum(int[] numbers)\n    {\n        return numbers == null || numbers.Length < 2\n            ? 0\n            : numbers.Sum() - numbers.Max() - numbers.Min();\n    }\n}\n")),(0,a.kt)("p",null,"Linq\ub97c \uc0ac\uc6a9\ud558\uba74 \ud55c\uc904\uc774\uba74 \ud574\uacb0\ub41c\ub2e4.."))}m.isMDXComponent=!0}}]);