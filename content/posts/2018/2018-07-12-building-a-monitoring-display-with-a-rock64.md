---
title: "Building a Monitoring Display with a Rock64"
cover: "../custom/rock64-cover.jpg"
blur:  "../custom/rock64-cover-blur.jpg"
custom: Image from https://rock64iota.com
date:   2018-07-12 22:12:00 +0200
tags:
    - Technical
    - Hardware
---

There is a page that we want to monitor. It has a lot of valuable information on it and fits nicely onto a 4K screen display. We have a ROCK64 device which will power this display.

The use case is simple: when the device turns on, the user must log in automatically. A browser must open in full screen mode displaying the monitoring page. The screen and device should stay on until manually turned off. Simple right?

Not quite. My techie luck brings about numerous adventitious complexities that bounce obtrusively into existence at undesirable times: things don't go right. I've come to terms with it. Obstacles will be obstacles and they will be overcome.

These obstacles were awesome little challenges. I got to hack and ticker away at a little device to achieve something useful and meaningful. I got exposure to the ROCK64, Linux and searching for support.

Here's what I learned:

## What is the ROCK64?
The ROCK64 is a small computer [like](https://www.board-db.org/compare/192,4,58/) a Raspberry Pi, Arduino and a gazillion others. It is manufactured to be affordable and extendable.

It started in December 2015 as a [Kickstarter project](https://www.mickmake.com/post/rock64-cheap-rock-solid-review). These guys wanted to bring the first 64-bit expandable Quad Core 1.2Ghz board to the market. It sounds like they didn't do so well in the beginning but they've recovered nicely if that's really the case.

## Specifications
<div style="text-align: center; margin-top: 2em;">
    <img src="https://www.pine64.org/wp-content/uploads/2017/06/ROCK64_sideimg.jpg" alt="ROCK64 4K60P HDR Media Board Computer" title="ROCK64 4K60P HDR Media Board Computer" style="border: solid 1px #30303040; margin-bottom: 1em; width: 100%;">
    <br/>
    <span>Image from <a href="https://pine64.org/?page_id=7147" target="_blank" nofollow>Ping64.org</a></span>
</div>

It has a 4K60P HDR Media Board Computer powered by Rockchip RK3328 Quad-Core ARM Cortex A53 64-Bit Processor and support up to 4GB 1600MHz LPDDR3 memory.

It provides eMMC module socket, MicroSD Card slot, Pi-2 Bus, Pi-P5+ Bus, USB 3.0 and many others peripheral devices interface for makers to integrate with sensors and devices.

Various Operating System (OS) are made available by open source community such Android 7.1, Debian, Yocto and many more to come.

## Our ROCK64 Device
While trying to get support and not knowing what the hell I was doing, I needed to learn more about the device, it's kernel, OS and how to use Linux.

### Kernel
```bash
$ uname -a # print all system information
> Linux rock64 4.4.77-rockchip-ayufan-136 #1 SMP Thu Oct 12 09:14:48 UTC 2017 aarch64 GNU/Linux
```

* **Kernel name**: Linux
* **Network node hostname**: rock64
* **Kernel release**: 4.4.77-rockchip-ayufan-136
* **Kernel version**: #1 SMP Thu Oct 12 09:14:48 UTC 2017
* **Hardware platform**: aarch64
* **Operating system**: GNU/Linux

### Operating System Distribution
[LSB](https://systutorials.com/docs/linux/man/1-lsb_release/) (Linux Standard Base and returns the distribution information):

```bash
$ lsb-release -a # print distribution specific information
> Debian GNU/Linux 9.4 (stretch)
```

* **Distributor ID**: Debian
* **Description**:  GNU/Linux
* **Release**:  9.4
* **Codename**:  (stretch)

### Graphical User Interface
[MATE](https://mate-desktop.org) Desktop Environment 1.16.2 - It is a  continuation of GNOME 2 providing an cool desktop environment using traditional metaphors for Linux and other Unix-like operating systems.

## Boot up the device
I gave the device power and plugged in the HDMI. No signal. I checked the source. No signal. I tried other ports, changing the source. No signal. I tried a different HDMI cable. No signal.

This was the first part of my task and it wasn't going well. I was about to try it using my monitor when someone else came along, plugged in the HDMI cable and it just worked. Obviously. Well, at least I knew it was working. Damn gremlins in my techie pocket.

## Login to the ROCK64
### The first time
It all starts with a login - and I didn't have one. I asked around. I Googled. I tried the obvious ones I could think of: **root**, **debian**, **user** and **admin**.

I was staring blankly at a very demanding and restricting screen when I saw the word **rock64** on the top left. That was my next attempt. So obvious. So simple. So authorized. So admin.

```bash
$ cat /etc/passwd | grep rock64:x:1 # check if the user is an admin account
> rock64:x:1...
```

### Automatically
I found a [script](https://askubuntu.com/questions/51086/how-do-i-enable-auto-login-in-lightdm/51087#51087) that configures the [LightDM](https://wiki.archlinux.org/index.php/LightDM) (display manager) to log the user in automatically.

```bash
$ sudo vi /etc/lightdm/lightdm.conf # edit this file

[SeatDefaults]
autologin-user=rock64
autologin-user-timeout=0
```

### Who is root?
I wanted to reset the **root** password. I pressed all the keys I knew I should during boot up to get into GRUB. I guess there is [no GRUB](https://forum.pine64.org/showthread.php?tid=6246). I learned how to reset the account as an admin user:

```bash
$ sudo /etc/passwd root # reset root password
$ cat /etc/passwd | grep root:x:0 # check if the user is a root account
> root:x:0...
```

## Show the web page

### Open the browser in full screen
I needed to manipulate a window and in order to do that I had to install a library that could do that for me.

[xdotool](https://github.com/jordansissel/xdotool) will will fake keyboard, mouse input, window management and such. It activates the browser and fakes a keyboard press for full screen mode.

```bash
$ sudo apt-get install xdotool
```

### Open the browser automatically
After that I could create a [script](https://askubuntu.com/questions/36287/how-to-start-firefox-in-fullscreen-mode) that would open my webpage in Firefox ESR and force the window to full screen mode. I added this script to my **startup applications**.

```bash
$ sudo vi /etc/init.d/open_firefox

#!/bin/bash
firefox -url "http://curiousprogrammer.io" &
xdotool search --sync --onlyvisible --class "Firefox" windowactivate F11

$ sudo chmod +x /etc/init.d/open_firefox
```

### Hide the cursor
The cursor bothered me. It just sat waiting to be moved. No one was going to move it. Why would we? It should move away or hide or something.

I found a library that hides cursors after a specified amount of time. This is especially useful for POS systems on touch screens.

```bash
$ sudo apt-get update
$ sudo apt-get install clutter
$ unclutter -idle 0.1 -root
```

I added the `unclutter` script to the **startup applications**. The cursor will disappear every 1/100 second. This can be annoying while working on the device. Just run the script again with the value of **1** to get your cursor back.

### Do not restore browser tabs on login
I was doing a lot of research on the device. It kept all the tabs when I restarted it. I didn't want that. I stopped this by changing a flag in Area51 of Firefox.

Type **config:about** as the URL, accept the warning if you so dare, type **browser.sessionstore.resume\_from\_crash**. Click on it. It should go bold because it is a custom setting and should now be disabled.

## Keep the display on
I searched the GUI for an interface where I could change the screen saver and power saver settings. Someone forgot to add it because it was nowhere to be found using **rock64** and **root**.

I tried a number of suggestions from the web [here](https://askubuntu.com/questions/47311/how-do-i-disable-my-system-from-going-to-sleep), [here](https://askubuntu.com/questions/177348/how-do-i-disable-the-screensaver-lock)
and many elsewhere.
Some were to set `systemctl` and `gsettings`.

```bash
sudo systemctl unmask sleep.target suspend.target hibernate.target hybrid-sleep.target

gsettings set org.gnome.desktop.session idle-delay 0
gsettings set org.gnome.desktop.screensaver lock-enabled false
```

As promising as these settings looked, they didn't work on the ROCK64. Later I came across the `xset` command which - EUREKA! - it worked!

```bash
$ sudo vi /etc/init.d/prevent_blank

#!/bin/bash
xset s off
xset s noblank
xset -dpms

$ sudo chmod +x /etc/init.d/prevent_blank
```

With `xset` above we are changing the user preferences. According to the manual the **s** option lets you set the screen saver parameters. **off** turns the screen saver off. **noblank** sets the preference to display a pattern rather than blank the video. The **-dpms** disables the DPMS (Energy Star) features. Magic!

I added the script to the **startup applications**.

## What's next?
More screens I suppose.

There are extensions like [Tab Rotator](https://addons.mozilla.org/en-US/firefox/addon/tab-rotator/?src=recommended) which automatically switches between open tabs. Just configure the extension and amend the `firefox` script to take in multiple URLs and you should have a rotating display.

Sounds simple right?