// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'dkvirus'
  },

  handleChangePeople: function () {
    console.log(this.data.message)

    this.setData({ message: 'xxx' })
  }
})