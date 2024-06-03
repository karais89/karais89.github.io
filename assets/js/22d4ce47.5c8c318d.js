"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3060],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),y=a,g=u["".concat(p,".").concat(y)]||u[y]||c[y]||i;return t?r.createElement(g,o(o({ref:n},m),{},{components:t})):r.createElement(g,o({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},13398:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const i={title:"[HackerRank #18] Implementation - Migratory Birds",authors:["karais89"],tags:["hackerrank"]},o=void 0,l={permalink:"/2017/11/15/HackerRank-Implementation-Migratory-Birds",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2017-11-15-HackerRank-Implementation-Migratory-Birds/index.md",source:"@site/blog/2017-11-15-HackerRank-Implementation-Migratory-Birds/index.md",title:"[HackerRank #18] Implementation - Migratory Birds",description:"\ubb38\uc81c \uc694\uc57d",date:"2017-11-15T00:00:00.000Z",formattedDate:"2017\ub144 11\uc6d4 15\uc77c",tags:[{label:"hackerrank",permalink:"/tags/hackerrank"}],readingTime:2.28,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[HackerRank #18] Implementation - Migratory Birds",authors:["karais89"],tags:["hackerrank"]},prevItem:{title:"[HackerRank #19] Implementation - Day of the Programmer",permalink:"/2017/11/16/HackerRank-Implementation-Day-of-the-Programmer"},nextItem:{title:"[HackerRank #17] Implementation - Divisible Sum Pairs",permalink:"/2017/11/14/HackerRank-Implementation-Divisible-Sum-Pairs"}},p={authorsImageUrls:[void 0]},s=[{value:"\ubb38\uc81c \uc694\uc57d",id:"\ubb38\uc81c-\uc694\uc57d",level:2},{value:"\ub0b4 \uc18c\uc2a4",id:"\ub0b4-\uc18c\uc2a4",level:2},{value:"StefanK\uc758 \ub2f5\uc548",id:"stefank\uc758-\ub2f5\uc548",level:2},{value:"\ub290\ub080\uc810",id:"\ub290\ub080\uc810",level:2}],m={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\ubb38\uc81c-\uc694\uc57d"},"\ubb38\uc81c \uc694\uc57d"),(0,a.yg)("p",null,"n \ub9c8\ub9ac\uc758 \uc0c8 \ubb34\ub9ac\uac00 \ub300\ub959\uc744 \ub0a0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.yg)("p",null,"\uac01 \uc0c8\ub294 \uc720\ud615\uc774 \uc788\uc73c\uba70, \ub2e4\ub978 \uc720\ud615\uc740 ID \ubc88\ud638 1,2,3,4,5\ub85c \uc9c0\uc815\ub429\ub2c8\ub2e4."),(0,a.yg)("p",null,"\uc0c8 \ubb34\ub9ac\uc5d0\uc11c \uac00\uc7a5 \uc77c\ubc18\uc801\uc73c\ub85c \ub9ce\uc774 \ubcf4\uc720\ud558\uace0 \uc788\ub294 \ubb34\ub9ac\uc758 \uc720\ud615\uc744 \ucd9c\ub825\ud558\uace0, \ub9cc\uc57d \uc720\ud615\uc758 \uac1c\uc218\uac00 \uac19\uc73c\uba74, \uc720\ud615\uc758 \uac1c\uc218\uc758 \uc22b\uc790\uac00 \uc791\uc740 \uac83\uc744 \ucd9c\ub825\ud558\uc138\uc694."),(0,a.yg)("p",null,"Sample Input"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"6\n1 4 4 4 5 3\n")),(0,a.yg)("p",null,"Sample Output 0"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"4\n")),(0,a.yg)("p",null,"\uc124\uba85"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Type 1: 1 bird"),(0,a.yg)("li",{parentName:"ul"},"Type 2: 0 birds"),(0,a.yg)("li",{parentName:"ul"},"Type 3: 1 bird"),(0,a.yg)("li",{parentName:"ul"},"Type 4: 3 birds"),(0,a.yg)("li",{parentName:"ul"},"Type 5: 1 bird")),(0,a.yg)("p",null,"\uac00\uc7a5 \ub192\uc740 \ube48\ub3c4\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc720\ud615 \ubc88\ud638\ub294 4 \uc720\ud615\uc774\ubbc0\ub85c \uc751\ub2f5\uc73c\ub85c 4\ub97c \uc778\uc1c4\ud569\ub2c8\ub2e4."),(0,a.yg)("h2",{id:"\ub0b4-\uc18c\uc2a4"},"\ub0b4 \uc18c\uc2a4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.IO;\nusing System.Linq;\nclass Solution {\n\n    static int migratoryBirds(int n, int[] ar) {\n        // Complete this function\n        int[] typeCount = new int[5];        \n        for (int i = 0; i < n; i++)\n        {\n            typeCount[ar[i]-1]++;\n        }\n        \n        int maxIndex = 0;\n        int max = typeCount[0];\n        for (int i = 1; i < typeCount.Length; i++)\n        {\n            if (typeCount[i] > max)\n            {\n                maxIndex = i;\n                max = typeCount[i];\n            }\n        }        \n        return maxIndex+1;\n    }\n\n    static void Main(String[] args) {\n        int n = Convert.ToInt32(Console.ReadLine());\n        string[] ar_temp = Console.ReadLine().Split(' ');\n        int[] ar = Array.ConvertAll(ar_temp,Int32.Parse);\n        int result = migratoryBirds(n, ar);\n        Console.WriteLine(result);\n    }\n}\n")),(0,a.yg)("h2",{id:"stefank\uc758-\ub2f5\uc548"},"StefanK\uc758 \ub2f5\uc548"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"import java.util.*;\n\npublic class Solution {\n\n    public static void main(String[] args) {\n        Scanner in = new Scanner(System.in);\n        int n = in.nextInt();\n        int[] types = new int[n];\n        for(int arr_i=0; arr_i < n; arr_i++){\n            types[arr_i] = in.nextInt();\n        }\n        int[] frequencies = new int[6]; //A\n        for (int i = 0; i < types.length; i++) { //B\n            frequencies[types[i]] += 1; //C\n        }\n        int mostCommon = 0;\n        for (int i = 1; i < frequencies.length; i++) { //D\n            if (frequencies[mostCommon] < frequencies[i]) {\n                mostCommon = i; //E\n            }\n        }\n        System.out.println(mostCommon);\n    }\n}\n")),(0,a.yg)("h2",{id:"\ub290\ub080\uc810"},"\ub290\ub080\uc810"),(0,a.yg)("p",null,"\ubc30\uc5f4\uc744 \uc0dd\uc131\ud558\uace0 \uadf8 \ubc30\uc5f4\uc5d0 \ud0c0\uc785\uc744 \uc800\uc7a5\ud558\uba74 \ub05d\ub098\ub294 \ubb38\uc81c"),(0,a.yg)("p",null,"\ub0b4\uac00 \ud47c \ubc29\uc2dd\uc5d0\uc11c \uad73\uc774 max \uac12\uc744 \uc800\uc7a5\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4\ub294\uac78 \ubd24\ub2e4."),(0,a.yg)("p",null,"\uc5b4\ucc28\ud53c maxIndex \uac12\uc744 \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uadf8 \uac12\uc73c\ub85c \ube44\uad50\ub97c \ud558\uba74 \ub41c\ub2e4."))}c.isMDXComponent=!0}}]);