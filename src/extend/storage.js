/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 19:05:04
 * @LastEditTime: 2019-08-21 19:12:23
 * @LastEditors: Please set LastEditors
 */



/**
 * @description:  存储localStoreage
 * @param: name:String,content:Any
 * @return: void
 */
export const setStore = (name, content) => {
    if(!name) return;
    if(typeof content !== 'string'){
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name,content)
}


// 获取localStoreage
export const getStore = name => {
    if(!name) return ;
    return window.localStorage.getItem(name);
}


// 删除localStoreage
export const rmStore = name => {
    if (!name) return;
	window.localStorage.removeItem(name);
}