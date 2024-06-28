import request from "@/utils/request"


export function getText(params){
  return request({
    method:'get',
    url:'/index.json',
    params
  })
}

export function getCity(params){
  return request({
    method:'get',
    url:'/gitCity',
    params
  })
}