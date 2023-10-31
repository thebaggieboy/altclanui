// fetcher function, which is just a wrapper of the native fetch:

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default fetcher