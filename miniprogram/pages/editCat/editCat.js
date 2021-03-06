// miniprogram/pages/editCat/editCat.js

import WxValidate from "../../utils/WxValidate.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex_list: ["公", "母"],
    sterilization_list: ["已绝育", "未绝育"],
    form: {
      catImg: "/images/icon_相机@3x.png",
      name: "",
      sex: "公",
      birthday: "2020-06-22",
      breed:"",
      sterilization: "未绝育",
      height: "",
      long: "",
      weight: "",
      characte: "",
      love_food: "",
      disease: ""
    }
  },
  selectSex(e) {
    let sex = this.data.sex_list[e.detail.value];
    this.setData({
      "form.sex": sex
    });
  },
  selectsterilization(e) {
    let sterilization = this.data.sterilization_list[e.detail.value];
    this.setData({
      "form.sterilization": sterilization
    });
  },
  chooseCatImage() {
    let vm = this;
    wx.chooseImage({
      count : 1, //规定选择图片的数量，默认9
      sizeType : ["original","compressed"], //规定图片的尺寸， 原图/压缩图
      sourceType : ["album","camera"],
      success: chooseResult => {
        // 将图片上传至云存储空间
        wx.cloud.uploadFile({
          // 指定上传到的云路径
          cloudPath: "image/cat_image/"+ new Date().getTime() +"-"+ Math.floor(Math.random() * 1000),
          // 指定要上传的文件的小程序临时文件路径
          filePath: chooseResult.tempFilePaths[0],
          // 成功回调
          success: res => {
            console.log(res.fileID);
            vm.setData({ "form.catImg": res.fileID });
  
          }
        });
      }
    });  
  },
  onChange(e) {
    console.log(e);
    this.setData({
      ["form."+e.currentTarget.dataset.prop]: e.detail.value
    });
  },
  saveCatInfo(){
    let vm = this;
    console.log(vm.data.form);
    wx.cloud.callFunction({
      name:"editCat",
      data: {
        action: "saveCat",
        cat: vm.data.form
      }
    }).then(res => {
      console.log(res.result);
      wx.showToast({
        title: "保存成功！",
        mask: true,
        success () {
          setTimeout(function(){
            wx.navigateBack({
              delta: 1,
              success: function () {
                var page = getCurrentPages().pop();
                if (page == undefined || page == null) return;
                page.onLoad();
              }
            });
          }, 1000);
        }
      });
    });
  },

  //报错 
  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false
    });
  },
  initValidate() {
    const rules = {
      name: {
        required: true
      },
      breed: {
        required: true
      }
    };
    const messages = {
      name: {
        required: "请填写名字"
      },
      breed: {
        required: "请输入品种"
      }
    };
    this.WxValidate = new WxValidate(rules, messages);
  },
  // 调用验证方法，传入参数 e 是 form 表单组件中的数据
  submitForm(e) {
    const params = e.detail.value;
    // 传入表单数据，调用验证方法
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0];
      this.showModal(error);
      return false;
    }else{
      this.saveCatInfo();
    }
  },
  
  /**s
   * 生命周期函数--监听页面加载
   */
  onLoad(){
    wx.setNavigationBarTitle({
      title: "编辑猫咪"
    });
    wx.setNavigationBarColor({
      frontColor: "#000000",
      backgroundColor: "#ffffff"
    });
    this.initValidate();
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