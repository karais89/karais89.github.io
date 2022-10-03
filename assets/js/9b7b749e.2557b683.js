"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"[Codewars #54] Delete occurrences of an element if it occurs more than n times (6kyu)",authors:["karais89"],tags:["codewars","kata"]},o=void 0,s={permalink:"/2019/01/26/codewars-Delete-occurrences-of-an-element-if-it-occurs-more-than-n-times",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-26-codewars-Delete-occurrences-of-an-element-if-it-occurs-more-than-n-times/index.md",source:"@site/blog/2019-01-26-codewars-Delete-occurrences-of-an-element-if-it-occurs-more-than-n-times/index.md",title:"[Codewars #54] Delete occurrences of an element if it occurs more than n times (6kyu)",description:"Instructions",date:"2019-01-26T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 26\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:2.335,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #54] Delete occurrences of an element if it occurs more than n times (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #55] Convert number to reversed array of digits (8kyu)",permalink:"/2019/01/26/codewars-Convert-number-to-reversed-array-of-digits"},nextItem:{title:"[Codewars #53] List Filtering (7kyu)",permalink:"/2019/01/26/codewars-List-Filtering"}},l={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/csharp"},"\ub9c1\ud06c")),(0,a.kt)("p",null,"Enough is enough!\nAlice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?"),(0,a.kt)("p",null,"Task\nGiven a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is ","[1,2,3,1,2,1,2,3]",", you take ","[1,2,3,1,2]",", drop the next ","[1,2]"," since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to ","[1,2,3,1,2,3]","."),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Kata.DeleteNth (new int[] {20,37,20,21}, 1) // return [20,37,21]\nKata.DeleteNth (new int[] {1,1,3,3,7,2,2,2,2}, 3) // return \n")),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic class Kata {\n  public static int[] DeleteNth(int[] arr, int x) {\n    Dictionary<int, int> valCounts = new Dictionary<int, int>();\n    List<int> removeArrs = new List<int>();\n    for (int i = 0; i < arr.Length; i++)\n    {\n      if (valCounts.ContainsKey(arr[i]))\n      {\n        if (++valCounts[arr[i]] <= x)\n        {\n          removeArrs.Add(arr[i]);\n        }\n      }\n      else\n      {\n        valCounts[arr[i]] = 1;\n        removeArrs.Add(arr[i]);\n      }\n    }\n    return removeArrs.ToArray();\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec\ubc88 \ubc18\ubcf5\ud558\ub294\uac78 \uc81c\uac70\ud574 \ub2ec\ub77c\ub294 \uc694\uad6c \uc0ac\ud56d."),(0,a.kt)("li",{parentName:"ul"},"Dictinary\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud574\ub2f9 \ub418\ub294 \ud0a4 \uac12\uc774 \uc5c6\uc73c\uba74 1 \uc788\uc73c\uba74 +1 \ud574\uc8fc\uc5b4\uc11c x\ubcf4\ub2e4 \uc791\uc744\ub54c\ub9cc \ub9ac\uc2a4\ud2b8\uc5d0 \ub354\ud574\uc900 \ud6c4 \ud574\ub2f9 \ub9ac\uc2a4\ud2b8 \ubc18\ud658"),(0,a.kt)("li",{parentName:"ul"},"Linq\ub97c \uc0ac\uc6a9\ud558\uba74 \ub354 \uac04\ub2e8\ud788 \ud480\ub9ac\uaca0\uc9c0...")),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic class Kata {\n  public static int[] DeleteNth(int[] arr, int x) {\n    var result = new List<int>();\n    foreach(var item in arr) {\n      if(result.Count(i => i == item) < x)\n        result.Add(item);\n    }\n    return result.ToArray();\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C# \ubb38\uc81c\ub294 \uac70\uc758 \ubaa8\ub450 linq\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud47c\ub2e4\uace0 \ubcf4\uba74 \ub420 \ub4ef."),(0,a.kt)("li",{parentName:"ul"},"Linq\uc911 Count \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud574\ub2f9\ub418\ub294 \uac12\uc774 \uba87\uac1c \uc788\ub294\uc9c0 \ubc18\ud658\ud55c\ud6c4 \uadf8\uac83\ubcf4\ub2e4 \uc791\uc744\uc2dc\uc5d0\ub9cc \ub354\ud574\uc8fc\uc5c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud655\uc2e4\ud788 \ub0b4 \ud574\uacb0\ucc45  \ubcf4\ub2e4 \ud6e8\uc52c \uac04\ub2e8\ud558\ub2e4.")))}m.isMDXComponent=!0}}]);