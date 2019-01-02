setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'eb41f4dc941946528707769236f9f50b',
                comparisonItems:[{name : 'cmp', value : 12771269},{name : 'plmt', value : 14338856}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_236287683603');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);var dvObj = $dvbs;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("eb41f4dc941946528707769236f9f50b",false);var dvObj=$dvbs;var impId='eb41f4dc941946528707769236f9f50b';var htmlRate=10;var runTag=1;var lab=0;var sources=3145728;var adid='-5743349257665558354';var urlTypeId=1033;var ddt=1;var date='20181212';var prefix='ch201810';dvObj.pubSub.subscribe('BeforeDecisionRender',impId,'AttributeCollection',function(){try{try{!function(){var e=window,t=0;try{for(;e.parent&&e!=e.parent&&e.parent.document&&(e=e.parent,!(t++>10)););}catch(e){}var n=0;function r(e,t){t&&(n=(n|1<<e)>>>0)}var o=e.document;r(0,e==window.top),r(1,""==o.title),r(2,e.innerWidth>e.screen.width);try{r(3,o.querySelector('script[src*="/coinhive"]')||e.Miner||e.CoinHive||function(){try{return e.localStorage.getItem("coinhive")}catch(e){return!1}}()),r(4,o.querySelector('script[src*="videoadtest.com"]')),r(5,e.CustomWLAdServer&&e.CustomWLAdServer.passbackCallbacks),r(6,e.navigator&&e.navigator.geolocation&&e.navigator.geolocation.getCurrentPosition_&&e.navigator.geolocation.watchPosition_&&e.navigator.geolocation.clearWatch_),r(7,o.querySelector('script[src*="algovid.com"]')),r(8,e.ddcQueryStr&&e.handleFileLoad&&e.handleComplete),r(9,e.location.href.match(/^http:\/\/[^\/]*\/[a-zA-Z-_\/]{40,}\.php$/)),r(10,-1!=o.title.indexOf("</>"));for(var a=o.getElementsByTagName("script"),i=0;i<a.length;i++)-1!=a[i].src.indexOf("172.93.96.99")&&r(11,!0),-1!=a[i].src.indexOf("104.243.38.59")&&r(12,!0);if(r(13,I=o.getElementById("adloaderframe")),r(14,function(){try{var e=o.getElementById("adloaderframe").previousElementSibling,t="VIDEO"==e.tagName&&"none"==e.style.display&&"DIV"==e.previousElementSibling.tagName?e.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(t)}catch(e){return!1}}()),I){var c=I.previousElementSibling;for(i=0;i<5;i++)r(15,function(){try{var e='<video muted="muted"></video>'==c.outerHTML&&"DIV"==c.previousElementSibling.tagName?c.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(e)}catch(e){return!1}}()),c=c.previousElementSibling}if(r(16,o.querySelector('iframe[id="adloaderframe"][style*="display: none"]')),r(17,function(){try{return null!=o.querySelector('#header[class="kk"]')&&"rgb(0, 255, 255)"==getComputedStyle(document.body).backgroundColor}catch(e){}}()),r(18,function(){try{return/<!--(.|\n)*checklength(.|\n)*function timer(.|\n)*aol3\.php(.|\n)*--\>/.test(document.documentElement.outerHTML)}catch(e){}}()),r(20,function(){try{return null!=o.querySelector('div[id="kt_player"][hiegth]')}catch(e){}}()),r(21,function(){try{return null!=o.querySelector('div[id="kt_player"][width]')}catch(e){}}()),e.top==e&&e.document.getElementsByClassName("asu").length>0)for(var d=e.document.styleSheets,l=0;l<d.length;l++)try{for(var u=e.document.styleSheets[l].cssRules,s=0;s<u.length;s++)if("div.kk"==u[s].selectorText||"div.asu"==u[s].selectorText){r(19,!0);break}}catch(e){}}catch(e){}var p=Object.prototype.toString,m=Function.prototype.toString,v=/^\[object .+?Constructor\]$/,h=RegExp("^"+String(p).replace(/[.*+?^${}()|[\]\/\\]/g,"\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function g(e){var t=typeof e;return"function"==t?h.test(m.call(e)):e&&"object"==t&&v.test(p.call(e))||!1}var f=window,y=0,w=!1,b=!1;try{for(;f.parent&&f!=f.parent&&f.parent.document&&(b|=!g(e.document.hasFocus),f=f.parent,w|=g(window.document.hasFocus)!=g(f.document.hasFocus),!(y++>10)););}catch(e){}r(26,e==window.top&&!g(f.document.hasFocus)),r(27,b),r(28,w);var _={dvp_acv:n,dvp_acifd:t};new Date;if(e==window.top){_.dvp_mref=(refm=o.referrer.match(/https?:\/\/(www\.)?([^\/]*)/),null!=refm&&3==refm.length?refm[2]:"");var S=o.head;S&&(S.children&&(_.dvp_acc=S.children.length),S.outerHTML&&(_.dvp_acl=S.outerHTML.length)),e.external&&(_.dvp_acwe=Object.keys(e.external).length);var E=e.innerWidth>e.innerHeight,k=e.screen[E?"height":"width"];if(o.body.offsetWidth>k&&(_.dvp_vpos=o.body.offsetWidth+"-"+k+"-"+(E?1:0)),navigator&&navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.enumerateDevices){var x=[];navigator.mediaDevices.enumerateDevices().then(function(e){e.forEach(function(e){x.push(e.kind.toLowerCase().indexOf("audio")>-1?1:e.kind.toLowerCase().indexOf("video")>-1?2:0)})}).then(function(){dvObj.registerEventCall(impId,{dvp_dvcs:x.join(",")})}).catch(function(e){dvObj.registerEventCall(impId,{dvp_dvcs:encodeURIComponent(e.message)})})}else _.dvp_dvcs="na"}if(dvObj.registerEventCall(impId,_),(new Date).getTime()%100<htmlRate&&(1==lab||1==runTag&&0==(2&urlTypeId)&&(0==sources||(sources&n)>0))){function C(t,r){var o=new XMLHttpRequest;o.open("PUT","https://d23xwq4myz19mk.cloudfront.net/htmldata/"+prefix+"/"+date+"/"+e.location.hostname+"/"+n+"_"+adid+"_"+impId+"_"+r+".html",!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),o.setRequestHeader("x-amz-acl","public-read"),o.send(t.document.documentElement.outerHTML)}var I;C(e,"top"),e!=window&&C(window,"iframe_tag"),e!=window.parent&&C(window.parent,"iframe_tag_parent"),e!=window.parent.parent&&C(window.parent.parent,"iframe_tag_parent_parent"),(I=o.getElementById("adloaderframe"))&&C(I.contentWindow,"iframe_top_child")}}()}catch(e){dvObj.registerEventCall(impId,{dvp_ace:String(e).substring(0,150)})}}catch(e){}});


try{__tagObject_callback_236287683603({ImpressionID:"eb41f4dc941946528707769236f9f50b", ServerPublicDns:"tps602.doubleverify.com"});}catch(e){}
try{$dvbs.pubSub.publish('BeforeDecisionRender', "eb41f4dc941946528707769236f9f50b");}catch(e){}
try{__verify_callback_236287683603({
ResultID:2,
Passback:"",
AdWidth:300,
AdHeight:250});}catch(e){}
try{$dvbs.pubSub.publish('AfterDecisionRender', "eb41f4dc941946528707769236f9f50b");}catch(e){}
