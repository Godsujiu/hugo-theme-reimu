(()=>{(function(){[Element,Document,Window].forEach(e=>{e.prototype._addEventListener=e.prototype.addEventListener,e.prototype._removeEventListener=e.prototype.removeEventListener,e.prototype.addEventListener=e.prototype.on=function(t,n,o){this.__listeners__||(this.__listeners__={}),this.__listeners__[t]||(this.__listeners__[t]=[]);for(let[s,d]of this.__listeners__[t])if(s===n&&JSON.stringify(d)===JSON.stringify(o))return this;return this.__listeners__[t].push([n,o]),this._addEventListener(t,n,o),this},e.prototype.removeEventListener=e.prototype.off=function(t,n,o){return!this.__listeners__||!this.__listeners__[t]?this:n?(this._removeEventListener(t,n,o),this.__listeners__[t]=this.__listeners__[t].filter(([s,d])=>s!==n||JSON.stringify(d)!==JSON.stringify(o)),this.__listeners__[t].length===0&&delete this.__listeners__[t],this):(this.__listeners__[t].forEach(([s,d])=>{this.removeEventListener(t,s,d)}),delete this.__listeners__[t],this)}}),window._$=e=>e.startsWith("#")&&!e.includes(" ")&&!e.includes(".")?document.getElementById(e.slice(1)):document.querySelector(e),window._$$=e=>document.querySelectorAll(e);let i=window.localStorage.getItem("dark_mode"),l=e=>{e?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme");let t=`<a id="nav-${e?"sun":"moon"}-btn" class="nav-icon dark-mode-btn"></a>`;document.getElementById("sub-nav")?.insertAdjacentHTML("beforeend",t),document.body.dispatchEvent(new CustomEvent(e?"dark-theme-set":"light-theme-set"))};i===null&&(i=document.documentElement.getAttribute("data-theme")==="dark"?"true":"false",window.localStorage.setItem("dark_mode",i)),l(i==="true"),document.querySelector(".dark-mode-btn")?.addEventListener("click",function(){this.id=="nav-sun-btn"?(window.localStorage.setItem("dark_mode","false"),document.body.dispatchEvent(new CustomEvent("light-theme-set")),document.documentElement.removeAttribute("data-theme"),this.id="nav-moon-btn"):(window.localStorage.setItem("dark_mode","true"),document.body.dispatchEvent(new CustomEvent("dark-theme-set")),document.documentElement.setAttribute("data-theme","dark"),this.id="nav-sun-btn")});let r=0;document.addEventListener("scroll",()=>{let e=document.documentElement.scrollTop||document.body.scrollTop,t=e-r;window.diffY=t,r=e,t<0?document.getElementById("header-nav")?.classList.remove("header-nav-hidden"):_$("#header-nav")?.classList.add("header-nav-hidden")}),window.Pace&&Pace.on("done",function(){Pace.sources[0].elements=[]})})();})();
