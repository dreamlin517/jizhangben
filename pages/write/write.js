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
    type: 'payment',
    price: '0'
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
  handleNumber: function (e) {
    var number = e.currentTarget.dataset.number
    var price = this.data.price

    console.log(price)
    console.log(number)
    if (number === 'empty') {
      price = '0'
    } else if (number==='del') {
      price = price.substring(0,price.length-1)
    } else {
      if (price==='0') {
        price = number
      } else {
        price = price + number
      }
    }
    this.setData({
      price
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