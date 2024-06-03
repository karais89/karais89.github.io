"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7511],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>y});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,y=p["".concat(u,".").concat(m)]||p[m]||g[m]||s;return t?r.createElement(y,a(a({ref:n},l),{},{components:t})):r.createElement(y,a({ref:n},l))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54215:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(58168),i=(t(96540),t(15680));const s={title:"[Codewars #32] Persistent Bugger (6kyu)",authors:["karais89"],tags:["codewars","kata"]},a=void 0,o={permalink:"/2019/01/15/codewars-Persistent-Bugger",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-15-codewars-Persistent-Bugger/index.md",source:"@site/blog/2019-01-15-codewars-Persistent-Bugger/index.md",title:"[Codewars #32] Persistent Bugger (6kyu)",description:"Instructions",date:"2019-01-15T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 15\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.35,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #32] Persistent Bugger (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #31] Build a pile of Cubes (6kyu)",permalink:"/2019/01/15/codewars-Build-a-pile-of-Cubes"},nextItem:{title:"[Codewars #29] +1 Array (6kyu)",permalink:"/2019/01/13/codewars-Array"}},u={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],l={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"instructions"},"Instructions"),(0,i.yg)("p",null,"Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit."),(0,i.yg)("p",null,"For example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"}," persistence(39) == 3 // because 3*9 = 27, 2*7 = 14, 1*4=4\n                      // and 4 has only one digit\n\n persistence(999) == 4 // because 9*9*9 = 729, 7*2*9 = 126,\n                       // 1*2*6 = 12, and finally 1*2 = 2\n\n persistence(4) == 0 // because 4 is already a one-digit number\n")),(0,i.yg)("h2",{id:"my-solution"},"My Solution"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\n\npublic class Persist\n{\n  public static long SumList(List<int> list)\n  {\n    long sum = 1;\n    foreach (int num in list)\n    {\n      sum *= num;\n    }\n    return sum;\n  }\n\n  public static bool CheckPersistenceList(List<int> list)\n  {\n    if (list.Count <= 1)\n    {\n      return false;\n    }\n\n    return true;\n  }\n\n  public static int RecusviePersistence(long n, int count)\n  {\n    List<int> toInts = new List<int>();\n    string strNum = n.ToString();\n    for (int i = 0; i < strNum.Length; i++)\n    {\n      toInts.Add(int.Parse(strNum[i].ToString()));\n    }\n\n    long sum = SumList(toInts);\n    Console.WriteLine("n: " + n + ", sum: " + sum);\n    if (CheckPersistenceList(toInts))\n    {\n      count++;\n      return RecusviePersistence(sum, count);\n    }\n    else\n    {\n      return count;\n    }\n  }\n\n public static int Persistence(long n)\n {\n    return RecusviePersistence(n, 0);\n }\n}\n')),(0,i.yg)("p",null,"\ubb54\uac00 \uc4f8\ub370 \uc5c6\uc774 \uae38\uc5b4\uc9c0\ub294 \ub290\ub08c.."),(0,i.yg)("h2",{id:"best-practices"},"Best Practices"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Linq;\n\npublic class Persist\n{\n  public static int Persistence(long n)\n  {\n      int count = 0;\n      while (n > 9)\n      {\n          count++;\n          n = n.ToString().Select(digit => int.Parse(digit.ToString())).Aggregate((x, y) => x * y);\n      }\n      return count;\n  }\n}\n")),(0,i.yg)("p",null,"Linq \uc0ac\uc6a9"))}g.isMDXComponent=!0}}]);