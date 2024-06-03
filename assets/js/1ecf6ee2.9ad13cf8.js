"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49808],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(t),p=r,d=c["".concat(s,".").concat(p)]||c[p]||g[p]||i;return t?a.createElement(d,l(l({ref:n},m),{},{components:t})):a.createElement(d,l({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},48251:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(58168),r=(t(96540),t(15680));const i={title:"[Codewars #44] Domain name validator (5kyu)",authors:["karais89"],tags:["codewars","kata"]},l=void 0,o={permalink:"/2019/01/23/codewars-Domain-name-validator",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-23-codewars-Domain-name-validator/index.md",source:"@site/blog/2019-01-23-codewars-Domain-name-validator/index.md",title:"[Codewars #44] Domain name validator (5kyu)",description:"Instructions",date:"2019-01-23T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 23\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:4.815,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #44] Domain name validator (5kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #49] Take a Ten Minute Walk (6kyu)",permalink:"/2019/01/24/codewars-Take-a-Ten-Minute-Walk"},nextItem:{title:"[Codewars #43] Integer triangles (5kyu)",permalink:"/2019/01/23/codewars-Integer triangles"}},s={authorsImageUrls:[void 0]},u=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"g0dm0d3&#39;s Solution",id:"g0dm0d3s-solution",level:2}],m={toc:u},c="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"instructions"},"Instructions"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.codewars.com/kata/5893933e1a88084be10001a3/train/csharp"},"\ub9c1\ud06c")),(0,r.yg)("p",null,"In this kata you have to create a domain name validator mostly compliant with RFC 1035, RFC 1123, and RFC 2181"),(0,r.yg)("p",null,"For purposes of this kata, following rules apply:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Domain name may contain subdomains (levels), hierarchically separated by . (period) character"),(0,r.yg)("li",{parentName:"ul"},"Domain name must not contain more than 127 levels, including top level (TLD)"),(0,r.yg)("li",{parentName:"ul"},"Domain name must not be longer than 253 characters (RFC specifies 255, but 2 characters are reserved for trailing dot and null character for root level)"),(0,r.yg)("li",{parentName:"ul"},"Level names must be composed out of lowercase and uppercase ASCII letters, digits and - (minus sign) character"),(0,r.yg)("li",{parentName:"ul"},"Level names must not start or end with - (minus sign) character"),(0,r.yg)("li",{parentName:"ul"},"Level names must not be longer than 63 characters"),(0,r.yg)("li",{parentName:"ul"},"Top level (TLD) must not be fully numerical")),(0,r.yg)("p",null,"Additionally, in this kata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Domain name must contain at least one subdomain (level) apart from TLD"),(0,r.yg)("li",{parentName:"ul"},"Top level validation must be naive - ie. TLDs nonexistent in IANA register are still considered valid as long as they adhere to the rules given above.\nThe validation function accepts string with the full domain name and returns boolean value indicating whether the domain name is valid or not.")),(0,r.yg)("p",null,"Examples:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"validate('codewars') == False\nvalidate('g.co') == True\nvalidate('codewars.com') == True\nvalidate('CODEWARS.COM') == True\nvalidate('sub.codewars.com') == True\nvalidate('codewars.com-') == False\nvalidate('.codewars.com') == False\nvalidate('example@codewars.com') == False\nvalidate('127.0.0.1') == False\n")),(0,r.yg)("h2",{id:"my-solution"},"My Solution"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.RegularExpressions;\npublic class DomainNameValidator {\n  public bool validate(string domain) {\n    Console.WriteLine(domain);\n    // Domain name must not be longer than 253 characters (RFC specifies 255, but 2 characters are reserved for trailing dot and null character for root level)\n    if (domain.Length > 253)\n    {\n      return false;\n    }\n    string[] domainSplitDots = domain.Split(".");\n    // Domain name must contain at least one subdomain (level) apart from TLD\n    if (domainSplitDots.Length <= 1)\n    {\n      return false;\n    }\n    // all integer check\n    bool isAllInteger = true;\n    for (int i = 0; i < domainSplitDots.Length; i++)\n    {\n      string str = domainSplitDots[i];\n      int domainInteger = 0;\n      if (!int.TryParse(str, out domainInteger))\n      {\n         isAllInteger = false;\n      }\n    }\n    for (int i = 0; i < domainSplitDots.Length; i++)\n    {\n      string str = domainSplitDots[i];\n      int domainInteger = 0;\n      if (isAllInteger && int.TryParse(str, out domainInteger))\n      {\n        // Domain name must not contain more than 127 levels, including top level (TLD)\n        if (domainInteger >= 127)\n        {\n          return false;\n        }\n      }\n      else\n      {\n        // Level names must not be longer than 63 characters\n        if (str.Length > 63)\n        {\n          return false;\n        }\n        // Level names must be composed out of lowercase and uppercase ASCII letters, digits and - (minus sign) character\n        // https://stackoverflow.com/questions/1181419/verifying-that-a-string-contains-only-letters-in-c-sharp\n        bool isMatch = Regex.IsMatch(str, @"^[a-zA-Z0-9-]+$");\n        if (!isMatch)\n        {\n          Console.WriteLine(str);\n          return false;\n        }\n        // Level names must not start or end with - (minus sign) character\n        if (str.StartsWith("-") || str.EndsWith("-"))\n        {\n          Console.WriteLine(str);\n          return false;\n        }\n      }\n    }\n    // where is rules??\n    if (!isAllInteger)\n    {\n      string str = domainSplitDots[domainSplitDots.Length-1];\n      int ret = 0;\n      if (int.TryParse(str, out ret))\n      {\n        return false;\n      }\n    }\n    return true;\n  }\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \uc774\ub984 \uaddc\uce59",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\uc810(.) \uae30\ud638\ub85c \ub3c4\uba54\uc778\uc774 \uad6c\ubd84\ub41c\ub2e4."),(0,r.yg)("li",{parentName:"ul"},"\ub808\ubca8\uc740 127 \uc774\uc0c1\uc744 \ud3ec\ud568\ud560 \uc218 \uc5c6\ub2e4."),(0,r.yg)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \uc774\ub984\uc740 253 \uae00\uc790\ubcf4\ub2e4 \ubc18\ub4dc\uc2dc \uc791\uc544\uc57c \ud55c\ub2e4."),(0,r.yg)("li",{parentName:"ul"},"\ub808\ubca8 \uc774\ub984\uc740 \uc18c\ubb38\uc790, \ub300\ubb38\uc790, \uc544\uc2a4\ud0a4 \ubb38\uc790, \uc22b\uc790 \ubc0f \ub300\uc26c(-) \ubb38\uc790\ub85c \uad6c\uc131\ub418\uc5b4\uc57c \ud55c\ub2e4."),(0,r.yg)("li",{parentName:"ul"},"\ub808\ubca8 \uc774\ub984\uc740 \ub300\uc26c(-)\ub85c \uc2dc\uc791\ud558\uac70\ub098 \ub05d\ub0a0 \uc218 \uc5c6\ub2e4."),(0,r.yg)("li",{parentName:"ul"},"\ub808\ubca8 \uc774\ub984\uc740 63 \uae00\uc790\ub97c \ucd08\uacfc\ud560 \uc218 \uc5c6\ub2e4."),(0,r.yg)("li",{parentName:"ul"},"\ucd5c\uc0c1\uc704 \ub808\ubca8\uc740 \uc644\uc804\ud788 \uc22b\uc790\uc5ec\uc57c \ud55c\ub2e4."),(0,r.yg)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \uc774\ub984\uc740 TLD\ub97c \uc81c\uc678\ud55c \ud558\ub098 \uc774\uc0c1\uc758 \ud558\uc704 \ub3c4\uba54\uc778\uc774 \ud3ec\ud568\ub418\uc5b4\uc57c \ud55c\ub2e4."),(0,r.yg)("li",{parentName:"ul"},"\ucd5c\uc0c1\uc704 \uc720\ud6a8\uc131 \uac80\uc0ac\ub294 \uc21c\uc9c4\ud574\uc57c\ud569\ub2c8\ub2e4. \uc989. IANA \ub4f1\ub85d\ubd80\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 TLD\ub294 \uc704\uc5d0 \uc8fc\uc5b4\uc9c4 \uaddc\uce59\uc744 \uc900\uc218\ud558\ub294 \ud55c \uc720\ud6a8\ud55c \uac83\uc73c\ub85c \uac04\uc8fc\ub429\ub2c8\ub2e4."))),(0,r.yg)("li",{parentName:"ul"},"\ubb38\uc81c\ub97c \uc798\ubabb \uc774\ud574\ud574\uc11c \uc798\ubabb \ud47c \ubd80\ubd84\uc774 \uc788\ub2e4."),(0,r.yg)("li",{parentName:"ul"},"127 leves \ubd80\ubd84\uc744 \uc798\ubabb \uc774\ud574 \ud588\uc74c.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\uc815\uaddc \ud45c\ud604\uc2dd\uc740 \ub098\uc911\uc5d0 \ud3ec\uc2a4\ud2b8\ub85c \uc815\ub9ac\ub97c \ud574\uc57c \uaca0\ub2e4.")),(0,r.yg)("h2",{id:"best-practices"},"Best Practices"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.RegularExpressions;\npublic class DomainNameValidator {\n  public bool validate(string domain) {\n    if (domain.Length > 253)\n      return false;\n    Regex re = new Regex(@"^(?!-)[a-z0-9-]{1,63}(?<!-)(?:\\.(?!-)[a-z0-9-]{1,63}(?<!-)){0,125}\\.(?!-)(?![0-9]+$)[a-z0-9-]{1,63}(?<!-)$", RegexOptions.IgnoreCase);\n    Match m = re.Match(domain);\n    return m.Success;\n  }\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\uc815\uaddc \ud45c\ud604\uc2dd \uad00\ub828 \ubb38\uc81c\ub97c \ub9ce\uc774 \ud478\ub294 \uac83 \uac19\ub2e4."),(0,r.yg)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \uaddc\uce59\uac19\uc740\uac74 \ud655\uc2e4\ud788 \uc815\uaddc\ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub294\uac8c \ub9de\ub2e4.")),(0,r.yg)("h2",{id:"g0dm0d3s-solution"},"g0dm0d3's Solution"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.RegularExpressions;\nusing System.Linq;\npublic class DomainNameValidator {\n  public bool validate(string domain) {\n    if (domain.Length < 3 || domain.Length > 253) return false;\n    var levels = domain.Split(\'.\');\n    if (levels.Count() < 2 || levels.Count() > 127) return false;\n    var zone = levels.Last();\n    if (Regex.IsMatch(zone, @"^[0-9]+$")) return false;\n    foreach (var level in levels) {\n      if (level.Length > 63) return false;\n      if (!Regex.IsMatch(level, @"^[a-zA-Z0-9\\-]+$")) return false;\n      if (level.StartsWith("-") || level.EndsWith("-")) return false;\n    }\n    return true;\n  }\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\ud45c \uc790\uccb4\ub294 \ubc1b\uc9c0 \ubabb\ud55c \ud574\uacb0\ucc45\uc774\ub2e4."),(0,r.yg)("li",{parentName:"ul"},"\uadf8\ub098\ub9c8 \uac00\uc7a5 \uc774\ud574\ud558\uae30 \uc26c\uc6b4 \ucf54\ub4dc\uc778\uac83 \uac19\uc544\uc11c \uac00\uc838\uc654\ub2e4.")))}g.isMDXComponent=!0}}]);