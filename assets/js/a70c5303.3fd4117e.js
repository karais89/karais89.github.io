"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[93867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(l,".").concat(m)]||p[m]||g[m]||s;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"[Codewars #51] Consecutive strings (6kyu)",authors:["karais89"],tags:["codewars","kata"]},i=void 0,o={permalink:"/2019/01/25/codewars-Consecutive-strings",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-25-codewars-Consecutive-strings/index.md",source:"@site/blog/2019-01-25-codewars-Consecutive-strings/index.md",title:"[Codewars #51] Consecutive strings (6kyu)",description:"Instructions",date:"2019-01-25T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 25\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.975,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #51] Consecutive strings (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #56] Remove First and Last Character (8kyu)",permalink:"/2019/01/26/codewars-Remove-First-and-Last-Character"},nextItem:{title:"[Codewars #52] Ones and Zeros (7kyu)",permalink:"/2019/01/25/codewars-Ones-and-Zeros"}},l={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices 1",id:"best-practices-1",level:2},{value:"Best Practices 2",id:"best-practices-2",level:2}],u={toc:c};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/csharp"},"\ub9c1\ud06c")),(0,a.kt)("p",null,"You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array."),(0,a.kt)("p",null,"Example:\nlongest_consec(",'["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"]',', 2) --\x3e "abigailtheta"'),(0,a.kt)("p",null,'n being the length of the string array, if n = 0 or k > n or k <= 0 return "".'),(0,a.kt)("p",null,"Note\nconsecutive strings : follow one after another without an interruption"),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\n\npublic class LongestConsecutives\n{\n    public static String LongestConsec(string[] strarr, int k)\n    {\n        // your code\n        if (strarr == null || strarr.Length == 0 ||\n            strarr.Length < k || k <= 0)\n        {\n          return string.Empty;\n        }\n\n        int maxLength = 0;\n        int longestIndex = 0;\n        for (int i = 0; i < strarr.Length; i++)\n        {\n          int length = 0;\n          for (int j = i; j < strarr.Length && j < i + k; j++)\n          {\n            length += strarr[j].Length;\n          }\n\n          if (length > maxLength)\n          {\n            maxLength = length;\n            longestIndex = i;\n          }\n\n        }\n        string str = "";\n        for (int i = longestIndex; i < longestIndex + k; i++)\n        {\n          str += strarr[i];\n        }\n        return str;\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc601\uc5b4 \ud574\uc11d\uc774 \uc548\ub418\uc11c \ubb34\uc2a8 \uc870\uac74\uc778\uc9c0 \uc815\ud655\ud788 \ubaa8\ub974\uaca0\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"k\uac1c\uc758 \uc5f0\uc18d\ub41c \ubb38\uc790\uc5f4 \uae38\uc774\uc758 \ud569\uc774 \uac00\uc7a5 \uae34 \ubb38\uc790\uc5f4\uc744 \uad6c\ud558\uba74 \ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"stringBuilder\ub97c \uc0ac\uc6a9\ud558\ub294 \ubd80\ubd84\uc740 \uc77c\ub2e8 \uc0dd\ub7b5.")),(0,a.kt)("h2",{id:"best-practices-1"},"Best Practices 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Linq;\npublic class LongestConsecutives {\n    public static string LongestConsec(string[] s, int k){\n        return s.Length==0||s.Length<k||k<=0 ? ""\n             : Enumerable.Range(0,s.Length-k+1)\n                         .Select(x=>string.Join("",s.Skip(x).Take(k)))\n                         .OrderByDescending(x=>x.Length)\n                         .First();\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"linq \uc0ac\uc6a9")),(0,a.kt)("h2",{id:"best-practices-2"},"Best Practices 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"}," public class LongestConsecutives\n        {\n            public static string LongestConsec(string[] strarr, int k)\n            {\n                if (k > strarr.Length || strarr.Length == 0 || k <= 0)\n                {\n                    return string.Empty;\n                }\n\n                var currentStr = string.Empty;\n                for (var i = 0; i < strarr.Length; i++)\n                {\n                    var str = string.Empty;\n                    for (var j = i; j < k + i && j < strarr.Length; j++)\n                    {\n                        str += strarr[j];\n                    }\n\n                    if (currentStr.Length < str.Length)\n                    {\n                        currentStr = str;\n                    }\n                }\n\n                return currentStr;\n            }\n        }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub17c\ub9ac\ub294 \uac70\uc758 \ube44\uc2b7\ud55c\ub4ef.")))}g.isMDXComponent=!0}}]);