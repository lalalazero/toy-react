console.log('main.js')
import { ToyReact, Component } from './ToyReact'

class MyComponent extends Component {
    render() {
        return <div>
            <span>hello</span>
            <span>world</span>
            {
                this.children
            }
            {
                true
            }
        </div>
    }
    // setAttribute(name, value) {
    //     this[name] = value
    // }
    // mountTo(parent) {
    //     let vdom = this.render();
    //     vdom.mountTo(parent)
    // }
}

for (let i of [1, 2, 3]) {
    console.log(i)
}

let a = <MyComponent name='x' id='idx'>
    {/* <span>Hello</span>
    <span>World</span>
    <span>!</span> */}
    <div>children</div>
</MyComponent>
console.log('a', a)
ToyReact.render(
    a,
    document.body
)