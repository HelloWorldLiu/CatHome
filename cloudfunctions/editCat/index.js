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
  switch (event.action) {
    case "saveCat": {
      return saveCat(event.cat,wxContext.OPENID);
    }
  }
};
async function saveCat(cat,openId) {
  cat["openId"] = openId;
  console.log(cat);
  return await db.collection("cats_list").add({
    data: cat
  });
  
}
