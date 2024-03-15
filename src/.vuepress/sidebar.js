import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/guide/linux/":[
    {
      text: "git学习",
      prefix: "/linux/",
      collapsible: true,
    },
  ],
  "/guide/mianshi/":[
    {
      text: "面试题",
      icon: "shipinmianshi",
      collapsible: true,
      children: [
        {
          text: "面试题上",
          link: "面试上.md",
        },
        {
          text: "面试题中",
          link: "面试中.md",
        },
        {
          text: "面试题下",
          link: "面试下.md",
        },
      ],
    },
  ],

});
