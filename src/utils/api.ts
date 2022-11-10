import axios from "axios"

const baseUrl = 'https://www.jsonbulut.com/json/'
const ref = 'd1becef32825e5c8b0fc1b096230400b'

// axios config
const config = axios.create({
    baseURL: baseUrl,
    timeout: 15000,
    params: { ref: ref },
    //headers: { 'token': 'kj23h4jk23h4jk23' }
})


// all product
export const allProduct = async () => {
    const sendParams = {
        start: '0'
    }
    return await config.get('product.php', {params: sendParams})
}