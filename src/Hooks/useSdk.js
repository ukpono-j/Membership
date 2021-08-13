import React from 'react';
import axios from 'axios';


class WebSocket{
  constructor(axios){
    this.axios = axios
  }

  // log

  
}



class Webhook{
  constructor(axios){
    this.axios = axios
  }

  /**
   * 
   * @param {Object} args
   * @param {Object} args.params
   * @returns 
   */
  list(args={params:{}}){
    const {params} = args
    
    return this.axios.get("/api/webhooks/",{
      params,
      timeout:3000
    })
  }


  /**
   * 
   * @param {Object} args
   * @param {Object} args.id
   * @returns {Response}
   */
  retrieve(args){
    const {id} = args
    return this.axios.get("/api/webhooks/"+id+"/")
  }


  /**
   * 
   * @param {Object} args
   * @param {Number} args.id
   * @param {Object} args.data
   * @param {String} args.data.name
   * @returns {Promise}
   */
  update(args){
    const {data,id} = args
    return this.axios({
      method:'put',
      url:"/api/webhooks/"+id+'/',
      data
    })
  }

  /**
   * 
   * @param {Object} args
   * @param {Number} args.id
   * @returns {Promise}
   */
  delete(args){
    const {id} = args
    return this.axios.delete("/api/webhooks/"+id+"/")
  }

  
}



class Auth{
  constructor(axios){
    this.axios = axios
  }


  
  /**
   * 
   * @param {Object} args
   * @param {Object} args.data
   * @param {String} args.data.email
   * @param {String} args.data.password
   * @returns {Response}
   */
  login(args={}){
    const {data} = args
    var config = {
      method: 'post',
      url: '/api/auth/login/',
      data 
    };
    return this.axios(config)
  }

  /**
   * 
   * @param {Object} args
   * @param {String} args.token
   * @param {Object} args.data
   * @param {String} args.data.password
   * @returns {Response}
   */
  changePassword(args={}){
    const {data,token} = args
    var config = {
      method: 'post',
      url: `/api/auth/change-password/${token}/`,
      data 
    };
    return this.axios(config)
  }

  /**
   * 
   * @param {Object} args
   * @param {Object} args.data
   * @param {String} args.data.email
   * @returns {Response}
   */
  resetPassword(args={}){
    const {data} = args
    var config = {
      method: 'post',
      url: `/api/auth/reset-password/`,
      data 
    };
    return this.axios(config)
  }
}








class Sdk{
  constructor(){
    this.source = axios.CancelToken.source();

    let headers;

    const token = localStorage.getItem("token")

    if(token){
      headers = {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${token}`
      }
    }else{
      headers = {
        "Content-Type": "application/json"
      }
    }

  this.axios = axios.create({
    // baseURL: 'https://some-domain.com/api/',
    timeout: 5000,
    headers,
    cancelToken: this.source.token
  });


  this.WebSocket = new WebSocket(this.axios)
 
  this.Webhook = new Webhook(this.axios)
  this.Auth = new Auth(this.axios)
  }


  abort(message="request has been cancel"){
    this.source.cancel(message)
  }

}


export default (props)=>{
  return new Sdk()
}
