import request from '@/utils/request'

// 查询分类列表
export function listVodCategory(query) {
  return request({
    url: '/vodCollect/vodCategory/list',
    method: 'get',
    params: query
  })
}

// 查询分类详细
export function getVodCategory(id) {
  return request({
    url: '/vodCollect/vodCategory/' + id,
    method: 'get'
  })
}

// 新增分类
export function addVodCategory(data) {
  return request({
    url: '/vodCollect/vodCategory',
    method: 'post',
    data: data
  })
}

// 修改分类
export function updateVodCategory(data) {
  return request({
    url: '/vodCollect/vodCategory',
    method: 'put',
    data: data
  })
}

// 删除分类
export function delVodCategory(id) {
  return request({
    url: '/vodCollect/vodCategory/' + id,
    method: 'delete'
  })
}
