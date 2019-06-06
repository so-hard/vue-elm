

export function setClass(node,className) {
    node.setAttribute(
        'class',
        className
      )
}

export function removeClass(node, className){
    if (node.getAttribute("class") == className) {
        node.removeAttribute("class")
    }
}

