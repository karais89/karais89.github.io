"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,f=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},45132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"[Codewars #15] Are they the same? (6kyu)",authors:["karais89"],tags:["codewars","kata"]},s=void 0,l={permalink:"/2019/01/06/codewars-Are-they-the-same",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-06-codewars-Are-they-the-same/index.md",source:"@site/blog/2019-01-06-codewars-Are-they-the-same/index.md",title:"[Codewars #15] Are they the same? (6kyu)",description:"Instructions",date:"2019-01-06T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 6\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:2.955,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #15] Are they the same? (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #17] Speed Control (7kyu)",permalink:"/2019/01/07/codewars-Speed-Control"},nextItem:{title:"[Codewars #16] Vasya - Clerk (6kyu)",permalink:"/2019/01/06/codewars-Vasya-Clerk"}},i={authorsImageUrls:[void 0]},u=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,'Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.'),(0,a.kt)("p",null,"Examples\nValid arrays"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"a = [121, 144, 19, 161, 19, 144, 19, 11]\nb = [121, 14641, 20736, 361, 25921, 361, 20736, 361]\n")),(0,a.kt)("p",null,"comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"a = [121, 144, 19, 161, 19, 144, 19, 11]\nb = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]\n")),(0,a.kt)("p",null,"Invalid arrays\nIf we change the first number to something else, comp may not return true anymore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"a = [121, 144, 19, 161, 19, 144, 19, 11]\nb = [132, 14641, 20736, 361, 25921, 361, 20736, 361]\n")),(0,a.kt)("p",null,"comp(a,b) returns false because in b 132 is not the square of any number of a."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"a = [121, 144, 19, 161, 19, 144, 19, 11]\nb = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]\n")),(0,a.kt)("p",null,"comp(a,b) returns false because in b 36100 is not the square of any number of a."),(0,a.kt)("p",null,"Remarks\na or b might be [] (all languages except R, Shell). a or b might be nil or null or None or nothing (except in Haskell, Elixir, C++, Rust, R, Shell)."),(0,a.kt)("p",null,"If a or b are nil (or null or None), the problem doesn't make sense so return false."),(0,a.kt)("p",null,"If a or b are empty the result is evident by itself."),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\n\nclass AreTheySame\n{\n  public static bool comp(int[] a, int[] b)\n  {\n    if (a == null || b == null)\n    {\n      return false;\n    }\n\n    if (a.Length != b.Length)\n    {\n      return false;\n    }\n\n    List<int> bList = new List<int>(b);\n    for (int i = 0; i < a.Length; i++)\n    {\n      int mulVal = a[i] * a[i];\n      for (int j = 0; j < bList.Count; j++)\n      {\n        if (bList[j] == mulVal)\n        {\n          bList.RemoveAt(j);\n          break;\n        }\n      }\n    }\n\n    return bList.Count == 0;\n  }\n}\n")),(0,a.kt)("p",null,"b \ubc30\uc5f4\uc744 \ub9ac\uc2a4\ud2b8\ub85c \ub9cc\ub4e0 \ud6c4 \uac12\uc774 \uc77c\uce58\ud560 \uacbd\uc6b0 bList\uc5d0\uc11c \uac12\uc744 \uc81c\uac70\ud574\uc8fc\ub294 \ubc29\uc2dd.\n\ub9e8 \ub9c8\uc9c0\ub9c9\uc5d0 bList\uc5d0 \ud06c\uae30\uac00 0\uc774\uba74 a\uc640 \ubaa8\ub450 \uc77c\uce58\ud558\ub2e4\uace0 \ud310\ub2e8\ud558\uace0 true\ub97c \ub9ac\ud134\ud574\uc8fc\uace0 \uc544\ub2c8\uba74 \ubaa8\ub450 \uc77c\uce58\ud558\uc9c0\ub294 \uc54a\uc73c\ubbc0\ub85c false\ub97c \ub9ac\ud134\ud574\uc900\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"if (a.Length != b.Length)\n{\nreturn false;\n}\n")),(0,a.kt)("p",null,"\uc774 \ubd80\ubd84\uc740 \ud544\uc694 \uc5c6\uc5b4\ub3c4 \ub3d9\uc791 \ud560\ub4ef."),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Linq;\n\nclass AreTheySame\n{\n  public static bool comp(int[] a, int[] b)\n  {\n    if ((a == null) || (b == null)){\n      return false;\n    }\n\n    int[] copy = a.Select(x => x * x).ToArray();\n    Array.Sort(copy);\n    Array.Sort(b);\n\n    return copy.SequenceEqual(b);\n  }\n}\n")),(0,a.kt)("p",null,"Linq\ub97c \uc0ac\uc6a9\ud558\uc600\ub2e4.\n\uac01 \uac12\uc744 \uc81c\uacf1\ud55c \ubc30\uc5f4\uc744 \ub9cc\ub4e0 \ud6c4 \ubc30\uc5f4\uc758 \uac12\uc744 \ubaa8\ub450 \uc815\ub82c \uc2dc\ud0a8 \ud6c4 (Select)\n\uc77c\uce58\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ud568\uc218(",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/ko-kr/dotnet/api/system.linq.enumerable.sequenceequal?view=netframework-4.7.2"},"SequenceEqual"),")\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud574\uacb0 \ud558\uc600\ub2e4."))}m.isMDXComponent=!0}}]);