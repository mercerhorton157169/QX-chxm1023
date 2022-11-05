/****************************************

项目功能：拦截100 解锁SVIP
下载地址：http://mtw.so/5ukhax
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https:\/\/ai\.lanjie100\.com\/block100\/get_config url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/lanjie100.js

^https:\/\/tagit\.lanjie100\.com\/cypt\/block100\/get_vip_info\/.* url request-header ujH/4y/kQkVm0uqu7P/K8LoKdM4xZBw92LCK4Qa4r5TczNi0o8WYQmeyCfmcCiCjMWByRuvcrsUE8efLXaLF9lsFXaQh+zoL3nzGcnuQK71mnI6sHT3AQR+Z1uiP5vlQk5yy3KSAXj8wEGjSodb+5OYvuinCL4bUcKSflgnvVE/MuL4tTAxQhVHR5oLCAwZ78/7yYFl9Mm5s0DpAi0Q+5AszUWDor/7j2plqu7j3LBwa9+GYVgsPd4lN5uz2b2vhxUDri40exo29sg5/7Hxmx1CiTnfOyzUU02GIO0SHP0GNvTaBiivAgV2ChcYSFMihaiuJZaueAHD2camfiVHMjXC08ftC+5qX9SkbazJ9JoCRRz9oElncWyYXX2+l+HCIi274S6V2qUoWH0mt0HaCV/BAIGC+v7j2f71hFYL4iMHO4iFzboTmdgp1HbiWa33W8qtkvNuBS5bQmP5azqEqDPnqit1b2F0ImKhGBlowXD03Wl55QFhNNwKDLDHcU13QhZeZ6VGRIqZqZqbE73S57g==



[mitm]

hostname = ai.lanjie100.com, tagit.lanjie100.com

****************************************/

var chxm1023 = JSON.parse($response.body);

    chxm1023 = {
  "msg" : "成功",
  "data" : {
    "uin" : "691594330",
    "config" : {
      "show_all" : true,
      "jump_app_status" : true,
      "remove_ad_status" : true
    },
    "jump_param" : "",
    "protocol_version" : "1",
    "video_url" : "http://aop.huoying666.com/block100/setting-tag-v2.mp4",
    "ad_data" : {
      "img_url" : "",
      "jump_url" : ""
    },
    "latest_app_version" : "1.0",
    "key" : "e03f2393db108f61d92d8ccaf80e682a5c46402f217d0f8d868341822e2f6122",
    "force_upgrade" : "0"
  },
  "code" : 0
}


$done({body : JSON.stringify(chxm1023)});
