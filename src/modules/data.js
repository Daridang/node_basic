'use strict'

const cs = require('casual')

// #region create random town
const town = cs.city
// #endregion create random town

// #region create random posts
const posts = createPostsArray()

function createPostsArray() {
    const arr = []
    for (let i = 0; i < 3; i++) {
        arr.push(createPost())
    }
    return arr
}

function createPost() {
    return { title: `${cs.title}`, text: `${cs.text}` }
}
// #endregion create random posts

module.exports = {
    posts,
    town
}