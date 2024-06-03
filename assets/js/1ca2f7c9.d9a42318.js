"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54055],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>g});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),s=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,g=u["".concat(o,".").concat(d)]||u[d]||h[d]||i;return r?t.createElement(g,c(c({ref:n},p),{},{components:r})):t.createElement(g,c({ref:n},p))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98024:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=r(58168),a=(r(96540),r(15680));const i={title:"[Codewars #39] Paul Cipher & Kevin Arnold (5kyu)",authors:["karais89"],tags:["codewars","kata"]},c=void 0,l={permalink:"/2019/01/20/codewars-Paul-Cipher-And-Kevin-Arnold",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-20-codewars-Paul-Cipher-And-Kevin-Arnold/index.md",source:"@site/blog/2019-01-20-codewars-Paul-Cipher-And-Kevin-Arnold/index.md",title:"[Codewars #39] Paul Cipher & Kevin Arnold (5kyu)",description:"Instructions",date:"2019-01-20T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 20\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:3.87,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #39] Paul Cipher & Kevin Arnold (5kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #40] Best travel (5kyu)",permalink:"/2019/01/20/codewars-Best-travel"},nextItem:{title:"[Codewars #36] Basic DeNico (5kyu)",permalink:"/2019/01/19/codewars-Basic-DeNico"}},o={authorsImageUrls:[void 0]},s=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],p={toc:s},u="wrapper";function h(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"instructions"},"Instructions"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.codewars.com/kata/57c4ed873189a5bea00007e6/train/csharp"},"\ub9c1\ud06c")),(0,a.yg)("p",null,"We need to encode a message."),(0,a.yg)("p",null,'Only alpha characters will be encoded. Non-alpha characters will be copied. So, the message " 0123. " would be encoded to " 0123. ".'),(0,a.yg)("p",null,"For alpha characters, we will follow these rulse:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"1. All alpha characters will be treated as upper case\n2. The first alpha character will not change (except for switching to upper case).\n3. All subsequent alpha characters will be shifted toward 'Z' by the\n    alphabetical position of the previous alpha character.\n    (wrap back to 'A' if 'Z' is passed)\n")),(0,a.yg)("p",null,'For example: "He1lo" would be encoded as follows:'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"H -> H (first alpha character does not change)\ne -> M (H is the previous alpha character, and is the 8th letter in the alphabet. E + 8 = M)\n1 -> 1 (non alpha characters do not change)\nl -> Q (E is the previous alpha character, and is the 5th letter in the alphabet. L + 5 = Q)\no -> A (L is the previous alpha character, and is the 12th letter in the alphabet. O + 12 = A)\n")),(0,a.yg)("p",null,'So, "He1lo" would be encoded to "HM1QA"'),(0,a.yg)("p",null,'Write two functions. One to encode and one to decode. (Decoding "HM1QA" should yield "HE1LO")'),(0,a.yg)("p",null,"For both functions, empty strings and null strings should return empty strings."),(0,a.yg)("h2",{id:"my-solution"},"My Solution"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Text;\n\nnamespace Kata\n{\n  public class PaulCipher\n  {\n    public static int GetCharOrder(char ch)\n    {\n      return (ch - 'A') + 1;\n    }\n\n    public static char MoveCharOrder(char ch, int order)\n    {\n      char moveCh = (char)(ch + order);\n      if (moveCh > 'Z')\n      {\n        int reOrder = moveCh - 'Z';\n        return (char)('A' + reOrder - 1);\n      }\n\n      if (moveCh < 'A')\n      {\n        int reOrder = 'A' - moveCh;\n        return (char)('Z' - reOrder + 1);\n      }\n\n      return moveCh;\n    }\n\n    public static string Encode(string input)\n    {\n      if (string.IsNullOrEmpty(input))\n      {\n        return string.Empty;\n      }\n\n      StringBuilder builder = new StringBuilder();\n      string upStr = input.ToUpper();\n      char prevCh = (char)0;\n      for (int i = 0; i < upStr.Length; i++)\n      {\n        char ch = upStr[i];\n        if (char.IsLetter(ch))\n        {\n          if (prevCh != (char)0)\n          {\n            int order = GetCharOrder(prevCh);\n            prevCh = ch;\n            ch = MoveCharOrder(ch, order);\n          }\n          else\n          {\n            prevCh = ch;\n          }\n        }\n        builder.Append(ch);\n      }\n      return builder.ToString();\n    }\n\n    public static string Decode(string input)\n    {\n      if (string.IsNullOrEmpty(input))\n      {\n        return string.Empty;\n      }\n\n      StringBuilder builder = new StringBuilder();\n      string upStr = input.ToUpper();\n      char prevCh = (char)0;\n      for (int i = 0; i < upStr.Length; i++)\n      {\n        char ch = upStr[i];\n        if (char.IsLetter(ch))\n        {\n          if (prevCh != (char)0)\n          {\n            int order = GetCharOrder(prevCh);\n            ch = MoveCharOrder(ch, -order);\n          }\n\n          prevCh = ch;\n        }\n        builder.Append(ch);\n      }\n      return builder.ToString();\n    }\n  }\n}\n\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uc54c\ud30c\ubcb3 \ubb38\uc790\ub9cc \uc778\ucf54\ub529 \ub418\uace0, \ub098\uba38\uc9c0\ub294 \uadf8\ub300\ub85c \ubcf5\uc0ac \ub41c\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc54c\ud30c\ubcb3\uc740 \ub300\ubb38\uc790\ub85c \ucc98\ub9ac \ub41c\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\uccab\ubc88\uc9f8 \uc54c\ud30c\ubcb3\uc740 \ubc14\ub00c\uc9c0 \uc54a\ub294\ub2e4 (\ub300\ubb38\uc790\ub85c \ucc98\ub9ac\ub418\ub294\uac83\uc744 \uc81c\uc678\ud558\uace0)"),(0,a.yg)("li",{parentName:"ul"},"\ubcc0\uacbd\ub418\ub294 \uc54c\ud30c\ubcb3\uc740 \uc774\uc804 \uc54c\ud30c\ubcb3\uc758 \uc21c\uc11c \ub9cc\ud07c \ub354\ud574\uc918\uc11c \ubcc0\uacbd\ub41c\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\ud574\ub2f9 \uae30\ub2a5\uc744 \uac00\uc9c0\ub294 \ub514\ucf54\ub354\uc640 \uc778\ucf54\ub354\ub97c \ub9cc\ub4e4\uc5b4\ub77c.")),(0,a.yg)("p",null,"\ud558\ub098\uc758 \ud568\uc218 \uc548\uc5d0 \ucc98\ub9ac\ub97c \ud558\ub824\ub2e4\uac00, \uadf8\ub0e5 \uc81c\ucd9c \ubc84\ud2bc\uc744 \ub20c\ub800\ub2e4.\n\uc774\uc804 \ubb38\uc790 \uc800\uc7a5\ud558\ub294 \uc21c\uc11c\uac00 \uc0b4\uc9dd \ub2ec\ub77c\uc11c \uc870\uae08 \uc560\uba39\uc5c8\ub2e4."),(0,a.yg)("h2",{id:"best-practices"},"Best Practices"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"namespace Kata\n{\n  public class PaulCipher\n  {\n    static string Process(string input, int direction)\n    {\n      if (string.IsNullOrEmpty(input)) return \"\";\n      var cc = input.ToUpper().ToCharArray();\n      var prevA = (char)0;\n      for (var i = 0; i < cc.Length; i++)\n      {\n        if (!char.IsLetter(cc[i])) continue;\n        if (prevA == 0) prevA = cc[i];\n        else\n        {\n          var c = cc[i] + direction*(prevA - 64);\n          if (c > 'Z' || c < 'A') c = c + -direction*('Z' - 64);\n          prevA = direction > 0 ? cc[i] : (char)c;\n          cc[i] = (char)c;\n        }\n      }\n      return new string(cc);\n    }\n\n    public static string Encode(string input)\n    {\n      return Process(input, 1);\n    }\n\n    public static string Decode(string input)\n    {\n      return Process(input, -1);\n    }\n  }\n}\n")),(0,a.yg)("p",null,"\uc774 \ud574\uacb0\ucc45\uc5d0\uc11c\ub294 \ud568\uc218 \ud558\ub098\uc5d0 \ucc98\ub9ac \ud558\uc600\ub2e4.\n\ubb38\uc790 \uc800\uc7a5\ud558\ub294 \uc21c\uc11c\ub3c4 \ub514\ucf54\ub354\uc5d0\uc11c\ub294 \ubcc0\uacbd\ub418\uae30 \uc804 \ubb38\uc790\ub97c \uc800\uc7a5 \uc778\ucf54\ub354\uc5d0\uc11c\ub294 \ubcc0\uacbd\ub41c \ubb38\uc790\ub97c \uc800\uc7a5\ud55c\ub2e4."))}h.isMDXComponent=!0}}]);