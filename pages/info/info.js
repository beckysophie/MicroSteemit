// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steemitname:"",
    location:"",
    avatar: "",
    reputation:"",
    balance:"",
    sbd_balance:"",
    vesting_shares:"",
    voting_power:"",
    created:"",
    postkey:"",
    activekey:"",
    ownerkey:"",
    memokey:"",
    postauth0:"",
    postauth1:"",
    postauth2:"",
    postauth3:""


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      // 由于没有域名，这行先注释，测试域名
      url: 'https://steemit.com/@cha0s0000.json',
      method: 'GET',
      success: function (res) {
        console.log(res);
        if(res.data.status == '200')
        {
          that.setData({
            avatar: res.data.user.json_metadata.profile.profile_image,
            balance: res.data.user.balance,
            created: res.data.user.created,
            sbd_balance: res.data.user.sbd_balance,
            vesting_shares: parseInt(res.data.user.vesting_shares),
            voting_power: String(res.data.user.voting_power).substr(0,2),
            reputation: res.data.user.reputation.substr(0,2),
            steemitname:res.data.user.name,
            location: res.data.user.json_metadata.profile.location,
            postkey: res.data.user.posting.key_auths[0][0],
            activekey: res.data.user.active.key_auths[0][0],
            ownerkey: res.data.user.owner.key_auths[0][0],
            memokey: res.data.user.memo_key,
            postauth0: res.data.user.posting.account_auths[0][0],
            postauth1: res.data.user.posting.account_auths[1][0],
            postauth2: res.data.user.posting.account_auths[2][0],
            postauth3: res.data.user.posting.account_auths[3][0]



          })
        }
      } 
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})