import axios from 'axios'

axios.default.timeout = 30000
const baseURI = 'http://39.108.148.255/api'

export function get (url) {
    return new Promise (
        (resolve, reject) => {
            axios.get(baseURI + url).then(res => {
                resolve(res.data)
            })
        }
    )
}

export function post(url,params){
    return new Promise(
        (resolve, reject) => {
            axios.post(url,params).then(
                (res) => {
                    resolve(res.data)
                }
            )
        }
    )
}

export default{
    getUser (id) {
        return get(`/user?id=${id}`)
    },
    getFile (id){
        return get(`/file?id=${id}`)
    },
    getNewFile(){
        return get('/file/search?limit=100')
    },
    getUserFile(uk,page){
        return get(`/file/search?uk=${uk}&page=${page}`)
    },
    searchFile (condition){
        return get('file/search?')
    },
    getHotFile(){
        return get('hotFile')
    },
    getHotUser(){
        return get('hotUser')
    },
    getHotSearch(){
        return get('hotSearch')
    },
    getWebSiteInfo(){
        return get('webSiteInfo')
    },
    getType(){
        return get('type')
    },
    searchSuffix(type){
        return get(`suffix/search?type=${type}`)
    }
}