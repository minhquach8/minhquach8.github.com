---
layout: post
title: Git and Github Guide
background: 'https://cafedev.vn/wp-content/uploads/2021/01/cafedev-git-vs-github.png'
---

# Basic Git and Github Guide

---

#### Table of Contents

1. [Create a local git repository](#step1)
2. [Add a new file to the repo](#step2)
3. [Add a file to the staging environment](#step3)
4. [Create a commit](#step4)
5. [Create a new branch](#step5)
6. [Create a new repository on GitHub](#step6)
7. [Push a branch Github](#step7)
8. [Create a pull request](#step8)
9. [Merge a PR](#step9)
10. [Get changes on GitHub back to your computer](#step10)
11. [Bask in your git glory](#step11)

---

![GitandGithub](http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/12/git-vs-github4.png)

> **📘** Git and Github
> A quick aside: _git_ and _Github_ are **not** the same things. Git is an open-source, version control tool created in 2005 by developers working on the Linux OS; Github is a company founded in 2008 that makes tools which integrate with git. You do not need Github to use git, but you cannot use Github without using git. There are many other alternatives to Github, such as GitLab, BitBucket,... You do not need to use a remote to use git, but it will make sharing your code with others easier.

## Step 1: Create a local git repository <a name="step1"></a>

When creating new project on your local machine using git, you'll first create a new repositori (repo). To begin, open up a terminal and move to where you want to place the project on you local machine. Then, run init command:

{% include code-header.html %}

```console
name@ubuntu:~$ cd myproject/
name@ubuntu:~$ git init
```

## Step 2: Add a new file to the repository <a name="step2"></a>

Go ahead and add some files in the folder. Once you have added or modified files in a folder containing a git repoo, git will notice that the file exists inside the repo. But, git won't track the file unless you explicitly tell it to. Git only saves/manages changes to files that it tracks, so we will need to send a command to confirm that yes, want git to track our new file.

{% include code-header.html %}

```console
name@ubuntu:~$ touch file01.txt
```

You can git status command to see which files git knows exist

{% include code-header.html %}

```console
name@ubuntu:~$ git status
```

> ##### An interlude: the staging environment, the commit, and you
>
> One of the most confusing parts when you're first learning git is the concept of the stagin environment and how it relates to a commit.<br>
> A _**commit**_ is a record of what changes you have made since the last time you made a commit. Commits make up the essence of your project and allow you to jump to the state of a project at any other commit. So, how do you tell git which files to put into a commit? This is where the staging environment or index come in. In Step 2, when you make changes to your repo, git notices that a file has changed but won't do anything with it.<br>
> To add a file to a commit, you first need to add it to the staging environment. To do this, you can use the _git add < filename >_ command. One you've used git add command to add all the files you want to the staging environment, you can then tell git to package them into a commit using the _git commit_ command.
