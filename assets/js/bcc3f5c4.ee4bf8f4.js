"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1768],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(t),m=o,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||a;return t?n.createElement(d,s(s({ref:r},p),{},{components:t})):n.createElement(d,s({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=g;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},94674:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={title:"[Codewars #21] Parse HTML/CSS Colors (6kyu)",authors:["karais89"],tags:["codewars","kata"]},s=void 0,i={permalink:"/2019/01/09/codewars-Parse-HTML-CSS-Colors",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-09-codewars-Parse-HTML-CSS-Colors/index.md",source:"@site/blog/2019-01-09-codewars-Parse-HTML-CSS-Colors/index.md",title:"[Codewars #21] Parse HTML/CSS Colors (6kyu)",description:"Instructions",date:"2019-01-09T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 9\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:2.8,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #21] Parse HTML/CSS Colors (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #23] Sum The Tree (6kyu)",permalink:"/2019/01/10/codewars-Sum-The-Tree"},nextItem:{title:"[Codewars #22] longest_palindrome (6kyu)",permalink:"/2019/01/09/codewars-longest-palindrome"}},l={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"instructions"},"Instructions"),(0,o.kt)("p",null,"In this kata you parse RGB colors represented by strings. The formats are primarily used in HTML and CSS. Your task is to implement a function which takes a color as a string and returns the parsed color as a map (see Examples)."),(0,o.kt)("p",null,"Input:\nThe input string represents one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'6-digit hexadecimal - "#RRGGBB"\ne.g. "#012345", "#789abc", "#FFA077"\nEach pair of digits represents a value of the channel in hexadecimal: 00 to FF'),(0,o.kt)("li",{parentName:"ul"},'3-digit hexadecimal - "#RGB"\ne.g. "#012", "#aaa", "#F5A"\nEach digit represents a value 0 to F which translates to 2-digit hexadecimal: 0->00, 1->11, 2->22, and so on.'),(0,o.kt)("li",{parentName:"ul"},'Preset color name\ne.g. "red", "BLUE", "LimeGreen"\nYou have to use the predefined map PRESET_COLORS (JavaScript, Python, Ruby), presetColors (Java, C#, Haskell), or preset-colors (Clojure). The keys are the names of preset colors in lower-case and the values are the corresponding colors in 6-digit hexadecimal (same as 1. "#RRGGBB").')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Parse("#80FFA0") === new RGB(128, 255, 160))\nParse("#3B7") === new RGB( 51, 187, 119))\nParse("LimeGreen") === new RGB( 50, 205, 50))\n\n// RGB struct is defined as follows:\nstruct RGB\n{\n    public byte r, g, b;\n    public RGB(byte r, byte g, byte b);\n}\n')),(0,o.kt)("h2",{id:"my-solution"},"My Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\n\nclass HtmlColorParser\n{\n    private readonly IDictionary<string, string> presetColors;\n\n    public HtmlColorParser(IDictionary<string, string> presetColors)\n    {\n        this.presetColors = presetColors;\n    }\n\n    public RGB Parse(string color)\n    {\n      string sixDigit = color;\n      if (color.Substring(0, 1) == "#")\n      {\n        if (color.Length == 4)\n        {\n          string r = color.Substring(1, 1);\n          string g = color.Substring(2, 1);\n          string b = color.Substring(3, 1);\n\n          sixDigit = $"#{r}{r}{g}{g}{b}{b}";\n        }\n      }\n      else\n      {\n        string colorLow = color.ToLower();\n        sixDigit = presetColors[colorLow];\n      }\n\n      byte[] rgb = new byte[3];\n      for (int i = 0; i < rgb.Length; i++)\n      {\n        string hex = sixDigit.Substring((i*2) + 1, 2);\n        rgb[i] = Convert.ToByte(hex, 16);\n      }\n\n      return new RGB(rgb[0], rgb[1], rgb[2]);\n    }\n}\n\n')),(0,o.kt)("p",null,"3-digit\uc77c\ub54c \uad73\uc774 Substring\uc73c\ub85c \ubcc0\ud658 \ud558\ub098\ud558\ub098 \ubc1b\uc544\uc640\uc11c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0, \ubc14\ub85c \uc778\ub371\uc2a4\uc5d0 \uc811\uadfc\ud558\uba74 \ub418\ub294\ub370.. \uc4f8\ub370 \uc5c6\ub294 \uc9d3\uc744 \ud588\ub124.."),(0,o.kt)("h2",{id:"best-practices"},"Best Practices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\n\nclass HtmlColorParser\n{\n    private readonly IDictionary<string, string> presetColors;\n\n    public HtmlColorParser(IDictionary<string, string> presetColors)\n    {\n        this.presetColors = presetColors;\n    }\n\n    public RGB Parse(string color)\n    {\n        color = color.ToLower();\n        string hex;\n\n        if (presetColors.ContainsKey(color))\n            hex = presetColors[color];\n        else if (color.Length == 4)\n            hex = string.Format("#{0}{0}{1}{1}{2}{2}", color[1], color[2], color[3]);\n        else\n            hex = color;\n\n        var n = Convert.ToInt32(hex.Substring(1), 16);\n        return new RGB((byte)((n >> 16) & 0xFF), (byte)((n >> 8) & 0xFF), (byte)(n & 0xFF));\n    }\n}\n  \n')),(0,o.kt)("p",null,"\uc81c\uc77c \ub192\uc740 \ud45c\uc774\uae34 \ud55c\ub370 \ud45c \uc790\uccb4\uac00 2\uac1c \ubc16\uc5d0 \uc5c6\uc5b4\uc11c \ucd94\uac00 \uac80\uc99d\uc774 \ud544\uc694\ud558\ub2e4.\n\uc9c0\uae08 \ubb38\uc81c \ud478\ub294\uac8c \ucd5c\uc2e0 \ubb38\uc81c \uc704\uc8fc\ub85c \ubb38\uc81c\uac00 \uc8fc\uc5b4\uc9c0\ub098 \uc2f6\ub2e4.."),(0,o.kt)("p",null,"16\uc9c4\uc218\ub97c RGB \uac12\uc73c\ub85c \ubcc0\ud658\ud560\ub54c\n\uc5ec\uae30\uc11c\ub294 \uadf8\ub0e5 \ubc14\ub85c \uc2a4\ud2b8\ub9c1\uac12 \uc804\ubd80\ub97c int\ub85c \ubcc0\ud658\ud588\ub2e4.\n\uadf8\ub9ac\uace0 \ube44\ud2b8 \uc5f0\uc0b0\uc790\uc640 & \uc5f0\uc0b0\uc790\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac01 \uac12\ub4e4\uc744 \ucd94\ucd9c\ud574\uc11c \uc0ac\uc6a9 \ud568. \uc774 \ubd80\ubd84\uc744 \uc880 \ubcfc \ud544\uc694\uac00 \uc788\uc744 \ub4ef\ud558\ub2e4."))}u.isMDXComponent=!0}}]);