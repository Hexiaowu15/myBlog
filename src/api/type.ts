export interface Response<T> {
  code: number // 状态码
  message: string // 状态信息
  data: T // 响应数据
  timestamp: string // 响应时间戳
}

export interface PageResponse<T> {
  current: number // 当前页数
  size: number // 每页数量
  total: number // 总数量
  data: T[] // 响应数据
}
