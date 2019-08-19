// pages/songList/songList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList:[],
    id:""
  },
  onLoad:function(options){
    this.setData({
      id:options.id
    })
    this.songListRequest();
  },
  songListRequest: function (e) {
    var that = this
    wx.request({
      url: 'https://v1.itooi.cn/netease/songList?id='+this.data.id+'&pageSize=10',
      data: {},
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          songList: res.data.data
        })
      }
    })
  }
})