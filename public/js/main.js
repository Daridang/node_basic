'use strict'

import { get } from "../modules/http.js"

// #region target html elements
const contentEl = document.querySelector('.content')
const btn1El = document.querySelector('.btn-1')
const btn2El = document.querySelector('.btn-2')
const btn3El = document.querySelector('.btn-3')
// #endregion target html elements

// #region button listeners
btn1El.addEventListener('click', async () => {
    const result = await get('/')
    contentEl.innerHTML = ''
    contentEl.insertAdjacentHTML('afterbegin', result)
})

btn2El.addEventListener('click', async () => {
    const result = await get('/posts')
    contentEl.innerHTML = ''
    JSON.parse(result).forEach(post => {
        contentEl.insertAdjacentHTML('beforeend', createPost(post))
    });
})
btn3El.addEventListener('click', async () => {
    const result = await get('/api/town')
    contentEl.innerHTML = ''
    contentEl.insertAdjacentHTML('afterbegin', result)
})
// #endregion button listeners

// #region helpers
function createPost(postData) {
    return `<div>
        <h3>${postData.title}</h3>
        <p>${postData.text}</p>
    </div>
    `
}
// #endregion helpers