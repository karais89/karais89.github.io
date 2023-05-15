"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[37836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,d=p["".concat(c,".").concat(g)]||p[g]||h[g]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},42251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"[Codewars #38] Play with two Strings (5kyu)",authors:["karais89"],tags:["codewars","kata"]},o=void 0,s={permalink:"/2019/01/19/codewars-Play-with-two-Strings",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-19-codewars-Play-with-two-Strings/index.md",source:"@site/blog/2019-01-19-codewars-Play-with-two-Strings/index.md",title:"[Codewars #38] Play with two Strings (5kyu)",description:"Instructions",date:"2019-01-19T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 19\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:2.095,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #38] Play with two Strings (5kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #37] Maze Runner (6kyu)",permalink:"/2019/01/19/codewars-Maze-Runner"},nextItem:{title:"[Codewars #35] Street Fighter 2 - Character Selection (6kyu)",permalink:"/2019/01/19/codewars-Street-Fighter-2-Character-Selection"}},c={authorsImageUrls:[void 0]},l=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/56c30ad8585d9ab99b000c54/train/csharp"},"\ub9c1\ud06c")),(0,a.kt)("p",null,"Your task is to Combine two Strings. But consider the rule..."),(0,a.kt)("p",null,"By the way you don't have to check errors or incorrect input values, every thing is ok without bad tricks, only two input strings and as result one output string;-)..."),(0,a.kt)("p",null,"And here's the rule:\nInput Strings 'a' and 'b': For every character in string 'a' swap the casing of every occurance of the same character in string 'b'. Then do the same casing swap with the inputs reversed. Return a single string consisting of the changed version of 'a' followed by the changed version of 'b'. A char of 'a' is in 'b' regardless if it's in upper or lower case - see the testcases too.\nI think that's all;-)..."),(0,a.kt)("p",null,"Some easy examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: "abc" and "cde" => Output: "abCCde"\nInput: "abab" and "bababa" => Output: "ABABbababa"\nInput: "ab" and "aba" => Output: "aBABA"\n')),(0,a.kt)("p",null,"There are some static tests at the beginning and many random tests if you submit your solution."),(0,a.kt)("p",null,"Hope you have fun:-)!"),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace smile67Kata\n{\n    using System;\n    using System.Text;\n\n    public class Kata\n    {\n        public string SwapUpperOrLower(string a, string b)\n        {\n            StringBuilder aBuilder = new StringBuilder();\n            for (int i = 0; i < a.Length; i++)\n            {\n              int equalCnt = 0;\n              for (int j = 0; j < b.Length; j++)\n              {\n                if (char.ToUpper(a[i]) == char.ToUpper(b[j]))\n                {\n                  equalCnt++;\n                }\n              }\n\n              char inChar = a[i];\n              if (equalCnt % 2 != 0)\n              {\n                inChar = char.IsLower(inChar) ? char.ToUpper(inChar) : char.ToLower(inChar);\n              }\n              aBuilder.Append(inChar);\n            }\n            return aBuilder.ToString();\n        }\n\n        public string workOnStrings(string a, string b)\n        {\n            // a, b\n            string newA = SwapUpperOrLower(a, b);\n\n            // b, a\n            string newB = SwapUpperOrLower(b, a);\n\n            return newA+newB;\n        }\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a\uc640 b\uc5d0 \ub300\ud574\uc11c \ubb38\uc790\uc5f4 a\uc758 \ubaa8\ub4e0 \ubb38\uc790\uc5d0 \ub300\ud574 \ubb38\uc790\uc5f4 b\uc5d0 \uc788\ub294 \ub3d9\uc77c\ud55c \ubb38\uc790\uac00 \uc788\uc744\ub54c \ub300\uc18c \ubb38\uc790\ub97c \ubc14\uafbc\ub2e4 \uc2a4\uc704\uce6d \ud558\uba74\uc11c \ubc14\uafd4\uc900\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"b\ub3c4 \ub611\uac19\uc740 \uc791\uc5c5\uc744 \uc9c4\ud589\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"a+b\ub97c \ud569\uce5c\ud6c4 \ub9ac\ud134")),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace smile67Kata\n{\n    using System;\n    using System.Linq;\n    public class Kata\n    {\n        public char needswitch(string s,char c){\n          return !(s.ToLower().Contains(char.ToLower(c))&&s.ToLower().Count(y=>y==char.ToLower(c))%2==1)\n                 ? c : c>96 ? char.ToUpper(c) : char.ToLower(c);\n        }\n        public string workOnStrings(string a, string b){\n          return string.Join("",a.Select(x=>needswitch(b,x))) + string.Join("",b.Select(x=>needswitch(a,x)));\n        }\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linq \uc0ac\uc6a9"),(0,a.kt)("li",{parentName:"ul"},"\uc544\uc2a4\ud0a4 \ucf54\ub4dc 97 \ubd80\ud130 \uc18c\ubb38\uc790 a")))}h.isMDXComponent=!0}}]);