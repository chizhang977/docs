import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "面试",
    icon: "shipinmianshi",
    link: "/guide/mianshi/面试上.md",
  },
  {text: "主页", icon: "Home", link: "/"},
  {
    text: "前端",
    icon: "vuejs",
    prefix: "/guide/front/",
    children: [
      {
        text: "基础",
        icon: "lightbulb",
        prefix: "basic/",
        children: [{ text: "html", icon: "html", link: "" },
        { text: "css", icon: "css", link: "" },
        { text: "javascript", icon: "js", link: "" }
        ],
      },
      {
        text: "框架",
        icon: "lightbulb",
        prefix: "framework/",
        children: [ { text: "Vue", icon: "vuejs", link: "" }],
      },
    ],
  },
  {
    text: "Java",
    icon: "java",
    prefix: "/guide/java/",
    children: [
      {
        text: "面向对象",
        icon: "lightbulb",
        prefix: "object/",
        children: [{ text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "集合框架",
        icon: "lightbulb",
        prefix: "collection/",
        children: [{ text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "IO框架",
        icon: "lightbulb",
        prefix: "io/",
        children: [{ text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "反射",
        icon: "lightbulb",
        prefix: "reflection/",
        children: [{ text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "高并发",
        icon: "gaobingfa",
        children: [{ text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "中间件",
    icon: "zhongjianjian",
    prefix: "/guide/middleware/",
    children: [
      {
        text: "关系型数据库",
        icon: "lightbulb",
        prefix: "sql/",
        children: [{ text: "Mysql", icon: "mysql", link: "" }],
      },
      {
        text: "非关系型数据库",
        icon: "lightbulb",
        prefix: "nosql/",
        children: [{ text: "Redis", icon: "Redis", link: "" }],
      },
    ],
  },
  {
    text: "微服务",
    icon: "cloud",
    prefix: "/guide/cloud/",
    children: [
      {
        text: "注册中心",
        icon: "lightbulb",
        prefix: "register/",
        children: [{ text: "Nacos", icon: "ellipsis", link: "" }],
      },
      {
        text: "远程调用",
        icon: "lightbulb",
        prefix: "openfeign/",
        children: [{ text: "Openfeign", icon: "ellipsis", link: "" }],
      },
      {
        text: "服务网关",
        icon: "lightbulb",
        prefix: "gateway/",
        children: [{ text: "Gateway", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "Spring",
    icon: "bxl-spring-boot",
    prefix: "/guide/spring/",
    children: [
      {
        text: "Spring",
        icon: "lightbulb",
        
        children: [{ text: "...", icon: "ellipsis", link: "" },{ text: "Git", icon: "ellipsis", link: "" }],
      },
      {
        text: "SpringMVC",
        icon: "lightbulb",
        children: [{ text: "...", icon: "ellipsis", link: "" },{ text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "SpringBoot",
        icon: "lightbulb",
        children: [{ text: "...", icon: "ellipsis", link: "" },{ text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Mybatis",
        icon: "lightbulb",
        prefix: "linux/",
        children: [{ text: "...", icon: "ellipsis", link: "" },{ text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "Linux",
    icon: "centos",
    prefix: "/guide/",
    children: [
      {
        text: "Linux",
        icon: "lightbulb",
        prefix: "linux/",
        children: [{ text: "Linux", icon: "centos", link: "linux/linux.md" },{ text: "Git", icon: "git", link: "git/git.md" },
                { text: "macos安装", link: "macos/黑苹果安装详细记录.md" } 
                  ],
      },
      {
        text: "容器",
        icon: "lightbulb",
        prefix: "container/",
        children: [{ text: "docker", icon: "docker", link: "" },{ text: "K8s", icon: "k8s", link: "" }],
      },
    ],
  },
   {
    text: "关于",
    icon: "about",
    link: "/guide/about/",
  },
]);
