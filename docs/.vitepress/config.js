export default {
  title: "我的个人博客",
  description: "课程实验搭建VitePress静态博客",
  base: "/blog-demo/",
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],
    sidebar: [{ text: "第一篇博客", link: "/posts/first-blog" }]
  }
}