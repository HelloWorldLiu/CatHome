// miniprogram/pages/catInfo/catInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cat: {}
  },
  getCat: function (data){
    let vm = this;
    wx.cloud.callFunction({
      name:"getCats",
      data: data
    }).then(res => {
      vm.setData({
        cat:res.result.data[0]
      });
      console.log(res.result);
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let cat_id = options.cat_id;
    this.getCat({
      action: "cat",
      cat_id: cat_id
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