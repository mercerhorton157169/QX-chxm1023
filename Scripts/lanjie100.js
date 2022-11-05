/****************************************

项目功能：拦截100 解锁SVIP
下载地址：http://mtw.so/5ukhax
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https:\/\/ai\.lanjie100\.com\/block100\/get_config url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/lanjie100.js

^https:\/\/tagit\.lanjie100\.com\/cypt\/block100\/get_vip_info url script-request-header https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/100
