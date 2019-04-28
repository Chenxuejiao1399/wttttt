import request from '@/utils/request'
import qs from 'qs'


//用户 - 微信oauth认证
export function wxOauth(code) {
    return request({
        method: 'post',
        url: '/authorizations',
        data: {
            code: code
        }
    })
}