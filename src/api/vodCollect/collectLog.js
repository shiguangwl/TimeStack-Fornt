import request from '@/utils/request'

// 查询采集日志列表
export function listCollectLog(query) {
  return request({
    url: '/vodCollect/collectLog/list',
    method: 'get',
    params: query
  })
}

// 查询采集日志详细
export function getCollectLog(id) {
  return request({
    url: '/vodCollect/collectLog/' + id,
    method: 'get'
  })
}

// 新增采集日志
export function addCollectLog(data) {
  return request({
    url: '/vodCollect/collectLog',
    method: 'post',
    data: data
  })
}

// 修改采集日志
export function updateCollectLog(data) {
  return request({
    url: '/vodCollect/collectLog',
    method: 'put',
    data: data
  })
}

// 删除采集日志
export function delCollectLog(id) {
  return request({
    url: '/vodCollect/collectLog/' + id,
    method: 'delete'
  })
}
