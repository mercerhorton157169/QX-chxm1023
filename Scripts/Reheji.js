/*****************************************

使用方法：先开脚本再打开App，自动会解锁，如果没效果就关了重开或者按一下恢复购买，在还不行就卸载App重新安装！最后还不行的话就是脚本失效了！

#1
项目名称：Fileball 解锁Pro
下载地址：已下架，已购的还可下载

#2
项目名称：VSCO 解锁Pro功能
下载地址：http://mtw.so/6kOidj

#3
项目名称：1Blocker 拦截工具
下载地址：http://mtw.so/6kU3Y7

#4
项目名称：图图记账 解锁Pro功能
下载地址：http://mtw.so/5QIv3Y

#5
项目名称：手机硬件管家 解锁高级版
下载地址：http://mtw.so/6cB8gn

#6
项目名称：Tiao 解锁高级版（1.5.4以下版本
下载地址：自己抓旧版吧，新版不行

#7
项目名称：Pillow 解锁Pro功能
下载地址：http://mtw.so/6kOqx7

#8
项目名称：证件扫描仪Scanner Pro 解锁Vip权限
下载地址：http://mtw.so/6bSOyO

#9
项目名称：Anybox 解锁Pro功能
下载地址：http://mtw.so/5BcNSY


*****************************************


[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(\$RCAnonymousID%)?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/Reheji.js

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(\$RCAnonymousID%)?(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/Reheji.js

^https:\/\/app-measurement\.com\/config\/app\/1?(.*?)*$ url reject


[mitm]

hostname = api.revenuecat.com, app-measurement.com


*****************************************/


