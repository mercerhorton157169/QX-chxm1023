/****************************************

项目功能：Fimo-复古胶片相机 解锁Vip
下载地址：http://mtw.so/5IujwE
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https?:\/\/server\.yoyiapp\.com\/fimo-user\/user$ url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/fimo.js

[mitm]

hostname = server.yoyiapp.com

****************************************/


var chxm1023 = JSON.parse($response.body);

    chxm1023 = 
{"receipt":{"receipt_type":"Production","app_item_id":1454219307,"receipt_creation_date":"2022-10-28 17:08:34 Etc/GMT","bundle_id":"com.fimo.camera","original_purchase_date":"2022-10-06 05:52:50 Etc/GMT","in_app":[],"adam_id":1454219307,"receipt_creation_date_pst":"2022-10-28 10:08:34 America/Los_Angeles","request_date":"2022-10-28 17:18:03 Etc/GMT","request_date_pst":"2022-10-28 10:18:03 America/Los_Angeles","version_external_identifier":850553808,"request_date_ms":"1666977483104","original_purchase_date_pst":"2022-10-05 22:52:50 America/Los_Angeles","application_version":"1237","original_purchase_date_ms":"1665035570000","receipt_creation_date_ms":"1666976914000","original_application_version":"1237","download_id":501809210277972740},"status":0,"environment":"Production"}

$done({body : JSON.stringify(chxm1023)});
