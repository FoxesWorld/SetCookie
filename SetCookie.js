/*
=====================================================
 SetCookie  - by Miomoor 
-----------------------------------------------------
 https://arcjetsystems.ru/
-----------------------------------------------------
 Copyright (c) 2016-2019 Роман Лисицын
-----------------------------------------------------
 Данный код защищен авторскими правами
-----------------------------------------------------
 Файл: SetCookie.js
-----------------------------------------------------
 Версия: 0.0.4 Alpha
-----------------------------------------------------
 Назначение: Установка и получение куки файлов
=====================================================
*/
/* 
setCookie('advert', 'closed', 86400, '/', 'foxesworld.ru', true); - sets a cookie for a day
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