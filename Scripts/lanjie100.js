/****************************************

项目功能：拦截100 解锁SVIP
下载地址：http://mtw.so/5ukhax
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https:\/\/tagit\.lanjie100\.com\/cypt\/block100\/get_vip_info url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/lanjie100.js

[mitm] 

hostname = tagit.lanjie100.com

****************************************/

var chxm1023 = JSON.parse($response.body);

    chxm1023 = {lvCQG8cCxqficLk+LttK+PXwKUyRqPphmf5FT/uEn63YZVhg2kcUnZXvHibgHEb30cLsFnOWb0vS6jMq3jw/6KV/Tl7cX7JLqZqVEZj7nDON7/0/DJeERb7DdFW0rfXOVTWYGaxJ1t+s5MwJMnC5t8xACaarF6D5D/GcC/ZJ0BhgqkRniD0nRfRAg6H2baX7XmGBFtri0zRUJaQ6YBpdw7bHBhZU+w9+Am7N7WX0HeTE/4ejLL+UKyIEHeX/Invp}


$done({body : JSON.stringify(chxm1023)});
