import request from '@/utils/request'

export function getRecommend() {
    return request({
        url: '/recommend',
        method: 'get'
    })
}