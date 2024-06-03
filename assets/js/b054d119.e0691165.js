"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21685],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,y=p["".concat(l,".").concat(m)]||p[m]||g[m]||s;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(58168),i=(n(96540),n(15680));const s={title:"[Codewars #33] String tops (6kyu)",authors:["karais89"],tags:["codewars","kata"]},a=void 0,o={permalink:"/2019/01/18/codewars-String-tops",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-18-codewars-String-tops/index.md",source:"@site/blog/2019-01-18-codewars-String-tops/index.md",title:"[Codewars #33] String tops (6kyu)",description:"Instructions",date:"2019-01-18T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 18\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:2.59,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #33] String tops (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #34] Reverse or rotate? (6kyu)",permalink:"/2019/01/18/codewars-Reverse-or-rotate"},nextItem:{title:"[Codewars #31] Build a pile of Cubes (6kyu)",permalink:"/2019/01/15/codewars-Build-a-pile-of-Cubes"}},l={authorsImageUrls:[void 0]},u=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices 1",id:"best-practices-1",level:2},{value:"Best Practices 2",id:"best-practices-2",level:2}],c={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"instructions"},"Instructions"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"http://www.codewars.com/kata/59b7571bbf10a48c75000070/train/csharp"},"\ub9c1\ud06c")),(0,i.yg)("p",null,"Task\nWrite a function that accepts msg string and returns local tops of string from the highest to the lowest.\nThe string's tops are from displaying the string in the below way:"),(0,i.yg)("p",null,"When the msg string is empty, return an empty string.\nThe input strings may be very long. Make sure your solution has good performance.\nCheck the test cases for more samples."),(0,i.yg)("p",null,"Note for C++\nDo not post an issue in my solution without checking if your returned string doesn't have some invisible characters. You read most probably outside of msg string."),(0,i.yg)("h2",{id:"my-solution"},"My Solution"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Text;\nusing System.Collections.Generic;\n\npublic static class Kata\n{\n  public static string Tops(string msg)\n  {\n    if (string.IsNullOrEmpty(msg))\n    {\n      return string.Empty;\n    }\n\n    int switchCount = 0;\n    int addNum = 0;\n    int goalNum = 0;\n    List<int> topIndexs = new List<int>();\n    for (int i = 0; i < msg.Length; i++)\n    {\n      if (i == goalNum)\n      {\n        // switchCount is odd top index\n        if (switchCount % 2 == 1)\n        {\n          topIndexs.Add(i);\n        }\n        switchCount++;\n        addNum++;\n        goalNum += addNum;\n      }\n    }\n\n    StringBuilder strBuilder = new StringBuilder();\n    for (int i = topIndexs.Count - 1; i >= 0; i--)\n    {\n      strBuilder.Append(msg[topIndexs[i]]);\n    }\n\n    return strBuilder.ToString();\n  }\n}\n")),(0,i.yg)("p",null,"\uacf5\ud1b5\uc801\uc73c\ub85c \uc99d\uac00\ud558\ub294 \uc218\uac00 \uc874\uc7ac\ud560 \uac83 \uac19\ub2e4\ub294 \uc0dd\uac01\uc744 \ud588\ub294\ub370 (\uc218\uc5f4) \ucc3e\uc9c0\ub97c \ubabb\ud574\uc11c, \uadf8\ub0e5 \uac00\uc7a5 \ud070 \uc218\uc758 \uc778\ub371\uc2a4\ub97c \uc800\uc7a5\ud55c \ud6c4\uc5d0 \uc2a4\ud2b8\ub9c1\uc744 \ubfcc\ub824\uc8fc\ub294 \ubc29\uc2dd\uc73c\ub85c \ucc98\ub9ac \ud558\uc600\ub2e4."),(0,i.yg)("p",null,"\uc218\uc5f4\uc744 \ucc3e\uc9c0 \ubabb\ud55c \uc774\uc720\ub294 \uc911\uac04\uc5d0 \uacc4\uc0b0 \uc2e4\uc218\uac00 \uc788\uc5c8\ub2e4."),(0,i.yg)("h2",{id:"best-practices-1"},"Best Practices 1"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"using System.Text;\n\npublic static class Kata\n{\n  public static string Tops(string msg)\n  {\n    StringBuilder result = new StringBuilder();\n\n    for(int i = 1, x = 0; i < msg.Length; i += 5 + 4 * x, x++)\n      result.Insert(0, msg[i]);\n\n    return result.ToString();\n  }\n}\n")),(0,i.yg)("p",null,"\ud070 \uc218\uc758 \uc778\ub371\uc2a4 \ubc30\uc5f4 : 1 -> 6 -> 15 -> 28"),(0,i.yg)("p",null,"\ucc28\uc774 5, 9, 13"),(0,i.yg)("p",null,"\ucc28\uc774 : 5+(4*x) -> 5 -> 9 -> 13"),(0,i.yg)("p",null,"\uc73c\ub85c \uc218\uc5f4\uc774 \uc874\uc7ac\ud55c\ub2e4."),(0,i.yg)("h2",{id:"best-practices-2"},"Best Practices 2"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Linq;\nusing System.Collections.Generic;\n\n\npublic static class Kata\n{\n    public static string Tops(string msg)\n    {\n        int jump = 1;\n        Stack<char> result = new Stack<char>() { };\n        for (int i = 1; i < msg.Length; i += jump)\n        {\n            if (jump % 2 != 0)\n                result.Push(msg[i]);\n            jump += 1;\n        }\n        return String.Join("", result);\n    }\n\n}\n')),(0,i.yg)("p",null,"\ub098\uc640 \uc0dd\uac01\ud55c \ubc29\uc2dd\uc740 \uac70\uc758 \ub611\uac19\uc740\ub370, \ud6e8\uc52c \uae54\ub054\ud558\uac8c \ucc98\ub9ac \ud558\uc600\ub2e4."),(0,i.yg)("p",null,"\uc77c\ub2e8 \uc2a4\ud2b8\ub9c1\uc744 \ub4a4\ub85c \ubfcc\ub824\uc8fc\ub294 \ubd80\ubd84\uc744 \uc2a4\ud0dd\uc744 \ud1b5\ud574 \ucc98\ub9ac \ud558\uc600\ub2e4.\n\uadf8\ub9ac\uace0 \ucd94\uac00\uc801\uc73c\ub85c \ub0b4 \ud574\uacb0\ucc45\uc5d0\uc11c \uc0ac\uc6a9 \ud558\ub358 \uc4f8\ub370\uc5c6\ub294 \ubcc0\uc218\ub3c4 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc558\ub2e4."))}g.isMDXComponent=!0}}]);