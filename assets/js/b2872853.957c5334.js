"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),y=i,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"[Codewars #36] Basic DeNico (5kyu)",authors:["karais89"],tags:["codewars","kata"]},s=void 0,o={permalink:"/2019/01/19/codewars-Basic-DeNico",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-19-codewars-Basic-DeNico/index.md",source:"@site/blog/2019-01-19-codewars-Basic-DeNico/index.md",title:"[Codewars #36] Basic DeNico (5kyu)",description:"Instructions",date:"2019-01-19T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 19\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:2.91,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #36] Basic DeNico (5kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #39] Paul Cipher & Kevin Arnold (5kyu)",permalink:"/2019/01/20/codewars-Paul-Cipher-And-Kevin-Arnold"},nextItem:{title:"[Codewars #37] Maze Runner (6kyu)",permalink:"/2019/01/19/codewars-Maze-Runner"}},c={authorsImageUrls:[void 0]},l=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/basic-denico/train/csharp"},"\ub9c1\ud06c")),(0,i.kt)("p",null,"Description:\nTask\nWrite a function deNico/de_nico() that accepts two parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"key/$key - string consists of unique letters and digits"),(0,i.kt)("li",{parentName:"ul"},"message/$message - string with encoded message\nand decodes the message using the key.")),(0,i.kt)("p",null,"First create a numeric key basing on the provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order."),(0,i.kt)("p",null,"For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).\nLet's decode cseerntiofarmit on using our crazy key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1 2 3 4 5\n---------\nc s e e r\nn t i o f\na r m i t\n  o n\n")),(0,i.kt)("p",null,"After using the key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2 3 1 5 4\n---------\ns e c r e\nt i n f o\nr m a t i\no n\n")),(0,i.kt)("p",null,"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The message is never shorter than the key."),(0,i.kt)("li",{parentName:"ul"},"Don't forget to remove trailing whitespace after decoding the message")),(0,i.kt)("p",null,"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'deNico("crazy", "cseerntiofarmit on ") => "secretinformation"\ndeNico("abc", "abcd") => "abcd"\ndeNico("ba", "2143658709") => "1234567890"\ndeNico("key", "eky") => "key"\nCheck the test cases for more examples.\n')),(0,i.kt)("p",null,"Related Kata\nBasic Nico - encode"),(0,i.kt)("h2",{id:"my-solution"},"My Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Text;\nusing System.Collections.Generic;\n\npublic class Kata {\n\n  public static List<int> GetOrdersByKey(string key)\n  {\n    char[] charKeys = key.ToCharArray();\n    List<char> sortCharKeys = new List<char>(charKeys);\n    sortCharKeys.Sort();\n\n    List<int> orders = new List<int>();\n    for (int i = 0; i < charKeys.Length; i++)\n    {\n      for (int j = 0; j < sortCharKeys.Count; j++)\n      {\n        if (charKeys[i] == sortCharKeys[j])\n        {\n          if (!orders.Contains(j))\n          {\n            orders.Add(j);\n          }\n        }\n      }\n    }\n\n    return orders;\n  }\n\n  public static string ConvMessageToKey(List<int> orders, string message)\n  {\n    if (orders == null || orders.Count == 0)\n    {\n      return message;\n    }\n\n    int subLength = orders.Count;\n    StringBuilder strBuilder = new StringBuilder();\n    StringBuilder subStrBuilder = new StringBuilder();\n    for (int i = 0; i < message.Length; i += subLength)\n    {\n      string subStr = (i + subLength < message.Length) ? (message.Substring(i, subLength)) : (message.Substring(i));\n      subStrBuilder.Clear();\n      for (int j = 0; j < orders.Count; j++)\n      {\n        int idx = orders[j];\n        if (idx < subStr.Length)\n        {\n          subStrBuilder.Append(subStr[idx]);\n        }\n      }\n      strBuilder.Append(subStrBuilder.ToString().Trim());\n    }\n\n    return strBuilder.ToString();\n  }\n\n  public static string DeNico(string key, string message)\n  {\n    // step 1 : key string sorting number\n    List<int> orders = GetOrdersByKey(key);\n\n    // step 2: message convert orders\n    string convMsg = ConvMessageToKey(orders, message);\n\n    return convMsg;\n  }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc8fc\uc5b4\uc9c4 key\uc5d0 \ub300\ud574\uc11c \uc54c\ud30c\ubcb3 \uc21c\uc11c\ub85c \uc815\ub82c\ud55c key\ub97c \uad6c\ud558\uace0 \ud574\ub2f9 \uc778\ub371\uc2a4\uc5d0 \uac01 key \uac12\uc758 \uc778\ub371\uc2a4\ub97c \ub300\uc785\ud558\uc5ec \uc0c8\ub85c\uc6b4 int\ud615 key\ub97c \ub9cc\ub4e0\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc774 int\ud615 \ub9ac\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc8fc\uc5b4\uc9c4 message\ub97c \ubcc0\ud658\ud574\uc900\ub2e4.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\uc774 \ubb38\uc81c\ub97c \ud480\uace0 5 kyu\uac00 \ub418\uc5c8\ub2e4.")),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Linq;\nusing System;\n\npublic class Kata {\n  public static string DeNico(string key, string m) {\n      int [] coder = key.OrderBy(x=>x).Select(e=> key.IndexOf(e)).ToArray();\n      return string.Concat(m.Select((e,i)=>m[ ((int)(i/ key.Length))*key.Length + Array.IndexOf(coder,i%key.Length)])).TrimEnd(' ');;\n  }\n}\n")),(0,i.kt)("p",null,"\uc774\uac78 \ubcf4\uba74 Linq\ub97c \ubc30\uc6cc\uc57c \ub418\uaca0\ub2e4\n2\uc904\uc774\uba74 \ud574\uacb0\uc774 \ub418\ub124.."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GetOrdersByKey \ud568\uc218\ub294 int [] coder = key.OrderBy(x=>x).Select(e=> key.IndexOf(e)).ToArray();\n\uc774\ub807\uac8c \ud55c\uc904\uc774\uba74 \ud574\uacb0\uc774 \ub41c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"ConvMessageToKey \ud568\uc218\ub294 string.Concat(m.Select((e,i)=>m","[ ((int)(i/ key.Length))*key.Length + Array.IndexOf(coder,i%key.Length)]",")).TrimEnd(' '); \uc774\uac70 \ud55c\uc904\uc774\uba74 \ud574\uacb0\uc774 \ub41c\ub2e4.")))}d.isMDXComponent=!0}}]);