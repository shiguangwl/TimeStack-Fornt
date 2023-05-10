import request from '@/utils/request'

// 查询VodCollect 影视数据列表列表
export function listVodList(query) {
  return request({
    url: '/vodCollect/vodList/list',
    method: 'get',
    params: query
  })
}

// 查询VodCollect 影视数据列表详细
export function getVodList(id) {
  return request({
    url: '/vodCollect/vodList/' + id,
    method: 'get'
  })
}

// 新增VodCollect 影视数据列表
export function addVodList(data) {
  return request({
    url: '/vodCollect/vodList',
    method: 'post',
    data: data
  })
}

// 修改VodCollect 影视数据列表
export function updateVodList(data) {
  return request({
    url: '/vodCollect/vodList',
    method: 'put',
    data: data
  })
}

// 删除VodCollect 影视数据列表
export function delVodList(id) {
  return request({
    url: '/vodCollect/vodList/' + id,
    method: 'delete'
  })
}
