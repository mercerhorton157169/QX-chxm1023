/*********************************************

项目名称：清理Dns缓存

[task_local]
0 */6 * * ? https://raw.githubusercontents.com/chxm1023/QX/main/Task/dns-clear-cache.js, tag=清理Dns缓存, img-url=https://raw.githubusercontents.com/chxm1023/script/main/icon/clean.png, enabled=true

*********************************************/

const message = {
    action: "dns_clear_cache"
};

$configuration.sendMessage(message).then(resolve => {
    if (resolve.ret) {
        console.log("dnsCache Cleared!");
    } else {
        console.log(resolve.error);
    }
    $done();
}, reject => {
    $done();
});
