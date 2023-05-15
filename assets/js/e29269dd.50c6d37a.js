"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95113],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>k});var n=r(67294);function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,s=function(t,e){if(null==t)return{};var r,n,s={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(s[r]=t[r]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}var o=n.createContext({}),c=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,s=t.mdxType,a=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=c(r),m=s,k=p["".concat(o,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(k,l(l({ref:e},u),{},{components:r})):n.createElement(k,l({ref:e},u))}));function k(t,e){var r=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[p]="string"==typeof t?t:s,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25610:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const a={title:"[Codewars #13] Help the bookseller (6kyu)",authors:["karais89"],tags:["codewars","kata"]},l=void 0,i={permalink:"/2019/01/05/codewars-Help-the-bookseller",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-05-codewars-Help-the-bookseller/index.md",source:"@site/blog/2019-01-05-codewars-Help-the-bookseller/index.md",title:"[Codewars #13] Help the bookseller (6kyu)",description:"Instructions",date:"2019-01-05T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 5\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:3.44,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #13] Help the bookseller (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #16] Vasya - Clerk (6kyu)",permalink:"/2019/01/06/codewars-Vasya-Clerk"},nextItem:{title:"[Codewars #14] Sum of a sequence (7kyu)",permalink:"/2019/01/05/codewars-Sum-of-a-sequence"}},o={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices 1",id:"best-practices-1",level:2},{value:"Best Practices 2",id:"best-practices-2",level:2}],u={toc:c},p="wrapper";function f(t){let{components:e,...r}=t;return(0,s.kt)(p,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"instructions"},"Instructions"),(0,s.kt)("p",null,"A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more capitals letters. The 1st letter of a code is the capital letter of the book category. In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock."),(0,s.kt)("p",null,"For example an extract of one of the stocklists could be:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.\n')),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....\n')),(0,s.kt)("p",null,"You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  M = {"A", "B", "C", "W"}\n')),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  M = ["A", "B", "C", "W"] or ...\n')),(0,s.kt)("p",null,"and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category."),(0,s.kt)("p",null,"For the lists L and M of example you have to return the string (in Haskell/Clojure a list of pairs):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  (A : 20) - (B : 114) - (C : 50) - (W : 0)\n")),(0,s.kt)("p",null,'where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category \'W\' since there are no code beginning with W.'),(0,s.kt)("p",null,'If L or M are empty return string is "" (Clojure should return an empty array instead).'),(0,s.kt)("p",null,"Note:\nIn the result codes and their values are in the same order as in M."),(0,s.kt)("h2",{id:"my-solution"},"My Solution"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\npublic class StockList {\n    public static string stockSummary(String[] lstOfArt, String[] lstOf1stLetter) {\n      if (lstOfArt == null || lstOfArt.Length == 0 || lstOf1stLetter == null || lstOf1stLetter.Length == 0) \n      {\n        return string.Empty;\n      }\n      Dictionary<string, int> letterDic = new Dictionary<string, int>();\n      for (int i = 0; i < lstOf1stLetter.Length; i++)\n      {\n        for (int j = 0; j < lstOfArt.Length; j++)\n        {\n          if (lstOfArt[j].Substring(0, 1) == lstOf1stLetter[i])\n          {\n            if (letterDic.ContainsKey(lstOf1stLetter[i]))\n            {\n              letterDic[lstOf1stLetter[i]] += int.Parse(lstOfArt[j].Split()[1]);\n            }\n            else\n            {\n              letterDic[lstOf1stLetter[i]] = int.Parse(lstOfArt[j].Split()[1]);\n            }\n          }\n        }\n      }\n      string summary = string.Empty;\n      for (int i = 0; i < lstOf1stLetter.Length; i++)\n      {\n        if (letterDic.ContainsKey(lstOf1stLetter[i]))\n        {\n          summary += $"({lstOf1stLetter[i]} : {letterDic[lstOf1stLetter[i]]}) - ";\n        }\n        else\n        {\n          summary += $"({lstOf1stLetter[i]} : 0) - ";\n        }\n      }\n      summary = summary.Substring(0, summary.Length - 3);\n      return summary;\n    }\n}\n')),(0,s.kt)("p",null,"\ub515\uc154\ub108\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud569\uc744 \uc800\uc7a5\ud574\uc11c \ud480\uc5b4\uc57c\uc9c0 \ub77c\ub294 \uc0dd\uac01\uc744 \ud588\ub2e4\uac00 \uc4f8\ub370 \uc5c6\uc774 \ubcf5\uc7a1\ud574 \uc9c4 \uac83 \uac19\ub2e4."),(0,s.kt)("p",null,"\uc0dd\uac01\ud574\ubcf4\ub2c8 \uad73\uc774 \ub515\uc154\ub108\ub9ac\ub97c \uc548\uc368\ub3c4 \ub418\ub294 \ubb38\uc81c \uc600\ub2e4.. "),(0,s.kt)("p",null,'" - " \uae30\ud638\ub97c \uc81c\uac70\ud558\ub294 \ucf54\ub4dc\ub3c4 \uc4f8\ub370\uc5c6\uc774 \uc9c0\uc800\ubd84\ud558\ub2e4.'),(0,s.kt)("h2",{id:"best-practices-1"},"Best Practices 1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Linq;\n\npublic class StockList {\n  public static string stockSummary(string[] lstOfArt, string[] lstOf1stLetter) {\n    if (!lstOfArt.Any()) return "";\n    return string.Join(" - ",\n      lstOf1stLetter.Select(c => string.Format("({0} : {1})", c,\n        lstOfArt.Where(a => a[0] == c[0]).Sum(a => int.Parse(a.Split(\' \')[1]))))); \n  }\n}\n')),(0,s.kt)("p",null,"Linq\ub97c \uc0ac\uc6a9\ud558\uba74 \uc5b8\uc81c\ub098 \ucf54\ub4dc\uac00 \uc9e7\uc544\uc9c4\ub2e4."),(0,s.kt)("h2",{id:"best-practices-2"},"Best Practices 2"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\npublic class StockList {\n    public static string stockSummary(String[] lstOfArt, String[] lstOf1stLetter) {\n        if (lstOfArt.Length == 0) {\n            return "";\n        }\n        string result = "";\n        foreach (string m in lstOf1stLetter) {\n            int tot = 0;\n            foreach (string l in lstOfArt) {\n                if (l[0] == m[0]) {\n                    tot += int.Parse(l.Split(\' \')[1]);\n                }\n            }\n            if (!String.IsNullOrEmpty(result)) {\n                result += " - ";\n            }\n            result += "(" + m + " : " + tot + ")";\n        }\n        return result;\n    }\n}\n')),(0,s.kt)("p",null,'\uc774\ub807\uac8c \ud480\uba74 \ub418\ub294 \uac70\uc600\ub294\ub370.. \ub108\ubb34 \ub3cc\uc544\uac04\ub4ef.\n" - " \ubd99\uc774\ub294 \ubc29\uc2dd\uc740 \ub2e4\uc2dc \uc0dd\uac01 \ud574\ubcf4\uc790.'))}f.isMDXComponent=!0}}]);