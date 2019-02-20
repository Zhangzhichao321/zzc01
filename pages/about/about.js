//about.js
//获取应用实例
var app = getApp()
Page({
  data: {
    logosrc:'../../image/logo.png',
    adrimg:'../../image/icon-address.png',
    clockimg: '../../image/icon-clock.png',
    phoneimg: '../../image/icon-phone.png',
    jtimg: '../../image/icon-jt.png',
    picimg: '../../image/icon-pic.png',
    imgUrls: [
 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545368109&di=224a2cf495c773fe819083853b8e20ce&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dca0d2b2ce324b899ca31717b066f77e0%2Fa8014c086e061d95e84e361471f40ad162d9ca96.jpg',
 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544773449184&di=2505905ea50ef3692a2dae751911a91d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D50702ad6d7c451dae2fb04a8de943813%2F80cb39dbb6fd52669bb38e9ca118972bd5073699.jpg',
 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495626359075&di=3297d75c3742024d15f553547495f3db&imgtype=0&src=http%3A%2F%2Fwww.17emarketing.com%2Fuploads%2Fallimg%2F160627%2F1-16062G54154.png',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '13761696253', 
    })
  },
  getLocation: function (){
    wx.openLocation({
      latitude: 29.53,
      longitude: 106.57,
      name:"聆心湾",
      address:"上海海事大学信息工程学院",
      scale: 28
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
