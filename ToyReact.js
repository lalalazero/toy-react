export let ToyReact = {
    createElement(type, attributes, ...children) {
        let element;
        if (typeof type === 'string') {
            element = new ElementWrapper(type)
        } else {
            element = new type;
        }
        for (let name in attributes) {
            element.setAttribute(name, attributes[name]);
        }
        for (let child of children) {
            if (typeof child === 'string') {
                child = new TextWrapper(child)
            }
            element.appendChild(child)
        }
        return element
    },
    render(vdom, element) {
        console.log('ToyReact render...')
        vdom.mountTo(element)
        // element.appendChild(vdom)
    }
}

class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }
    appendChild(vchild) {
        vchild.mountTo(this.root)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

export class Component {
    setAttribute(name, value) {
        this[name] = value
    }
    mountTo(parent) {
        let vdom = this.render()
        vdom.mountTo(parent)
    }
}