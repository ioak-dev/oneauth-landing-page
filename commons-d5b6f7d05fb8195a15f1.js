(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"51K9":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Free collaborative Agile project management tool","description":"Enhance software development workflow, be it Kanban or Scrum. Plan and track milestones with sprint and epic. Use checklists to capture the objectives of a task.","author":"@ioak-dev"}}}}')},"8+s/":function(t,e,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,i=n("q1tI"),a=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,M=[];function L(){u=t(M.map((function(t){return t.props}))),s.canUseDOM?e(u):n&&(u=n(u))}var s=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,M=[],t};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){M.push(this),L()},o.componentDidUpdate=function(){L()},o.componentWillUnmount=function(){var t=M.indexOf(this);M.splice(t,1),L()},o.render=function(){return a.createElement(r,this.props)},i}(i.PureComponent);return o(s,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),o(s,"canUseDOM",c),s}}},AC1O:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDUgNzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwNSA3MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOiMyN0FBRTE7fQoJLnN0MntmaWxsOiNGMDVDNUI7fQoJLnN0M3tmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjkuNzU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQ0LjE1LDY5LjQ3aC0xMi42VjU5LjI1aC0wLjI4Yy0yLjYxLDMuODMtNS44Myw2Ljg2LTkuNjYsOS4xYy0zLjgzLDIuMjQtOC4wMywzLjM2LTEyLjYsMy4zNgoJYy00Ljg1LDAtOS4yNC0wLjkzLTEzLjE2LTIuOHMtNy4yMy00LjQ2LTkuOTQtNy43N2MtMi43MS0zLjMxLTQuNzYtNy4xMi02LjE2LTExLjQxYy0xLjQtNC4yOS0yLjEtOC43Ny0yLjEtMTMuNDQKCWMwLTQuNDgsMC43Mi04LjgsMi4xNy0xMi45NWMxLjQ1LTQuMTUsMy41Mi03Ljg0LDYuMjMtMTEuMDZjMi43MS0zLjIyLDUuOTctNS43NCw5LjgtNy41NmMzLjgzLTEuODIsOC4wNy0yLjczLDEyLjc0LTIuNzMKCWM0Ljc2LDAsOS4wOCwxLjE0LDEyLjk1LDMuNDNjMy44NywyLjI5LDcuMTIsNS40NCw5LjczLDkuNDVoMC4yOFYzLjk1aDEyLjZWNjkuNDd6IE0xMjYuNTgsNTMuNjVjMy43OC00LjU3LDUuNjctMTAuMjIsNS42Ny0xNi45NAoJYzAtNi42My0xLjkxLTEyLjItNS43NC0xNi43M2MtMy44My00LjUzLTkuMDEtNi43OS0xNS41NC02Ljc5Yy02LjI1LDAtMTEuMjcsMi4zMS0xNS4wNSw2LjkzYy0zLjc4LDQuNjItNS42NywxMC4xNS01LjY3LDE2LjU5CgljMCw2LjUzLDEuODcsMTIuMTMsNS42LDE2LjhjMy43Myw0LjY3LDguNzcsNywxNS4xMiw3QzExNy42LDYwLjUxLDEyMi44LDU4LjIyLDEyNi41OCw1My42NXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE4Ny4xNywzLjk0aDE1Ljc0TDE3OC4wNCwzNC4ybDI2LjI1LDM1LjNoLTE2LjQzbC0yMC45NS0yOS40N2gtMC4xN3YyOS40N2gtMTIuNzhWMy45NGgxMi43OHYyNy42NWgwLjE3CglMMTg3LjE3LDMuOTR6Ii8+Cjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzguNjEsLTMuNTIgMzcuOTYsLTMuNTIgMzcuOTYsLTMuNTIgMzguNjEsLTMuNTIgIi8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNy43MywyMy4zNmMyLjY0LTEuODIsNS44My0yLjg5LDkuMjctMi44OWMzLjQ0LDAsNi42MywxLjA3LDkuMjcsMi44OWw2LjI5LTcuNDkKCWMtNC4zNS0zLjIzLTkuNzMtNS4xNS0xNS41Ni01LjE1Yy01LjgyLDAtMTEuMjEsMS45Mi0xNS41Niw1LjE1TDI3LjczLDIzLjM2eiIvPgo8cmVjdCB4PSIzMi4xMyIgeT0iMzcuNzciIGNsYXNzPSJzdDAiIHdpZHRoPSI5Ljc1IiBoZWlnaHQ9IjI1LjYxIi8+CjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjM3LjAxIiBjeT0iMzYuODIiIHI9IjMwLjkiLz4KPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIzNy4zMywtMy41NCAzNi42OCwtMy41NCAzNi42OCwtMy41NCAzNy4zMywtMy41NCAiLz4KPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzcuMDEiIGN5PSIzMy4xNSIgcj0iNy43NSIvPgo8L3N2Zz4K"},"HAE/":function(t,e,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},"L+q7":function(t,e,n){},MWlc:function(t){t.exports=JSON.parse('{"companyProfile":{"title":"IOAK Developer Community","description":"Developer community that is set to educate software developers through realtime project implementations. Specialized in web development and Artificial intelligence"},"contact":[{"faIcon":"fas fa-envelope","label":"info@ioak.org"},{"faIcon":"fas fa-phone-alt","label":"+91-8095500622"},{"faIcon":"fab fa-discord","label":"https://discord.gg/B76x6cq"},{"faIcon":"fab fa-linkedin-in","label":"https://www.linkedin.com/company/ioak"}],"links":[{"group":"Help and Support","list":[{"href":"https://mirror.ioak.org/#/a1/article/browse","label":"Frequently asked questions"},{"href":"https://mirror.ioak.org/#/a1/article/browse?categoryid=5eda9fff230dba0017a0f25a","label":"Use cases"},{"href":"https://mirror.ioak.org/#/a1/post/create","label":"Ask question"},{"href":"https://mirror.ioak.org/#/a1/article/view?id=5ee71e34aacadc00177e63fa","label":"API documentation"},{"href":"https://github.com/ioak-dev/oneauth-service","label":"Source code"}]}],"backup":{"group":"Legal and Privacy","list":[{"href":"/terms","label":"Terms and Conditions"},{"href":"/privacy","label":"Privacy Policy"}]}}')},Oyvg:function(t,e,n){var r=n("dyZX"),i=n("Xbzi"),a=n("hswa").f,o=n("kJMx").f,c=n("quPj"),u=n("C/va"),M=r.RegExp,L=M,s=M.prototype,j=/a/g,y=/a/g,l=new M(j)!==j;if(n("nh4g")&&(!l||n("eeVq")((function(){return y[n("K0xU")("match")]=!1,M(j)!=j||M(y)==y||"/a/i"!=M(j,"i")})))){M=function(t,e){var n=this instanceof M,r=c(t),a=void 0===e;return!n&&r&&t.constructor===M&&a?t:i(l?new L(r&&!a?t.source:t,e):L((r=t instanceof M)?t.source:t,r&&a?u.call(t):e),n?this:s,M)};for(var N=function(t){t in M||a(M,t,{configurable:!0,get:function(){return L[t]},set:function(e){L[t]=e}})},T=o(L),f=0;T.length>f;)N(T[f++]);s.constructor=M,M.prototype=s,n("KroJ")(r,"RegExp",M)}n("elZq")("RegExp")},RZaL:function(t,e,n){"use strict";n.d(e,"a",(function(){return L}));var r=n("q1tI"),i=n.n(r),a=(n("f8kw"),n("WEW4")),o=n.n(a),c=n("XUrM"),u=n.n(c),M=n("Wbzz");function L(t){return i.a.createElement("div",{className:"header-section"},i.a.createElement(M.Link,{to:"/",title:"Go to landing page"},i.a.createElement("img",{className:"logo",src:t.black?u.a:o.a,alt:"Oneauth logo"})))}},WEW4:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxOTkxLjQgNDE2LjkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE5OTEuNCA0MTYuOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDc1LjEsMzIwLjFjLTguMiwwLTE1LjgtMS41LTIyLjgtNC41Yy03LTMtMTMuMS03LjItMTguNC0xMi40cy05LjQtMTEuNC0xMi40LTE4LjQNCgkJYy0zLTctNC41LTE0LjYtNC41LTIyLjhWMTUzLjVjMC03LjksMS41LTE1LjUsNC41LTIyLjZjMy03LjEsNy4yLTEzLjMsMTIuNC0xOC42czExLjQtOS40LDE4LjQtMTIuNGM3LTMsMTQuNi00LjYsMjIuOC00LjZoODUuNA0KCQljNy45LDAsMTUuNSwxLjUsMjIuNiw0LjZjNy4xLDMsMTMuMyw3LjIsMTguNSwxMi40czkuNCwxMS40LDEyLjQsMTguNmMzLDcuMSw0LjUsMTQuNiw0LjUsMjIuNlYyNjJjMCw4LjItMS41LDE1LjgtNC41LDIyLjgNCgkJYy0zLDctNy4yLDEzLjEtMTIuNCwxOC40cy0xMS40LDkuNC0xOC41LDEyLjRjLTcuMSwzLTE0LjYsNC41LTIyLjYsNC41SDQ3NS4xeiBNNDM4LDI2MmMwLDUuMSwxLDkuOSwzLDE0LjMNCgkJYzIsNC40LDQuNyw4LjMsOC4xLDExLjdjMy40LDMuNCw3LjMsNi4xLDExLjcsOGM0LjQsMiw5LjIsMywxNC4zLDNoODUuNGM1LjEsMCwxMC0xLDE0LjUtM2M0LjUtMiw4LjUtNC43LDExLjctOA0KCQljMy4zLTMuNCw1LjktNy4zLDcuOS0xMS43YzItNC40LDMtOS4yLDMtMTQuM1YxNTMuNWMwLTUuMS0xLTkuOS0zLTE0LjRjLTItNC40LTQuNi04LjMtNy45LTExLjdjLTMuMy0zLjQtNy4yLTYuMS0xMS43LTguMQ0KCQljLTQuNi0yLTkuNC0zLTE0LjUtM2gtODUuNGMtNS4xLDAtOS45LDEtMTQuMywzYy00LjQsMi04LjMsNC43LTExLjcsOC4xYy0zLjQsMy40LTYuMSw3LjMtOC4xLDExLjdjLTIsNC40LTMsOS4yLTMsMTQuNFYyNjJ6Ii8+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTY4Ni44LDMyMC4xaC0yMVY5NS40aDExOC43YzguNiwwLDE2LjcsMS42LDI0LjEsNC45YzcuNSwzLjMsMTQsNy43LDE5LjYsMTMuM2M1LjYsNS42LDEwLDEyLjEsMTMuMywxOS42DQoJCWMzLjMsNy41LDQuOSwxNS40LDQuOSwyMy44djE2My4xaC0yMVYxNTdjMC01LjYtMS4xLTEwLjktMy4zLTE1LjhjLTIuMi00LjktNS4xLTkuMi04LjgtMTIuOWMtMy42LTMuNy03LjktNi43LTEzLTguOA0KCQljLTUtMi4xLTEwLjMtMy4yLTE1LjktMy4yaC05Ny43VjMyMC4xeiIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMDM3LjIsMzIwLjFIODk0VjIxOC4ydi0yMXYtNDJjMC04LjIsMS42LTE1LjksNC43LTIzLjFjMy4yLTcuMiw3LjQtMTMuNiwxMi44LTE5LjENCgkJYzUuNC01LjUsMTEuNy05LjgsMTkuMS0xM2M3LjMtMy4xLDE1LjEtNC43LDIzLjMtNC43aDgzLjN2MjFoLTgzLjNjLTUuNCwwLTEwLjQsMS4xLTE1LDMuMmMtNC43LDIuMS04LjgsNC45LTEyLjMsOC40DQoJCXMtNi4zLDcuNi04LjQsMTIuM2MtMi4xLDQuNy0zLjIsOS43LTMuMiwxNXY0MmgxMDEuMnYyMUg5MTV2ODAuOGgxMjIuMlYzMjAuMXoiLz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwNi41LDMyMC4xaC0yMVYxNTUuMmMwLTguMiwxLjYtMTUuOSw0LjctMjMuMWMzLjItNy4yLDcuNC0xMy42LDEyLjgtMTkuMWM1LjQtNS41LDExLjctOS44LDE5LjEtMTMNCgkJYzcuMy0zLjEsMTUuMS00LjcsMjMuMy00LjdoMTE5LjR2MTA1Ljd2MjF2OThoLTIxdi05OGgtMTE3LjN2LTIxaDExNy4zdi04NC43aC05OC40Yy01LjQsMC0xMC40LDEuMS0xNSwzLjINCgkJYy00LjcsMi4xLTguOCw0LjktMTIuMyw4LjRzLTYuMyw3LjYtOC40LDEyLjNjLTIuMSw0LjctMy4yLDkuNy0zLjIsMTVWMzIwLjF6Ii8+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE0ODcuNSwyODMuOGMtMy4yLDcuMS03LjQsMTMuNC0xMi44LDE4LjdjLTUuNCw1LjQtMTEuNiw5LjYtMTguNywxMi44Yy03LjEsMy4xLTE0LjgsNC43LTIyLjksNC43aC0xMjAuNA0KCQlWOTUuNGgyMXYyMDMuN2g5OS40YzUuMSwwLDEwLTEsMTQuNy0zYzQuNy0yLDguOC00LjcsMTIuMy04LjJzNi4yLTcuNSw4LjItMTIuMWMyLTQuNiwzLTkuNSwzLTE0LjlWOTUuNGgyMXYxNjUuNg0KCQlDMTQ5Mi4yLDI2OS4xLDE0OTAuNiwyNzYuNywxNDg3LjUsMjgzLjh6Ii8+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE2MzUuMywxMTYuNGgtOTUuNXYtMjFoMTM1LjFoMTAuNWg1OS41djIxaC01OS41aC0xMC41Yy03LjUsMC0xMy44LDIuNi0xOC45LDcuNw0KCQljLTUuMSw1LjEtNy43LDExLjQtNy43LDE4Ljl2MTc3LjFoLTIxLjNWMTQzQzE2MjYuOSwxMzMuNCwxNjI5LjcsMTI0LjUsMTYzNS4zLDExNi40eiIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xODEzLjUsOTUuNHYyMjQuN2gtMjFWOTUuNEgxODEzLjV6IE0xOTUxLjcsMzIwLjFWMjE4LjZoLTExOC4zdi0yMWgxMTguM1Y5NS40aDIxdjEwMi4ydjIxdjEwMS41SDE5NTEuN3oNCgkJIi8+DQo8L2c+DQo8Zz4NCgk8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIzMjUuNCwxMjkuNCAxODAuNSw0NC45IDM0LjgsMTI4LjEgDQoJCTM0LjEsMjk1LjkgMTc5LDM4MC40IDMyNC43LDI5Ny4yIAkiLz4NCgk8Y2lyY2xlIGZpbGw9IiNGRkZGRkYiIGN4PSIzMjQuNiIgY3k9IjEzMC43IiByPSIzMS4yIi8+DQoJPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMzQuOCIgY3k9IjEyOC45IiByPSIzMS4yIi8+DQoJPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMTc4LjgiIGN5PSIzNzkuMyIgcj0iMzEuMiIvPg0KCTxjaXJjbGUgZmlsbD0iIzAwOTQ0NCIgY3g9IjE4MC40IiBjeT0iNDUuNCIgcj0iMzEuMiIvPg0KCTxjaXJjbGUgZmlsbD0iIzAwOTQ0NCIgY3g9IjM0LjgiIGN5PSIyOTUuMyIgcj0iMzEuMiIvPg0KCTxjaXJjbGUgZmlsbD0iIzAwOTQ0NCIgY3g9IjMyMy43IiBjeT0iMjk3LjUiIHI9IjMxLjIiLz4NCjwvZz4NCjwvc3ZnPg0K"},XUrM:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxOTg4LjMgNDE2LjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE5ODguMyA0MTYuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAxMDEwMTtzdHJva2Utd2lkdGg6MTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDF7ZmlsbDojMDA5NDQ0O30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBkPSJNNjE5LjEsMjIzLjNjMCwyNC40LTQuMSw0NS43LTEyLjMsNjMuOGMtOC4yLDE4LjItMTkuOCwzMi0zNC45LDQxLjZzLTMyLjYsMTQuNC01Mi42LDE0LjRjLTE5LjYsMC0zNy00LjgtNTIuMS0xNC40DQoJCWMtMTUuMi05LjYtMjYuOS0yMy40LTM1LjMtNDEuMmMtOC40LTE3LjgtMTIuNy0zOC41LTEyLjktNjJ2LTE3LjljMC0yMy45LDQuMi00NS4xLDEyLjUtNjMuNGM4LjMtMTguMywyMC4xLTMyLjQsMzUuMy00Mi4xDQoJCWMxNS4yLTkuNywzMi42LTE0LjYsNTIuMi0xNC42YzE5LjksMCwzNy41LDQuOCw1Mi43LDE0LjRjMTUuMiw5LjYsMjYuOSwyMy42LDM1LjEsNDEuOXMxMi4zLDM5LjYsMTIuMyw2My44VjIyMy4zeiBNNTg2LjUsMjA3LjINCgkJYzAtMjkuNS01LjktNTIuMi0xNy44LTY3LjljLTExLjktMTUuOC0yOC40LTIzLjctNDkuNy0yMy43Yy0yMC43LDAtMzcuMSw3LjktNDksMjMuN2MtMTEuOSwxNS44LTE4LDM3LjctMTguNCw2NS43djE4LjMNCgkJYzAsMjguNiw2LDUxLjEsMTgsNjcuNGMxMiwxNi40LDI4LjYsMjQuNSw0OS42LDI0LjVjMjEuMiwwLDM3LjYtNy43LDQ5LjItMjMuMmMxMS42LTE1LjQsMTcuNi0zNy42LDE3LjktNjYuNFYyMDcuMnoiLz4NCgk8cGF0aCBkPSJNODU5LjYsMzM5LjZoLTMzTDcwMS4zLDE0Ny45djE5MS43aC0zM1Y5MC44aDMzbDEyNS42LDE5Mi42VjkwLjhoMzIuNlYzMzkuNnoiLz4NCgk8cGF0aCBkPSJNMTA1OC41LDIyNC42SDk1MC43djg4LjJoMTI1LjN2MjYuOEg5MTcuOFY5MC44aDE1Ni40djI2LjhIOTUwLjd2ODAuMmgxMDcuOFYyMjQuNnoiLz4NCgk8cGF0aCBkPSJNMTI1NC4yLDI3NC41aC0xMDQuMmwtMjMuNCw2NS4xaC0zMy44bDk1LTI0OC44aDI4LjdsOTUuMiwyNDguOGgtMzMuN0wxMjU0LjIsMjc0LjV6IE0xMTU5LjgsMjQ3LjdoODQuNkwxMjAyLDEzMS4zDQoJCUwxMTU5LjgsMjQ3Ljd6Ii8+DQoJPHBhdGggZD0iTTE1MTcuMyw5MC44VjI2MGMtMC4xLDIzLjUtNy41LDQyLjctMjIuMSw1Ny42Yy0xNC42LDE0LjktMzQuNSwyMy4zLTU5LjYsMjUuMWwtOC43LDAuM2MtMjcuMiwwLTQ4LjktNy4zLTY1LjEtMjINCgkJYy0xNi4yLTE0LjctMjQuNC0zNC45LTI0LjYtNjAuN1Y5MC44aDMyLjV2MTY4LjVjMCwxOCw1LDMyLDE0LjksNDJjOS45LDEwLDI0LDE1LDQyLjQsMTVjMTguNiwwLDMyLjgtNSw0Mi42LTE0LjkNCgkJYzkuOS05LjksMTQuOC0yMy45LDE0LjgtNDEuOVY5MC44SDE1MTcuM3oiLz4NCgk8cGF0aCBkPSJNMTc0MS4xLDExNy42aC04MHYyMjJoLTMyLjZ2LTIyMmgtNzkuOFY5MC44aDE5Mi40VjExNy42eiIvPg0KCTxwYXRoIGQ9Ik0xOTY5LjIsMzM5LjZoLTMzdi0xMTVoLTEyNS40djExNUgxNzc4VjkwLjhoMzIuOHYxMDdoMTI1LjR2LTEwN2gzM1YzMzkuNnoiLz4NCjwvZz4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzMzLjEsMTI5LjQgMTg4LjIsNDQuOSA0Mi41LDEyOC4xIDQxLjcsMjk1LjkgMTg2LjcsMzgwLjQgMzMyLjMsMjk3LjIgCSIvPg0KCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjE4OC4yIiBjeT0iNDYuOCIgcj0iMzYuOCIvPg0KCTxjaXJjbGUgY3g9IjMzMiIgY3k9IjEzMC41IiByPSIzNi44Ii8+DQoJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMzMwLjUiIGN5PSIyOTUuNiIgcj0iMzYuOCIvPg0KCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjQzLjMiIGN5PSIyOTUuNiIgcj0iMzYuOCIvPg0KCTxjaXJjbGUgY3g9IjQyLjUiIGN5PSIxMjkuNSIgcj0iMzYuOCIvPg0KCTxjaXJjbGUgY3g9IjE4Ny4zIiBjeT0iMzc5LjEiIHI9IjM2LjgiLz4NCjwvZz4NCjwvc3ZnPg0K"},XZaP:function(t,e,n){},ZhWT:function(t,e,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,i="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var c,u,M,L;if(Array.isArray(e)){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(!t(e[u],n[u]))return!1;return!0}if(i&&e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(L=e.entries();!(u=L.next()).done;)if(!n.has(u.value[0]))return!1;for(L=e.entries();!(u=L.next()).done;)if(!t(u.value[1],n.get(u.value[0])))return!1;return!0}if(a&&e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(L=e.entries();!(u=L.next()).done;)if(!n.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(e[u]!==n[u])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((c=(M=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(n,M[u]))return!1;if(r&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==M[u]&&"__v"!==M[u]&&"__o"!==M[u]||!e.$$typeof)&&!t(e[M[u]],n[M[u]]))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},bA9j:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("q1tI"),i=n.n(r),a=(n("XZaP"),n("Wbzz"));function o(){return i.a.createElement("div",{className:"copyright-section"},i.a.createElement("div",{className:"copyright-section--copyright desktop-only"},"© 2020 ioak.org"),i.a.createElement("span",{className:"desktop-only"},"|"),i.a.createElement(a.Link,{to:"/terms",title:"Terms and conditions"},"Terms and conditions"),i.a.createElement("span",null,"|"),i.a.createElement(a.Link,{to:"/privacy",title:"Privacy policy"},"Privacy policy"))}},c1hw:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n("q1tI"),i=n.n(r),a=(n("L+q7"),n("MWlc")),o=n("AC1O"),c=n.n(o);function u(t){return i.a.createElement("div",{className:"company-profile"},i.a.createElement("div",null,i.a.createElement("img",{className:"logo",src:c.a,alt:"IOAK logo"}),i.a.createElement("h4",{className:"heading--4"},t.data.title)),i.a.createElement("p",null,t.data.description))}var M=n("Wbzz");function L(t){return i.a.createElement("div",{className:"footer-link-group"},i.a.createElement("div",{className:"footer-link-group--title"},t.data.group),i.a.createElement("div",{className:"footer-link-group--content"},t.data.list.map((function(t,e){return i.a.createElement(M.Link,{to:t.href,key:e,title:t.label},t.label)}))))}function s(t){return i.a.createElement("div",{className:"footer-links"},t.data.map((function(t,e){return i.a.createElement(L,{data:t,key:e})})))}function j(t){return i.a.createElement("div",{className:"company-contact"},i.a.createElement("div",{className:"company-contact--title"},"Contact information"),i.a.createElement("div",{className:"company-contact--contact"},t.data.map((function(t,e){return i.a.createElement("div",{className:"company-contact--contact--mode",key:e},i.a.createElement("i",{className:t.faIcon}),i.a.createElement("p",null,t.label))}))))}function y(){return i.a.createElement("div",{className:"footer-section"},i.a.createElement("div",{className:"footer-section--container"},i.a.createElement(u,{data:a.companyProfile}),i.a.createElement(j,{data:a.contact}),i.a.createElement(s,{data:a.links})))}},"dZ+Y":function(t,e,n){"use strict";var r=n("XKFU"),i=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},f8kw:function(t,e,n){},h7Nl:function(t,e,n){var r=Date.prototype,i=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var t=a.call(this);return t==t?i.call(this):"Invalid Date"}))},qhky:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Nt}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,i,a,o,c=n("17x9"),u=n.n(c),M=n("8+s/"),L=n.n(M),s=n("ZhWT"),j=n.n(s),y=n("q1tI"),l=n.n(y),N=n("MgzW"),T=n.n(N),f="bodyAttributes",I="htmlAttributes",g="titleAttributes",d={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},p=(Object.keys(d).map((function(t){return d[t]})),"charset"),C="cssText",w="href",m="http-equiv",E="innerHTML",D="itemprop",S="name",z="property",x="rel",b="src",h="target",O={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",v="defer",Y="encodeSpecialCharacters",A="onChangeClientState",G="titleTemplate",Q=Object.keys(O).reduce((function(t,e){return t[O[e]]=e,t}),{}),P=[d.NOSCRIPT,d.SCRIPT,d.STYLE],Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},J=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},W=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},B=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},H=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(t){var e=_(t,d.TITLE),n=_(t,G);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=_(t,k);return e||r||void 0},X=function(t){return _(t,A)||function(){}},V=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return R({},t,e)}),{})},K=function(t,e){return e.filter((function(t){return void 0!==t[d.BASE]})).map((function(t){return t[d.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==t.indexOf(a)&&n[a])return e.concat(n)}return e}),[])},q=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+Z(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,a=Object.keys(t),o=0;o<a.length;o++){var c=a[o],u=c.toLowerCase();-1===e.indexOf(u)||n===x&&"canonical"===t[n].toLowerCase()||u===x&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==E&&c!==C&&c!==D||(n=c)}if(!n||!t[n])return!1;var M=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][M]&&(i[n][M]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var c=a[o],u=T()({},r[c],i[c]);r[c]=u}return t}),[]).reverse()},_=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},$=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){$(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:t.requestAnimationFrame||$,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},it=null,at=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,a=t.linkTags,o=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,M=t.scriptTags,L=t.styleTags,s=t.title,j=t.titleAttributes;ut(d.BODY,r),ut(d.HTML,i),ct(s,j);var y={baseTag:Mt(d.BASE,n),linkTags:Mt(d.LINK,a),metaTags:Mt(d.META,o),noscriptTags:Mt(d.NOSCRIPT,c),scriptTags:Mt(d.SCRIPT,M),styleTags:Mt(d.STYLE,L)},l={},N={};Object.keys(y).forEach((function(t){var e=y[t],n=e.newTags,r=e.oldTags;n.length&&(l[t]=n),r.length&&(N[t]=y[t].oldTags)})),e&&e(),u(t,l,N)},ot=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=ot(t)),ut(d.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),i=r?r.split(","):[],a=[].concat(i),o=Object.keys(e),c=0;c<o.length;c++){var u=o[c],M=e[u]||"";n.getAttribute(u)!==M&&n.setAttribute(u,M),-1===i.indexOf(u)&&i.push(u);var L=a.indexOf(u);-1!==L&&a.splice(L,1)}for(var s=a.length-1;s>=0;s--)n.removeAttribute(a[s]);i.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},Mt=function(t,e){var n=document.head||document.querySelector(d.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),i=Array.prototype.slice.call(r),a=[],o=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===E)n.innerHTML=e.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),i.some((function(t,e){return o=e,n.isEqualNode(t)}))?i.splice(o,1):a.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:a}},Lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},st=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[O[n]||n]=t[n],e}),e)},jt=function(t,e,n){switch(t){case d.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,i=st(n,r),[l.a.createElement(d.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=Lt(n),a=ot(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+H(a,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+H(a,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case f:case I:return{toComponent:function(){return st(e)},toString:function(){return Lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=O[t]||t;if(n===E||n===C){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),l.a.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===E||t===C)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+H(r[e],n)+'"';return t?t+" "+i:i}),""),a=r.innerHTML||r.cssText||"",o=-1===P.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+t+">")}),"")}(t,e,n)}}}},yt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,a=t.linkTags,o=t.metaTags,c=t.noscriptTags,u=t.scriptTags,M=t.styleTags,L=t.title,s=void 0===L?"":L,j=t.titleAttributes;return{base:jt(d.BASE,e,r),bodyAttributes:jt(f,n,r),htmlAttributes:jt(I,i,r),link:jt(d.LINK,a,r),meta:jt(d.META,o,r),noscript:jt(d.NOSCRIPT,c,r),script:jt(d.SCRIPT,u,r),style:jt(d.STYLE,M,r),title:jt(d.TITLE,{title:s,titleAttributes:j},r)}},lt=L()((function(t){return{baseTag:K([w,h],t),bodyAttributes:V(f,t),defer:_(t,v),encode:_(t,Y),htmlAttributes:V(I,t),linkTags:q(d.LINK,[x,w],t),metaTags:q(d.META,[S,p,m,z,D],t),noscriptTags:q(d.NOSCRIPT,[E],t),onChangeClientState:X(t),scriptTags:q(d.SCRIPT,[b,E],t),styleTags:q(d.STYLE,[C],t),title:F(t),titleAttributes:V(g,t)}}),(function(t){it&&nt(it),t.defer?it=et((function(){at(t,(function(){it=null}))})):(at(t),it=null)}),yt)((function(){return null})),Nt=(i=lt,o=a=function(t){function e(){return U(this,e),B(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!j()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case d.SCRIPT:case d.NOSCRIPT:return{innerHTML:e};case d.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,a=t.nestedChildren;return R({},r,((e={})[n.type]=[].concat(r[n.type]||[],[R({},i,this.mapNestedChildrenToProps(n,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,a=t.newChildProps,o=t.nestedChildren;switch(r.type){case d.TITLE:return R({},i,((e={})[r.type]=o,e.titleAttributes=R({},a),e));case d.BODY:return R({},i,{bodyAttributes:R({},a)});case d.HTML:return R({},i,{htmlAttributes:R({},a)})}return R({},i,((n={})[r.type]=R({},a),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=R({},e);return Object.keys(t).forEach((function(e){var r;n=R({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return l.a.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,a=i.children,o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[Q[n]||n]=t[n],e}),e)}(W(i,["children"]));switch(n.warnOnInvalidChildren(t,a),t.type){case d.LINK:case d.META:case d.NOSCRIPT:case d.SCRIPT:case d.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:o,nestedChildren:a});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:o,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=W(t,["children"]),r=R({},n);return e&&(r=this.mapChildrenToProps(e,r)),l.a.createElement(i,r)},J(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(l.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var t=i.rewind();return t||(t=yt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},o);Nt.renderStatic=Nt.rewind}).call(this,n("yLpj"))},vrFN:function(t,e,n){"use strict";var r=n("51K9"),i=n("q1tI"),a=n.n(i),o=n("qhky");function c(t){var e=t.description,n=t.lang,i=t.meta,c=t.title,u=r.data.site,M=e||u.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:M},{property:"og:title",content:c},{property:"og:description",content:M},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:M}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=commons-d5b6f7d05fb8195a15f1.js.map