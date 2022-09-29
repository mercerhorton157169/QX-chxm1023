/******************************

脚本功能：fileball+解锁订阅


使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/fb.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var head = $request.headers;
var ua = head['User-Agent'];

if (ua.indexOf('Fileball') != -1) {
    Body = {"request_date":"1983-03-15T00:00:00Z","request_date_ms":416505600000,"subscriber":{"entitlements":{"filebox_pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"filebox_pro","purchase_date":"1983-03-15T00:00:00Z"}},"first_seen":"1983-03-15T00:00:00Z","last_seen":"1983-03-15T00:00:00Z","management_url":null,"non_subscriptions":{"filebox_pro":[{"id":"yingzi","is_sandbox":false,"original_purchase_date":"1983-03-15T00:00:00Z","purchase_date":"1983-03-15T00:00:00Z","store":"app_store"}]},"original_app_user_id":"$RCAnonymousID%3A8e5a11e56b4246f2ab2b17058c01db1e","original_application_version":"170","original_purchase_date":"1983-03-15T00:00:00Z","other_purchases":{"filebox_pro":{"purchase_date":"1983-03-15T00:00:00Z"}},"subscriptions":{}"entitlements":{"filebox_pro":{"grace_period_expires_date":null,"purchase_date":"1983-03-15T00:00:00Z","product_identifier":"filebox_pro","expires_date":"2999-03-15T00:00:00Z"}},"original_purchase_date":"1983-03-15T00:00:00Z","original_app_user_id":"$RCAnonymousID:3A8e5a11e56b4246f2ab2b17058c01db1e","last_seen":"1983-03-15T00:00:00Z"}};
}
