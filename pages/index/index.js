// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  
  
  data:{
    
  },
  handleGoWrite: function () {
    wx.navigateTo({
      url: '../write/write' 
    })
  }
})