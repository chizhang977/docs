import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as r,b as e,d as i,e as a,a as s}from"./app-bb3d2333.js";const c="/docs/assets/image/git/git.png",g="/docs/assets/image/git/git基础.jpg",o="/docs/assets/image/git/git远程.jpg",u={},m=s('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="什么是git" tabindex="-1"><a class="header-anchor" href="#什么是git" aria-hidden="true">#</a> 什么是Git？</h2><figure><img src="'+c+'" alt="Git logo" tabindex="0" loading="lazy"><figcaption>Git logo</figcaption></figure><p>Git开源的分布式版本控制系统,Git易于学习，占用空间小，性能快。</p><h2 id="git安装" tabindex="-1"><a class="header-anchor" href="#git安装" aria-hidden="true">#</a> Git安装</h2>',5),v={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},h=s(`<ul><li>Git GUI Here</li><li>Git Bash Here 可以使用</li></ul><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git -v 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来查看当前Git软件的版本</p><h2 id="git学习链接" tabindex="-1"><a class="header-anchor" href="#git学习链接" aria-hidden="true">#</a> Git学习链接</h2>`,4),b={href:"https://rogerdudler.github.io/git-guide/index.zh.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://marklodato.github.io/visual-git-guide/index-zh-cn.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"},_={href:"https://git-scm.com/book/zh/v1",target:"_blank",rel:"noopener noreferrer"},x={href:"https://gitee.com/all-about-git",target:"_blank",rel:"noopener noreferrer"},k={href:"https://oschina.gitee.io/learn-git-branching/",target:"_blank",rel:"noopener noreferrer"},G=e("li",null,[e("img",{src:g,alt:"Git 基础",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Git 基础")],-1),E=e("li",null,[e("img",{src:o,alt:"Git 远程",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Git 远程")],-1),H=s(`<h2 id="git常见的概念" tabindex="-1"><a class="header-anchor" href="#git常见的概念" aria-hidden="true">#</a> Git常见的概念</h2><ul><li>版本控制(顾名思义)</li><li>分布式 <ul><li>任何一个库都可以当成主库</li></ul></li><li>区域 <ul><li>存储区域：Git软件用于存储资源得区域。一般指得就是.git文件夹 <ul><li>工作区域：Git软件对外提供资源得区域，此区域可人工对资源进行处理。</li><li>暂存区：Git用于比对存储区域和工作区域得区域。Git根据对比得结果，可以对不同状态得文件执行操作。</li></ul></li></ul></li></ul><h2 id="git基础命令" tabindex="-1"><a class="header-anchor" href="#git基础命令" aria-hidden="true">#</a> Git基础命令</h2><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment">#获取软件的配置信息</span>
git config -l

<span class="token comment">#名称和邮箱</span>
git config --global user.name 
git config --global user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完成之后，系统的用户目录就会出现.gitconfig文件，里面有配置的信息</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># create版本库,会生成.git文件，管理当前版本</span>
git init 
<span class="token comment"># 查看库的状态,添加一个文件，执行此命令会是红色，表示未追踪文件，表示没有被版本库管理</span>
git status
<span class="token comment"># 添加到版本库中,此时观看就会变成绿色，为cached file,暂存状态，此状态可以随时修改和删除，并不是以及被版本库管理了</span>
git add xxx.txt
<span class="token comment"># 成功纳入版本库</span>
git commit -m <span class="token string">&quot;提交信息&quot;</span>
<span class="token comment"># 简化</span>
git commit -a -m <span class="token string">&quot;提交信息&quot;</span>
<span class="token comment"># 文件历史变化(参数可选，界面友好作用)</span>
git log --pretty-oneline
<span class="token comment"># 删了文件如果需要恢复</span>
git restore xxx.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-branch" tabindex="-1"><a class="header-anchor" href="#git-branch" aria-hidden="true">#</a> git branch</h2><p>主干分支默认为(master)，文件的版本管理操作都是在master这一个分支路线上进行完成。</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 创建分支</span>
git branch 分支名称
<span class="token comment"># 查看分支</span>
git branch -v
<span class="token comment"># 分支的切换</span>
git checkout 分支名称
<span class="token comment"># 删除分支</span>
git branch -d 分支名称
<span class="token comment"># 合并分支，合并到那个分支就要切换再哪个分支</span>
git checkout master
git merge pg-pages
<span class="token comment"># 查看文件内容差异</span>
git diff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-rebase" tabindex="-1"><a class="header-anchor" href="#git-rebase" aria-hidden="true">#</a> Git Rebase</h3><p>第二种合并分支的方法是 git rebase。Rebase 实际上就是取出一系列的提交记录，“复制”它们，然后在另外一个地方逐个的放下去。 Rebase 的优势就是可以创造更线性的提交历史，这听上去有些难以理解。如果只允许使用 Rebase 的话，代码库的提交历史将会变得异常清晰。</p><h2 id="分离head" tabindex="-1"><a class="header-anchor" href="#分离head" aria-hidden="true">#</a> 分离Head</h2><p>head默认指向当前分支，当前分支指向最后一次的提交记录，分离head，则是将head指向提交记录</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git checkout 提交记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想看 HEAD 指向，可以通过 cat .git/HEAD 查看， 如果 HEAD 指向的是一个引用，还可以用 git symbolic-ref HEAD 查看它的指向。</p><h2 id="相对引用" tabindex="-1"><a class="header-anchor" href="#相对引用" aria-hidden="true">#</a> 相对引用</h2><ul><li>使用 ^ 向上移动 1 个提交记录</li></ul><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment">#切换master父节点</span>
git checkout master^ 
git checkout HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 ~ 向上移动多个提交记录，如 ~3</li></ul><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment">#一次后退四步</span>
git checkout HEAD~4 

<span class="token comment">#直接使用 -f 选项让分支指向另一个提交</span>
git branch -f master HEAD~3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤销变更" tabindex="-1"><a class="header-anchor" href="#撤销变更" aria-hidden="true">#</a> 撤销变更</h2><p>Git 里撤销变更的方法很多。和提交一样，撤销变更由底层部分（暂存区的独立文件或者片段）和上层部分（变更到底是通过哪种方式被撤销的）组成。我们这个应用主要关注的是后者。</p><p>主要有两种方法用来撤销变更</p><ul><li>git reset 通过把分支记录回退几个提交记录来实现撤销改动。你可以将这想象成“改写历史”。git reset 向上移动分支，原来指向的提交记录就跟从来没有提交过一样。</li></ul><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git reset HEAD~1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>虽然在你的本地分支中使用 git reset 很方便，但是这种“改写历史”的方法对大家一起使用的远程分支是无效的哦！为了撤销更改并分享给别人，我们需要使用</li></ul><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git revert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="整理提交记录" tabindex="-1"><a class="header-anchor" href="#整理提交记录" aria-hidden="true">#</a> 整理提交记录</h2><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git cherry-pick &lt;提交号&gt;...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你想将一些提交复制到当前所在的位置（HEAD）下面的话， Cherry-pick 是最直接的方式了</p><p>当你知道你所需要的提交记录（并且还知道这些提交记录的哈希值）时, 用 cherry-pick 再好不过了 —— 没有比这更简单的方式了。</p><p>但是如果你不清楚你想要的提交记录的哈希值呢? 我们可以利用交互式的 rebase —— 如果你想从一系列的提交记录中找到想要的记录, 这就是最好的方法了 交互式 rebase 指的是使用带参数 --interactive 的 rebase 命令, 简写为 -i</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git rebase -i HEAD~num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你在命令后增加了这个选项, Git 会打开一个 UI 界面并列出将要被复制到目标分支的备选提交记录，它还会显示每个提交记录的哈希值和提交说明，提交说明有助于你理解这个提交进行了哪些更改。 当 rebase UI界面打开时, 你能做3件事:</p><ul><li>调整提交记录的顺序（通过鼠标拖放来完成）</li><li>删除你不想要的提交（通过切换 pick 的状态来完成，关闭就意味着你不想要这个提交记录）</li><li>合并提交。它允许你把多个提交记录合并成一个。</li></ul><h2 id="git-tag" tabindex="-1"><a class="header-anchor" href="#git-tag" aria-hidden="true">#</a> git tag</h2><p>永远指向某个提交记录的标识,标签在代码库中起着“锚点”的作用</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git tag v1 c1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git-describe" tabindex="-1"><a class="header-anchor" href="#git-describe" aria-hidden="true">#</a> git describe</h2><p>Git 还为此专门设计了一个命令用来描述离你最近的锚点（也就是标签）,能帮你在提交历史中移动了多次以后找到方向</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git describe 的​​语法是：

git describe &lt;ref&gt;

&lt;ref&gt; 可以是任何能被 Git 识别成提交记录的引用，如果你没有指定的话，Git 会以你目前所检出的位置（HEAD）。

它输出的结果是这样的：

&lt;tag&gt;_&lt;numCommits&gt;_g&lt;hash&gt;

tag 表示的是离 ref 最近的标签， numCommits 是表示这个 ref 与 tag 相差有多少个提交记录， hash 表示的是你所给定的 ref 所表示的提交记录哈希值的前几位。

当 ref 提交记录上有某个标签时，则只输出标签名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone" aria-hidden="true">#</a> git clone</h2><h2 id="git-fetch" tabindex="-1"><a class="header-anchor" href="#git-fetch" aria-hidden="true">#</a> git fetch</h2><p>实际上将本地仓库中的远程分支更新成了远程仓库相应分支最新的状态。</p><ul><li>从远程仓库下载本地仓库中缺失的提交记录</li><li>更新远程分支指针(如 o/master)</li></ul><h2 id="git-push" tabindex="-1"><a class="header-anchor" href="#git-push" aria-hidden="true">#</a> git push</h2><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git push &lt;remote&gt; &lt;place&gt;
<span class="token comment">#切到本地仓库中的“master”分支，获取所有的提交，再到远程仓库“origin”中找到“master”分支，将远程仓库中没有的提交记录都添加上去，搞定之后告诉我。</span>
git push origin master

git push origin source:destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47);function A(D,y){const n=l("ExternalLinkIcon");return d(),r("div",null,[m,e("p",null,[e("a",v,[i("Git官网地址为"),a(n)]),i(" 安装完成之后，有两个菜单")]),h,e("ul",null,[e("li",null,[e("a",b,[i("Git - 简明指南"),a(n)])]),e("li",null,[e("a",p,[i("图解Git"),a(n)])]),e("li",null,[e("a",f,[i("廖雪峰 : Git 教程"),a(n)])]),e("li",null,[e("a",_,[i("Git官方教程中文版2"),a(n)])]),e("li",null,[e("a",x,[i("Git大全"),a(n)])]),e("li",null,[e("a",k,[i("Learn Git Branching"),a(n)])]),G,E]),H])}const I=t(u,[["render",A],["__file","git.html.vue"]]);export{I as default};
