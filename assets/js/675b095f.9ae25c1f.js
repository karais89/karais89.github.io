"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85859],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=u(n),d=i,y=g["".concat(l,".").concat(d)]||g[d]||p[d]||s;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(58168),i=(n(96540),n(15680));const s={title:"[Codewars #34] Reverse or rotate? (6kyu)",authors:["karais89"],tags:["codewars","kata"]},a=void 0,o={permalink:"/2019/01/18/codewars-Reverse-or-rotate",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-18-codewars-Reverse-or-rotate/index.md",source:"@site/blog/2019-01-18-codewars-Reverse-or-rotate/index.md",title:"[Codewars #34] Reverse or rotate? (6kyu)",description:"Instructions",date:"2019-01-18T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 18\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:2.76,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #34] Reverse or rotate? (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #35] Street Fighter 2 - Character Selection (6kyu)",permalink:"/2019/01/19/codewars-Street-Fighter-2-Character-Selection"},nextItem:{title:"[Codewars #33] String tops (6kyu)",permalink:"/2019/01/18/codewars-String-tops"}},l={authorsImageUrls:[void 0]},u=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],c={toc:u},g="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"instructions"},"Instructions"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/csharp"},"\ub9c1\ud06c")),(0,i.yg)("p",null,"The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz)."),(0,i.yg)("p",null,"If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string."),(0,i.yg)("p",null,"If"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'sz is <= 0 or if str is empty return ""'),(0,i.yg)("li",{parentName:"ul"},'sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".')),(0,i.yg)("p",null,"Examples:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'revrot("123456987654", 6) --\x3e "234561876549"\nrevrot("123456987653", 6) --\x3e "234561356789"\nrevrot("66443875", 4) --\x3e "44668753"\nrevrot("66443875", 8) --\x3e "64438756"\nrevrot("664438769", 8) --\x3e "67834466"\nrevrot("123456779", 8) --\x3e "23456771"\nrevrot("", 8) --\x3e ""\nrevrot("123456779", 0) --\x3e ""\nrevrot("563000655734469485", 4) --\x3e "0365065073456944"\n')),(0,i.yg)("h2",{id:"my-solution"},"My Solution"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Text;\nusing System.Linq;\n\npublic class Revrot\n{\n    public static string InternalRevRot(string str)\n    {\n      if (String.IsNullOrEmpty(str))\n      {\n        return string.Empty;\n      }\n\n      int sum = 0;\n      for (int i = 0; i < str.Length; i++)\n      {\n        sum += int.Parse(str[i].ToString());\n      }\n\n      StringBuilder strBuilder = new StringBuilder();\n      if (sum % 2 == 0)\n      {\n        for (int i = str.Length - 1; i >= 0; i--)\n        {\n          strBuilder.Append(str[i]);\n        }\n        return strBuilder.ToString();\n      }\n\n      for (int i = 1; i < str.Length; i++)\n      {\n        strBuilder.Append(str[i]);\n      }\n      strBuilder.Append(str[0]);\n      return strBuilder.ToString();\n    }\n\n    public static string RevRot(string strng, int sz)\n    {\n        if (sz <= 0 || String.IsNullOrEmpty(strng) || strng.Length < sz)\n        {\n          return string.Empty;\n        }\n\n        StringBuilder strBuilder = new StringBuilder();\n        for (int i = 0; i < strng.Length; i += sz)\n        {\n          if (i + sz < strng.Length)\n          {\n            string str = strng.Substring(i, sz);\n            strBuilder.Append(InternalRevRot(str));\n          }\n        }\n        return strBuilder.ToString();\n    }\n}\n")),(0,i.yg)("p",null,"\uc77c\ub2e8 \uc601\uc5b4 \ud574\uc11d\uc774 \uc548\ub418\uc11c \ud5e4\ub9f8\ub2e4. \ucc9c\ucc9c\ud788 \ubb38\uc81c\ub97c \ub2e4\uc2dc \uc77d\uc5b4 \ubd24\ub2e4."),(0,i.yg)("p",null,"\uc8fc\uc5b4\uc9c4 sz \ub9e4\uac1c\ubcc0\uc218 \ub9cc\ud07c substring\uc73c\ub85c \ubb38\uc790\uc5f4\uc744 \uac00\ub974\uace0\n\uac01\uac01\uc758 \ubb38\uc790\uc5f4\uc758 \ud569\uc744 \uae30\uc900\uc73c\ub85c \ub2e4\uc74c\uacfc \uac19\uc740 \uae30\uc900\uc73c\ub85c \ud310\ub2e8"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"\ubb38\uc790\uc5f4\uc758 \ucd1d \ud569\uc774 \uc9dd\uc218\uc774\uba74 \uc22b\uc790 \ub4a4\uc9d1\uae30. (1->2->3 \uc21c\uc11c\uc77c\ub54c 3->2->1)"),(0,i.yg)("li",{parentName:"ol"},"\ubb38\uc790\uc5f4\uc758 \ud569\uc774 \ud640\uc218\uc774\uba74 \uc67c\ucabd\uc73c\ub85c \ud55c\uce78 \uc774\ub3d9\uc2dc\ud0a4\uae30. (1->2->3 \uc21c\uc11c\uc77c\ub54c 2->3->1)")),(0,i.yg)("h2",{id:"best-practices"},"Best Practices"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Linq;\n\npublic class Revrot\n{\n    public static string RevRot(string strng, int sz)\n    {\n        if (String.IsNullOrEmpty(strng) || sz <= 0 || sz > strng.Length)\n            return String.Empty;\n\n        return\n            new String(\n                Enumerable.Range(0, strng.Length/sz)\n                    .Select(i => strng.Substring(i*sz, sz))\n                    .Select(\n                        chunk =>\n                            chunk.Sum(digit => (int) Math.Pow(int.Parse(digit.ToString()), 3))%2 == 0\n                                ? chunk.Reverse()\n                                : chunk.Skip(1).Concat(chunk.Take(1)))\n                    .SelectMany(x => x)\n                    .ToArray());\n    }\n}\n")),(0,i.yg)("p",null,"chunk.Reverse() \uc774 \ubd80\ubd84\uc5d0 \ud574\ub2f9"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"      StringBuilder strBuilder = new StringBuilder();\n      if (sum % 2 == 0)\n      {\n        for (int i = str.Length - 1; i >= 0; i--)\n        {\n          strBuilder.Append(str[i]);\n        }\n        return strBuilder.ToString();\n      }\n")),(0,i.yg)("p",null,"chunk.Skip(1).Concat(chunk.Take(1)) \uc774 \ubd80\ubd84\uc5d0 \ud574\ub2f9"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"      for (int i = 1; i < str.Length; i++)\n      {\n        strBuilder.Append(str[i]);\n      }\n      strBuilder.Append(str[0]);\n      return strBuilder.ToString();\n")))}p.isMDXComponent=!0}}]);