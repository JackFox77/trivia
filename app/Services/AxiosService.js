export const sandboxApi = new axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10',
    timeout:4000
})