"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[20614],{15680:(n,e,r)=>{r.d(e,{xA:()=>s,yg:()=>y});var t=r(96540);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function i(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function c(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function o(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var l=t.createContext({}),g=function(n){var e=t.useContext(l),r=e;return n&&(r="function"==typeof n?n(e):c(c({},e),n)),r},s=function(n){var e=g(n.components);return t.createElement(l.Provider,{value:e},n.children)},u="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},b=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,i=n.originalType,l=n.parentName,s=o(n,["components","mdxType","originalType","parentName"]),u=g(r),b=a,y=u["".concat(l,".").concat(b)]||u[b]||p[b]||i;return r?t.createElement(y,c(c({ref:e},s),{},{components:r})):t.createElement(y,c({ref:e},s))}));function y(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=r.length,c=new Array(i);c[0]=b;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o[u]="string"==typeof n?n:a,c[1]=o;for(var g=2;g<i;g++)c[g]=r[g];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},35212:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var t=r(58168),a=(r(96540),r(15680));const i={title:"[Codewars #46] Mixbonacci (5kyu)",authors:["karais89"],tags:["codewars","kata"]},c=void 0,o={permalink:"/2019/01/24/codewars-Mixbonacci",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-24-codewars-Mixbonacci/index.md",source:"@site/blog/2019-01-24-codewars-Mixbonacci/index.md",title:"[Codewars #46] Mixbonacci (5kyu)",description:"Instructions",date:"2019-01-24T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 24\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:7.32,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #46] Mixbonacci (5kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #45] Loading Kata: Rot13 (5kyu)",permalink:"/2019/01/24/codewars-Loading-Kata-Rot13"},nextItem:{title:"[Codewars #49] Take a Ten Minute Walk (6kyu)",permalink:"/2019/01/24/codewars-Take-a-Ten-Minute-Walk"}},l={authorsImageUrls:[void 0]},g=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],s={toc:g},u="wrapper";function p(n){let{components:e,...r}=n;return(0,a.yg)(u,(0,t.A)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"instructions"},"Instructions"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.codewars.com/kata/5811aef3acdf4dab5e000251/train/csharp"},"\ub9c1\ud06c")),(0,a.yg)("p",null,'This is the first of my "-nacci" series. If you like this kata, check out the zozonacci sequence too.'),(0,a.yg)("p",null,"Task"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Mix -nacci sequences using a given pattern p."),(0,a.yg)("li",{parentName:"ol"},"Return the first n elements of the mixed sequence.")),(0,a.yg)("p",null,"Rules"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The pattern p is given as a list of strings (or array of symbols in Ruby) using the pattern mapping below (e. g. ","['fib', 'pad', 'pel']"," means take the next fibonacci, then the next padovan, then the next pell number and so on)."),(0,a.yg)("li",{parentName:"ol"},"When n is 0 or p is empty return an empty list."),(0,a.yg)("li",{parentName:"ol"},"If the length of p is more than n repeat the pattern.")),(0,a.yg)("p",null,"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"            0 1 2 3 4\n----------+------------------\nfibonacci:| 0, 1, 1, 2, 3 ...\npadovan: | 1, 0, 0, 1, 0 ...\npell: | 0, 1, 2, 5, 12 ...\n\npattern = ['fib', 'pad', 'pel']\nn = 6\n# ['fib', 'pad', 'pel', 'fib', 'pad', 'pel']\n# result = [fibonacci(0), padovan(0), pell(0), fibonacci(1), padovan(1), pell(1)]\nresult = [0, 1, 0, 1, 0, 1]\n\npattern = ['fib', 'fib', 'pel']\nn = 6\n# ['fib', 'fib', 'pel', 'fib', 'fib', 'pel']\n# result = [fibonacci(0), fibonacci(1), pell(0), fibonacci(2), fibonacci(3), pell(1)]\nresult = [0, 1, 0, 1, 2, 1]\n")),(0,a.yg)("p",null,"Sequences"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"fibonacci : 0, 1, 1, 2, 3 ..."),(0,a.yg)("li",{parentName:"ul"},"padovan: 1, 0, 0, 1, 0 ..."),(0,a.yg)("li",{parentName:"ul"},"jacobsthal: 0, 1, 1, 3, 5 ..."),(0,a.yg)("li",{parentName:"ul"},"pell: 0, 1, 2, 5, 12 ..."),(0,a.yg)("li",{parentName:"ul"},"tribonacci: 0, 0, 1, 1, 2 ..."),(0,a.yg)("li",{parentName:"ul"},"tetranacci: 0, 0, 0, 1, 1 ...")),(0,a.yg)("p",null,"Pattern mapping"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"'fib' -> fibonacci"),(0,a.yg)("li",{parentName:"ul"},"'pad' -> padovan"),(0,a.yg)("li",{parentName:"ul"},"'jac' -> jacobstahl"),(0,a.yg)("li",{parentName:"ul"},"'pel' -> pell"),(0,a.yg)("li",{parentName:"ul"},"'tri' -> tribonacci"),(0,a.yg)("li",{parentName:"ul"},"'tet' -> tetranacci")),(0,a.yg)("p",null,"If you like this kata, check out the zozonacci sequence."),(0,a.yg)("h2",{id:"my-solution"},"My Solution"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Numerics;\nusing System.Collections.Generic;\n\nnamespace Solution\n{\n  public static class Kata\n  {\n    // non-recursive\n    // Dynamic Programming \n    public static BigInteger Fibonacci(int n)\n    {\n      if (n < 2)\n      {\n        return n;\n      }\n      \n      BigInteger[] arr = new BigInteger[n + 1];\n      arr[0] = 0;\n      arr[1] = 1;\n  \n      for (int i = 2; i <= n; i++)\n      {\n        arr[i] = arr[i - 1] + arr[i - 2];\n      }\n      return arr[n];    \n    }\n    \n    // a(n) = a(n-2) + a(n-3) with a(0)=1, a(1)=a(2)=0. \n    public static BigInteger Padovan(int n)\n    {\n      if (n == 0)\n      {\n        return 1;\n      }\n      \n      if (n <= 2)\n      {\n        return 0;\n      }\n      \n      BigInteger[] arr = new BigInteger[n + 1];\n      arr[0] = 1;\n      arr[1] = 0;\n      arr[2] = 0;\n  \n      for (int i = 3; i <= n; i++)\n      {\n        arr[i] = arr[i - 2] + arr[i - 3];\n      }\n      return arr[n];      \n    }\n    \n    // a(n) = a(n-1) + 2*a(n-2), with a(0) = 0, a(1) = 1. \n    public static BigInteger Jacobstahl(int n)\n    {\n      if (n < 2)\n      {\n        return n;\n      }\n      \n      BigInteger[] arr = new BigInteger[n + 1];\n      arr[0] = 0;\n      arr[1] = 1;\n  \n      for (int i = 2; i <= n; i++)\n      {\n        arr[i] = arr[i - 1] + 2 * arr[i - 2];\n      }\n      return arr[n];   \n    }\n        \n    // a(0) = 0, a(1) = 1; for n > 1, a(n) = 2*a(n-1) + a(n-2). \n    public static BigInteger Pell(int n)\n    {    \n      if (n < 2)\n      {\n        return n;\n      }\n      \n      BigInteger[] arr = new BigInteger[n + 1];\n      arr[0] = 0;\n      arr[1] = 1;\n  \n      for (int i = 2; i <= n; i++)\n      {\n        arr[i] = 2 * arr[i - 1] + arr[i - 2];\n      }\n      return arr[n];  \n    }\n    \n    // a(n) = a(n-1) + a(n-2) + a(n-3) with a(0)=a(1)=0, a(2)=1. \n    public static BigInteger Tribonacci(int n)\n    {\n      if (n == 0 || n == 1)\n      {\n        return 0;\n      }\n      \n      if (n == 2)\n      {\n        return 1;\n      }\n      \n      BigInteger[] arr = new BigInteger[n + 1];\n      arr[0] = 0;\n      arr[1] = 0;\n      arr[2] = 1;\n  \n      for (int i = 3; i <= n; i++)\n      {\n        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];\n      }\n      return arr[n];   \n    }\n    \n    // a(n) = a(n-1) + a(n-2) + a(n-3) + a(n-4) with a(0)=a(1)=a(2)=0, a(3)=1. \n    public static BigInteger Tetranacci(int n)\n    {\n      if (n < 3)\n      {\n        return 0;\n      }\n      \n      if (n == 3)\n      {\n        return 1;\n      }\n      \n      BigInteger[] arr = new BigInteger[n + 1];\n      arr[0] = 0;\n      arr[1] = 0;\n      arr[2] = 0;\n      arr[3] = 1;\n      \n      for (int i = 4; i <= n; i++)\n      {\n        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3] + arr[i - 4];\n      }\n      return arr[n];   \n    }\n    \n    public static void ShowConsole(string head, Func<int, BigInteger> func, int n)\n    {      \n      Console.Write(head + " : ");      \n      for (int i = 0; i < n; i++)\n      {\n        Console.Write(" " + func(i));      \n      }\n      Console.WriteLine();    \n    }\n        \n    public static BigInteger[] Mixbonacci(string[] pattern, int length)\n    {\n    /*\n      ShowConsole("fib", Fibonacci, 10);\n      ShowConsole("pad", Padovan, 10);\n      ShowConsole("jac", Jacobstahl, 10);\n      ShowConsole("pel", Pell, 10);\n      ShowConsole("tri", Tribonacci, 10);\n      ShowConsole("tet", Tetranacci, 10);\n    */\n      if (length == 0 || pattern == null || pattern.Length == 0)\n      {\n        return new BigInteger[] {};     \n      }\n    \n      Dictionary<string, int> boancciCounts = new Dictionary<string, int>();\n      boancciCounts["fib"] = 0;\n      boancciCounts["pad"] = 0;\n      boancciCounts["jac"] = 0;\n      boancciCounts["pel"] = 0;\n      boancciCounts["tri"] = 0;\n      boancciCounts["tet"] = 0;\n      \n      Dictionary<string, Func<int, BigInteger>> boancciFuncs = new Dictionary<string, Func<int, BigInteger>>();\n      boancciFuncs["fib"] = Fibonacci;\n      boancciFuncs["pad"] = Padovan;\n      boancciFuncs["jac"] = Jacobstahl;\n      boancciFuncs["pel"] = Pell;\n      boancciFuncs["tri"] = Tribonacci;\n      boancciFuncs["tet"] = Tetranacci;\n      \n            \n      BigInteger[] mixbonaccis = new BigInteger[length];             \n      for (int i = 0; i < length; i++)\n      {        \n        string key = pattern[i % pattern.Length];     \n        mixbonaccis[i] = boancciFuncs[key](boancciCounts[key]++);\n      }\n       \n      return mixbonaccis;\n    }\n  }\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uc5ec\ub7ec\uac00\uc9c0 \uc810\ud654\uc2dd\uc774 \uc788\ub294 \ud568\uc218\ub4e4\ub85c \uc218\ub97c \ud45c\ud604\ud558\uba74 \ub418\ub294 \ubb38\uc81c."),(0,a.yg)("li",{parentName:"ul"},"\uc5ec\ub7ec\uac00\uc9c0 \uaddc\uce59\uc758 \ud568\uc218\ub4e4\uc774 \uc788\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\uc0ac\uc2e4 \ubb38\uc81c \uc790\uccb4\ub294 \uc7ac\uadc0 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc774 \uac00\uc7a5 \ud480\uae30 \uc26c\uc6b4 \ubc29\uc2dd\uc778\ub370, \uc2a4\ud0dd \ubb38\uc81c\uc640 \ud37c\ud3ec\uba3c\uc2a4 \ubb38\uc81c \ub54c\ubb38\uc5d0 \ud574\ub2f9 \ubc29\ubc95\uc740 \uc0ac\uc6a9\ud558\uba74 \uc548\ub418\ub294 \ub4ef \ud558\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"Func \uae4c\uc9c0 \uc368\uac00\uba74\uc11c \ud488.."),(0,a.yg)("li",{parentName:"ul"},"\uc7ac\uadc0\ud568\uc218\uac00 \uc544\ub2cc \ub2e4\uc774\ub098\ubbf9 \ud504\ub85c\uadf8\ub798\ubc0d \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud568 (\ubc30\uc5f4 \uc0ac\uc6a9)"),(0,a.yg)("li",{parentName:"ul"},"\uc4f8\ub370\uc5c6\uc774 \uae38\uc5b4\uc9c0\ub294 \ub290\ub08c\uc774 \uc5c6\uc9c0 \uc54a\uc544 \uc788\ub2e4.")),(0,a.yg)("h2",{id:"best-practices"},"Best Practices"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},'using System.Numerics;\nusing System.Collections.Generic;\nnamespace Solution\n{\n  public static class Kata\n  {\n    private static readonly Dictionary<string, IEnumerable<BigInteger>> GeneratorMapping =\n      new Dictionary<string, IEnumerable<BigInteger>>() {\n      {"fib", FibonacciGenerator()},\n      {"pad", PadovanGenerator()},\n      {"jac", JacobstahlGenerator()},\n      {"tet", TetranacciGenerator()},\n      {"tri", TribonacciGenerator()},\n      {"pel", PellGenerator()}\n    };\n\n    public static BigInteger[] Mixbonacci(string[] pattern, int length)\n    {\n      if (pattern.Length == 0 || length == 0)\n      {\n        return new BigInteger[] { };\n      }\n\n      var res = new List<BigInteger>() { };\n      var gens = new Dictionary<string, IEnumerator<BigInteger>>();\n      var patLength = pattern.Length;\n\n      for (var i = 0; i < patLength; i++)\n      {\n        var v = pattern[i];\n        gens[v] = GeneratorMapping[v].GetEnumerator();\n      }\n\n      for (var i = 0; i < length; i++)\n      {\n        var gen = gens[pattern[i % patLength]];\n        gen.MoveNext();\n        res.Add(gen.Current);\n      }\n\n      return res.ToArray();\n\n    }\n\n    public static IEnumerable<BigInteger> FibonacciGenerator()\n    {\n      var a = new BigInteger(0);\n      var b = new BigInteger(1);\n      BigInteger x;\n      while (true)\n      {\n        yield return a;\n        x = a;\n        a = b;\n        b = x + a;\n      }\n    }\n\n    public static IEnumerable<BigInteger> PadovanGenerator()\n    {\n      var a = new BigInteger(1);\n      var b = new BigInteger(0);\n      var c = new BigInteger(0);\n      BigInteger x;\n      BigInteger y;\n      while (true)\n      {\n        yield return a;\n        x = a;\n        y = b;\n        a = b;\n        b = c;\n        c = x + y;\n      }\n    }\n\n    public static IEnumerable<BigInteger> JacobstahlGenerator()\n    {\n      var a = new BigInteger(0);\n      var b = new BigInteger(1);\n      BigInteger x;\n      while (true)\n      {\n        yield return a;\n        x = a;\n        a = b;\n        b = 2 * x + b;\n      }\n    }\n\n\n    public static IEnumerable<BigInteger> PellGenerator()\n    {\n      var a = new BigInteger(0);\n      var b = new BigInteger(1);\n      BigInteger x;\n      while (true)\n      {\n        yield return a;\n        x = a;\n        a = b;\n        b = x + 2 * b;\n      }\n    }\n\n    public static IEnumerable<BigInteger> TribonacciGenerator()\n    {\n      var a = new BigInteger(0);\n      var b = new BigInteger(0);\n      var c = new BigInteger(1);\n      BigInteger x, y, z;\n      while (true)\n      {\n        yield return a;\n        x = a; y = b; z = c;\n        a = b; b = c;\n        c = x + y + z;\n      }\n    }\n\n    public static IEnumerable<BigInteger> TetranacciGenerator()\n    {\n      var a = new BigInteger(0);\n      var b = new BigInteger(0);\n      var c = new BigInteger(0);\n      var d = new BigInteger(1);\n      BigInteger x, y, z, j;\n      while (true)\n      {\n        yield return a;\n        x = a; y = b; z = c; j = d;\n        a = b; b = c; c = d;\n        d = x + y + z + j;\n      }\n    }\n  }\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"IEnumerable \ud2b9\uc131\uc744 \uc774\uc6a9\ud574\uc11c \ud574\uacb0.")))}p.isMDXComponent=!0}}]);