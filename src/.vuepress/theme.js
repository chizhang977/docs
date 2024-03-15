import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  
  //全屏 
  fullscreen: true,
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  //作者
  author: {
    name: "chizhang977",
    url: "https://github.com/chizhang977/docs",
  },
  //icon路径和前缀
  iconAssets: "//at.alicdn.com/t/c/font_4312372_qmqmanhrw8d.css",
  iconPrefix: "iconfont icon-",

  logo: "/logo.png",
  //github
  repo: "https://github.com/chizhang977",
  docsDir: "src",
  darkmode:"switch",

  // navbar
  navbar,

  // sidebar
  sidebar,

  // 页脚
  footer: "默认页脚",

  displayFooter: true,

  // 加密
  // 加密的页面将会被重定向到加密后的页面
  encrypt: {
    config: {
      // "/guide/linux/git/": ["1234"],
      // global: true
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    contributorsText: "贡献者",
  },

  plugins: {
//     <script src="https://giscus.app/client.js"
//         data-repo="chizhang977/docs"
//         data-repo-id="R_kgDOKoSSJA"
//         data-category="Announcements"
//         data-category-id="DIC_kwDOKoSSJM4CapkG"
//         data-mapping="pathname"
//         data-strict="0"
//         data-reactions-enabled="1"
//         data-emit-metadata="0"
//         data-input-position="bottom"
//         data-theme="preferred_color_scheme"
//         data-lang="zh-CN"
//         crossorigin="anonymous"
//         async>
// </script>

    // You should generate and use your own comment service
  
    comment: {
      provider: "Giscus",
      repo: "chizhang977/docs",
      repoId: "R_kgDOKoSSJA",
      category: "Announcements",
      categoryId: "DIC_kwDOKoSSJM4CapkG",
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      card: true,

      // install chart.js before enabling it
      // chart: true,

      codetabs: true,
      demo: true,

      // install echarts before enabling it
      // echarts: true,

      figure: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      imgLazyload: true,
      imgSize: true,
      include: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      mark: true,

      // install mermaid before enabling it
      // mermaid: true,

      playground: {
        presets: ["ts", "vue"],
      },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      //选项卡
      tabs: true,
      vPre: true,

      chart: true,

      // install @vue/repl before enabling it
      // vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
