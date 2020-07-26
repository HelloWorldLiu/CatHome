// components/catDetail/catDetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cat: {
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    removeCat() {
      let vm = this;
      wx.showModal({
        title: "删除",
        content: "您确定删除吗？（提示：与它相关的提醒也会被删除）！",
        showCancel: true,
        success (res) {
          if (res.confirm) {
            console.log(vm.data.cat._id);
            wx.cloud.callFunction({
              name:"removeCat",
              data: {
                action: "removeCat",
                cat_id: vm.data.cat._id
              }
            }).then(res => {
              console.log(res.result);
              if(res.result.stats.removed>0){
                wx.showModal({
                  content: "已删除！",
                  showCancel: false,
                  success (res) {
                    if (res.confirm) {
                      wx.navigateBack({
                        delta: 1,
                        success: function (e) {
                          var page = getCurrentPages().pop();
                          if (page == undefined || page == null) return;
                          page.onLoad();
                        }
                      });
                    }
                  }
                });
              }else{
                wx.showModal({
                  title: "删除失败",
                  showCancel: false
                });
              }
            });
          }
        }
      });
      
    }
  }
});
