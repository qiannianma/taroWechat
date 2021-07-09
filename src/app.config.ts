export default {
  pages: [
    "pages/index/index",
    "pages/category/category",
    "pages/personal/personal"
  ],
tabBar: {
    color: "#02affb",
    selectedColor: "#3578e5",
    backgroundColor: "#fff",
    borderStyle: "black",
    custom: true,
    list: [
      {
        iconPath: "resource/home.png",
        selectedIconPath: "resource/home_on.png",
        pagePath: "pages/index/index",
        text: "主页1"
        
      },
      {
        iconPath: "resource/category.png",
        selectedIconPath: "resource/category_on.png",
        pagePath: "pages/category/category",
        text: "分类"
      },
      {
        iconPath: "resource/person.png",
        selectedIconPath: "resource/person_on.png",
        pagePath: "pages/personal/personal",
        text: "我"
      }
    ],
    usingComponents: {
        customtabbar: "custom-tab-bar/index"
      }
  },

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle:"custom"
  }
};
