// components/reminderCard/reminderCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    reminder: {
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index:"",
    Mstart:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击元素时记录坐标
    touchstart:function(e){
      this.setData({
        index: e.currentTarget.dataset.index,
        Mstart: e.changedTouches[0].pageX
      });
    },

    touchend: function (e) {
      let list = this.data.reminder;
      let move = this.data.Mstart - e.changedTouches[0].pageX;
      if(move < 0){
        move = 0;
      }
      if(move >220){
        move =220;
      }
      list[this.data.index]["x"] = move;
      this.setData({
        reminder: list
      });
    },

    touchmove: function (e) {
      //列表项数组
      let list = this.data.reminder;
      //手指在屏幕上移动的距离
      //移动距离 = 触摸的位置 - 移动后的触摸位置
      let move = this.data.Mstart - e.changedTouches[0].pageX;
      // 这里就使用到我们之前记录的索引index
      //比如你滑动第一个列表项index就是0，第二个列表项就是1，···
      //通过index我们就可以很准确的获得当前触发的元素，当然我们需要在事前为数组list的每一项元素添加x属性
      if(move < 0){
        move = 0;
      }
      if(move >220){
        move =220;
      }
      list[this.data.index]["x"] = move;
      this.setData({
        reminder: list
      });
    }
  }
});
