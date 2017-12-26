// pages/register/register.js
// 获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 选择图片
   */
  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function(res) {
        console.log(res);
        that.setData({
          img: res.tempFilePaths[0],
        })
      },
    })
  },

  /**
   * 获取位置信息
   */
  getLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        console.log(res);
        that.setData({
          name: res.name,
          address: res.address,
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
    })
  },

  /**
   * 注册
   */
  register: function (e) {
    console.log(e);
    var that = this;
    var address = e.detail.value.address;
    var latitude = e.detail.value.latitude;
    var longitude = e.detail.value.longitude;
    var mobilePhone = e.detail.value.mobilePhone;
    var name = e.detail.value.name;
    var openid = e.detail.value.openid;
    var telephone = e.detail.value.telephone;
    wx.uploadFile({
      url: app.url + '/refwait/merchant/register',
      filePath: that.data.img,
      name: 'icon',
      header: {
        "Content-Type": "multipart/form-data"
      },
      formData: {
        'openid': openid,
        'name': name,
        'telephone': telephone,
        'mobilePhone': mobilePhone,
        'address': address,
        'longitude': longitude,
        'latitude': latitude
      },
      success: function (res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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