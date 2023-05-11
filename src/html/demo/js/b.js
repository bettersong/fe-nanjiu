console.log('b')
//index.js
import util from '../utils/util.js';
import $http from '../plugins/http.js';
import analysis from '../utils/analysis.js'
import md5 from '../utils/md5.js';
const app = getApp()
let pid = 'dushumini_home_boy', word = ''
Page({
  gData: {
    touchStartX: 0,
    timerId: null,
    freeTimerId: null,
    freeLeftTime: 0,
    bubbleAdid: null,
  },
  data: {
    isGuideMaskShow: false,
    channel: "male",
    hotRank: [],
    popularIndex: 0,
    limitFree: [],
    vipNovel: [],
    fyRank: [],
    freeTimeArr: [],
    defaultSearch: "",
    bubbleAdv: null,
    user: null,
    autoplay: false,
    isIOS: app.globalData.isIOS,
    isIphoneX: app.globalData.isIphoneX,
    leftDay: 0,
    appParameter: null,
    isGray: app.globalData.greyModel
  },
  onLoad(options) {
    if (options.goto == 'webview') {
      wx.navigateTo({
        url: `/pages/webview?url=` + options.url
      })
    }

    if(options.tab) {
      this.changeChannel({
        currentTarget:{id: options.tab}
      }, 'first')
    }else {
      analysis.send({
        event_type: "impression",
        pid,
      })
    }

    if (options.action == 'support') {
      this.setData({
        action: 'support',
        userid: options.userid
      })
    }

    this.getData()
    if (wx.getStorageSync('IFV2.0_GUIDE_OPENED') === true) {
      this.setData({
        isGuideMaskShow: false
      })
    } else {
      this.setData({
        isGuideMaskShow: true
      })
    }
  },
  onHide() {
    this.setData({
      autoplay: false
    })
    this.freeTimeEnd()
    // wx.$bus.off('grayChange')  // 销毁全局事件
  },
  onUnload() {
    this.setData({
      autoplay: false
    })
    this.freeTimeEnd()
    wx.$bus.off('grayChange')  // 销毁全局事件
  },
  onShow(options) {
    app.visitorSwitch(({greyModel}) => {
      wx.setStorageSync('greyModel', greyModel==1)
      this.setData({
        isGray: greyModel==1
      })
      wx.$bus.on('grayChange', greyModel==1)
    })
    // this.getData()
    if(!this.data.isIOS) {
      this.getFreeLeftTime()
    }
    util.switchTab(this, 1)
    this.setData({
      appParameter: JSON.stringify({
        "Source": "WxMiniProgram",
        "Action": "QDReader://app/" + (getApp().globalData.isIOS ? 'open' : '') + "Bookshelf?query={\"MainScreen\":0,\"ChildScreen\":0}"
      }),
      canOpenAppFlag: getApp().globalData.canOpenAppFlag,
      autoplay: true
    })

    if (this.data.action == 'support') {
      $http.get(`/ajax/account/getExtInfo?userId=${this.data.userid}`).then((res) => {
        this.setData({
          isLogin: res.user.isLogin
        })
        if (res.accountInfo.isInvited) {
          this.setData({
            supportModalVisible: false,
            action: null,
          })
          wx.showToast({
            title: '已经助力过啦',
            icon: 'none',
          })
          return;
        }
        if (this.data.autoAction && this.res.user.isLogin) {
          // 自动助力
          this.onSupportButtonTap()
        } else {
          // 显示助力
          this.setData({
            inviterInfo: res.accountInfo,
            supportModalVisible: true,
          })
        }
      });
    }
  },
  onSupportButtonTap(e) {
    if (this.data.isLogin) {
      $http.post('/ajax/gold/invite', Object.assign({}, { inviter: this.data.userid }, md5.createTokenSix(this))).then((data) => {
        wx.showToast({
          title: '受邀成功',
          icon: 'none',
        })
        this.setData({
          supportModalVisible: false,
          action: null
        })
      }).catch((error) => {
        this.setData({
          supportModalVisible: false,
          action: null
        })
        wx.showToast({
          title: error.message,
          icon: 'none',
        })
      });

      if (e) {
        getApp().submitFormId(e.detail.formId)
      }
    } else {
      this.setData({
        autoAction: true
      })
      wx.navigateTo({ url: '/pages/yuewenlogin/login/login' })
    }
        analysis.send({
          event_type: "click",
          eid: 'home_invited',
          pid: 'dushumini_home',
        })
  },
  onHideDialogButtonTap() {
    this.setData({
      supportModalVisible: false,
      action: null
    })
  },
  launchAppError(e) {
    wx.showModal({
      content: '请打开App Store或应用市场下载最新版起点读书App',
      showCancel: false,
      confirmText: '我知道了'
    })
  },

  bindlaunchapp () {
    analysis.send({
      event_type: "click",
      eid: 'home_launch_app',
      pid,
    })
  },
  getData() {
    Promise.allSettled([this.getBook(), this.getVipBook()]).then((res) => {
      const resD = res?.[0]?.value || {}
      const vipList = res?.[1]?.value || []
      this.setData({
        hotRank: this.formatData(resD["hotRank"]),
        limitFree: this.formatData(resD["limitFree"]),
        fyRank: this.formatData(resD["fyRank"]),
        defaultSearch: resD.defaultSearch,
        user: resD.user,
        vipNovel: this.formatData(vipList)
      }, () => {
        analysis.autoExposure(this, {pid})
      })
    })
  },
  getVipBook() {
    return new Promise((resolve, reject) => {
      $http.get(`/api/bookCity?siteId=${this.data.channel=='male' ? 1 : 2}`).then(res => {
        const list = res?.items[0]?.data?.items || []
        resolve(list)
      }).catch(err => {
        reject()
      })
    })
    
  },
  getBook() {
    return new Promise((resolve, reject) => {
      $http.get(`/ajax/index/index?gender=${this.data.channel}`).then((res) => {
        resolve(res)
      }).catch(() => { reject() })
    })
    
  },
  formatData(list) {
    for (var book of list) {
      book.bSrc = util.getBookCover(book.bid || book.bookId);
    }
    return list
  },
  changeChannel(e, type) {
    if (e.currentTarget.id === "male") {
      this.setData({
        channel: "male",
      })
      pid = 'dushumini_home_boy'
      if(!type) {
        analysis.send({
          event_type: "click",
          eid: 'home_switchboy',
          pid,
          col: 'switchtab'
        })
      }
      

    } else if (e.currentTarget.id === "female") {
      this.setData({
        channel: "female"
      })
      pid = 'dushumini_home_girl'
      if(!type) {
        analysis.send({
          event_type: "click",
          eid: 'home_switchgirl',
          pid,
          col: 'switchtab'
        })
      }
      
    }
    analysis.send({
      event_type: "impression",
      pid,
    })
    if(!type) {
      this.getData()
    }
    
  },
  change(e) {
    word = e.detail?.word || ''
  },
  onSearchAreaTap() {
    analysis.send({
      event_type: "click",
      eid: 'home_search',
      pid,
      col: 'searchbar',
      kw: word
    })
    wx.navigateTo({
      url: `/pages/search/index?isSearchPopup=1&key=${word}`,
    });
  },
  gotoBook(event) {
    const bookId = event.currentTarget.dataset.bid;
    const cbid = event.currentTarget.dataset.cbid || ''
    wx.navigateTo({
      url: `book?bookId=${bookId}`,
    });

    let dataArea = event.currentTarget.dataset.area
    let area = /\D+/.exec(dataArea);
    let ps
    if (dataArea) {
      ps = parseInt(/\d$/.exec(dataArea))
    }

    let eidENUM = {
      'hotRank': 'home_bestseller_click',
      'limitFree': 'home_freebook_click',
      'vipNovel': 'home_huiyuanjingxuan_click',
      'fyRank': 'home_new_click',
    }
    let colENUM = {
      'hotRank': '24hhotsale',
      'limitFree': 'limitfree',
      'vipNovel': 'huiyuanjingxuan',
      'fyRank': 'koubeixinshu',
    }

    analysis.send({
      event_type: "click",
      eid: eidENUM[area],
      bid: bookId,
      cbid,
      ps: ps,
      pid,
      col: colENUM[area]
    })
  },
  onShareAppMessage() {
    analysis.send({
      event_type: "click",
      eid: 'sharefriend',
      pid,
      col: 'overflow'
    })
    return {
      title: '起点读书，最全原创网络小说书城',
      imageUrl: 'https://qidian.qpic.cn/qidian_common/349573/35cbe781e1fc449edcb0b2001d35afe0/0',
      path: `/pages/index?tab=${this.data.channel}`
    };
  },
  getFreeLeftTime() {
    return $http.get(`/ajax/free/getFreeLeftTime?gender=${this.data.channel}`).then((data) => {
      this.gData.freeLeftTime = data || 0;
      if(data > 3600*24*3) {
        // 大于3天
        this.setData({
          leftDay: Math.ceil(data/(3600*24))
        })
      }else {
        this.freeTimeStart();
      }
    });
  },
  freeTimeStart() {
    if (this.gData?.freeTimerId) {
      clearInterval(this.gData.freeTimerId)
    }
    this.gData.freeTimerId = setInterval(() => {
      if (this.gData.freeLeftTime > 0) {
        this.setData({
          freeTimeArr: this.dataFormat(this.gData.freeLeftTime)
        })
        this.gData.freeLeftTime--; //经过1秒
      } else {
        this.setData({
          freeTimeArr: ['00', '00', '00'],
        })
      }
    }, 1000)
  },
  freeTimeEnd() {
    clearInterval(this.gData?.freeTimerId)
  },
  dataFormat(time) {
    return [
      this.fnZero(Math.floor(time / 3600)),
      this.fnZero(Math.floor((time % 3600) / 60)),
      this.fnZero(Math.floor((time % 60)))
    ]
  },
  fnZero(number) {
    if (number != 0) {
      return number <= 9 ? `0${number}` : `${number}`;
    }
    return '00';
  },
  closeMask() {
    this.setData({
      isGuideMaskShow: false
    })
    wx.setStorageSync('IFV2.0_GUIDE_OPENED', true);
  },
  onBubbleTap() {
    analysis.send({
      event_type: "click",
      pid,
      eid: 'home_ad_hover',
      advid: this.gData.bubbleAdid,
    })
  },
  onRuleTap() {
    // TODO:跳转规则
    wx.navigateTo({
      url: '/pages/webview?url=https://ataru.qidian.com/noah/8392779'
    })
  }
})
