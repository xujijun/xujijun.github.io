/**
 * 一些常用的工具函数
 */

/**
 * 获取URL中参数的值
 *
 * 例子：http://abc.com?action=update&id=987654321789
 * var action = getUrlParam("action"); //返回action的值为"update"
 *
 * @Param: name: 要获取的参数名字
 * @param: _location：可选参数，页面的URL，在弹出窗口中使用
 * @return: 返回参数的值
 */
export function getUrlParam(name, _location){
    let _location_url =_location || window.location.search; //window.location.search：URL中问号及其后面的内容
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    let pos = _location_url.indexOf('?'); //获取问号所在的位置
    let paramStr = _location_url.substr(pos+1);
    let r = decodeURI(paramStr).match(reg); //匹配目标参数

    return (r == null) ? null : decodeURI(r[2]);
}

/**
 * todo: test
 * @param paramName
 * @returns {string}
 */
export function getUrlParamV2(paramName) {
    return new URL(window.location.href).searchParams.get(paramName)
}

/**
 * 判断字符串是否为空
 * @returns boolean
 */
export function isBlank(str) {
    return ""===str || "undefined"===typeof(str) || null===str;
}
export function isNotBlank(str){
    return !this.isBlank(str);
}

/**
 * @function escapeHTML 转义html脚本 < > & " '
 * @param a - 字符串
 */
export function escapeHTML(a){
    a = "" + a;
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

/**
 * @function unescapeHTML 还原html脚本 < > & " '
 * @param a -  字符串
 */
export function unescapeHTML(a){
    a = "" + a;
    return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&").replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'");
}

/**
 * 深拷贝：使用JSON工具拷贝一个纯数据对象的值
 * @param source 被拷贝的对象
 * @returns 一个新的对象
 */
export function objCopy(source){
    return JSON.parse(JSON.stringify(source));
}

/**
 * 深拷贝：使用递归实现
 * @param source 被拷贝的对象
 * @returns 一个新的对象
 */
export function objDeepCopy(source) {
    let result={};
    for (let key in source) {
        if(source.hasOwnProperty(key)) {
            result[key] = typeof source[key] === 'object' ? this.deepCopy(source[key]) : source[key];
        }
    }
    return result;
}

/**
 * 删除一个对象中的多个key
 * @param obj 要处理的对象
 * @param keys 要删除的key列表
 * @returns 删除keys之后的对象
 */
export function delObjKeys(obj, ...keys) {
    keys.forEach(k => {
        delete obj[k]
    })
    return obj
}

/**
 * 是否整数
 */
export function isIntNum(val){
    const regPos = /^\d+$/; // 非负整数
    const regNeg = /^-[1-9][0-9]*$/; // 负整数
    return regPos.test(val) && regNeg.test(val);
}

/**
 * 是否非负整数
 */
export function isNonNegativeIntNum(val){
    const regNonNeg = /^\d+$/; // 非负整数
    return regNonNeg.test(val)
}