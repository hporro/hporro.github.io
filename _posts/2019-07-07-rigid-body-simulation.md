---
layout: post
title: "Rigid body simulation"
date: 2019-07-07
---
Hi! For my directed work this semester I explored some ways to simulate sand (maybe i'll show some in following posts), and in one of them I had to implement a physics engine capable to simulate the motion of a specific rigid body, made by three spheres stuck togheter wich convex hull is a tetrahedron. In this post I'll try my best to show how it was done. Is also important to mention that in this particular case it was important to simulate a lot of equal rigid bodies, so I used the nvidia cuda toolkit to use the GPU to simulate their motion, and it's particles example as a base to improve it adding angular motion, so the rendering of the particles and the collision detection were way easier.

I'll assume for this post that the reader has some familiarity with differential equations and basic classical mechanics (anyone with two or three courses on math should be ok with that), because i'll use derivations of second newton's law for linear and angular momentum.

The first thing I want to explain is the way sand is modeled: [BLAH here]

<figure class="centered-svg">
<img src="./images/4spheres.svg"> 
<figcaption>Figure 1: Sand particle's sphere placement.</figcaption>
</figure>

So, 

## References
1. Bell, N., Yu, Y., & Mucha, P. J. (2005, July). Particle-based simulation of granular materials. In Proceedings of the 2005 ACM SIGGRAPH/Eurographics symposium on Computer animation (pp. 77-86). ACM.
2. David, B. (2001). Physically Based Modeling ONLINE SIGGRAPH 2001 COURSE NOTES,  Rigid Body Dynamics [lecture notes]. Retrieved from [http://graphics.pixar.com/pbm2001/](http://graphics.pixar.com/pbm2001/)

