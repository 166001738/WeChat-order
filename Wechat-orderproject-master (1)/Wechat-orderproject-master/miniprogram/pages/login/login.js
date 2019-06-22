Page({
  data: {
    id:-1,
    phone: '',
    password: ''
  },

  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'warning',
        duration: 2000
      })
    } else {
      // 这里修改成跳转的页面
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
      if (this.data.id == 1) {
        getApp().globalData.owner = true;
        console.log("set owner "+getApp().globalData.owner)
        wx.navigateBack({
          
        })
      }
      if (this.data.id == 2) {
        getApp().globalData.chief = true;
        console.log("set chief " + getApp().globalData.chief)
        wx.navigateBack({

        })
      }
    }
  },

  onLoad: function(options){
    var that=this;
    console.log("!"+options.id);
    that.setData({
      id:options.id
    })
  }
})