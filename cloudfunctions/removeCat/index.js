// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.action) {
    case "removeCat": {
      return removeCat(event.cat_id);
    }
  }
};
async function removeCat(cat_id){
  const _ = db.command;
  return await db.collection("cats_list").doc(cat_id).remove({
    success: function (res) {
      console.log(res);
    }
  });
}
