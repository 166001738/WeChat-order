// pages/operation/operation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsPrice:0,
    goodsName:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  /*获取名称***/
  goodsNameInput: function (e) {
    this.setData({
      goodsName: e.detail.value
    })
  },
  goodsNameInput2: function (e) {
    this.setData({
      goodsName: e.detail.value
    })
  },
  /*获取价格***/
  goodsPriceInput: function (e) {
    this.setData({
      goodsPrice: e.detail.value
    })
  },
  /**查询提交 */
  clickButton: function(e) {
    const db = wx.cloud.database()
    console.log("名称：" + this.data.goodsName + " 品牌：" + this.data.goodsPrice);
    var gn = this.data.goodsName;
    var gg = this.data.goodsPrice;
    db.collection('dishes').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        name:gn,
        price:gg,
        image_url: 'cloud://zytry-41b1f6.7a79-zytry-41b1f6/3.jpg',
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    })
  },

  clickButton2: function (e) {
    const db = wx.cloud.database()
    var gn = this.data.goodsName;
    console.log("名称：" + gn + " 品牌：" + this.data.goodsPrice);
    // 调用云函数
    wx.cloud.callFunction({
      name: 'delete_dish',
      //传给云函数的参数
      data: {
        dish : gn,
      },
      // 成功回调
      complete: console.log
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