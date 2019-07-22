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