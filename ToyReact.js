export let ToyReact = {
    createElement(type, attributes, ...children) {
        let element = document.createElement(type)
        for (let name in attributes) {
            // attributes 和 property 的区别
            // element[name] = attributes[name] wrong
            element.setAttribute(name, attributes[name]);
        }
        for (let child of children) {
            if (typeof child === 'string') {
                child = document.createTextNode(child)
            }
            element.appendChild(child)
        }
        return element
    }
}
