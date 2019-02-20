//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    a1src:'../../image/a1.png',
    a2src: '../../image/a2.png',
    a3src: '../../image/a3.png',
    a4src: '../../image/a4.png',
    signupimg:'../../image/signup.png',
    imgsrc:'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&quality=120&wh_rate=0&size=f648_364&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=1619440b1bc5580ece1e18c556a408d7&src=http%3A%2F%2Ft12.baidu.com%2Fit%2Fu%3D2318927072%2C2551034291%26fm%3D175%26s%3DF9E09B544C2154095A6098DF030090F1%26w%3D660%26h%3D370%26img.JPEG',
    iconsrc:'../../image/usercount.png',
    jtsrc:'../../image/icon-jt.png',
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544773565403&di=c867d48a83189fc3f24d506d4ca47ea7&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dbc2cf9c3d0b44aed4d43b6a7db75ed74%2F2f738bd4b31c87019bbf486f2d7f9e2f0708ff2a.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544772954929&di=824c1b4215630f5c3c1fd1d00dedb218&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D66aa35bbc1ef7609280691dc46b4c9b9%2F4a36acaf2edda3cc168789060be93901213f92b0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544773175846&di=474290047261926de2169eb966aed308&imgtype=0&src=http%3A%2F%2Fpic18_1.qiyeku.com%2Fqiyeku_pic%2F2018%2F1%2F11%2Fhongkangshen%2Fproduct%2Fproduct_pic%2Fimage%2F2018_04_10%2F20180410031354667.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000 
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '心理咨询',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
        console.log("转发成功")
      },
      fail: function (res) {
        // 转发失败
        onsole.log("转发失败")
      }
    }
  }
})
