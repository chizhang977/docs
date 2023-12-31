import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import navbar from "./navbar.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/docs/",
  lang: "zh-CN",
  title: "学习之旅",
  description: "vuepress-theme-hope 的文档演示",
  navbar,
  theme,
  plugins: [
    // 搜索
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
});