const _0x4025=['wrPDiwY8EMOkwphuwqjDnBTDtG9JCcOkARt0w4TDn8O2B3XDvMOIwoFkYcKO','w5Mlw7wCVsKRB8OQY3I5','wrJcFVQYZ8O6w74=','woLDixRowo7DksKP','Tm4DNMKWwrjDk8KvwovCuMOVZ8OH','wrbCmjZJw5XChGPDk8OwwoA=','wo/DgAFlwp/DjMKZwonDg8O1w6XDpg==','FhpJw6k=','HMKFwqlew51RBwbDjzQNwqpHwr9ZAhp8wp/CoAnCqjs=','HnV9w4zDrA==','eAfDqcKcYGkMPcK7QMOVwpc=','w6jDm8O9w7vCrDjDq8KNTcOcwo7CgsKAV0ZPbH/Dr3tJw4bDpwTCpg7Cr8Knw57Di3ApcVUA','eAfDqcKcYGkMPcK7QMOV','w7vDhsO1wrjCqCLDqA==','wqXDvCfDpA7CoEVqJMK0VQhOHmfCtcKxw6DCm8K2woDDnH0=','wrzChQRswqJKKF3CpWXDpC4YR1HCgcOSwrXDvcKLw4pTwp9SaMKlFBRWw6I=','GB3Dj8O/w6AUXk/CkMORwrvCqRc=','ZMKiGkXCgEN9wqnCmMOrFEXDtnHDp8Ktw5zCjcOGw5B3wpPDpMKJJMKDLg==','E3DDqsKlZ8K/wpJLRBliEQ==','wqJAH1BHMMKhwqvCqA==','bhzDv8KGd3cAMsK7XA==','CsKIw6Naw5VBCwzDkw==','w6/CosKafmQLw7I=','HWDDp8KtL8K7woQ=','w7jDgcOywqbCoiXDrMKAS8Oc','wrl/O2nDgm4rKcORw4HClMKjdMKPw4XDlMKKw7IBwoU=','w7jDoMKywo3DvS3Cj0oEHQ==','wptxwr18w5puZsOJw6c=','TWkOI8KAwqnDjsKAwpbCtcOfZ8OAw7fCmWczQg==','B0gQNcK5w4pr','X3QFPg==','wrLDtTbDpmDCoUFs','wqFYGEo=','w5s9bQ==','C8OUTzrDncOyJcK+wrHClxHCgcOlw6Z5w4FlUjZr','w4wxPA==','XBnCtcKHw7PDpsO9wr0Cw4xswoM/w4XDvxTCpA==','5Lu45L6A5ayH5Lin77+556WL5q+Y6L6z6L6C5ouH5ZaU5Y2f','w4U+w6oYQcKPC8OfY24=','wrnCpcOiw4zCs2/DlAVRXcKzwpbDojwNw5DDkxHDlnI=','TA4aNMKAw78WwrbDpcK/ecOqw7l4w7nDpMKVw4xJLTJTHh0vwrLDoMOyODMF','VEbCqMK9w6TDrcO9wr0Gw4M=','wrjCt8OVwp5jCsOZw6rDkxo=','FcOvXC9GJgEewovDrg==','wrXCnTFXw5/Cg2c=','w4U4MWjCmsOxZw==','w6bDoG0/','WsKLECbCk8Kqb8O+wrDClXfCgsOywqw7wp0yC3pcwpLDh8OuOMKKw7HDrQ==','w5NiUDXCmTp1ccKGwrHCocOnYMOwwqHCjMOX','IsOKaw==','YW/CqHFJwqXCvMKsw690','wqRHCEsENsKvwqjCvx0='];(function(_0x437f3e,_0x402562){const _0x51b564=function(_0x53fe55){while(--_0x53fe55){_0x437f3e['push'](_0x437f3e['shift']());}};_0x51b564(++_0x402562);}(_0x4025,0x17f));const _0x51b5=function(_0x437f3e,_0x402562){_0x437f3e=_0x437f3e-0x0;let _0x51b564=_0x4025[_0x437f3e];if(_0x51b5['KftOsJ']===undefined){(function(){let _0x110b6b;try{const _0x319ea4=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x110b6b=_0x319ea4();}catch(_0x71739d){_0x110b6b=window;}const _0x216250='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x110b6b['atob']||(_0x110b6b['atob']=function(_0x486dcb){const _0x4f388b=String(_0x486dcb)['replace'](/=+$/,'');let _0x591e36='';for(let _0x99190c=0x0,_0x19812d,_0x58eff8,_0x4123e9=0x0;_0x58eff8=_0x4f388b['charAt'](_0x4123e9++);~_0x58eff8&&(_0x19812d=_0x99190c%0x4?_0x19812d*0x40+_0x58eff8:_0x58eff8,_0x99190c++%0x4)?_0x591e36+=String['fromCharCode'](0xff&_0x19812d>>(-0x2*_0x99190c&0x6)):0x0){_0x58eff8=_0x216250['indexOf'](_0x58eff8);}return _0x591e36;});}());const _0x2d160d=function(_0x3c7702,_0x2ccce9){let _0x39c29c=[],_0x33017f=0x0,_0x28a68e,_0xea7b85='',_0x36e400='';_0x3c7702=atob(_0x3c7702);for(let _0x5b486d=0x0,_0x4989aa=_0x3c7702['length'];_0x5b486d<_0x4989aa;_0x5b486d++){_0x36e400+='%'+('00'+_0x3c7702['charCodeAt'](_0x5b486d)['toString'](0x10))['slice'](-0x2);}_0x3c7702=decodeURIComponent(_0x36e400);let _0x4a7b0c;for(_0x4a7b0c=0x0;_0x4a7b0c<0x100;_0x4a7b0c++){_0x39c29c[_0x4a7b0c]=_0x4a7b0c;}for(_0x4a7b0c=0x0;_0x4a7b0c<0x100;_0x4a7b0c++){_0x33017f=(_0x33017f+_0x39c29c[_0x4a7b0c]+_0x2ccce9['charCodeAt'](_0x4a7b0c%_0x2ccce9['length']))%0x100;_0x28a68e=_0x39c29c[_0x4a7b0c];_0x39c29c[_0x4a7b0c]=_0x39c29c[_0x33017f];_0x39c29c[_0x33017f]=_0x28a68e;}_0x4a7b0c=0x0;_0x33017f=0x0;for(let _0x4869d6=0x0;_0x4869d6<_0x3c7702['length'];_0x4869d6++){_0x4a7b0c=(_0x4a7b0c+0x1)%0x100;_0x33017f=(_0x33017f+_0x39c29c[_0x4a7b0c])%0x100;_0x28a68e=_0x39c29c[_0x4a7b0c];_0x39c29c[_0x4a7b0c]=_0x39c29c[_0x33017f];_0x39c29c[_0x33017f]=_0x28a68e;_0xea7b85+=String['fromCharCode'](_0x3c7702['charCodeAt'](_0x4869d6)^_0x39c29c[(_0x39c29c[_0x4a7b0c]+_0x39c29c[_0x33017f])%0x100]);}return _0xea7b85;};_0x51b5['suYJfi']=_0x2d160d;_0x51b5['aSBGPf']={};_0x51b5['KftOsJ']=!![];}const _0x53fe55=_0x51b5['aSBGPf'][_0x437f3e];if(_0x53fe55===undefined){if(_0x51b5['jVsiay']===undefined){_0x51b5['jVsiay']=!![];}_0x51b564=_0x51b5['suYJfi'](_0x51b564,_0x402562);_0x51b5['aSBGPf'][_0x437f3e]=_0x51b564;}else{_0x51b564=_0x53fe55;}return _0x51b564;};const chxm1023={};const chxm=JSON['parse'](typeof $response!=_0x51b5('0x2','xk%n')&&$response[_0x51b5('0x28','D50n')]||null);const ua=$request[_0x51b5('0x1a','6j9U')]['User-Agent']||$request['headers'][_0x51b5('0x20','iGVS')];const list={'Fileball':{'name':'filebox_pro','id':_0x51b5('0x32','vibR')},'VSCO':{'name':_0x51b5('0x17','vGKR'),'id':_0x51b5('0x21','!r[z')},'1Blocker':{'name':_0x51b5('0xa','QW8m'),'id':_0x51b5('0x15','HZrm')},'totowallet':{'name':_0x51b5('0x10','6j9U'),'id':_0x51b5('0x1c','JL%2')},'CPUMonitor':{'name':_0x51b5('0xe','(wop'),'id':_0x51b5('0x16','9igR')},'Taio':{'name':_0x51b5('0x33','yPnr'),'id':_0x51b5('0x2f','MEk1')},'Pillow':{'name':_0x51b5('0x2e','JQOW'),'id':_0x51b5('0x30','j(sZ')},'ScannerPro':{'name':_0x51b5('0xd','iGVS'),'id':'com.chxm1023.premium.yearly'},'Anybox':{'name':_0x51b5('0x1e','EnK5'),'id':_0x51b5('0x29','xk%n')},'Photo%20Cleaner':{'name':_0x51b5('0x19','$Bj)'),'id':_0x51b5('0x2c','JQOW')}};const data={'warning':_0x51b5('0x12','enet'),'feedback':_0x51b5('0xc','MEk1'),'wechat':_0x51b5('0x23','iGVS'),'expires_date':_0x51b5('0x6','(wop'),'original_purchase_date':_0x51b5('0xf','JL%2'),'purchase_date':_0x51b5('0x14','Pv$$'),'ownership_type':_0x51b5('0x8','W&ua')};if(typeof $response=='undefined'){delete $request['headers'][_0x51b5('0x11','9igR')];delete $request[_0x51b5('0x3','9zbm')][_0x51b5('0x1d','(wop')];chxm1023[_0x51b5('0x24','cQv[')]=$request[_0x51b5('0x4','yPnr')];}else if(chxm&&chxm[_0x51b5('0x1f','riX)')]){chxm[_0x51b5('0x1','8wCL')][_0x51b5('0x25','enet')]=chxm[_0x51b5('0x7','Pv$$')]['subscriptions']||{};chxm[_0x51b5('0x5','JQOW')][_0x51b5('0x22','^0ub')]=chxm[_0x51b5('0x26','$Bj)')][_0x51b5('0x2d','8wCL')]||{};for(const i in list){if(new RegExp('^'+i,'i')['test'](ua)){chxm['subscriber'][_0x51b5('0x31','xG3l')][list[i]['id']]=data;chxm[_0x51b5('0x18','a^W8')][_0x51b5('0x2b','8wCL')][list[i][_0x51b5('0x1b','YP6$')]]=JSON[_0x51b5('0x2a','V]K(')](JSON[_0x51b5('0x0','iGVS')](data));chxm[_0x51b5('0x13','^0ub')][_0x51b5('0x27','cQv[')][list[i]['name']][_0x51b5('0x9','enet')]=list[i]['id'];break;}}chxm1023[_0x51b5('0xb','enet')]=JSON['stringify'](chxm);}$done(chxm1023);

