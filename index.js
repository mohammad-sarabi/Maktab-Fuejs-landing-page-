const FueJS = {};

FueJS.createTextNode = function (string) {
    return document.createTextNode(string);
}

FueJS.createElement = function (type, props, children) {
    const element = document.createElement(type);
    props = props || {};
    for (let index = Object.keys(props).length - 1; index >= 0; index--) {
        const propKey = Object.keys(props)[index];
        if (propKey === 'style') {
            Object.assign(element.style, props.style);
        } else if (propKey === 'className') {
            element.className = props.className;
        } else if (typeof props[propKey] === 'function') {
            element[propKey] = props[propKey];
        } else {
            element.setAttribute(propKey, props[propKey]);
        }
    }
    if (children) {
        if (Array.isArray(children)) {
            for (let index = children.length - 1; index >= 0; index--) {
                const child = children[index];
                element.prepend(typeof child === 'string' ? this.createTextNode(child) : child);
            }
        } else {
            element.append(typeof children === 'string' ? this.createTextNode(children) : children);
        }
    }
    return element;
}

FueJS.getFormData = function (form){
    const obj = {} ;
    for(let value of new FormData(form).entries()){
        obj[value[0]] = value[1] ;
    }
    return obj ;
}











