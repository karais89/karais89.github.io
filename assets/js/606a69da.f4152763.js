"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28514],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return t?n.createElement(y,o(o({ref:r},l),{},{components:t})):n.createElement(y,o({ref:r},l))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79783:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const s={title:"[Codewars #57] Rock Paper Scissors! (8kyu)",authors:["karais89"],tags:["codewars","kata"]},o=void 0,i={permalink:"/2019/01/27/codewars-Rock-Paper-Scissors",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-27-codewars-Rock-Paper-Scissors/index.md",source:"@site/blog/2019-01-27-codewars-Rock-Paper-Scissors/index.md",title:"[Codewars #57] Rock Paper Scissors! (8kyu)",description:"Instructions",date:"2019-01-27T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 27\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:1.205,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #57] Rock Paper Scissors! (8kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #59] Double Char (8kyu)",permalink:"/2019/01/28/codewars-Double-Char"},nextItem:{title:"[Codewars #58] Take a Number And Sum Its Digits Raised To The Consecutive Powers And (6kyu)",permalink:"/2019/01/27/codewars-Take-a-Number-And-Sum-Its-Digits-Raised-To-The-Consecutive-Powers-And"}},c={authorsImageUrls:[void 0]},p=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],l={toc:p},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/rock-paper-scissors/train/csharp"},"\ub9c1\ud06c")),(0,a.kt)("p",null,"Rock Paper Scissors\nLet's play! You have to return which player won! In case of a draw return Draw!."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rps('scissors','paper') // Player 1 won!\nrps('scissors','rock') // Player 2 won!\nrps('paper','paper') // Draw!\n")),(0,a.kt)("h2",{id:"my-solution"},"My Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text.RegularExpressions;\n\npublic class Kata\n{\n  public int getState(string str)\n  {\n    switch (str)\n    {\n      case "rock": return 1;\n      case "scissors": return 2;\n      case "paper": return 3;\n    }\n    return 0;\n  }\n\n  public string Rps(string p1, string p2)\n  {\n    // "rock", "scissors", "paper"\n    int diff = getState(p1) - getState(p2);\n    if (diff == -1 || diff == 2)\n    {\n      return "Player 1 won!";\n    }\n    else if (diff == 0)\n    {\n      return "Draw!";\n    }\n\n    return "Player 2 won!";\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac00\ub3c5\uc131\uc774 \ub5a8\uc5b4\uc9c4\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubca0\uc2a4\ud2b8 \uc194\ub8e8\uc158 \ubc29\uc2dd\ucc98\ub7fc \ucf00\uc774\uc2a4 \ubc14\uc774 \ucf00\uc774\uc2a4 \ubcc4\ub85c \uc2a4\ud2b8\ub9c1\uc744 \uad6c\ud574\uc8fc\ub294\uac8c \ub354 \ub098\uc740 \ubc29\ubc95 \uc778\ub4ef..")),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text.RegularExpressions;\n\npublic class Kata\n{\n  public string Rps(string p1, string p2)\n  {\n    if (p1 == p2)\n      return "Draw!";\n\n    if (((p1 == "rock") && (p2 == "scissors")) ||\n        ((p1 == "scissors") && (p2 == "paper")) ||\n        ((p1 == "paper") && (p2 == "rock")))\n    {\n      return "Player 1 won!";\n    }\n    else\n    {\n      return "Player 2 won!";\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);