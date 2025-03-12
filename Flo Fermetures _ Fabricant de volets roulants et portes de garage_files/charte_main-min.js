/* url : /scripts/charte/mainJs.js */
(function($)
{if(typeof(window.spe)==='undefined')
{window.spe={};};spe.BREAK_WIDTH_MOBILE=767;$(document).trigger('spe.init');spe.initReady=function()
{spe.initModale();spe.gestionLien();spe.startAccordeon();spe.initDiapo();spe.mapHeleper(".map-frame");$(document).trigger('spe.ready');};spe.gestionLien=function()
{$(".LinkFile").attr("target","_blank");if($('.addPageContent').length>0)
{$(".addPageContent").each(function()
{_addPagecontent($(this));});}
$(".mobileDbClick").on('touchstart doubletap',function(e)
{if($(this).data("click")!="1"){e.preventDefault();$(this).data("click","1");$(this).addClass("sfhover");$(this).focus();return false;}});$(".disableClick > a").click(function(e)
{e.preventDefault();$(this).css("cursor","default");});};spe.initModale=function()
{if($('.modale, .modaleAjax, .modaleImages').length>0)
{RegisterSpe.add("libs/effet/modaal/modaal.min.css");RegisterSpe.add("libs/effet/modaal/modaal.min.js",function()
{$('.modaleAjax').modaal({type:'ajax',source:function($a)
{_addPagecontent($a);return $a.attr("href");}});$('.modaleImages').modaal({type:'image'});});}
if($('.modaleImages').length>0)
{$(".modaleImages").each(function()
{var src="";var $img=$(this).find("img");if($img.hasClass("lazy"))
{src=$img.attr("data-original");}
else
{src=$img.attr("src");}
if(typeof(src)!="undefined")
{src=src.replace("/thumbnails/","/");$(this).attr("href",src);}
var desc=$img.attr("alt");$(this).attr('data-modaal-desc',desc);});}};function _addPagecontent($a)
{var href=$a.attr("href");if(typeof(href)!="undefined")
{href=href.replace(".html","-");href=href+"getpagecontent";$a.attr("href",href);}};spe.startAccordeon=function()
{if($('.accordeon-elem').length>0)
{RegisterSpe.add("libs/outils/spe.ancres.js");}
if($('.collapsible-item').length>0)
{RegisterSpe.add("libs/effet/spe.collapsible.js");}};spe.initDiapo=function()
{if($(".slick-spe").length>0){RegisterSpe.add('libs/diaporama/slick/slick.min.js');}};spe.mapHeleper=function(iframeClass)
{$(iframeClass).wrap("<div class='map-wrap'></div>");var $overlay=$("<div class='overlay'></div>");$overlay.css({"width":"100%","height":"100%","position":"absolute","top":"0","z-index":"1","cursor":"pointer"});$overlay.click(function(){$(this).css({"pointer-events":"none"});});$(".map-wrap").prepend($overlay).css({"position":"relative"});};$(document).ready(function()
{spe.initReady();});})(jQuery);/* url : /cache/MediapiloteOptimizer-lazyloadv2.js */
/*! lazysizes - v4.0.1 */!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("CustomEvent");return e||(e={}),e.instance=c,h.initCustomEvent(d,!f,!g,e),a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?e({reevaluate:!0,elements:[b]}):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=125,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&d.ricTimeout?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=a===!0)&&(g=33),b||(b=!0,d=e-(f.now()-c),0>d&&(d=0),a||9>d&&m?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;d>a?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}};!function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.lazySizesConfig=d,k(function(){d.init&&F()})}();var D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&u(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var d,f=a,g="hidden"==x(b.body,"visibility")||"hidden"!=x(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)g=(x(f,"opacity")||1)>0,g&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},V=function(){var a,f,h,j,k,m,n,p,q,r=c.elements;if((o=d.loadMode)&&8>R&&(a=r.length)){f=0,S++,null==K&&("expand"in d||(d.expand=e.clientHeight>500&&e.clientWidth>500?500:370),J=d.expand,K=J*d.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>f;f++)if(r[f]&&!r[f]._lazyRace)if(O)if((p=r[f][i]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=r[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*L&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||"hidden"!=x(r[f],"visibility"))&&(l&&3>R&&!p&&(3>o||4>S)||U(r[f],m))){if(ba(r[f]),k=!0,R>9)break}else!k&&l&&!j&&4>R&&4>S&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=r[f][i](d.sizesAttr)))&&(j=g[0]||r[f]);else ba(r[f]);j&&!k&&ba(j)}},W=B(V),X=function(a){s(a.target,d.loadedClass),t(a.target,d.loadingClass),u(a.target,Z),v(a.target,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},p&&(u(a,T,!0),clearTimeout(m),m=k(T,2500),s(a,d.loadingClass),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){(!p||a.complete&&a.naturalWidth>1)&&(p?T(o):R--,X(o))},!0)}),ba=function(a){var b,c=M.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,c))},ca=function(){if(!l){if(f.now()-p<999)return void k(ca,999);var a=C(function(){d.loadMode=3,W()});l=!0,d.loadMode=3,W(),j("scroll",function(){3==d.loadMode&&(d.loadMode=2),a()},!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),L=d.hFac,j("scroll",W,!0),j("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",W,!0),e[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(j("load",ca),b[h]("DOMContentLoaded",W),k(ca,2e4)),c.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width,d&&d!==a._lazysizesWidth&&c(a,f,e,d)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}});/* url : /scripts/charte/libs/diaporama/convertMobilynotesToSlick.js */
(function($)
{if(typeof(spe)==='undefined')
{window.spe={};}
if(typeof(spe.BREAK_WIDTH_MOBILE)==='undefined')
{spe.BREAK_WIDTH_MOBILE=767;}
var mobile_img=[];var mobilynotes=$.fn.mobilynotes=function(pParams)
{var _self=this;params=pParams;this.loads=[];_self.sliderID=$(this).selector;$(_self.sliderID).find('script[type="application/emajineImg+json"]').each(function()
{var text=$(this).text();var $img=$($(text)[0]);var src=$img.attr("src");if($img.hasClass("lazy"))
{src=$img.data('original');}
mobile_img.push(src);});this.resourceLoad=function(LOAD)
{var _self=this;this.loads.push(LOAD);if(this.loads.length!=2)
{return false;}
setTimeout(function()
{var imgHeight=$(_self.sliderID).find("img:eq(0)").height();$(_self.sliderID).parent().css("height",imgHeight);$(_self.sliderID).parent().addClass("slick-first-img-load");setTimeout(function()
{_self.start();},100);},100);}
this.start=function()
{$(_self.sliderID).parent().removeClass("slick-load");setTimeout(function()
{$(_self.sliderID).parent().addClass("slick-load-end");},1000);$(_self.sliderID).slick({"autoplaySpeed":params.interval,"dots":true});$(_self.sliderID).parent().css("height","auto");}
$(_self.sliderID).find("img").each(function(i)
{var lazyOn=$(this).hasClass("lazy");var src=$(this).attr("src");if(lazyOn)
{src=$(this).data('original');}
$(this).attr("src","");if(typeof(src)!=="undefined")
{src=src.replace("/thumbnails/","/");var imgMobile=mobile_img[i];if(imgMobile&&spe.BREAK_WIDTH_MOBILE>=$(window).width())
{var srcSecondaire=imgMobile;srcSecondaire=srcSecondaire.replace("/thumbnails/","/");src=srcSecondaire;}}
if(i==0)
{$(this).on('load',function()
{_self.resourceLoad("IMG_LOAD");}).attr("src",src).attr('data-original',src);}
else
{$(this).attr("src",src);$(this).attr('data-original',src);}});RegisterSpe.add("libs/diaporama/slick/slick.min.js",function()
{_self.resourceLoad("PLUGIN_LOAD");});};})(jQuery);/* url : /scripts/charte/libs/opti/jquery.lazyload.min.js */
/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);/* url : /scripts/charte/polyfill/ofi.browser.js */
var objectFitImages=function(){"use strict";var e="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";var t=/(object-fit|object-position)\s*:\s*([^;$"'\s]+)/g;var i="object-fit"in document.createElement("i").style;var n=false;function r(e){var i=getComputedStyle(e).fontFamily;var n;var r={};while((n=t.exec(i))!==null){r[n[1]]=n[2]}return r}function o(t,i){var n=r(t);if(!n["object-fit"]||n["object-fit"]==="fill"){return}i=i||t.currentSrc||t.src;if(t.srcset){t.srcset=""}if(!t[e]){t.src=e;a(t)}t[e]=t[e]||{s:i};t.style.backgroundImage="url("+i+")";t.style.backgroundPosition=n["object-position"]||"center";t.style.backgroundRepeat="no-repeat";if(n["object-fit"].indexOf("scale-down")<0){t.style.backgroundSize=n["object-fit"].replace("none","auto")}else{if(!t[e].i){t[e].i=new Image;t[e].i.src=i}(function o(){if(t[e].i.naturalWidth){if(t[e].i.naturalWidth>t.width||t[e].i.naturalHeight>t.height){t.style.backgroundSize="contain"}else{t.style.backgroundSize="auto"}return}setTimeout(o,100)})()}}function a(t){var i={get:function(){return t[e].s},set:function(i){delete t[e].i;return o(t,i)}};Object.defineProperty(t,"src",i);Object.defineProperty(t,"currentSrc",{get:i.get})}function c(e){window.addEventListener("resize",f.bind(null,e))}function u(e){if(e.target.tagName==="IMG"){o(e.target)}}function f(e,t){if(i){return false}var r=!n&&!e;t=t||{};e=e||"img";if(typeof e==="string"){e=document.querySelectorAll("img")}else if(!e.length){e=[e]}for(var a=0;a<e.length;a++){o(e[a])}if(r){document.body.addEventListener("load",u,true);n=true;e="img"}if(t.watchMQ){c(e)}}return f}();/* url : /scripts/charte/tools.js */
window.MPCookies={set:function(name,value,days,path){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString()}else var expires="";var dir=path||'/';document.cookie=name+"="+value+expires+"; path="+dir},get:function(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)}return null},delete:function(name){this.set(name,"",-1)}};(function($)
{if(typeof(window.spe)==='undefined')
{window.spe={};}
if(typeof(window.spe.tools)==='undefined')
{window.spe.tools={};}
var tools=window.spe.tools;$(document).trigger('spe:tools.init');$(document).ready(function()
{tools.autoFixElementByClass();tools.popup();$(document).trigger('spe:tools.ready');});tools.move=function(selectorElement,selectorParent,position,breackPoint)
{if(typeof(breackPoint)=="object")
{tools._moveWithBreakPoint(selectorElement,selectorParent,position,breackPoint);}
else
{tools._move(selectorElement,selectorParent,position);}}
tools._move=function(selectorElement,selectorParent,position)
{tools.log("JS move : "+selectorElement+" vers "+selectorParent+". Position : "+position);if(typeof(position)=='undefined'||position=="inner:last")
{$(selectorParent).append($(selectorElement));}
else if(position=="inner:first")
{$(selectorParent).prepend($(selectorElement));}
else if(position=="outer:first")
{$(selectorParent).before($(selectorElement));}
else if(position=="outer:last")
{$(selectorParent).after($(selectorElement));}
$(selectorElement).show();}
tools._moveWithBreakPoint=function(selectorElement,selectorParent,position,breackPoint)
{var navigatoreWidth=$(window).width();if(navigatoreWidth>=breackPoint[0]&&navigatoreWidth<breackPoint[1])
{tools._move(selectorElement,selectorParent,position);}
console.log(navigatoreWidth+" >= "+breackPoint[0]+" && "+navigatoreWidth+" < "+breackPoint[1]);}
tools.fixElement=function(selectorElement)
{RegisterSpe.add("libs/effet/fixed/sticky-kit.min.js",function()
{$(selectorElement).stick_in_parent()});}
tools.autoFixElementByClass=function()
{if($(".fix-element").length>0)
{tools.fixElement(".fix-element");}}
tools.popup=function()
{if($(".box-simple-popup").length>0)
{$(".box-simple-popup").each(function()
{$(this).hide();$("body").append($(this));});RegisterSpe.add("libs/MPPopup.js",function()
{$(".box-simple-popup").each(function()
{var popup=new window.MPPopup($(this),{"noCookie":($(".box-simple-popup").hasClass("popup-noCookie"))?true:false});popup.run();});});}};tools.initMenu=function(type,params)
{if(type=="mmenu")
{tools.initMenuMobile(params);}
else if(type=="scrollUp")
{tools.initMenuScrollUp(params);}}
tools.initMenuScrollUp=function(params)
{var compensateMenuHeight=(typeof(params.compensateMenuHeight)=='undefined')?true:params.compensateMenuHeight;var xMenu=params.$menu.offset().top;$(window).bind('scroll',function()
{var windowHeight=$(window).outerHeight();var contentHeight=$(document).outerHeight()-(params.$menu.outerHeight()*2);if(params.$menu.hasClass('scrollUp')==false&&windowHeight>contentHeight&&$("html").hasClass("mm-opened")==false)
{return false;}
if($(window).scrollTop()>xMenu)
{if(compensateMenuHeight)
{$("body").css("padding-top",params.$menu.outerHeight()+"px");}
params.$menu.addClass('scrollUp');}
else
{if(compensateMenuHeight)
{$("body").css("padding-top","0px");}
params.$menu.removeClass('scrollUp');}});var didScroll;var lastScrollTop=0;var delta=5;var navbarHeight=params.$menu.outerHeight();$(window).scroll(function(event)
{didScroll=true;});setInterval(function()
{if(didScroll)
{hasScrolled();didScroll=false;}},250);function hasScrolled()
{var st=$(this).scrollTop();if(Math.abs(lastScrollTop-st)<=delta)
{return;}
if(st>lastScrollTop&&st>navbarHeight)
{params.$menu.removeClass('nav-down').addClass('nav-up');}
else
{if(st+$(window).height()<$(document).height()){params.$menu.removeClass('nav-up').addClass('nav-down');}}
lastScrollTop=st;}}
tools.initMenuMobile=function(params)
{RegisterSpe.add("libs/effet/mmenu/jquery.mmenu.all.css");RegisterSpe.add("libs/effet/mmenu/jquery.mmenu.all.min.js",function()
{params.$btn.click(function(e)
{e.preventDefault();params.$btn.addClass("is-active");tools.deployMmenu(params.$menu,params.idContent,params.$btn);});});}
tools.deployMmenu=function($menu,idContent,$btn)
{var API=$menu.mmenu({"extensions":["pagedim-black"],"counters":true,backButton:{close:true}},{offCanvas:{pageSelector:idContent},clone:true}).data("mmenu");API.open();API.bind("close",function()
{$btn.removeClass("is-active");$(window).trigger("MMENU:CLOSE");});}
tools.makeModale=function(cible,rel)
{$(cible).each(function()
{var $gallery=$(this);$gallery.find("img").each(function()
{var $img=$(this);var src='';if($img.hasClass("lazy"))
{src=$img.attr("data-original");}
else
{src=$img.attr("src");}
var href=src=src.replace("/thumbnails/","/");$img.wrap("<a class='modaleImages' rel='"+rel+"' href='"+href+"'></a>");});});}
tools.log=function(p){if(typeof(console)!='undefined'){console.log(p);}}})(jQuery);