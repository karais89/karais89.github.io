"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"[Codewars #28] Write Number in Expanded Form (6kyu)",authors:["karais89"],tags:["codewars","kata"]},o=void 0,s={permalink:"/2019/01/12/codewars-Write-Number-in-Expanded-Form",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-12-codewars-Write-Number-in-Expanded-Form/index.md",source:"@site/blog/2019-01-12-codewars-Write-Number-in-Expanded-Form/index.md",title:"[Codewars #28] Write Number in Expanded Form (6kyu)",description:"Instructions",date:"2019-01-12T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 12\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:2.495,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #28] Write Number in Expanded Form (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #30]  Playing with digits (6kyu)",permalink:"/2019/01/13/codewars-Playing-with-digits"},nextItem:{title:"\ud55c\ub9c8\ub514\ub85c \ub2f7\ucef4 - PART 1. \uc8fc\uc5b4 \ub9cc\ub4e4\uae30",permalink:"/2019/01/12/hanmadiro-part-1"}},l={authorsImageUrls:[void 0]},u=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices 1",id:"best-practices-1",level:2},{value:"Best Practices 2",id:"best-practices-2",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,"Write Number in Expanded Form\nYou will be given a number and you will need to return it as a string in Expanded Form. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Kata.ExpandedForm(12); # Should return "10 + 2"\nKata.ExpandedForm(42); # Should return "40 + 2"\nKata.ExpandedForm(70304); # Should return "70000 + 300 + 4"\n')),(0,a.kt)("p",null,"NOTE: All numbers will be whole numbers greater than 0."),(0,a.kt)("p",null,"If you liked this kata, check out part 2!!"),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text;\n\npublic static class Kata\n{\n    public static string ExpandedForm(long num)\n    {\n      // long to string\n      string strNum = "" + num;\n      StringBuilder builder = new StringBuilder();\n      for (int i = 0; i < strNum.Length; i++)\n      {\n        if (strNum[i] > \'0\')\n        {\n          if (builder.Length != 0)\n          {\n            builder.Append(" + ");\n          }\n\n          // char to string to int\n          int n = int.Parse(strNum[i].ToString());\n          double digit = strNum.Length - i - 1;\n          digit = Math.Pow(10, digit);\n\n          string strResult = "" + (n * digit);\n          builder.Append(strResult);\n        }\n      }\n      return builder.ToString();\n    }\n}\n')),(0,a.kt)("p",null,"\ud56d\uc0c1 \uc774\ub7f0 \uc790\ub9bf\uc218 \ubb38\uc81c\uac00 \ub098\uc624\uba74 long\ud615\uc744 string\uc73c\ub85c \ubc14\uafb8\uc5b4 \uc900\ub2e4\uc74c\uc5d0 \ud480\uba74 \uc27d\uac8c \ud480 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"builder\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud480\uc5c8\uace0, \uc800\ubc88\uc5d0 \ubb38\uc81c\ub97c \ud480\ub2e4 \ubcf4\ub2c8 \ub9e8 \ucc98\uc74c\uc5d0\ub9cc \uac80\uc0ac\ub97c \ud574\uc11c \uae30\ud638\ub97c \ub123\uc5b4\uc8fc\uba74 \uc27d\uac8c \ud574\uacb0\uc774 \ub418\ub294 \ubd80\ubd84\uc774 \uc788\uc5b4\uc11c \uadf8\uac8c \uc0dd\uac01\ub098\uc11c \uadf8\ub807\uac8c \ud480\uc5b4 \ubd24\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"2019/01/05/codewars-Help-the-bookseller"},"[Codewars #13] Help the bookseller (6kyu) Best Practices 2"),"\uc5d0\uc11c \uc0ac\uc6a9\ud55c \ubc29\uc2dd"),(0,a.kt)("h2",{id:"best-practices-1"},"Best Practices 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Linq;\n\npublic static class Kata\n{\n    public static string ExpandedForm(long num)\n    {\n            var str = num.ToString();\n            return String.Join(" + ", str\n                .Select((x, i) => char.GetNumericValue(x) * Math.Pow(10, str.Length - i - 1))\n                .Where(x => x > 0));\n    }\n}\n')),(0,a.kt)("p",null,"Linq\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac04\ub2e8\ud788 \ud574\uacb0!"),(0,a.kt)("p",null,"string\uc5d0 \uc788\ub294 0 \ubcf4\ub2e4 \ud070 \ubaa8\ub4e0 \uac12\uc744 \uc804\ubd80 \uc790\ub9bf\uc218\ub300\ub85c \uacf1\ud574\uc8fc\uace0 \uadf8 \uac12\uc744 \uc870\uc778 \uc2dc\ucf1c \uad6c\ud55c\ub2e4."),(0,a.kt)("h2",{id:"best-practices-2"},"Best Practices 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\n\npublic static class Kata\n{\n  public static string ExpandedForm(long num)\n  {\n    Stack<long> parts = new Stack<long>();\n\n    for (long m = 1, n = num; n > 0; n /= 10, m *= 10)\n    {\n      long digit = n % 10;\n      if (digit > 0)\n      {\n        parts.Push(m * digit);\n      }\n    }\n\n    return string.Join(" + ", parts);\n  }\n}\n')),(0,a.kt)("p",null,"\uc774\uac70\ub294 \ud45c \uc790\uccb4\ub294 \ub9ce\uc774 \ubc1b\uc9c0 \ubabb\ud55c \ud480\uc774 \ubc29\uc2dd\uc778\ub370."),(0,a.kt)("p",null,'stack\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc77c\ub2e8 \uc790\ub9ac\uc218\ub97c \uc804\ubd80 \uad6c\ud55c\ub2e4\uc74c\uc5d0, string join\uc73c\ub85c " + "\ub97c \uc5f0\uacb0\ud558\ub294\uac8c \uc2e0\ubc15\ud55c \ubc29\uc2dd\uc778 \uac83 \uac19\uc544\uc11c \uc2e4\uc5b4 \ubd24\ub2e4.'))}p.isMDXComponent=!0}}]);