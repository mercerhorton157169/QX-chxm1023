/******************************

脚本功能：fileball+解锁订阅


使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontents.com/chxm1023/QX/main/Scripts/Fileball.js

[mitm] 

hostname = api.revenuecat.com

*******************************/
