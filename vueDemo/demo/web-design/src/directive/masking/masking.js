import './masking.scss'
export default {
  inserted: function (el, binding, vnode) {
    console.log(el, binding, vnode)
    el.style.position = 'relative'
    var divDemo = document.createElement('div')
    divDemo.classList.add('masking')
    divDemo.innerHTML = `
      <ul class="masking__edit">
        <li class="masking__edit__item" data-action="copy">复制</li>
        <li class="masking__edit__item"  data-action="up">上移</li>
        <li class="masking__edit__item"  data-action="down">下移</li>
        <li class="masking__edit__item"  data-action="del">删除</li>
      </ul>
    `
    el.appendChild(divDemo)
  }
}
