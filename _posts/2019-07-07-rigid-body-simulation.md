---
layout: post
title: "Rigid body simulation"
date: 2019-07-07
---
Hi! For my directed work this semester I explored some ways to simulate sand (maybe i'll show some in following posts), and in one of them I had to implement a physics engine capable to simulate te motion of a specific rigid body. In this post I'll try my best to show how it was done. Is important to mention that in this particular case it was important to simulate a lot of equal rigid bodies, so I used the nvidia cuda toolkit, and it's particles example as a base to improve it adding angular motion. 

The first thing I want to explain is the way sand is modeled here, 

{::nomarkdown}
<svg width="400" height=300>
    <circle cx="150" cy="100" r="10" fill="blue"/>
</svg>
{:/}
