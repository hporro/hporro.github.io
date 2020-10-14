---
layout: post
title: "Rigid body simulation"
date: 2019-07-07
---
<h2>[In Construction]</h2>

Hi! For my directed work this semester (in my University we call directed work a 1 semester course where students research about a topic they like guided by a department prof) I explored some ways to simulate sand (maybe i'll show some in following posts), and in one of them I had to implement a physics engine capable to simulate the motion of a specific rigid body, made by three spheres stuck togheter wich convex hull is a tetrahedron. In this post I'll try my best to show how it was done. Is also important to mention that in this particular case it was important to simulate a lot of equal rigid bodies, so I used the nvidia cuda toolkit to use the GPU to simulate their motion, and it's particles example as a base to improve it adding angular motion, so the rendering of the particles and the collision detection were way easier.

I'll assume for this post that the reader has some familiarity with differential equations and basic classical mechanics (anyone with two or three courses on math should be ok with that), because i'll use derivations of second newton's law for linear and angular momentum.

The first thing I want to explain is the way sand is modeled: [BLAH here]

<figure class="centered-svg">
<img src="../../images/4spheres.svg"> 
<figcaption>Figure 1: Sand particle's sphere placement.</figcaption>
</figure>

Formulas: 

$$ 
\tag{1} p(t) = R(t)p_0 + x(t) 
$$

$$ 
\tag{2} v(t) = \dot{x} 
$$

$$ 
\tag{3} \dot{R}(t) = w(t)*R(t) 
$$

$$ 
\tag{4} \dot{r}_i(t) = w(t)\times (r_i(t)-x(t))+v(t) 
$$

$$ 
\tag{5} \tau_i(t) = (r_i(t)-x(t))\times F_i(t) 
$$

$$ 
\tag{6} L(t) = I(t)w(t), P(t) = Mv(t) 
$$

$$ 
\tag{7} \dot{L}(t) = \tau(t), \dot{P}(t) = F(t) 
$$

$$ 
\tag{5} I(t) = R(t)I_{\text{body}}R(t)^T, I(t)^{-1} = R(t)I_{\text{body}}^{-1}R(t)^T
$$

## References

1. Bell, N., Yu, Y., & Mucha, P. J. (2005, July). Particle-based simulation of granular materials. In Proceedings of the 2005 ACM SIGGRAPH/Eurographics symposium on Computer animation (pp. 77-86). ACM.
2. David, B. (2001). Physically Based Modeling ONLINE SIGGRAPH 2001 COURSE NOTES,  Rigid Body Dynamics (lecture notes). Retrieved from [http://graphics.pixar.com/pbm2001/pdf/notesg.pdf].
3. Harada Takahiro, (2007). Book Chapter 29. Real-Time Rigid Body Simulation on GPUs. In GPU Gems 3. Retrieved from [https://developer.nvidia.com/gpugems/GPUGems3/gpugems3_ch29.html].

## Tech stack

1. For programming I used:
- C++ as main programming language.
- Cuda C for GPU programming.
- OpenGL/Cuda C interoperability for rendering.
2. For blog writting I used:
- Jekyll for static site generation.
- Inkscape for drawing SVG figures.
- $$\href{https://katex.org/}{\KaTeX}$$ for math equations.
- Also some html/css formatting by hand (fells like handcrafting).
