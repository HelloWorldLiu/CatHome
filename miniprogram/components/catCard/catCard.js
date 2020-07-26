// Components/catCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cat: { // 属性名
      type: Object,
      value: ""
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
    viewCat(event){
      let id = this.data.cat._id;
      console.log(id);
      wx.navigateTo({
        url: "/pages/catInfo/catInfo?cat_id=" + id,
        success: (result)=>{
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }
  }
});
