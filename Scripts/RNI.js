/****************************************



[rewrite_local]

# RNI解锁高级会员
[rewrite_local]
^https:\/\/pro-status-service-prod\.azurewebsites\.net\/api\/item url script-response-body 自己命名.js

[mitm] 

hostname=pro-status-service-prod.azurewebsites.net


****************************************/


var chxm1023 = JSON.parse($response.body);
chxm1023.FilmsProStatus = 1
chxm1023.AeroProStatus = 1
$done({body: JSON.stringify(chxm1023)})
