
export default {
  login:{
    create:()=>`/login`,
    path:'login'
  },
  log:{
    /**
     * 
     * @param {String} id 
     * @returns {String}
     */
    create:(id)=>`/app/log/${id}/`,
    path:'log/:id'
  },
  webhook:{
    create:()=>`/app/webhooks/`,
    path:'webhooks',
  },
  resetPassword:{
    create:()=>`/reset-password/`,
    path:'reset-password',
  },
  // resetPassword:{
  //   create:()=>`/reset-password/`,
  //   path:'reset-password',
  // },
  changePassword:{
    /**
     * 
     * @param {String} token 
     * @returns {String}
     */
    create:(token)=>`/change-password/${token}/`,
    path:'change-password/:token/',
  },
}
