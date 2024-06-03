"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11426],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=a,d=c["".concat(p,".").concat(g)]||c[g]||y[g]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},28884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const o={title:"[Codewars #64] Growth of a Population (7kyu)",authors:["karais89"],tags:["codewars","kata"]},i=void 0,l={permalink:"/2019/01/31/codewars-Growth-of-a-Population",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-31-codewars-Growth-of-a-Population/index.md",source:"@site/blog/2019-01-31-codewars-Growth-of-a-Population/index.md",title:"[Codewars #64] Growth of a Population (7kyu)",description:"Instructions",date:"2019-01-31T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 31\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:2.145,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #64] Growth of a Population (7kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #63] Find the smallest integer in the array (8kyu)",permalink:"/2019/01/31/codewars-Find the smallest-integer-in-the-array"},nextItem:{title:"[Codewars #62] Exes and Ohs (7kyu)",permalink:"/2019/01/30/codewars-Exes-and-Ohs"}},p={authorsImageUrls:[void 0]},s=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices 1",id:"best-practices-1",level:2},{value:"Best Practices 2",id:"best-practices-2",level:2}],u={toc:s},c="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"instructions"},"Instructions"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/csharp"},"\ub9c1\ud06c")),(0,a.yg)("p",null,"In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"At the end of the first year there will be:\n1000 + 1000 * 0.02 + 50 => 1070 inhabitants\n\nAt the end of the 2nd year there will be:\n1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)\n\nAt the end of the 3rd year there will be:\n1141 + 1141 * 0.02 + 50 => 1213\n\nIt will need 3 entire years.\n")),(0,a.yg)("p",null,"More generally given parameters:"),(0,a.yg)("p",null,"p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)"),(0,a.yg)("p",null,"the function nb_year should return n number of entire years needed to get a population greater or equal to p."),(0,a.yg)("p",null,"aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Examples:\nnb_year(1500, 5, 100, 5000) -> 15\nnb_year(1500000, 2.5, 10000, 2000000) -> 10\n")),(0,a.yg)("p",null,"Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02."),(0,a.yg)("h2",{id:"my-solution"},"My Solution"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\nclass Arge {\n\n    public static int NbYear(int p0, double percent, int aug, int p) {\n        // your code\n        int population = p0;\n        double per = percent / 100;\n        int year = 0;\n\n        while (true)\n        {\n          population += (int)(population * per) + aug;\n          year++;\n\n          if (population >= p)\n          {\n            return year;\n          }\n        }\n        return year;\n    }\n}\n")),(0,a.yg)("h2",{id:"best-practices-1"},"Best Practices 1"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\nclass Arge {\n\n    public static int NbYear(int p0, double percent, int aug, int p) {\n        int year;\n        for (year = 0; p0 < p; year++)\n          p0 += (int)(p0*percent/100) + aug;\n        return year;\n    }\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"for\ubb38\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud574\uacb0")),(0,a.yg)("h2",{id:"best-practices-2"},"Best Practices 2"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\n\nclass Arge\n{\n    public static int NbYear(int p0, double percent, int aug, int p)\n    {\n        int expectedPopulation = p;\n\n        int cityPopulation = p0;\n        int newInhabitantsPerYear = aug;\n        double increasePerYear = percent / 100;\n\n        int years = 0;\n\n        while(cityPopulation < expectedPopulation)\n        {\n            cityPopulation += (int)(cityPopulation * increasePerYear) + newInhabitantsPerYear;\n\n            years++;\n        }\n\n        return years;\n    }\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ubcc0\uc218 \ub124\uc774\ubc0d\uc774 \uad1c\ucc2e\uc544\ubcf4\uc5ec\uc11c, \uae30\ub85d\ud574\ubd04.")))}y.isMDXComponent=!0}}]);