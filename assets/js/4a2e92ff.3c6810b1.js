"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64760],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>b});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,b=d["".concat(o,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const i={title:"[Codewars #41] Alphabet wars - nuclear strike (5kyu)",authors:["karais89"],tags:["codewars","kata"]},s=void 0,l={permalink:"/2019/01/22/codewars-Alphabet-wars-nuclear-strike",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-22-codewars-Alphabet-wars-nuclear-strike/index.md",source:"@site/blog/2019-01-22-codewars-Alphabet-wars-nuclear-strike/index.md",title:"[Codewars #41] Alphabet wars - nuclear strike (5kyu)",description:"Instructions",date:"2019-01-22T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 22\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:4.915,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #41] Alphabet wars - nuclear strike (5kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #43] Integer triangles (5kyu)",permalink:"/2019/01/23/codewars-Integer triangles"},nextItem:{title:"[Codewars #42] N00bify - English to n00b Translator (5kyu)",permalink:"/2019/01/22/codewars-N00bify-English-to-n00b-Translator"}},o={authorsImageUrls:[void 0]},u=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices 1",id:"best-practices-1",level:2},{value:"Best Practices 2",id:"best-practices-2",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"instructions"},"Instructions"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.codewars.com/kata/59437bd7d8c9438fb5000004/train/csharp"},"\ub9c1\ud06c")),(0,a.yg)("p",null,"Introduction"),(0,a.yg)("p",null,"There is a war and nobody knows - the alphabet war!\nThe letters hide in their nuclear shelters. The nuclear strikes hit the battlefield and killed a lot of them."),(0,a.yg)("p",null,"Task"),(0,a.yg)("p",null,"Write a function that accepts battlefield string and returns letters that survived the nuclear strike."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The battlefield string consists of only small letters, #,","[ and ]","."),(0,a.yg)("li",{parentName:"ul"},"The nuclear shelter is represented by square brackets []. The letters inside the square brackets represent letters inside the shelter."),(0,a.yg)("li",{parentName:"ul"},"The # means a place where nuclear strike hit the battlefield. If there is at least one # on the battlefield, all letters outside of shelter die. When there is no any # on the battlefield, all letters survive (but do not expect such scenario too often ;-P )."),(0,a.yg)("li",{parentName:"ul"},"The shelters have some durability. When 2 or more # hit close to the shelter, the shelter is destroyed and all letters inside evaporate. The 'close to the shelter' means on the ground between the shelter and the next shelter (or beginning/end of battlefield). The below samples make it clear for you.")),(0,a.yg)("p",null,"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'abde[fgh]ijk => "abdefghijk" (all letters survive because there is no # )\nab#de[fgh]ijk => "fgh" (all letters outside die because there is a # )\nab#de[fgh]ij#k => "" (all letters dies, there are 2 # close to the shellter )\n##abde[fgh]ijk => "" (all letters dies, there are 2 # close to the shellter )\n##abde[fgh]ijk[mn]op => "mn" (letters from the second shelter survive, there is no # close)\n#ab#de[fgh]ijk[mn]op => "mn" (letters from the second shelter survive, there is no # close)\n#abde[fgh]i#jk[mn]op => "mn" (letters from the second shelter survive, there is only 1 # close)\n[a]#[b]#[c] => "ac"\n[a]#b#[c][d] => "d"\n[a][b][c] => "abc"\n##a[a]b[c]# => "c"\n')),(0,a.yg)("p",null,"Alphabet war Collection"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Alphavet war"),(0,a.yg)("li",{parentName:"ul"},"Alphabet war - airstrike - letters massacre"),(0,a.yg)("li",{parentName:"ul"},"Alphabet wars - reinforces massacre"),(0,a.yg)("li",{parentName:"ul"},"Alphabet wars - nuclear strike"),(0,a.yg)("li",{parentName:"ul"},"Alphabet war - Wo lo loooooo priests join the war")),(0,a.yg)("h2",{id:"my-solution"},"My Solution"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"}," using System;\n using System.Text;\n\n public class Kata\n {\n    // battleFiledChar = '#', '[', ']'\n    public static string RemoveBattleFieldChar(string b)\n    {\n        StringBuilder builder = new StringBuilder();\n        for (int i = 0; i < b.Length; i++)\n        {\n          if (b[i] == '#' || b[i] == '[' || b[i] == ']')\n          {\n            continue;\n          }\n          builder.Append(b[i]);\n        }\n        return builder.ToString();\n    }\n\n    public static string DestoryBracketsOutLetters(string b)\n    {\n      StringBuilder rmBuilder = new StringBuilder();\n      bool startBrackets = false;\n      for (int i = 0; i < b.Length; i++)\n      {\n        switch (b[i])\n        {\n          case '#':\n            rmBuilder.Append(b[i]);\n            break;\n          case '[':\n            startBrackets = true;\n            rmBuilder.Append(b[i]);\n            break;\n          case ']':\n            startBrackets = false;\n            rmBuilder.Append(b[i]);\n            break;\n          default:\n            break;\n        }\n\n        if (startBrackets)\n        {\n          if (b[i] != '#' && b[i] != '[' && b[i] != ']')\n          {\n            rmBuilder.Append(b[i]);\n          }\n        }\n      }\n\n      Console.WriteLine(\"rmBuilder: \" + rmBuilder);\n      return rmBuilder.ToString();\n    }\n\n    public static string CheckSideSharpBrackets(string b)\n    {\n      StringBuilder strBuilder = new StringBuilder();\n      int index = 0;\n      while (true)\n      {\n        if (index >= b.Length)\n        {\n          break;\n        }\n\n        // startBreackets\n        if (b[index] == '[')\n        {\n          // left sharp\n          int sharpCnt = 0;\n          int leftIdx = index;\n          while (true)\n          {\n            if (leftIdx < 0 || b[leftIdx] == ']')\n            {\n              break;\n            }\n\n            if (b[leftIdx] == '#')\n            {\n              sharpCnt++;\n            }\n\n            leftIdx--;\n          }\n\n          // end brackets index\n          int endIdx = index;\n          while (true)\n          {\n            endIdx++;\n            if (b.Length <= endIdx)\n            {\n              // parssing error\n              break;\n            }\n\n            if (b[endIdx] == ']')\n            {\n              break;\n            }\n          }\n\n          // rightSideCheck\n          int rightIdx = endIdx;\n          while (true)\n          {\n            if (rightIdx >= b.Length || b[rightIdx] == '[')\n            {\n              break;\n            }\n\n            if (b[rightIdx] == '#')\n            {\n              sharpCnt++;\n            }\n\n            rightIdx++;\n          }\n\n          if (sharpCnt >= 2)\n          {\n            index = endIdx;\n          }\n          Console.WriteLine(\"sharpCnt: \" + sharpCnt);\n        }\n\n        strBuilder.Append(b[index]);\n        index++;\n      }\n      Console.WriteLine(\"strBuilder: \" + strBuilder);\n      return RemoveBattleFieldChar(strBuilder.ToString());\n    }\n\n    public static string AlphabetWar(string b)\n    {\n      Console.WriteLine(\"b: \" + b);\n\n      int index = b.IndexOf('#');\n      if (index == -1)\n      {\n        return RemoveBattleFieldChar(b);\n      }\n\n      // step 1 : destroy not brackets letters\n      string str = DestoryBracketsOutLetters(b);\n\n      // step 2 : brackets side check\n      string ret = CheckSideSharpBrackets(str);\n      return ret;\n    }\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"#\uc774 \ud558\ub098\ub3c4 \uc5c6\uc744\uc2dc\uc5d0\ub294 #\uacfc \uad04\ud638 \uae30\ud638\ub4e4\uc744 \uc81c\uac70\ud558\uace0 \uadf8\ub300\ub85c \ucd9c\ub825"),(0,a.yg)("li",{parentName:"ul"},"#\uc774 \ud558\ub098\ub77c\ub3c4 \uc788\uc744\uc2dc \uad04\ud638 \uae30\ud638\uc548\uc758 \uc54c\ud30c\ubcb3\uc744 \uc81c\uc678\ud558\uace0 \ubaa8\ub450 \uc81c\uac70"),(0,a.yg)("li",{parentName:"ul"},"\uc81c\uac70\ub41c \ubb38\uc790\uc5f4\ub85c \uad04\ud638 \uc591 \uc606\uc744 \uc870\uc0ac\ud55c \ud6c4 #\uc758 \uac1c\uc218\uc5d0 \ub530\ub77c \ub85c\uc9c1 \ucc98\ub9ac"),(0,a.yg)("li",{parentName:"ul"},"\ubb38\uc81c\ub97c \ubcf4\uc790\ub9c8\uc790 \uc815\uaddc\ud45c\ud604\uc2dd\uc744 \uc368\uc57c\uaca0\ub2e4\ub294 \ub290\ub08c\uc740 \uc634.")),(0,a.yg)("h2",{id:"best-practices-1"},"Best Practices 1"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.RegularExpressions;\nusing System.Linq;\npublic class Kata\n{\n    public static string AlphabetWar(string b)\n    => !b.Contains(\'#\') ? Regex.Replace(b,@"[\\[\\]]","") :\n       string.Concat(Regex.Matches(b, @"(?<=([a-z#]*))\\[([a-z]+)\\](?=([a-z#]*))").Cast<Match>().Where(g => (g.Groups[1].Value + g.Groups[3].Value).Count(c => c == \'#\') < 2).Select(g => g.Groups[2].Value));\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uc815\uaddc\ud45c\ud604\uc2dd\uacfc Linq\uc758 \uc870\ud569\uc73c\ub85c \ucf54\ub4dc\uac00 \uc9e7\uc544\uc9c4\ub2e4.")),(0,a.yg)("h2",{id:"best-practices-2"},"Best Practices 2"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},'using System.Linq;\nusing System.Text;\nusing System.Text.RegularExpressions;\n\npublic class Kata {\n    public static string AlphabetWar( string battleField ) {\n        const char strike = \'#\';\n        var underAttack = battleField.Contains( strike );\n        if ( !underAttack ) {\n            return battleField.Replace( "[", string.Empty ).Replace( "]", string.Empty );\n        }\n        var survivors = new StringBuilder();\n        var shelterAreaRegex = new Regex( @"(?\'s1\'[^\\]]*)\\[(?\'s\'[a-z]+)\\](?\'s2\'[^\\[]*)" );\n        while ( shelterAreaRegex.IsMatch( battleField ) ) {\n            var m = shelterAreaRegex.Match( battleField );\n            var shelterPopulation = m.Groups [ "s" ].Value;\n            var frontStrikesCount = m.Groups [ "s1" ].Value.Count( c => c == strike );\n            var behindStrikesCount = m.Groups [ "s2" ].Value.Count( c => c == strike );\n            if ( frontStrikesCount + behindStrikesCount < 2 ) {\n                survivors.Append( shelterPopulation );\n            }\n            battleField = battleField.Replace( m.Value, m.Groups [ "s2" ].Value );\n        }\n        return survivors.ToString( );\n    }\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uc704 \ucf54\ub4dc\ubcf4\ub2e4\ub294 \uac00\ub3c5\uc131\uc774 \ub354 \ub098\uc740\ub4ef.")))}p.isMDXComponent=!0}}]);