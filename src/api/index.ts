import request from '@/utils/request'
import type { loginParams, signupParams, resLogin } from './interface'
import type { Response } from './type'
// 注册账号
export function signup(data: signupParams): Promise<Response<null>> {
  return request({
    url: '/auth/signup',
    method: 'post',
    data
  })
}
// 登录
export function login(data: loginParams): Promise<Response<resLogin>> {
  return request({
    url: '/auth/signin',
    method: 'post',
    data
  })
}
// 获取用户列表
export function getUsers(): Promise<Response<[]>> {
  return request({
    url: '/users',
    method: 'get'
  })
}

// 获取笔记列表
export function getNotes(): Promise<Response<[]>> {
  return request({
    url: '/note/list',
    method: 'get'
  })
}
