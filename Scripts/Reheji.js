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

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/Reheji.js

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/Reheji.js

^https:\/\/app-measurement\.com\/config\/app\/1?(.*?)*$ url reject


[mitm]

hostname = api.revenuecat.com, app-measurement.com


*****************************************/


const _0x2d5a=['PFnCjUPDsnnCvzPCmcKcQlgub8Ojw7XCqcOKw4nCgBgLwrfDgBx5wrnDq8OfwpLDgyHDgsKYw6M=','F2vCiMKUwrNxwrZDYEPCv8KHEUIFwrPDujfCskIXH8Ofw7tMwpPDscKAfMK0fg==','L0TCjzLDvnjCvynCm8KC','M8KFwrPCpw==','w600w5hXw4VswpI=','w5zDmMK6Dw==','SBbCrcKEw4JKeMKNw7I=','woXCmT4=','wonCkD9Aw4jCmsOcwpbDtno=','w4LDlcKiGQ==','eMOsNMKE','wqrCuCLDusO6UC3Djnojw6BpUsOtw4lUfMOFW8KJw4LCviUiw7vCsnk=','wo0dB8K/aU5lwpHCuMKI','SC5df2FKBS5E','wqTChzlBwq7DuEMqPw==','w47DrMKPKQ==','WHnCpiLCksO1wpDDh8KRGQ==','w7TCrTMrwqE3w7ocAsKRwptQHRjDosK3w60Yw5XDmWdaYQ==','wrNPMWs=','dRPDu8KzJcKnZ3MMVVvDhw==','w7DCvj8pwpdzwqE=','NMOqbQ9g','EsK6wofDizVDw7ohw4LDnQ==','w7AIw7kgN8OowosDw5pi','LMOufhhgw5gM','BnLChcKEwrtmwq0dfUXCo8OHEQ==','w4PCiVVjwrnCn8KsIGDDo8KXw7bDlQvDhzTDqMKJfy4=','w7Ujw5ZXw5V9wpVlIMOPc3HDvMOYAsKYwqFH','SC9NZWxfBSpYw6A=','JxvCkgjDqXPCvynCn8KNQkp3JMOnw7zCoQ==','wpE+wrTDiMOhC8K9w5nChkwNFA==','ancpw43DksKwX2fCtMOiKcOEw41SwrnDisKLwrvCsnQTCxrDuxdhagkSFg==','w7wARMO0wpxnRS/DtsOLLC7ChhbDqMK2wqjDgMOOw705asOF','wrZTCcO+w6DCs8KMfsKcwoNFwoAcOcOuWjI=','wqJENnZXwrJRw6HCvGDDgg==','wosGAcKpbFViwpbCuQ==','FMORHcKvwpvCqkAuw44FaMK9wooNw6w8w4rDq3Yu','dsK7LU4owppNO8O2wqI1AcK7eMOZwq3Dr1VzwrI=','SxDCsA==','wo0dB8K/aU5lwoPCqcKTFsKYwrY=','wpvCjcKsT8OCMcKGwr7Dvx0cADHCoMOeZXcrw7bDlMOjPwZowobCkik=','w4bCvcK3TsK0wo9tw64UwpI=','SyhKe2ZYAQ==','w6UUw7c2NsO1wpo+w49iwpw=','w7HCm2LCkcOUOQM=','ancpw43Dn8K9XmjDqsKqNcKHwopOwqfDgMKRw7zCt2tYHxbDrwgjag==','PsKMwqbCrxsYw7tA'];(function(_0x4c8cd5,_0x2d5a86){const _0x5410be=function(_0x45fb8e){while(--_0x45fb8e){_0x4c8cd5['push'](_0x4c8cd5['shift']());}};_0x5410be(++_0x2d5a86);}(_0x2d5a,0x1a5));const _0x5410=function(_0x4c8cd5,_0x2d5a86){_0x4c8cd5=_0x4c8cd5-0x0;let _0x5410be=_0x2d5a[_0x4c8cd5];if(_0x5410['udayxC']===undefined){(function(){const _0x9de4ce=function(){let _0x5d3406;try{_0x5d3406=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x4e2a60){_0x5d3406=window;}return _0x5d3406;};const _0x5545ee=_0x9de4ce();const _0x360e8b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5545ee['atob']||(_0x5545ee['atob']=function(_0x57892c){const _0x1fcb70=String(_0x57892c)['replace'](/=+$/,'');let _0x4ee059='';for(let _0x592da1=0x0,_0x3f85de,_0x49f592,_0x18c514=0x0;_0x49f592=_0x1fcb70['charAt'](_0x18c514++);~_0x49f592&&(_0x3f85de=_0x592da1%0x4?_0x3f85de*0x40+_0x49f592:_0x49f592,_0x592da1++%0x4)?_0x4ee059+=String['fromCharCode'](0xff&_0x3f85de>>(-0x2*_0x592da1&0x6)):0x0){_0x49f592=_0x360e8b['indexOf'](_0x49f592);}return _0x4ee059;});}());const _0x5273a4=function(_0x43ca81,_0x10adc5){let _0xc1e9a=[],_0x58c871=0x0,_0x5482b6,_0x4c4400='',_0x5f4441='';_0x43ca81=atob(_0x43ca81);for(let _0x163435=0x0,_0x2308a7=_0x43ca81['length'];_0x163435<_0x2308a7;_0x163435++){_0x5f4441+='%'+('00'+_0x43ca81['charCodeAt'](_0x163435)['toString'](0x10))['slice'](-0x2);}_0x43ca81=decodeURIComponent(_0x5f4441);let _0x4a97ce;for(_0x4a97ce=0x0;_0x4a97ce<0x100;_0x4a97ce++){_0xc1e9a[_0x4a97ce]=_0x4a97ce;}for(_0x4a97ce=0x0;_0x4a97ce<0x100;_0x4a97ce++){_0x58c871=(_0x58c871+_0xc1e9a[_0x4a97ce]+_0x10adc5['charCodeAt'](_0x4a97ce%_0x10adc5['length']))%0x100;_0x5482b6=_0xc1e9a[_0x4a97ce];_0xc1e9a[_0x4a97ce]=_0xc1e9a[_0x58c871];_0xc1e9a[_0x58c871]=_0x5482b6;}_0x4a97ce=0x0;_0x58c871=0x0;for(let _0x4b3ad1=0x0;_0x4b3ad1<_0x43ca81['length'];_0x4b3ad1++){_0x4a97ce=(_0x4a97ce+0x1)%0x100;_0x58c871=(_0x58c871+_0xc1e9a[_0x4a97ce])%0x100;_0x5482b6=_0xc1e9a[_0x4a97ce];_0xc1e9a[_0x4a97ce]=_0xc1e9a[_0x58c871];_0xc1e9a[_0x58c871]=_0x5482b6;_0x4c4400+=String['fromCharCode'](_0x43ca81['charCodeAt'](_0x4b3ad1)^_0xc1e9a[(_0xc1e9a[_0x4a97ce]+_0xc1e9a[_0x58c871])%0x100]);}return _0x4c4400;};_0x5410['sDqJTr']=_0x5273a4;_0x5410['OylJSQ']={};_0x5410['udayxC']=!![];}const _0x45fb8e=_0x5410['OylJSQ'][_0x4c8cd5];if(_0x45fb8e===undefined){if(_0x5410['FlgHpm']===undefined){_0x5410['FlgHpm']=!![];}_0x5410be=_0x5410['sDqJTr'](_0x5410be,_0x2d5a86);_0x5410['OylJSQ'][_0x4c8cd5]=_0x5410be;}else{_0x5410be=_0x45fb8e;}return _0x5410be;};const chxm1023={};const chxm=JSON[_0x5410('0x17','96qo')](typeof $response!=_0x5410('0x25','4xS@')&&$response[_0x5410('0x11','VfdC')]||null);const ua=$request['headers']['User-Agent']||$request[_0x5410('0x6','r*sp')]['user-agent'];const list={'Fileball':{'name':_0x5410('0x2d','#@u$'),'id':_0x5410('0xd','r]Zq')},'VSCO':{'name':_0x5410('0xa','Jqll'),'id':'com.circles.fin.premium.yearly'},'1Blocker':{'name':'premium','id':_0x5410('0x3','0aJ!')},'totowallet':{'name':_0x5410('0x9','Jqll'),'id':_0x5410('0x0','z^#w')},'CPUMonitor':{'name':'Pro','id':_0x5410('0x4','RexJ')},'Taio':{'name':'full-version','id':_0x5410('0x13','gLSE')},'Pillow':{'name':'premium','id':_0x5410('0x21','z^#w')},'ScannerPro':{'name':_0x5410('0xb','LN$z'),'id':_0x5410('0x2a','qRc[')},'Anybox':{'name':_0x5410('0x28','rqIq'),'id':_0x5410('0x22','ZvL9')},'Photo%20Cleaner':{'name':_0x5410('0x16','gLSE'),'id':_0x5410('0x2','RexJ')},'%E8%AE%A1%E7%AE%97%E5%99%A8%20Air':{'name':_0x5410('0x2c','#h24'),'id':'co.airapps.calculator.year'}};const data={'warning':'仅供学习，禁止转载或售卖','feedback':'chxm1023','wechat':_0x5410('0x1','kzex'),'expires_date':_0x5410('0x26','H30q'),'original_purchase_date':_0x5410('0x1c','lHzi'),'purchase_date':_0x5410('0x27','96qo'),'ownership_type':_0x5410('0x10','RKY%')};if(typeof $response=='undefined'){delete $request[_0x5410('0x2e','NSFh')][_0x5410('0x1f','RexJ')];delete $request[_0x5410('0x1a','96qo')][_0x5410('0x23','S@8I')];chxm1023['headers']=$request['headers'];}else if(chxm&&chxm[_0x5410('0x2b','(KTd')]){chxm[_0x5410('0x19','#@u$')]['subscriptions']=chxm[_0x5410('0xe','4xS@')][_0x5410('0x1b','0aJ!')]||{};chxm[_0x5410('0x18','$]kH')][_0x5410('0x24','K8z%')]=chxm[_0x5410('0xe','4xS@')]['entitlement']||{};for(const i in list){if(new RegExp('^'+i,'i')[_0x5410('0x14','K8z%')](ua)){chxm['subscriber'][_0x5410('0x29','4xS@')][list[i]['id']]=data;chxm[_0x5410('0x12','sI1p')][_0x5410('0x20','0&u7')][list[i][_0x5410('0x7','LN$z')]]=JSON['parse'](JSON[_0x5410('0xf','#h24')](data));chxm[_0x5410('0x1e','#h24')][_0x5410('0x15','iexr')][list[i][_0x5410('0x5','kzex')]][_0x5410('0x1d','r*sp')]=list[i]['id'];break;}}chxm1023[_0x5410('0xc','94g%')]=JSON[_0x5410('0x8','rqIq')](chxm);}$done(chxm1023);


