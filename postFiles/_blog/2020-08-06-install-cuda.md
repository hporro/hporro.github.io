---
layout: post
title: "Installing Cuda in (and) ubuntu, in my old Lenovo-Z40"
date: 2019-07-06
---

This post is a remainder to myself on how to reinstall ubuntu and Cuda in my quite old notebook. The reason behind that is that my programming environment always gets broken because of ubuntu's automatic updates (which I'm trying to turn off now).

### First step: Get 2 Usb drives, one with ubuntu, and one with Cuda

As you read it, is super important to download those things before the installation itself. My computer, an old Lenovo-Z40 with a Nvidia Geforce 820M GPU, supports up to Cuda 6.5, and up to Nvidia driver 340. I've installed Nvidia driver 430, but it crashes, so it's better to stick with 340, which is also recommended for legacy devices (I think I readed that somewhere).

I've tried Ubuntu 16.04 and 14.04, and both work fine, but we will use 16.04 because is a newer release. I also tried ubuntu 18, but it didn't worked (maybe it works, but I don't have the time to check it). You can download ubuntu 16.04 from the ubuntu site:

[https://releases.ubuntu.com/16.04/](https://releases.ubuntu.com/16.04/)


To make a bootable usb, you can use [rufus](https://rufus.ie/) if you have windows installed. It works like a charm! (I haven't been able to make a bootable usb drive in linux lol).

To install Cuda, the way that has worked best for me has been the run installation. The one that works in this computer and ubuntu version is the ubuntu 14.04 x86 64-bit one, so make sure to download that version. It can be downloaded from the official Nvidia webpage:

[https://developer.nvidia.com/cuda-toolkit-65](https://developer.nvidia.com/cuda-toolkit-65)

### Second step: Install Ubuntu in a dual boot

I play videogames a lot, and that's the reason why I like to keep a Windows OS partition in my computer. I won't go in details about how to make a dual boot in a computer, there are tons of tutorials on how to make that in the internet.

There is a comment about this I want to make, that saved me a lot of headaques and time. If you already have a ubuntu partition that you want to override with a new one, the installation wizard will give you the option to rewritte the old one, and it works without breaking anything else!

### Third step: Update Linux headers and Ubuntu packages

This step is super important! You have to update Linux headers and ubuntu packages in order to be able to install the libraries recommended for Cuda development (mainly for graphics programming, which I'm planning to do).

To update packages, you only have to boot ubuntu and wait a pop-up to appear, which says that there are some updates pending, and gives you the option to update them.

### Fourth step: Install Nvidia driver

To install the nvidia driver, you can use the graphical method. Just look for the "Additional Drivers" application in the menu, and then install the Nvidia 340 driver. After it gets installed, a restart button will appear -then you have to restart your computer-.

To make sure the driver installation was successfull, you can boot again ubuntu and look for the "NVIDIA X Server Settings" application. Open it, and if it shows some information about your GPU, the installation was a success! It should look like this:

<figure class="centered-jpg">
<img src="../../images/nvidiaDriver.jpg"> 
</figure>

### Fifth step: Install Cuda

Run the following command in the shell:

```bash
$ sudo sh cuda_6.5.14_linux_64.run --override
```

Then a install wizard will appear. You have to make sure to DON'T INSTALL DRIVERS AGAIN, thats very important. Also, is super usefull to get installed the Cuda samples too, so make sure you install those.

Then, to check that the installation went fine, open a terminal in the "whatever_folder/NVIDIA_CUDA-6.5_Samples" folder. Then build the "1_Utilities/deviceQuery" example. It checks that Cuda is able to recognize the GPU. If it runs successfully, it will output something like the following:

<figure class="centered-jpg">
<img src="../../images/deviceQuery.jpg"> 
</figure>

If you have issues building deviceQuery, it might be the g++ version. CUDA-6.5 Only works with gcc-4.8 and older versions. I usually have installed a lot of g++ versions, and override /usr/bin/g++ to whatever version I need in that specific moment. I think (and hope) that there are better ways to manage g++ versions, but this has worked fine for me.

If you want, you also can install cuda recommended dependencies for graphics programming:

```bash
$ sudo apt-get install g++ freeglut3-dev build-essential libx11-dev libxmu-dev libxi-dev libglu1-mesa libglu1-mesa-dev
```

You can check if it worked running one of the examples in the "NVIDIA_CUDA-6.5_Samples/5_Simulations/" folder. I really like the particles one :0

### Optional step: Freeze your ubuntu updates

Ubuntu at every single update breaks drivers. To make sure your setup will keep working for ever, you can freeze ubuntu updates unchecking all checkboxes in the "Updates" tab, in the "Software & Updates" application.