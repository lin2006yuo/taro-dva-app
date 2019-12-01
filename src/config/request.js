import Taro, { Component } from '@tarojs/taro'
/**
 * 公共参数
 */
export const commonParam = {};

/**
 * 请求映射文件
 */
export const requestConfig = {
  loginUrl: "/api/user/wechat-auth"
};


export class Request {
  static loginReadyPromise = Promise.resolve()

  static isLoading = false

  static apiList = {}

  static token = ''

  static getToken() {
    !this.token && (this.token = Taro.getStorageSync('token'))
    return this.token
  }

  conbineOptions(options, data, method) {
    return {
      data: { ...commonParam, ...options.data, ...data },
      method: options.method || data.method || method || 'GET',
      url: `${options.host + options.url}` 
    }
  }

  // request() {
  //   const res = Taro.request()
  // }
}