/****************************************

项目功能：云听 解锁VIP
下载地址：http://mtw.so/5QkOoI
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
使用方法：需要用时先打开脚本，再打开App。

*****************************************

[rewrite_local]

^https:\/\/ytapi\.radio\.cn\/ytsrv\/srv\/appUser\/getUserInfoH5 url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/yunting.js


[mitm] 

hostname = ytapi.radio.cn

****************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);

chxm1023.object.userLevelInfo.levelName = "太傅";
chxm1023.object.userLevelInfo.levelIcon = "https://ytmedia.radio.cn/CCYT%2F201909%2F25%2F19%2F4Wl5Ko9EvANH7iaCQCpKsQXw6AyT2019092519799.png";
chxm1023.object.userLevelInfo.levelRange = "100000";
chxm1023.object.userLevelInfo.minlevelRange =  "50001";
chxm1023.object.baseInfo.isVip = 1;
chxm1023.object.baseInfo.vipTime = "2099-10-23";


body = JSON.stringify(chxm1023);
$done({body});
