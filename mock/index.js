/**
 * @author zhangchaolin
 * @time 20190725
 */
'use strict';

// 处理mockjs测试接口

const baseurl = 'http://moco.okzhihui.cn/mockjsdata/';

const mock = require('./config.js')


function parser(content) {
    let mock_src = JSON.stringify(mock);
    // 配置mock变量
    content = `var mock = ${mock_src}; ${content}`;
    // 替换url方法
    let script = `if(mock[url]){
                    url = '${baseurl}'+mock[url]+url;
                }
                return url;`;
    content = content.replace('return url;', script);
    content = content.replace('_header=', '_header=mock[url]?{}:');
    return content;
};

module.exports = function (src) {
    return parser(src);;
}