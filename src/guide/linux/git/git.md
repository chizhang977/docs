---
icon: git
---
# Git

## 什么是Git？

![Git logo](/assets/image/git/git.png)

Git开源的分布式版本控制系统,Git易于学习，占用空间小，性能快。

## Git安装

[Git官网地址为](https://git-scm.com/)
安装完成之后，有两个菜单

- Git GUI Here
- Git Bash Here
  可以使用

``` git
git -v 
```

来查看当前Git软件的版本

## Git学习链接

- [Git - 简明指南](https://rogerdudler.github.io/git-guide/index.zh.html)
- [图解Git](https://marklodato.github.io/visual-git-guide/index-zh-cn.html)
- [廖雪峰 : Git 教程](https://www.liaoxuefeng.com/wiki/896043488029600)
- [Git官方教程中文版2](https://git-scm.com/book/zh/v1)
- [Git大全](https://gitee.com/all-about-git)
- [Learn Git Branching](https://oschina.gitee.io/learn-git-branching/)
 - ![Git 基础](/assets/image/git/git基础.jpg)
 - ![Git 远程](/assets/image/git/git远程.jpg)

## Git常见的概念

- 版本控制(顾名思义)
- 分布式
  - 任何一个库都可以当成主库
- 区域
  - 存储区域：Git软件用于存储资源得区域。一般指得就是.git文件夹
    - 工作区域：Git软件对外提供资源得区域，此区域可人工对资源进行处理。
    - 暂存区：Git用于比对存储区域和工作区域得区域。Git根据对比得结果，可以对不同状态得文件执行操作。

## Git基础命令

```git
#获取软件的配置信息
git config -l

#名称和邮箱
git config --global user.name 
git config --global user.email
```

执行完成之后，系统的用户目录就会出现.gitconfig文件，里面有配置的信息

```git
# create版本库,会生成.git文件，管理当前版本
git init 
# 查看库的状态,添加一个文件，执行此命令会是红色，表示未追踪文件，表示没有被版本库管理
git status
# 添加到版本库中,此时观看就会变成绿色，为cached file,暂存状态，此状态可以随时修改和删除，并不是以及被版本库管理了
git add xxx.txt
# 成功纳入版本库
git commit -m "提交信息"
# 简化
git commit -a -m "提交信息"
# 文件历史变化(参数可选，界面友好作用)
git log --pretty-oneline
# 删了文件如果需要恢复
git restore xxx.txt
```

## git branch

主干分支默认为(master)，文件的版本管理操作都是在master这一个分支路线上进行完成。

```git
# 创建分支
git branch 分支名称
# 查看分支
git branch -v
# 分支的切换
git checkout 分支名称
# 删除分支
git branch -d 分支名称
# 合并分支，合并到那个分支就要切换再哪个分支
git checkout master
git merge pg-pages
# 查看文件内容差异
git diff
```

### Git Rebase

第二种合并分支的方法是 git rebase。Rebase 实际上就是取出一系列的提交记录，“复制”它们，然后在另外一个地方逐个的放下去。
Rebase 的优势就是可以创造更线性的提交历史，这听上去有些难以理解。如果只允许使用 Rebase 的话，代码库的提交历史将会变得异常清晰。

## 分离Head

head默认指向当前分支，当前分支指向最后一次的提交记录，分离head，则是将head指向提交记录

```git
git checkout 提交记录
```

如果想看 HEAD 指向，可以通过 cat .git/HEAD 查看， 如果 HEAD 指向的是一个引用，还可以用 git symbolic-ref HEAD 查看它的指向。

## 相对引用

- 使用 ^ 向上移动 1 个提交记录

```git
#切换master父节点
git checkout master^ 
git checkout HEAD^
```

- 使用 ~ 向上移动多个提交记录，如 ~3

```git
#一次后退四步
git checkout HEAD~4 

#直接使用 -f 选项让分支指向另一个提交
git branch -f master HEAD~3
```

## 撤销变更

 Git 里撤销变更的方法很多。和提交一样，撤销变更由底层部分（暂存区的独立文件或者片段）和上层部分（变更到底是通过哪种方式被撤销的）组成。我们这个应用主要关注的是后者。

主要有两种方法用来撤销变更  

- git reset 通过把分支记录回退几个提交记录来实现撤销改动。你可以将这想象成“改写历史”。git reset 向上移动分支，原来指向的提交记录就跟从来没有提交过一样。

```git 
git reset HEAD~1
```

- 虽然在你的本地分支中使用 git reset 很方便，但是这种“改写历史”的方法对大家一起使用的远程分支是无效的哦！为了撤销更改并分享给别人，我们需要使用 

```git 
git revert
```

## 整理提交记录

```git
git cherry-pick <提交号>...
```

如果你想将一些提交复制到当前所在的位置（HEAD）下面的话， Cherry-pick 是最直接的方式了

当你知道你所需要的提交记录（并且还知道这些提交记录的哈希值）时, 用 cherry-pick 再好不过了 —— 没有比这更简单的方式了。

但是如果你不清楚你想要的提交记录的哈希值呢? 我们可以利用交互式的 rebase —— 如果你想从一系列的提交记录中找到想要的记录, 这就是最好的方法了
交互式 rebase 指的是使用带参数 --interactive 的 rebase 命令, 简写为 -i

```git 
git rebase -i HEAD~num
```

如果你在命令后增加了这个选项, Git 会打开一个 UI 界面并列出将要被复制到目标分支的备选提交记录，它还会显示每个提交记录的哈希值和提交说明，提交说明有助于你理解这个提交进行了哪些更改。
当 rebase UI界面打开时, 你能做3件事:

- 调整提交记录的顺序（通过鼠标拖放来完成）
- 删除你不想要的提交（通过切换 pick 的状态来完成，关闭就意味着你不想要这个提交记录）
- 合并提交。它允许你把多个提交记录合并成一个。

## git tag

永远指向某个提交记录的标识,标签在代码库中起着“锚点”的作用

```git 
git tag v1 c1
```

## git describe

Git 还为此专门设计了一个命令用来描述离你最近的锚点（也就是标签）,能帮你在提交历史中移动了多次以后找到方向

```git
git describe 的​​语法是：

git describe <ref>

<ref> 可以是任何能被 Git 识别成提交记录的引用，如果你没有指定的话，Git 会以你目前所检出的位置（HEAD）。

它输出的结果是这样的：

<tag>_<numCommits>_g<hash>

tag 表示的是离 ref 最近的标签， numCommits 是表示这个 ref 与 tag 相差有多少个提交记录， hash 表示的是你所给定的 ref 所表示的提交记录哈希值的前几位。

当 ref 提交记录上有某个标签时，则只输出标签名称
```

## git clone

## git fetch 

实际上将本地仓库中的远程分支更新成了远程仓库相应分支最新的状态。

- 从远程仓库下载本地仓库中缺失的提交记录
- 更新远程分支指针(如 o/master)

## git push

```git 
git push <remote> <place>
#切到本地仓库中的“master”分支，获取所有的提交，再到远程仓库“origin”中找到“master”分支，将远程仓库中没有的提交记录都添加上去，搞定之后告诉我。
git push origin master

git push origin source:destination
```

