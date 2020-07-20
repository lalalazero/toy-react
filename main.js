console.log('main.js')
import { ToyReact } from './ToyReact'

class MyComponent {

}

for (let i of [1, 2, 3]) {
    console.log(i)
}

let a = <div name='x' id='idx'>
    <span>Hello</span>
    <span>World</span>
    <span>!</span>
</div>
console.log('a', a)
document.body.appendChild(a)