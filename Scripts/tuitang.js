/*********************************************

[rewrite_local]

^https:\/\/api\.duitang\.com\/napi url script-response-body duitang.js

[mitm] 

hostname = api.duitang.com

*********************************************/

body = $response.body.replace(/\"vip":\w+/g, '\"vip":true').replace(/\"is_life_artist":\w+/g, '\"is_life_artist":true').replace(/\"isnew":\w+/g, '\"isnew":true').replace(/\"short_video":\w+/g, '\"short_video":true').replace(/\"vip_end_at_mills":\d+/g, '\"vip_end_at_mills":99999999999000').replace(/\"vip_level":\d+/g, '\"vip_level":11').replace(/\"is_certify_user":\w+/g, '\"is_certify_user":true').replace(/\"be_follow_count":\d+/g, '\"be_follow_count":1000000').replace(/\"follow_count":\d+/g, '\"follow_count":1000000').replace(/\"score":\d+/g, '\"score":1000000')


$done({body});
