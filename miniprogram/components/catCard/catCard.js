// Components/catCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cat: { // 属性名
      type: Object,
      value: ""
    },
    "id": {
      type: Number
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
      let id = event.currentTarget.dataset.id;
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
