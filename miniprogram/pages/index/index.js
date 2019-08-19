Page({

  data: {
    imgList: [
      '../../images/banner1.png',
      '../../images/banner2.png',
      '../../images/banner3.png',
      '../../images/banner4.png',
      '../../images/banner5.png'
    ],
    highQualityMusics:[],
    mvList:[]
  },
  onLoad: function (options){
    this.highQualityMusicsRequest();
    this.mvListRequest();
  },
  highQualityMusicsRequest: function (e) {
    var that = this
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList/highQuality?cat=全部&pageSize=6',
      data: {},
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        console.log(res.data.data)
        that.setData({
          highQualityMusics: res.data.data
        })
      }
    })
  },
  mvListRequest: function (e) {
    var that = this
    wx.request({
      url: 'https://v1.itooi.cn/netease/mv/top?pageSize=6&page=0',
      data: {},
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          mvList: res.data.data
        })
      }
    })
  }
})