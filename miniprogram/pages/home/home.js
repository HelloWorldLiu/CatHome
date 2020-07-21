// miniprogram/pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cats: [
      {
        catImg: "/images/cats/正品@3x.png",
        name: "正品",
        cat_id: 1
      },
      {
        catImg: "/images/cats/喵喵@3x.png",
        name: "喵喵",
        cat_id: 2
      },
      {
        catImg: "/images/cats/小橘@3x.png",
        name: "小橘",
        cat_id: 3
      },
      {
        catImg: "/images/cats/提莫@3x.png",
        name: "提莫",
        cat_id: 4
      },
      {
        catImg: "/images/cats/小尾@3x.png",
        name: "小尾",
        cat_id: 5
      }
    ]
  },
  addCat: function (){
    wx.navigateTo({
      url: "/pages/editCat/editCat",
      success: (result)=>{
        console.log(result);
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  viewCat: function (cat_id){
    wx.navigateTo({
      url: "/pages/catInfo/catInfo?cat_id=" + cat_id,
      success: (result)=>{
        console.log(result);
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              });
            }
          });
        }
      }
    });

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
});