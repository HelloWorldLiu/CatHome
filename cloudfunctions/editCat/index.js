// 云函数入口文件
const cloud = require('wx-server-sdk');


cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  switch (event.action) {
    case 'saveCat': {
      return saveCat(event.cat,wxContext.OPENID)
    }
  }
}
async function saveCat(cat,openId) {
  cat['openid'] = openId;
  const db = wx.cloud.database();
  db.collection('cats_list')
  .add({
    data: [
      cat,
    ]
  })
  return {
    cat,
    openId,
  };
}
