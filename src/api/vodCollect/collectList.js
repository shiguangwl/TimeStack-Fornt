import request from '@/utils/request'



export function collect(query) {
  return request({
    url: '/vodCollect/collectList/collect',
    method: 'get',
    params: query
  })
}



// 查询资源采集站列表
export function listCollectList(query) {
  return request({
    url: '/vodCollect/collectList/list',
    method: 'get',
    params: query
  })
}

// 查询资源采集站详细
export function getCollectList(id) {
  return request({
    url: '/vodCollect/collectList/' + id,
    method: 'get'
  })
}

// 新增资源采集站
export function addCollectList(data) {
  return request({
    url: '/vodCollect/collectList',
    method: 'post',
    data: data
  })
}

// 修改资源采集站
export function updateCollectList(data) {
  return request({
    url: '/vodCollect/collectList',
    method: 'put',
    data: data
  })
}

// 删除资源采集站
export function delCollectList(id) {
  return request({
    url: '/vodCollect/collectList/' + id,
    method: 'delete'
  })
}
