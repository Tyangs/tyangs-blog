---
title: About Git
date: '2022-05-22'
menu_active: false
---

# About Git

## Git 工作流

先简单介绍一下几个 Git 名词的概念：

- **Workspace**: 工作区，是当前持有的文件目录，平时的开发的过程即是对工作区的操作；
- **Index**: 暂存区，像一个缓存区域，临时保存你的改动。当执行 `git add` 命令后，工作区的代码就会被移入暂存区；
- **HEAD**: 它指向最后一次提交（`commit`）的结果；
- **Repository**: 本地仓库，位于自己的电脑上，通过 `git commit` 提交了暂存区的内容后，会进入到本地仓库；
- **Remote**：远程仓库，处于用于托管代码的服务器上（如 GitHub），远程仓库上的内容可以被分布在多个地点的处于协同关系的本地仓库修改，并通过 `git push` 同步代码到远程仓库。

所以，一个简单的 Git 工作流程有如下四步： 

1. 在工作区（Workspace）中进行开发，通过增、删、改对文件内容进行编辑； 
2. 将编辑后的文件通过 `git add` 放入暂存区（Index）； 
3. 将暂存区（Index）中的文件通过 `git commit` 提交到本地仓库（Repository）； 
4. 将本地仓库（Repository）中的修改通过 `git push` 推送到远程仓库（Remote）。

![git_flow.png](/about-git/git_flow.png)

## 常用 Git 指令

> 参考：  
> - [Git-docs Reference](http://book.git-scm.com/docs)  
> - [training.github.com](https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/)

### Git 配置（Setup and Config）

#### git config

获取和设置仓库或者全局的 Git 配置，[见此](http://book.git-scm.com/docs/git-config)。

```ts
// 当前仓库
git config user.name <name>
git config user.email <email>

// 全局配置
git config --global user.name <name>
git config --global user.email <email>

```

### 创建或获取项目（Getting and Creating Projects）

#### git init

创建一个空的 Git 仓库，或者重新初始化已有仓库，[见此](http://book.git-scm.com/docs/git-init)。

```ts
git init
```

#### git clone

克隆一个 Git 仓库到新目录，[见此](http://book.git-scm.com/docs/git-clone)。

```ts
git clone <git source url>

// e.g.
git clone https://github.com/Tyangs/tyangs.github.io.git
```

### 基本快照（Basic Snapshotting）

#### git add

添加文件更改内容到暂存区（Index），[见此](http://book.git-scm.com/docs/git-add)。

```ts
// 添加指定文件到暂存区，以空格区分多个文件
git add <filename>
git add <filename1> <filename2>

// 添加当前所有更改内容到暂存区
git add .
```

#### git status

展示当前工作树（工作区）的状态，[见此](http://book.git-scm.com/docs/git-status)。

```ts
git status
```

![Untitled](/about-git/git_status.png)

#### git commit

将暂存区（Index）中的更改提交到本地仓库（Repository），[见此](http://book.git-scm.com/docs/git-commit)。

```ts
git commit -m <message>

// e.g.
git commit -m "feat: init project"
```