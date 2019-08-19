Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList: [],
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.hotSongListRequest()
  },
  onPullDownRefresh: function () {
    // this.hotSongListRequest()
  },
  onReachBottom: function () {
    // this.hotSongListRequest()
  },
  hotSongListRequest: function (e) {
    var that = this
    wx.request({
      url: 'https://api.itooi.cn/music/netease/hotSongList?key=579621905&cat=全部&limit=20&offset=0',
      data: {},
      method:'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        console.log(res.data.data)
        that.procesSongList(res.data.data);
      }
    })
  },
  procesSongList:function(SongLists) {
    let List=[];
    for (var idx in SongLists) {
      var SongList = SongLists[idx];
      //书籍内容简介截取45字符
      var temp = {
        coverImgUrl:SongList.coverImgUrl,
        creator:SongList.creator,
        description:SongList.description,
        id:SongList.id,
        playCount:SongList.playCount,
        songNum:SongList.songNum,
        title:SongList.title
      }
      List.push(temp)
    }
    let new_data = List;
    let old_data = this.data.songList
    this.setData({
      songList: old_data.concat(new_data)
    })
  },
  songClick:function(event){
    console.log("111")
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '../songList/songList?id='+id
    })
  }
})