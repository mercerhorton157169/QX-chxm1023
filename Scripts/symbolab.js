/****************************************

项目功能：Symbolab 解锁高级功能 (需登录)
下载地址：http://mtw.so/5tc7Bk
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https?:\/\/scibug\.com\/appleSubscriptionValidate$ url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/symbolab.js

[mitm]

hostname = scibug.com

****************************************/

let chxm1023 = JSON.parse($response.body);

chxm1023= {"valid":true,"hasUserConsumedAppleFreeTrial":false,"isCurrentlyInFreeTrial":false,"newlyAssociated":false,"membership":{"isCurrentlyInFreeTrial":false,"valid":true,"hasUserConsumedAppleFreeTrial":false,"newlyAssociated":false,"PROversion":2099-10-23 09:09:09}}

$done({body: JSON.stringify(chxm1023)});
