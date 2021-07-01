export default {
  pages: ["pages/index/index", "pages/hot/hot", "pages/personal/personal"],
  tabBar: {
    list: [
      {
        iconPath: "resource/home.png",
        selectedIconPath: "resource/home_on.png",
        pagePath: "pages/index/index",
        text: "主页"
      },
      {
        iconPath: "resource/hotest.png",
        selectedIconPath: "resource/hotest_on.png",
        pagePath: "pages/hot/hot",
        text: "热门"
      },
      {
        iconPath: "resource/person.png",
        selectedIconPath: "resource/person_on.png",
        pagePath: "pages/personal/personal",
        text: "我"
      }
    ],
    color: "#02affb",
    selectedColor: "#3578e5",
    backgroundColor: "#fff",
    borderStyle: "white"
  },

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  }
};
