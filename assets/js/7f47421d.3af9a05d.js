"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,d=p["".concat(u,".").concat(g)]||p[g]||m[g]||s;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},22811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const s={title:"[Codewars #32] Persistent Bugger (6kyu)",authors:["karais89"],tags:["codewars","kata"]},a=void 0,o={permalink:"/2019/01/15/codewars-Persistent-Bugger",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-15-codewars-Persistent-Bugger/index.md",source:"@site/blog/2019-01-15-codewars-Persistent-Bugger/index.md",title:"[Codewars #32] Persistent Bugger (6kyu)",description:"Instructions",date:"2019-01-15T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 15\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.35,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #32] Persistent Bugger (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #31] Build a pile of Cubes (6kyu)",permalink:"/2019/01/15/codewars-Build-a-pile-of-Cubes"},nextItem:{title:"[Codewars #29] +1 Array (6kyu)",permalink:"/2019/01/13/codewars-Array"}},u={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],l={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," persistence(39) == 3 // because 3*9 = 27, 2*7 = 14, 1*4=4\n                      // and 4 has only one digit\n\n persistence(999) == 4 // because 9*9*9 = 729, 7*2*9 = 126,\n                       // 1*2*6 = 12, and finally 1*2 = 2\n\n persistence(4) == 0 // because 4 is already a one-digit number\n")),(0,i.kt)("h2",{id:"my-solution"},"My Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\n\npublic class Persist\n{\n  public static long SumList(List<int> list)\n  {\n    long sum = 1;\n    foreach (int num in list)\n    {\n      sum *= num;\n    }\n    return sum;\n  }\n\n  public static bool CheckPersistenceList(List<int> list)\n  {\n    if (list.Count <= 1)\n    {\n      return false;\n    }\n\n    return true;\n  }\n\n  public static int RecusviePersistence(long n, int count)\n  {\n    List<int> toInts = new List<int>();\n    string strNum = n.ToString();\n    for (int i = 0; i < strNum.Length; i++)\n    {\n      toInts.Add(int.Parse(strNum[i].ToString()));\n    }\n\n    long sum = SumList(toInts);\n    Console.WriteLine("n: " + n + ", sum: " + sum);\n    if (CheckPersistenceList(toInts))\n    {\n      count++;\n      return RecusviePersistence(sum, count);\n    }\n    else\n    {\n      return count;\n    }\n  }\n\n public static int Persistence(long n)\n {\n    return RecusviePersistence(n, 0);\n }\n}\n')),(0,i.kt)("p",null,"\ubb54\uac00 \uc4f8\ub370 \uc5c6\uc774 \uae38\uc5b4\uc9c0\ub294 \ub290\ub08c.."),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Linq;\n\npublic class Persist\n{\n  public static int Persistence(long n)\n  {\n      int count = 0;\n      while (n > 9)\n      {\n          count++;\n          n = n.ToString().Select(digit => int.Parse(digit.ToString())).Aggregate((x, y) => x * y);\n      }\n      return count;\n  }\n}\n")),(0,i.kt)("p",null,"Linq \uc0ac\uc6a9"))}m.isMDXComponent=!0}}]);