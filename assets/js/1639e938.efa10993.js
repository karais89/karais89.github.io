"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"[Codewars #62] Exes and Ohs (7kyu)",authors:["karais89"],tags:["codewars","kata"]},i=void 0,s={permalink:"/2019/01/30/codewars-Exes-and-Ohs",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-30-codewars-Exes-and-Ohs/index.md",source:"@site/blog/2019-01-30-codewars-Exes-and-Ohs/index.md",title:"[Codewars #62] Exes and Ohs (7kyu)",description:"Instructions",date:"2019-01-30T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 30\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.44,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #62] Exes and Ohs (7kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #64] Growth of a Population (7kyu)",permalink:"/2019/01/31/codewars-Growth-of-a-Population"},nextItem:{title:"[Codewars #61] Maximum subarray sum (5kyu)",permalink:"/2019/01/30/codewars-Maximum-subarray-sum"}},l={authorsImageUrls:[void 0]},u=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/55908aad6620c066bc00002a/train/csharp"},"\ub9c1\ud06c")),(0,a.kt)("p",null,"Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char."),(0,a.kt)("p",null,"Examples input/output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'XO("ooxx") => true\nXO("xooxx") => false\nXO("ooxXm") => true\nXO("zpzpzpp") => true // when no \'x\' and \'o\' is present should return true\nXO("zzoo") => false\n')),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Linq;\nusing System;\npublic static class Kata\n{\n  public static bool XO (string input)\n  {\n    string lowerStr = input.ToLower();\n    int xCnt = 0, oCnt = 0;\n    for (int i = 0; i < lowerStr.Length; i++)\n    {\n      if (lowerStr[i] == 'x')\n      {\n        xCnt++;\n      }\n      else if (lowerStr[i] == 'o')\n      {\n        oCnt++;\n      }\n    }\n    return xCnt == oCnt;\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub450 \uc18c\ubb38\uc790\ub85c \ubcc0\uacbd\ud6c4 \ud574\ub2f9 \ubb38\uc790\uc5f4\uc758 \uce74\uc6b4\ud130\ub97c \uac80\uc0ac\ud55c \ud6c4 \uc99d\uac00."),(0,a.kt)("li",{parentName:"ul"},"\ub9c8\uc9c0\ub9c9\uc5d0 \ub450 \ubb38\uc790\uc758 \uce74\uc6b4\ud130 \uac1c\uc218\ub97c \ube44\uad50."),(0,a.kt)("li",{parentName:"ul"},"\uc2b5\uad00\uc801\uc73c\ub85c \uacc4\uc18d for \ubb38\uc744 \uc0ac\uc6a9\ud558\ub294\ub370 foreach \ubb38\uc744 \uc0ac\uc6a9 \ud558\ub294\uac8c \uac00\ub3c5\uc131 \ubd80\ubd84\uc5d0\uc11c +1 \uc815\ub3c4\ub294 \ub098\uc740 \ubd80\ubd84\uc77c \ub4ef \ud558\ub2e4.")),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Linq;\nusing System;\npublic static class Kata\n{\n  public static bool XO (string input)\n  {\n     return input.ToLower().Count(i => i == 'x') == input.ToLower().Count(i => i == 'o');\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linq\ub294 \uc774\ubbf8 \ub098\uc62c\uac83 \uac19\uc558\uace0. \uc774 Linq\ubb38\uc740 \uadf8\ub798\ub3c4 \ubcf4\uae30\uac00 \ud3b8\ud558\uae34 \ud558\ub2e4. (\uc870\uac74 \uc790\uccb4\uac00 \ubcf5\uc7a1\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0)")))}p.isMDXComponent=!0}}]);