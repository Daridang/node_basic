'use strict'

const cs = require('casual')

const posts = createArray()

function createArray() {
    const arr = []
    for (let i = 0; i < 3; i++) {
        arr.push(createPost())
    }
    return arr
}

function createPost() {
    return { title: `${cs.title}`, text: `${cs.text}`}
}

module.exports = {
    posts
}