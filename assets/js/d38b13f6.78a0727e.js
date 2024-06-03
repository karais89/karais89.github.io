"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[66194],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,y=p["".concat(l,".").concat(d)]||p[d]||g[d]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={title:"[Codewars #42] N00bify - English to n00b Translator (5kyu)",authors:["karais89"],tags:["codewars","kata"]},i=void 0,s={permalink:"/2019/01/22/codewars-N00bify-English-to-n00b-Translator",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-22-codewars-N00bify-English-to-n00b-Translator/index.md",source:"@site/blog/2019-01-22-codewars-N00bify-English-to-n00b-Translator/index.md",title:"[Codewars #42] N00bify - English to n00b Translator (5kyu)",description:"Instructions",date:"2019-01-22T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 22\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:9.775,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #42] N00bify - English to n00b Translator (5kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #41] Alphabet wars - nuclear strike (5kyu)",permalink:"/2019/01/22/codewars-Alphabet-wars-nuclear-strike"},nextItem:{title:"[Codewars #40] Best travel (5kyu)",permalink:"/2019/01/20/codewars-Best-travel"}},l={authorsImageUrls:[void 0]},c=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],u={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"instructions"},"Instructions"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.codewars.com/kata/n00bify-english-to-n00b-translator/train/csharp"},"\ub9c1\ud06c")),(0,a.yg)("p",null,"The internet is a very confounding place for some adults. Tom has just joined an online forum and is trying to fit in with all the teens and tweens. It seems like they're speaking in another language! Help Tom fit in by translating his well-formatted English into n00b language."),(0,a.yg)("p",null,"The following rules should be observed:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'"to" and "too" should be replaced by the number 2, even if they are only part of a word (E.g. today = 2day)'),(0,a.yg)("li",{parentName:"ul"},'Likewise, "for" and "fore" should be replaced by the number 4'),(0,a.yg)("li",{parentName:"ul"},"Any remaining double o's should be replaced with zeros (E.g. noob = n00b)"),(0,a.yg)("li",{parentName:"ul"},'"be", "are", "you", "please", "people", "really", "have", and "know" should be changed to "b", "r", "u", "plz", "ppl", "rly", "haz", and "no" respectively (even if they are only part of the word)'),(0,a.yg)("li",{parentName:"ul"},"When replacing words, always maintain case of the first letter unless another rule forces the word to all caps."),(0,a.yg)("li",{parentName:"ul"},'The letter "s" should always be replaced by a "z", maintaining case'),(0,a.yg)("li",{parentName:"ul"},'"LOL" must be added to the beginning of any input string starting with a "w" or "W"'),(0,a.yg)("li",{parentName:"ul"},'"OMG" must be added to the beginning (after LOL, if applicable,) of a string 32 characters(1) or longer'),(0,a.yg)("li",{parentName:"ul"},"All evenly numbered words(2) must be in ALL CAPS (Example: Cake is very delicious. becomes Cake IZ very DELICIOUZ)"),(0,a.yg)("li",{parentName:"ul"},'If the input string starts with "h" or "H", the entire output string should be in ALL CAPS'),(0,a.yg)("li",{parentName:"ul"},"Periods ( . ), commas ( , ), and apostrophes ( ' ) are to be removed"),(0,a.yg)("li",{parentName:"ul"},"(3)A question mark ( ? ) should have more question marks added to it, equal to the number of words2 in the sentence (Example: Are you a foo? has 4 words, so it would be converted to r U a F00????)"),(0,a.yg)("li",{parentName:"ul"},"(3)Similarly, exclamation points ( ! ) should be replaced by a series of alternating exclamation points and the number 1, equal to the number of words(2) in the sentence (Example: You are a foo! becomes u R a F00!1!1)")),(0,a.yg)("p",null,"1 Characters should be counted After: any word conversions, adding additional words, and removing punctuation. Excluding: All punctuation and any 1's added after exclamation marks ( ! ). Character count includes spaces."),(0,a.yg)("p",null,'2 For the sake of this kata, "words" are simply a space-delimited substring, regardless of its characters. Since the output may have a different number of words than the input, words should be counted based on the output string.'),(0,a.yg)("p",null,"Example: whoa, you are my 123 <3 becomes LOL WHOA u R my 123 <3 = 7 words"),(0,a.yg)("p",null,"3 The incoming string will be punctuated properly, so punctuation does not need to be validated."),(0,a.yg)("h2",{id:"my-solution"},"My Solution"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},'\nusing System;\nusing System.Text;\nusing System.Text.RegularExpressions;\n\npublic static class Kata\n{\n  public static string N00bify(string text)\n  {\n    Console.WriteLine(text);\n    // \ub531 \ubd10\ub3c4 \uc815\uaddc\ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud574\uc11c \ud480\uc5b4\uc57c \ub418\ub294 \ubb38\uc81c \uc5b4\uac70\uc9c0\ub85c \ud558\uba74 \ud480 \uc218 \uc57c \uc788\uc744\uac70 \uac19\uc740\ub370.. \uc758\ubbf8\uac00 \uc788\ub098?\n    // \ub300\uc18c\ubb38\uc790 \uc720\uc9c0 \uaddc\uce59\uc774 \uc788\uc5b4\uc11c \ub354 \ub354\ub7fd\ub2e4.\n\n    // \uaddc\uce59 1 : "to" and "too" should be replaced by the number 2, even if they are only part of a word (E.g. today = 2day)\n    string convStr = Regex.Replace(text, "too", "2", RegexOptions.IgnoreCase);\n    convStr = Regex.Replace(convStr, "to", "2", RegexOptions.IgnoreCase);\n\n    // \uaddc\uce59 2 : Likewise, "for" and "fore" should be replaced by the number 4\n    convStr = Regex.Replace(convStr, "fore", "4", RegexOptions.IgnoreCase);\n    convStr = Regex.Replace(convStr, "for", "4", RegexOptions.IgnoreCase);\n\n    // \uaddc\uce59 3 : Any remaining double o\'s should be replaced with zeros (E.g. noob = n00b)\n    convStr = convStr.Replace("Oo", "00").Replace("oo", "00");\n\n    // \uaddc\uce59 4 : "be", "are", "you", "please", "people", "really", "have", and "know" should be changed to "b", "r", "u", "plz", "ppl", "rly", "haz", and "no" respectively (even if they are only part of the word)\n    convStr = Regex.Replace(convStr, "be", "b", RegexOptions.IgnoreCase);\n    convStr = Regex.Replace(convStr, "are", "r", RegexOptions.IgnoreCase);\n    convStr = Regex.Replace(convStr, "you", "u", RegexOptions.IgnoreCase);\n    convStr = Regex.Replace(convStr, "please", "plz", RegexOptions.IgnoreCase);\n    convStr = Regex.Replace(convStr, "people", "ppl", RegexOptions.IgnoreCase);\n    convStr = Regex.Replace(convStr, "really", "rly", RegexOptions.IgnoreCase);\n    convStr = Regex.Replace(convStr, "have", "haz", RegexOptions.IgnoreCase);\n    convStr = Regex.Replace(convStr, "know", "no", RegexOptions.IgnoreCase);\n\n    // \uaddc\uce59 5 : When replacing words, always maintain case of the first letter unless another rule forces the word to all caps.\n\n    // \uaddc\uce59 6 : The letter "s" should always be replaced by a "z", maintaining case\n    convStr = convStr.Replace("s", "z").Replace("S", "Z");\n\n\n    // \uaddc\uce59 11 : Periods ( . ), commas ( , ), and apostrophes ( \' ) are to be removed\n    convStr = convStr.Replace(".","").Replace(",","").Replace("\'","");\n\n    // \uaddc\uce59 7 : "LOL" must be added to the beginning of any input string starting with a "w" or "W"\n    if (text[0] == \'w\' || text[0] == \'W\')\n    {\n      convStr = "LOL " + convStr;\n    }\n\n    // \uaddc\uce59 8 : "OMG" must be added to the beginning (after LOL, if applicable,) of a string 32 characters1 or longer\n    // Console.WriteLine("convStr: " + convStr + " " + convStr.Length);\n    int markCount = 0;\n    for (int i = 0; i < convStr.Length; i++)\n    {\n      if (convStr[i] == \'!\')\n      {\n        markCount++;\n      }\n    }\n\n    int convStrLength = convStr.Length - markCount;\n    if (convStrLength >= 32)\n    {\n      if (convStr.StartsWith("LOL"))\n      {\n        convStr = convStr.Replace("LOL", "LOL OMG");\n      }\n      else\n      {\n        convStr = "OMG " + convStr;\n      }\n    }\n\n    // \uaddc\uce59 10 : If the input string starts with "h" or "H", the entire output string should be in ALL CAPS\n    if (text[0] == \'h\' || text[0] == \'H\')\n    {\n      convStr = convStr.ToUpper();\n    }\n    else\n    {\n      // \uaddc\uce59 9 : All evenly numbered words2 must be in ALL CAPS (Example: Cake is very delicious. becomes Cake IZ very DELICIOUZ)\n      string[] convStrSplits = convStr.Split();\n      StringBuilder strBuilder = new StringBuilder();\n      for (int i = 0; i < convStrSplits.Length; i++)\n      {\n        string str = convStrSplits[i];\n        if (i % 2 != 0)\n        {\n          str = str.ToUpper();\n        }\n        strBuilder.Append(str);\n\n        if (i != convStrSplits.Length - 1)\n        {\n          strBuilder.Append(" ");\n        }\n      }\n      convStr = strBuilder.ToString();\n    }\n\n    // \uaddc\uce59 12 : 3A question mark ( ? ) should have more question marks added to it, equal to the number of words2 in the sentence (Example: Are you a foo? has 4 words, so it would be converted to r U a F00????)\n    int wordCount = convStr.Split().Length;\n    StringBuilder sBuilder = new StringBuilder();\n    for (int i = 0; i < wordCount; i++)\n    {\n      sBuilder.Append("?");\n    }\n    convStr = convStr.Replace("?", sBuilder.ToString());\n\n    sBuilder.Clear();\n    // \uaddc\uce59 13 : Similarly, exclamation points ( ! ) should be replaced by a series of alternating exclamation points and the number 1, equal to the number of words2 in the sentence (Example: You are a foo! becomes u R a F00!1!1)\n    for (int i = 0; i < wordCount; i++)\n    {\n      if (i % 2 == 0)\n      {\n        sBuilder.Append("!");\n      }\n      else\n      {\n        sBuilder.Append("1");\n      }\n    }\n    convStr = convStr.Replace("!", sBuilder.ToString());\n\n    return convStr;\n  }\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uc77c\ubc18 \ubb38\uc7a5\uc744 \uc778\ud130\ub137 \uc6a9\uc5b4\ub85c \ubcc0\uacbd\ud558\ub294 \ubb38\uc81c"),(0,a.yg)("li",{parentName:"ul"},"\ubb38\uc81c\uac00 \ubcf5\uc7a1\ud558\uae30 \ubcf4\ub2e4\ub294, \uc870\uac74 \uc790\uccb4\uac00 \ub9ce\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\ub531 \ubd10\ub3c4 \uc815\uaddc\ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud574\uc11c \ud480\uc5b4\uc57c \ub418\ub294 \ubb38\uc81c.."),(0,a.yg)("li",{parentName:"ul"},'"to", "too"\ub294 \uc22b\uc790 2\ub85c \ub300\uccb4'),(0,a.yg)("li",{parentName:"ul"},'"for", "fore"\ub294 \uc22b\uc790 4\ub85c \ub300\uccb4'),(0,a.yg)("li",{parentName:"ul"},"\uc5f0\uc18d\ud574\uc11c 2\ubc88 \ub098\uc624\ub294 \ubb38\uc790 o\uc758 \uacbd\uc6b0 \uc22b\uc790 0\uc73c\ub85c \ub300\uccb4"),(0,a.yg)("li",{parentName:"ul"},'"be", "are", "you", "please", "people", "really", "have", "know" \ub294 \uac01\uac01 "b", "r", "u", "plz", "ppl", "rly", "haz", "no"\ub85c \ubcc0\uacbd\ud55c\ub2e4. (\uadf8\ub4e4\uc774 \ub2e8\uc5b4\uc758 \uc77c\ubd80\uc77c\uc9c0\ub77c\ub3c4)'),(0,a.yg)("li",{parentName:"ul"},"\ub2e8\uc5b4\ub97c \ub300\uccb4 \ud560 \ub54c \ub2e4\ub978 \uaddc\uce59\uc774 \ub2e8\uc5b4\ub97c \ubaa8\ub450 \ub300\ubb38\uc790\ub85c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ud55c \ud56d\uc0c1 \uccab \ubc88\uc9f8 \ubb38\uc790\uc758 \ub300 / \uc18c\ubb38\uc790\ub97c \uc720\uc9c0\ud558\uc2ed\uc2dc\uc624."),(0,a.yg)("li",{parentName:"ul"},'\ubb38\uc790 "s"\ub294 \ud56d\uc0c1 "z"\ub85c \ub300\uce58\ub418\uc5b4\uc57c\ud569\ub2c8\ub2e4.'),(0,a.yg)("li",{parentName:"ul"},'"LOL"\uc740 "w"\ub610\ub294 "W"\ub85c \uc2dc\uc791\ud558\ub294 \uc785\ub825 \ubb38\uc790\uc5f4\uc758 \uc2dc\uc791 \ubd80\ubd84\uc5d0 \ucd94\uac00\ub418\uc5b4\uc57c\ud569\ub2c8\ub2e4.'),(0,a.yg)("li",{parentName:"ul"},'"OMG"\ub294 32 \ubb38\uc790 \uc774\uc0c1\uc758 \ubb38\uc790\uc5f4 \uc2dc\uc791 \ubd80\ubd84 (LOL \uc774\ud6c4)\uc5d0 \ucd94\uac00\ud574\uc57c\ud569\ub2c8\ub2e4'),(0,a.yg)("li",{parentName:"ul"},"\uc9dd\uc218 \ubc88\uc9f8 \ub2e8\uc5b4\uc758 \uacbd\uc6b0 \ubaa8\ub450 \ub300\ubb38\uc790 \uc5ec\uc57c\ud569\ub2c8\ub2e4 (\uc608 : Cake is very delicious. -> Cake IZ very DELICIOUZ)"),(0,a.yg)("li",{parentName:"ul"},'\uc785\ub825 \ubb38\uc790\uc5f4\uc774 "h"\ub610\ub294 "H"\ub85c \uc2dc\uc791\ud558\uba74 \uc804\uccb4 \ucd9c\ub825 \ubb38\uc790\uc5f4\uc740 \ubaa8\ub450 \ub300\ubb38\uc790 \uc5ec\uc57c\ud569\ub2c8\ub2e4'),(0,a.yg)("li",{parentName:"ul"},"\ub9c8\uce68\ud45c (.), \uc27c\ud45c (,) \ubc0f \uc544\ud3ec\uc2a4\ud2b8\ub85c\ud53c ( ')\ub294 \uc81c\uac70\ub429\ub2c8\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\ubb3c\uc74c\ud45c (?)\uc5d0 \ub354 \ub9ce\uc740 \ubb3c\uc74c\ud45c\uac00 \ucd94\uac00\ub418\uc5b4\uc57c\ud569\ub2c8\ub2e4 (\uc608 : Are you a foo? \ub294 4 \ub2e8\uc5b4\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c \ub2e4\uc74c\uacfc \uac19\uc774 \ubcc0\uacbd\ud569\ub2c8\ub2e4 r U a F00????)"),(0,a.yg)("li",{parentName:"ul"},"\uc720\uc0ac\ud558\uac8c, \ub290\ub08c\ud45c (!)\ub294 \uc77c\ub828\uc758 \ub300\uccb4 \ub290\ub08c\ud45c\uc640 \ubb38\uc7a5\uc5d0\uc11c \ub2e8\uc5b4\uc758 \uc218\uc640 \uac19\uc740 \uc22b\uc790\ub85c \ub300\uccb4\ud574\uc57c\ud569\ub2c8\ub2e4 (\uc608 : You are a foo! becomes u R a F00!1!1)")),(0,a.yg)("h2",{id:"best-practices"},"Best Practices"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Text.RegularExpressions;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic static class Kata\n{\n  private static readonly Dictionary<string, string> Replacements = new Dictionary<string, string>\n  {\n      {"too", "2"},\n      {"Too", "2"},\n      {"to", "2"},\n      {"To", "2"},\n      {"be", "b"},\n      {"Be", "B"},\n      {"fore", "4"},\n      {"FORE", "4"},\n      {"for", "4"},\n      {"oo", "00"},\n      {"OO", "00"},\n      {"Oo", "00"},\n      {"are", "r"},\n      {"you", "u"},\n      {"You", "u"},\n      {"please", "plz"},\n      {"people", "ppl"},\n      {"really", "rly"},\n      {"have", "haz"},\n      {"know", "no"},\n      {"s", "z"},\n      {"S", "Z"},\n      {".", ""},\n      {",", ""},\n      {"\'", ""}\n  };\n\n  private static readonly char[] SentenceDelimiters = {\'.\', \'!\', \'?\'};\n\n\n  public static string N00bify(string text)\n  {\n      var result = string.Empty;\n      var sentences = Regex.Split(text, @"(?<=[.!?])\\s+(?=\\p{Lt})");\n      foreach (var sentence in sentences)\n      {\n          var currentSentence = sentence;\n          currentSentence = MapPatterns(currentSentence);\n          currentSentence = UpperCaseIfStartsWithH(currentSentence);\n\n          var lengthBeforeInsertions = currentSentence.Count(c => !SentenceDelimiters.Any(d => d == c));\n          var needLol = currentSentence.Trim().ToLowerInvariant().StartsWith("w");\n          var needOmg = lengthBeforeInsertions + (needLol ? 4 : 0) >= 32;\n          currentSentence = InsertOmgLol(needOmg, currentSentence, needLol);\n\n          var wordCount = CountWords(currentSentence);\n          currentSentence = InsertQuestions(currentSentence, wordCount);\n          currentSentence = InsertExclamations(currentSentence, wordCount);\n\n          var wordsOriginal = currentSentence.Trim().Split(\' \');\n          var wordsModified = wordsOriginal.Select((w, i) => i%2 == 1 ? w.ToUpperInvariant() : w).ToArray();\n          currentSentence = string.Join(" ", wordsModified);\n          result += currentSentence;\n      }\n      return result;\n  }\n\n  private static string InsertExclamations(string _sentence, int wordCount)\n  {\n      return _sentence.Replace("!",\n          string.Concat(Enumerable.Range(0, wordCount).Select(i => i%2 == 0 ? "!" : "1").ToArray()));\n  }\n\n  private static string InsertQuestions(string _sentence, int wordCount)\n  {\n      _sentence = _sentence.Replace("?", new string(\'?\', wordCount));\n      return _sentence;\n  }\n\n  private static int CountWords(string _sentence)\n  {\n      var wordCount = _sentence.Trim().Split(\' \').Select(w => !string.IsNullOrWhiteSpace(w)).Count();\n      return wordCount;\n  }\n\n  private static string InsertOmgLol(bool needOmg, string _sentence, bool needLol)\n  {\n      if (needOmg)\n          _sentence = "OMG " + _sentence;\n      if (needLol)\n          _sentence = "LOL " + _sentence;\n      return _sentence;\n  }\n\n  private static string UpperCaseIfStartsWithH(string _sentence)\n  {\n      if (_sentence.Trim().ToLowerInvariant().StartsWith("h"))\n          _sentence = _sentence.ToUpperInvariant();\n      return _sentence;\n  }\n\n  private static string MapPatterns(string _sentence)\n  {\n      foreach (var replacement in Replacements)\n          _sentence = _sentence.Replace(replacement.Key, replacement.Value);\n      return _sentence;\n  }\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uc815\uaddc\ud45c\ud604\uc2dd \ubaa8\ub974\uba74 \uac70\uc758 \ubabb\ud478\ub294 \ub290\ub08c.."),(0,a.yg)("li",{parentName:"ul"},"\uc774\uc815\ub3c4\uae4c\uc9c0 \ubb38\uc790\uc5f4\uc744 \ubcc0\ud658 \uc2dc\ud0a4\uace0 \uc2f6\uc73c\uba74, \ud655\uc2e4\ud788 \uc815\uaddc\ud45c\ud604\uc2dd\uc744 \uc54c\uc544\uc57c \ub420 \ub4ef.")))}g.isMDXComponent=!0}}]);