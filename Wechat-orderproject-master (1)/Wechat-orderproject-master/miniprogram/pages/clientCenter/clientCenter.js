//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    chief:true,
    owner:false
  },
  //事件处理函数
  changeNotice: function (e){
    wx.navigateTo({
      url: '../notice/notice',
    })
  },

  menuop:function(e){
    wx.navigateTo({
      url: '../operation/operation',
    })
  },

  checkChief: function (e) {
    var that=this;
    wx.navigateTo({
      url: '../login/login?id=2',
    })
  },

  checkOwner: function (e) {
    wx.navigateTo({
      url: '../login/login?id=1',
    })
  },

  orderManage: function(e){
    wx.navigateTo({
      url: '../manage/manage',
    })
  },

  bindViewTap: function() {
    
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onShow: function(){
    var that = this;
    var app=getApp();
    that.setData({
      chief: app.globalData.chief,
      owner: app.globalData.owner
    })
  }
})
