/****************************************

项目功能：傲软全家福 解锁VIP
下载地址：http://mtw.so/5ukhax
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https?:\/\/.*\.aoscdn\.com\/base\/vip\/client\/authorizations url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/arajf.js

[mitm]

hostname = *.aoscdn.com

****************************************/

var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.is_activated = 1;
obj.data.is_lifetime = 1;
obj.data.expire_time = "2099-10-23 09:09:09";
obj.data.durations = 999999999;
obj.data.expired_at = 4096408296;
obj.data.vip_special = 1;
obj.data.license_type = "premium";

body = JSON.stringify(obj);
$done({body});
