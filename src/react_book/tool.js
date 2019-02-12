'use strict';
import $ from 'jquery';

export const ONE_DAY_MILL = 24 * 60 * 60 * 1000;

export const _body = $('body');

// 设置localStorage(key:健，values:健值，expire:过期时间)
// 默认缓存时间1天
export const setLocalStorage = (key,values,expire = Date.now() + ONE_DAY_MILL )=> {
    if(!window.localStorage) return window.alert('浏览器不支持localStorage');
    expire = new Date(expire).getTime();
    if(toString.call(values) === '[object Object]') values._expire = expire;
    if(toString.call(values) === '[object Array]') values.push(expire);
    localStorage.setItem(key,JSON.stringify(values));
};

// 获取localStorage
export const getLocalStorage = (key)=>{
    let values = JSON.parse(localStorage.getItem(key));
    let expire = Date.now() + ONE_DAY_MILL;
    if(toString.call(values) === '[object Object]') {
        expire = values._expire;
        delete values._expire;
    }
    if(toString.call(values) === '[object Array]') expire = values.pop();
    if(parseInt(Date.now()) > parseInt(expire)) {
        localStorage.removeItem(key);
        window.console.log('缓存已失效');
        return false;
    }
    return values;
};