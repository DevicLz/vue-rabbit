import httpInstance from "@/utils/http"

export function getCategoryAPI(){
    httpInstance({
        url:'/home/category/head'
    })
}