// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  let openId = wxContext.OPENID;
  switch (event.action) {
    case "cats": {
      return getCats(openId);
    }
    case "cat": {
      return getCat(event.cat_id);
    }
  }

  
};
async function getCats(openId){
  const _ = db.command;
  return await db.collection("cats_list").where({
    // gt 方法用于指定一个 "大于" 条件，此处 _.gt(30) 是一个 "大于 30" 的条件
    openId: _.eq(openId)
  })
    .get({
      success: function(res) {
        console.log(res.data);
      }
    });
}

async function getCat(cat_id){
  const _ = db.command;
  return await db.collection("cats_list").where({
    // gt 方法用于指定一个 "大于" 条件，此处 _.gt(30) 是一个 "大于 30" 的条件
    _id: _.eq(cat_id)
  })
    .get({
      success: function(res) {
        console.log(res.data);
      }
    });
}