// pages/write/write.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconSize: [50, 50, 50, 50, 50, 50],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    paymentList: [
      '买菜', '吃饭', '看电影', '买衣服'
    ],
    incomeList: [
      '工资', '奖金', '红包', '股票'
    ],
    typeList: [

    ],
     type: 'payment'
  },
// 切换支出和收入
  handleSwitchType: function (e) {
    var type = e.currentTarget.dataset.hi
    if (type === 'payment') {
      this.setData({
        typeList: this.data.paymentList,
        type: 'payment'
      })
    } else {
      this.setData({
        typeList: this.data.incomeList,
        type: 'income'
      })
    }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      typeList: this.data.paymentList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})