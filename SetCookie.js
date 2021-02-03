/*
=====================================================
 SetCookie  - by AidenFox
-----------------------------------------------------
 https://arcjetsystems.ru/
-----------------------------------------------------
 Copyright (c) 2016-2019 Roman Lisitsyn
-----------------------------------------------------
 This piece of code is reserved 
-----------------------------------------------------
 File: SetCookie.js
-----------------------------------------------------
 Version: 0.0.5 Alpha
-----------------------------------------------------
 Usage: Setting and Getting a Cookie
=====================================================
*/
/* 
Sample
setCookie('advert', 'closed', 86400, '/', 'someSite.ru', true); - sets a cookie for a day
*/

function setCookie(name, value, time, path, domain, secure) {

    var date = new Date();
    date.setTime(date.getTime() + (time * 1000));

    document.cookie = name + '=' + value +
        '; path=' + path +
        '; expires=' + date.toUTCString() +
        '; domain=' + ((domain) ? domain : '') +
        '; secure=' + ((secure) ? secure : '');
}

function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset)
            if (end == -1) {
                end = cookie.length;
            }
            setStr = unescape(cookie.substring(offset, end));
        }
    }
    return (setStr);
}
