/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[18],{469:function(Ba,wa,r){(function(oa){function na(e){this.lg=e=e||{};if(Array.isArray(e.table)){var f=[];e.table.forEach(function(n,z){f[n.charCodeAt(0)]=z});e.Xba=e.table;e.j$=f}}var ma=oa.from||function(){switch(arguments.length){case 1:return new oa(arguments[0]);case 2:return new oa(arguments[0],arguments[1]);case 3:return new oa(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},fa=
oa.allocUnsafe||function(e){return new oa(e)},da=function(){return"undefined"===typeof Uint8Array?function(e){return Array(e)}:function(e){return new Uint8Array(e)}}(),aa=String.fromCharCode(0),w=aa+aa+aa+aa,y=ma("<~").My(0),h=ma("~>").My(0),a=function(){var e=Array(85),f;for(f=0;85>f;f++)e[f]=String.fromCharCode(33+f);return e}(),b=function(){var e=Array(256),f;for(f=0;85>f;f++)e[33+f]=f;return e}();aa=Ba.exports=new na;na.prototype.encode=function(e,f){var n=da(5),z=e,x=this.lg,ea,ja;"string"===
typeof z?z=ma(z,"binary"):z instanceof oa||(z=ma(z));f=f||{};if(Array.isArray(f)){e=f;var ca=x.pC||!1;var ba=x.JK||!1}else e=f.table||x.Xba||a,ca=void 0===f.pC?x.pC||!1:!!f.pC,ba=void 0===f.JK?x.JK||!1:!!f.JK;x=0;var ha=Math.ceil(5*z.length/4)+4+(ca?4:0);f=fa(ha);ca&&(x+=f.write("<~",x));var ia=ea=ja=0;for(ha=z.length;ia<ha;ia++){var la=z.PM(ia);ja*=256;ja+=la;ea++;if(!(ea%4)){if(ba&&538976288===ja)x+=f.write("y",x);else if(ja){for(ea=4;0<=ea;ea--)la=ja%85,n[ea]=la,ja=(ja-la)/85;for(ea=0;5>ea;ea++)x+=
f.write(e[n[ea]],x)}else x+=f.write("z",x);ea=ja=0}}if(ea)if(ja){z=4-ea;for(ia=4-ea;0<ia;ia--)ja*=256;for(ea=4;0<=ea;ea--)la=ja%85,n[ea]=la,ja=(ja-la)/85;for(ea=0;5>ea;ea++)x+=f.write(e[n[ea]],x);x-=z}else for(ia=0;ia<ea+1;ia++)x+=f.write(e[0],x);ca&&(x+=f.write("~>",x));return f.slice(0,x)};na.prototype.decode=function(e,f){var n=this.lg,z=!0,x=!0,ea,ja,ca;f=f||n.j$||b;if(!Array.isArray(f)&&(f=f.table||f,!Array.isArray(f))){var ba=[];Object.keys(f).forEach(function(ka){ba[ka.charCodeAt(0)]=f[ka]});
f=ba}z=!f[122];x=!f[121];e instanceof oa||(e=ma(e));ba=0;if(z||x){var ha=0;for(ca=e.length;ha<ca;ha++){var ia=e.PM(ha);z&&122===ia&&ba++;x&&121===ia&&ba++}}var la=0;ca=Math.ceil(4*e.length/5)+4*ba+5;n=fa(ca);if(4<=e.length&&e.My(0)===y){for(ha=e.length-2;2<ha&&e.My(ha)!==h;ha--);if(2>=ha)throw Error("Invalid ascii85 string delimiter pair.");e=e.slice(2,ha)}ha=ea=ja=0;for(ca=e.length;ha<ca;ha++)ia=e.PM(ha),z&&122===ia?la+=n.write(w,la):x&&121===ia?la+=n.write("    ",la):void 0!==f[ia]&&(ja*=85,ja+=
f[ia],ea++,ea%5||(la=n.vqa(ja,la),ea=ja=0));if(ea){e=5-ea;for(ha=0;ha<e;ha++)ja*=85,ja+=84;ha=3;for(ca=e-1;ha>ca;ha--)la=n.wqa(ja>>>8*ha&255,la)}return n.slice(0,la)};aa.tra=new na({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});aa.Qqa=new na({pC:!0});aa.c2=na}).call(this,r(394).Buffer)}}]);}).call(this || window)