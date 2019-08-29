/*
 * @Description: 增加一个函数
 * @Author: so-hard
 * @Date: 2019-08-25 00:52:47
 * @LastEditTime: 2019-08-29 01:48:14
 * @LastEditors: Please set LastEditors
 */
// 拼接class字符串
export function setClass(node, className) {
    let oriClass = node.getAttribute("class") || "";
    if (oriClass.indexOf(className) == -1) {
        oriClass += ` ${className}`
        node.setAttribute(
            'class',
            oriClass
        )
    }
}

export function removeClass(node, className) {
    let oriClass = node.getAttribute("class");
    if (oriClass != null) {
        node.setAttribute("class", oriClass.replace(` ${className}`, ''))
    }
}

/**
 * @description: 递归遍历，将匹配到的值作为参数传个回调函数
 * @param {array} data 要遍历的数据
 * @param {array} arr 嵌套里面的属性值
 * @param {function} fn 执行的回调函数
 * @returns 
 */
export function doneWithInsidValue(data, arr, fn) {
    let len = arr.length,
        tag = ['shopId', 'itemId', 'listId'],
        dep = 0,
        _result = [],
        fun = (curArr) => {
            let _index;
            curArr = Array.isArray(curArr) ? curArr : curArr.value
            curArr = curArr.find((val,index) => {
                _index = index
                return val[tag[dep]] == arr[dep]
            })
            if(!curArr) return
            _result.push(curArr)
            dep++
            if (dep >= len) return fn ? fn(curArr,_index,_result) : null
            if(curArr.value.length == 0|| !curArr.value) return
            fun(curArr)
        };
    fun(data)
    return _result
}