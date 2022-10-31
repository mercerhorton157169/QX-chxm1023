/****************************************

项目功能：傲软全家福 解锁VIP
下载地址：http://mtw.so/5ukhax
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https:\/\/(awvp|gw)\.aoscdn\.com\/base\/vip\/client\/authorizations$ url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/arajf.js

[mitm]

hostname = awvp.aoscdn.com, gw.aoscdn.com

****************************************/

var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.is_activated = 1;
obj.data.expire_time = "9999-09-09 09:09:09";
obj.data.durations = 100000;
obj.data.expired_at = 253395492741;

body = JSON.stringify(obj);
$done({body});
