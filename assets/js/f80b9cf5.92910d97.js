"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56388],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=a.createContext({}),u=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=u(n.components);return a.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),d=u(t),m=r,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(y,o(o({ref:e},c),{},{components:t})):a.createElement(y,o({ref:e},c))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22153:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const i={title:"[Codewars #37] Maze Runner (6kyu)",authors:["karais89"],tags:["codewars","kata"]},o=void 0,s={permalink:"/2019/01/19/codewars-Maze-Runner",editUrl:"https://github.com/karais89/karais89.github.io/tree/main/my-website/blog/2019-01-19-codewars-Maze-Runner/index.md",source:"@site/blog/2019-01-19-codewars-Maze-Runner/index.md",title:"[Codewars #37] Maze Runner (6kyu)",description:"Instructions",date:"2019-01-19T00:00:00.000Z",formattedDate:"2019\ub144 1\uc6d4 19\uc77c",tags:[{label:"codewars",permalink:"/tags/codewars"},{label:"kata",permalink:"/tags/kata"}],readingTime:3.755,hasTruncateMarker:!1,authors:[{name:"karais89",title:"Game Developer",url:"https://github.com/karais89",imageURL:"https://github.com/karais89.png",key:"karais89"}],frontMatter:{title:"[Codewars #37] Maze Runner (6kyu)",authors:["karais89"],tags:["codewars","kata"]},prevItem:{title:"[Codewars #36] Basic DeNico (5kyu)",permalink:"/2019/01/19/codewars-Basic-DeNico"},nextItem:{title:"[Codewars #38] Play with two Strings (5kyu)",permalink:"/2019/01/19/codewars-Play-with-two-Strings"}},l={authorsImageUrls:[void 0]},u=[{value:"Instructions",id:"instructions",level:2},{value:"My Solution",id:"my-solution",level:2},{value:"Best Practices",id:"best-practices",level:2}],c={toc:u};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.codewars.com/kata/58663693b359c4a6560001d6/train/csharp"},"\ub9c1\ud06c")),(0,r.kt)("p",null,"Introduction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!\n")),(0,r.kt)("p",null,"Maze Runner\nTask"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.\n")),(0,r.kt)("p",null,"The Maze array will look like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"maze = [[1,1,1,1,1,1,1],\n        [1,0,0,0,0,0,3],\n        [1,0,1,0,1,0,1],\n        [0,0,1,0,0,0,1],\n        [1,0,1,0,1,0,1],\n        [1,0,0,0,0,0,1],\n        [1,2,1,0,1,0,1]]\n")),(0,r.kt)("p",null,"..with the following key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0 = Safe place to walk\n1 = Wall\n2 = Start Point\n3 = Finish Point\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"\n')),(0,r.kt)("p",null,"Rules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.\n2. The start and finish positions will change for the final tests.\n3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.\n")),(0,r.kt)("p",null,"Good luck, and stay safe!"),(0,r.kt)("p",null,"Kata Series"),(0,r.kt)("p",null,"If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you."),(0,r.kt)("h2",{id:"my-solution"},"My Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\n\nnamespace CodeWars\n{\n    class Kata\n    {\n        private enum MazeState\n        {\n          SafePlaceToWalk,\n          Wall,\n          StartPoint,\n          EndPoint\n        };\n\n        public struct Point\n        {\n          public int x;\n          public int y;\n\n          public override string ToString()\n          {\n            return $"[{x}, {y}]";\n          }\n        }\n\n        public Point FindStartPoint(int[,] maze)\n        {\n          for (int i = 0; i < maze.GetLength(0); i++)\n          {\n            for (int j = 0; j < maze.GetLength(1); j++)\n            {\n              if (maze[i,j] == (int)MazeState.StartPoint)\n              {\n                Point p = new Point();\n                p.y = i;\n                p.x = j;\n                return p;\n              }\n            }\n          }\n\n          Point notFoundPoint = new Point();\n          notFoundPoint.x = -1;\n          notFoundPoint.y = -1;\n          return notFoundPoint;\n        }\n\n        public string mazeRunner(int[,] maze, string[] directions)\n        {\n          // Code here\n          Point startPoint = FindStartPoint(maze);\n          Point nextPoint = startPoint;\n\n          for (int i = 0; i < directions.Length; i++)\n          {\n            switch(directions[i])\n            {\n              case "N": // up\n                nextPoint.y--;\n                break;\n              case "S": // down\n                nextPoint.y++;\n                break;\n              case "E": // right\n                nextPoint.x++;\n                break;\n              case "W": // left\n                nextPoint.x--;\n                break;\n            }\n\n            // out side check\n            if (nextPoint.x < 0 || nextPoint.x >= maze.GetLength(0) ||\n                nextPoint.y < 0 || nextPoint.y >= maze.GetLength(1))\n            {\n              return "Dead";\n            }\n\n            switch ((MazeState)maze[nextPoint.y, nextPoint.x])\n            {\n              case MazeState.Wall:\n                return "Dead";\n              case MazeState.EndPoint:\n                return "Finish";\n              default:\n                // nothing\n                break;\n            }\n          }\n\n          return "Lost";\n        }\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"direction \ubc30\uc5f4\uc5d0 \uc788\ub294 \uc2a4\ud2b8\ub9c1 \uac12\uc73c\ub85c start point \ubd80\ud130 \uc2dc\uc791\ud558\uc5ec \uc9c4\ud589."),(0,r.kt)("li",{parentName:"ul"},"\uc911\uac04\uc5d0 \ubcbd\uc5d0 \ub2ff\uc73c\uba74 Dead \ub9ac\ud134"),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ud589\ub3d9\uc774 \ub05d\ub098\uae30\uc804\uc5d0 finish\uc5d0 \ub3c4\ucc29\ud55c\ub2e4\uba74 Finish \ub9ac\ud134"),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ud589\ub3d9\uc774 \ub05d\ub098\ub3c4 \uc8fd\uc9c0 \uc54a\uc558\uac70\ub098, finish \uc9c0\uc810\uc5d0 \ub3c4\ucc29 \ud558\uc9c0 \ubabb\ud588\ub2e4\uba74 Lost \ub9ac\ud134")),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CodeWars\n{\n    class Kata\n    {\n        public string mazeRunner(int[,] maze, string[] directions)\n        {\n            int startX = 0;\n            int startY = 0;\n            double len = Math.Sqrt(maze.Length);\n            for (int x = 0; x < len; x++)\n            {\n                for (int y = 0; y < len; y++)\n                {\n                    if (maze[y, x] == 2) { startX = x; startY = y; }\n                }\n            }\n            for (int x = 0; x < directions.Length; x++)\n            {\n                switch (directions[x])\n                {\n                    case "N": startY -= 1; break;\n                    case "E": startX += 1; break;\n                    case "S": startY += 1; break;\n                    case "W": startX -= 1; break;\n                }\n                if (startY < 0 || startY > len - 1 || startX < 0 || startX > len - 1 || maze[startY, startX] == 1) { return "Dead"; }\n                if (maze[startY,startX] == 3) { return "Finish"; }\n            }\n\n            return "Lost";\n        }\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub17c\ub9ac\ub294 \uac70\uc758 \ube44\uc2b7\ud574 \ubcf4\uc778\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc608\uc678 \ucc98\ub9ac \ubc0f \ub9e4\uc9c1 \ub118\ubc84\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc774\ub77c \ucf54\ub4dc\uac00 \ub354 \uc9e7\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\uac8c \ub354 \ubca0\uc2a4\ud2b8\ud55c \ubc29\uc2dd\uc778\uc9c0\ub294 \uc758\ubb38\uc774 \ub4e0\ub2e4.")))}p.isMDXComponent=!0}}]);