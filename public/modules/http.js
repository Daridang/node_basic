'use strict'

const baseUrl = 'http://localhost:3000'

export async function get(endpoint) {
    try {
        const response = await fetch(`${baseUrl}${endpoint}`)
        if (response.ok) {
            const result = await response.text()
            return result
        }
    } catch (error) {
        console.log('Error: ', error)
    }
}