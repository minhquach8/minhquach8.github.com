---
layout: post
title: Git and GitHub Guide
permalink: /git-github-guide
background: '/img/posts/gitgithub/git-vs-github.png'
date: 2021-12-25
---

# Basic Git and GitHub Guide

---

#### Table of Contents

1. [Create a local git repository](#step1)
2. [Add a new file to the repo](#step2)
3. [Add a file to the staging environment](#step3)
4. [Create a commit](#step4)
5. [Create a new branch](#step5)
6. [Create a new repository on GitHub](#step6)
7. [Push a branch GitHub](#step7)
8. [Create a pull request](#step8)
9. [Merge a PR](#step9)
10. [Get changes on GitHub back to your computer](#step10)
11. [Bask in your git glory](#step11)

---

![GitandGitHub](http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/12/git-vs-github4.png)

> **📘** Git and GitHub
> A quick aside: _git_ and _GitHub_ are **not** the same things. Git is an open-source, version control tool created in 2005 by developers working on the Linux OS; GitHub is a company founded in 2008 that makes tools which integrate with git. You do not need GitHub to use git, but you cannot use GitHub without using git. There are many other alternatives to GitHub, such as GitLab, BitBucket,... You do not need to use a remote to use git, but it will make sharing your code with others easier.

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

## Step 3: Add a file to the staging environment <a name="step3"></a>

Add a file to the staging environment using the git add command. if you rerun the git status command you will see that git has added the file to the staging environment.

Below is add a specific file.

{% include code-header.html %}

```console
name@ubuntu:~$ git add file01.txt
```

or _git add ._ to add all your files to the staging environment.

{% include code-header.html %}

```console
name@ubuntu:~$ git add .
```

## Step 4: Create a commit <a name="step4"></a>

Run the command _git commit -m "your message"_. The message at the end of the commit should be something related to what the commit contains - maybe it's a new feature, maybe it's a bug fix, maybe it's just fixing a typo. Commits live forever in a repository (technically you can delete them if you really, really need to but it’s messy), so if you leave a clear explanation of your changes it can be extremely helpful for future programmers (perhaps future you!) who are trying to figure out why some change was made years later.

{% include code-header.html %}

```console
name@ubuntu:~$ git commit -m "my first commit"
```

## Step 5: Create a new branch <a name="step5"></a>

Say you want to make a new feature but are worried about making changes to the main project while developing the feature. This is where _git branches_ come in.

Branches allow you to move back and forth between 'states' of a project. For instance, if you want to add a new page to your website you can create a new branch just for that page without affecting the main part of the project. Once you're done with the page, you can merge your changes from your branch into the primary branch. When you create a new branch, Git keeps track of which commit your branch 'branched' off of, so it knows the history behind all the files.

Let's say you are on the primary branch and want to create a new branch to develop your web page. Here's what you'll do: Run _git checkout -b < my branch name >_. This command will automatically create a new branch and then 'check you out' on it, meaning git will move you to that branch, off of the primary branch.

{% include code-header.html %}

```console
name@ubuntu:~$ git checkout -b testbranch
```

After running the above command, you can use the git branch command to confirm that your branch was created. The branch name with the _asterisk_ next to it indicates which branch you're on at that given time.

{% include code-header.html %}

```console
name@ubuntu:~$ git branch
```

> ##### A note on branch names
>
> By default, every git repository’s first branch is named **master** (and is typically used as the primary branch in the project). As part of the tech industry’s general anti-racism work, some groups have begun to use alternate names for the default branch (we are using “primary” in this tutorial, for example). In other documentation and discussions, you may see “master”, or other terms, used to refer to the primary branch. Regardless of the name, just keep in mind that nearly every repository has a primary branch that can be thought of as the official version of the repository. If it’s a website, then the primary branch is the version that users see. If it’s an application, then the primary branch is the version that users download. This isn’t technically necessary (git doesn’t treat any branches differently from other branches), but it’s how git is traditionally used in a project. <br>
> Now, if you switch back to the primary branch and make some more commits, your new branch won't see any of those changes until you _merge_ those changes onto your new branch.

## Step 6: Create a new repository on GitHub <a name="step6"></a>

If you only want to keep track of your code locally, you don't need to use GitHub. But if you want to work with a team, you can use GitHub to collaboratively modify the project's code.

To create a new repo on GitHub, log in and go to the GitHub home page. You can find the “New repository” option under the “+” sign next to your profile picture, in the top right corner of the navbar:
![create a new repo](/img/posts/gitgithub/github_step6_1.JPG)
After clicking the button, GitHub will ask you to name your repo and provide a brief description. When you're done filling out the information, press the 'Create repository' button to make your new repo.
![create a new repo](/img/posts/gitgithub/github_step6_2.JPG)

GitHub will ask if you want to create a new repo from scratch or if you want to add a repo you have created locally. In this case, since we've already created a new repo locally, we want to push that onto GitHub so follow the '....or push an existing repository from the command line' section:

{% include code-header.html %}

```console
name@ubuntu:~$ git remote add origin https://github.com/<username>/<yourreponame>.git
```

## Step 7: Push a branch to GitHub <a name="step7"></a>

Now we'll push the commit in your branch to your new GitHub repo. This allows other people to see the changes you've made. If they're approved by the repository's owner, the changes can then be merged into the primary branch.

To push changes onto a new branch on GitHub, you'll want to run _git push origin yourbranchname_. GitHub will automatically create the branch for you on the remote repository:

{% include code-header.html %}

```console
name@ubuntu:~$ git push origin <your-branch-name>
```

You might be wondering what that "origin" word means in the command above. What happens is that when you clone a remote repository to your local machine, git creates an alias for you. In nearly all cases this alias is called "origin." It's essentially shorthand for the remote repository's URL. So, to push your changes to the remote repository, you could've used either the command: git push git@github.com:git/git.git yourbranchname or git push origin yourbranchname

_(If this is your first time using GitHub locally, it might prompt you to log in with your GitHub username and password.)_

## Step 8: Create a pull request <a name="step8"></a>

A pull request (or PR) is a way to alert a repo's owners that you want to make some changes to their code. It allows them to review the code and make sure it looks good before putting your changes on the primary branch.

This is what the PR page looks like before you've submitted it:
![pull request](https://product.hubspot.com/hs-fs/hubfs/Git_4.png?width=600&name=Git_4.png)

And this is what it looks like once you've submitted the PR request:
![pull request](https://product.hubspot.com/hs-fs/hubfs/Git_5.png?width=600&name=Git_5.png)

You might see a big green button at the bottom that says 'Merge pull request'. Clicking this means you'll merge your changes into the primary branch..

Sometimes you'll be a co-owner or the sole owner of a repo, in which case you may not need to create a PR to merge your changes. However, it's still a good idea to make one so you can keep a more complete history of your updates and to make sure you always create a new branch when making changes.

## Step 9: Merge a PR

Go ahead and click the green 'Merge pull request' button. This will merge your changes into the primary branch.
![](https://product.hubspot.com/hs-fs/hubfs/Git_6.png?width=600&name=Git_6.png)

When you're done, I recommend deleting your branch (too many branches can become messy), so hit that grey 'Delete branch' button as well.

You can double check that your commits were merged by clicking on the 'Commits' link on the first page of your new repo.
![](https://product.hubspot.com/hs-fs/hubfs/Git_7.png?width=600&name=Git_7.png)

This will show you a list of all the commits in that branch. You can see the one I just merged right up top (Merge pull request #1).
![](https://product.hubspot.com/hs-fs/hubfs/Git_8.png?width=600&name=Git_8.png)

You can also see the hash code of the commit on the right hand side. A hash code is a unique identifier for that specific commit. It is useful for referring to specific commits and when undoing changes (use the _git revert <br>< hash code number >_ command to backtrack).

## Step 10: Get changes on GitHub back to your computer <a name="step10"></a>

Right now, the repo on GitHub looks a little different than what you have on your local machine. For example, the commit you made in your branch and merged into the primary branch doesn't exist in the primary branch on your local machine.

In order to get the most recent changes that you or others have merged on GitHub, use the _git pull origin master_ command (when working on the primary branch). In most cases, this can be shortened to “git pull”.

{% include code-header.html %}

```console
name@ubuntu:~$ git pull origin master
```

This shows you all the files that have changed and how they've changed.

Now we can use the _git log_ command again to see all new commits.

(You may need to switch branches back to the primary branch. You can do that using the git checkout master command.)

## Step 11: Bask in your git glory <a name="step11"></a>

You've successfully made a PR and merged your code to the primary branch. Congratulations! If you'd like to dive deeper, check out these more advanced tutorials and resources:

<a href="/resources" target="_blank">Resources</a>

**Reference**: <a href="https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners" target="_blank">An Intro to Git and GitHub for Beginners (Tutorial)</a> by HubSpot Product Team on DEC 3, 2020

**_Disclaimer_**: This content is for educational intention only.
