async function fetchProducts(url) {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (err) {
        const error = new Error()
        error.message = err.message
        throw new Error(error)
    }
}


export default fetchProducts