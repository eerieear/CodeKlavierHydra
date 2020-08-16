

// 200816 b
// PART 4  TRIANGLE
// size=()=> [0.1,0.4,0.6].smooth(0.9).fast(0.02)
tri=()=>
shape(3)
.scale([0.1,0.4,0.6,1,1.2,2,2.5,3,4,5,6,6,6].smooth(0.9).fast(0.5))
// .scale((()=>time/1-0.1))
// .mult(shape(2).repeat(4,16),[0, 1].smooth(0.9).fast(0.3),0.3)
// .mult(shape(2).scrollY(0.02).repeat(4,16),[0, 1].smooth(0.9).fast(0.3),0.6)
.color(1,0.5,0.2)
.blend(src(o0).scale(1.02,1.05),0.5)
//
triMask=()=> shape(3,0.7).invert()
bg=()=> solid().add(noise(1).color(1,0.6,0.2))
//
solid()
.add(bg().mult(triMask()),[0,0,1,1].smooth(0.9).fast(0.9))
.add(tri(),[0,0,1,1,1,1].smooth(0.9).fast(0.2))
.out(o2)
//
//
speed = 0.75
//
// PART 3 FOKKER PALETTE
size=()=> 0.8
posA=()=> 0.02
posB=()=> 0.01
pos=()=> (posX(),posY())
//COLORS
w=()=>solid(1,1,1,1)
b=()=>solid()
bl=()=>solid(0,0,1)
//
seq=()=> w().mult(b(),[0,0,0,0,0,0,0])// ITERATES A BLACK INTERVAL
gh=()=> //GRID X
shape(2).repeat(1,1).scrollX(0.01,-0.02).repeat(1,1).scrollY(0.01,0.02)
.repeat(8,8)
gk=()=>
  gh().kaleid([0.02,0.03,0.02,2].smooth(0.99).fast(0.004))
  .repeat(4,4).scale(0.8)
gv=()=> //GRID Y
gh().rotate(1)
//
g=()=>
solid()
.add(gh())
.add(gv())
//
bw=()=>
g()
// .add(g().rotate(()=>time/32)) // ROTATE CREATES WEIRD FLICKR
//
bb=()=>
g().mult(solid(0,0,1))
//
solid()
//BLEND MATERIALS
.add(bw())
.blend(bb(),0.25)
// BASIC COLOR AND GEOMETRY UNTIL HERE
//BLEND FEEDBACK FROM HERE
.blend(src(o0).scale(1.01),[0.4,0.8].smooth(0.9).fast(0.03))
// .blend(bb().scale(1.05).rotate(1.07),[0.4,0.2].smooth(0.9).fast(0.04))
// .blend(src(o0).scrollY(0.15,-0.035).scale(4).mult(seq()),[0.4,0.2].smooth(0.9).fast(0.03))
.mult(bl(),[0.2,0].smooth(0.99).fast(0.02)) //MORE BLUE
// // ADD KALEID FUNCTION
.blend(gk(),0.25)
.mult(gk().luma(),0.25)
.kaleid(3)// ANNE LIKES` THIS ONE
// //MODULATE OUT
.modulate(gk().scale(2))
.modulate(noise(0.25,0.025),0.125)
// //GENERAL OUT FX
.scale(size())
//   .contrast(1.7)
//   .saturate(1.5)
.scrollX(posA(),-posB()).scrollY(posA(),posB())
.mult(solid(),[0,0,0,1,1,1].smooth(0.9).fast(0.3))
// .mult(solid())// FULL FADE OUT
.blend(src(o2),[0,0,0,1,1,1,1].smooth(0.9).fast(0.05))// PART 4 TRIANGLE
// .mult(solid(),[1,1,1,0,0,0,0])
// .mult(solid())// FULL FADE OUT
  .out()



//PART 2 // CIRCLE FADES ADD THESE TO PART 1
// solid()
.add(shape(300,0.15,0.5).mult(src(o2).rotate(()=>time/64),0.9).mult(fadeC()),0.3)
.add(src(o2),[0,0,0.5,1,0.5,0].smooth(0.9).fast(0.05))
.out(o0)


// PART 1 - fade in
fadeT= ()=> 0.16
fade= ()=> solid(1,1,1).mult(solid(),[0,0,0.5,1,0.5,0.25,0,0,0,0,0].smooth(0.99).fast(fadeT()))
fadeC= ()=> solid(1,1,1).mult(solid(),[0,0,0.25,0.5,1,0.75,1,1,1,1,1].smooth(0.99).fast(0.05))
a1=()=>noise(2,0.05).mult(fade())
a2=()=>gradient(1).shift(0,0,1).mult(solid(),0.7).mult(fade())
a2b=()=>gradient(1.5).shift(0,0,1).modulateScale(osc(8).modulateRotate(src(o0))).mult(solid(),0.2).mult(fade())
a3=()=>noise(1,0.2).luma(0.9).mult(solid(),0.25).mult(fade())
a4=()=>solid().mult(src(o0),0.5).mult(fade())
a4=()=>solid().blend(src(o0),0.9).mult(fade())
//
solid()
.add(a1(),0.9)
.add(a2(),0.7)
.add(a2b(),0.4)
.blend(a3().luma(0.8),0.4)
.blend(a4().scale(1.09),0.5)//feedback
.add(a4().scale(1.01),0.125)//feedback
.add(a4().luma(0.9).thresh().modulateScale(a1()),0.125)//feedback
.add(a4().posterize(1,16).mult(osc(2).rotate(1.57)).modulateScale(a2b()),0.8)//feedback
.mult(solid(0,0,1),0.55)
.add(solid(1,1,1).luma(),0.2)
.contrast(1.4)
.out(o1)
//
speed = 3
//
osc(80,0.025).modulate(noise(1))
.out(o2)
//
// mix
solid()
.add(src(o1))
.blend(src(o2),0.049)
.add(shape(300,0.15,0.5).mult(src(o2).rotate(()=>time/64),0.9).mult(fadeC()),0.3)
.add(src(o2),[0,0,0.5,1,0.5,0].smooth(0.9).fast(0.05))
// .out(o0)
.out()
//







// 200816
//
// // PART 4  TRIANGLE
// // size=()=> [0.1,0.4,0.6].smooth(0.9).fast(0.02)
// tri=()=>
// shape(3)
// .scale([0.1,0.4,0.6,1,1.2,2,2.5,3,4,5,6,6,6].smooth(0.9).fast(0.5))
// // .scale((()=>time/1-0.1))
// // .mult(shape(2).repeat(4,16),[0, 1].smooth(0.9).fast(0.3),0.3)
// // .mult(shape(2).scrollY(0.02).repeat(4,16),[0, 1].smooth(0.9).fast(0.3),0.6)
// .color(1,0.5,0.2)
// .blend(src(o0).scale(1.02,1.05),0.5)
// //
// triMask=()=> shape(3,0.7).invert()
// bg=()=> solid().add(noise(1).color(1,0.6,0.2))
// //
// solid()
// .add(bg().mult(triMask()),[0,0,1,1].smooth(0.9).fast(0.9))
// .add(tri(),[0,0,1,1,1,1].smooth(0.9).fast(0.2))
// .out(o2)
// //
// //
// speed = 0.75
// //
// // PART 3 FOKKER PALETTE
// size=()=> 0.8
// posA=()=> 0.02
// posB=()=> 0.01
// pos=()=> (posX(),posY())
// //COLORS
// w=()=>solid(1,1,1,1)
// b=()=>solid()
// bl=()=>solid(0,0,1)
// //
// seq=()=> w().mult(b(),[0,0,0,0,0,0,0])// ITERATES A BLACK INTERVAL
// gh=()=> //GRID X
// shape(2).repeat(1,1).scrollX(0.01,-0.02).repeat(1,1).scrollY(0.01,0.02)
// .repeat(8,8)
// gk=()=>
//   gh().kaleid([0.02,0.03,0.02,2].smooth(0.99).fast(0.004))
//   .repeat(4,4).scale(0.8)
// gv=()=> //GRID Y
// gh().rotate(1)
// //
// g=()=>
// solid()
// .add(gh())
// .add(gv())
// //
// bw=()=>
// g()
// // .add(g().rotate(()=>time/32)) // ROTATE CREATES WEIRD FLICKR
// //
// bb=()=>
// g().mult(solid(0,0,1))
// //
// solid()
// //BLEND MATERIALS
// .add(bw())
// .blend(bb(),0.25)
// // BASIC COLOR AND GEOMETRY UNTIL HERE
// //BLEND FEEDBACK FROM HERE
// .blend(src(o0).scale(1.01),[0.4,0.8].smooth(0.9).fast(0.03))
// // .blend(bb().scale(1.05).rotate(1.07),[0.4,0.2].smooth(0.9).fast(0.04))
// // .blend(src(o0).scrollY(0.15,-0.035).scale(4).mult(seq()),[0.4,0.2].smooth(0.9).fast(0.03))
// .mult(bl(),[0.2,0].smooth(0.99).fast(0.02)) //MORE BLUE
// // // ADD KALEID FUNCTION
// .blend(gk(),0.25)
// .mult(gk().luma(),0.25)
// .kaleid(3)// ANNE LIKES` THIS ONE
// // //MODULATE OUT
// .modulate(gk().scale(2))
// .modulate(noise(0.25,0.025),0.125)
// // //GENERAL OUT FX
// .scale(size())
// //   .contrast(1.7)
// //   .saturate(1.5)
// .scrollX(posA(),-posB()).scrollY(posA(),posB())
// // .mult(solid(),[1,1,1,1,1,1,0].smooth(0.9).fast(0.05))
// // .mult(solid())// FULL FADE OUT
// // .blend(src(o2),[0,0,0,1,1,1,1].smooth(0.9).fast(0.05))// TRIANGLE
// // .mult(solid(),[1,1,1,0,0,0,0])
// // .mult(solid())// FULL FADE OUT
//   .out()
//
//
//
// //PART 2 // CIRCLE FADES ADD THESE TO PART 1
// // solid()
// .add(shape(300,0.15,0.5).mult(src(o2).rotate(()=>time/64),0.9).mult(fadeC()),0.3)
// .add(src(o2),[0,0,0.5,1,0.5,0].smooth(0.9).fast(0.05))
// .out(o0)
//
//
// // PART 1 - fade in
// fadeT= ()=> 0.16
// fade= ()=> solid(1,1,1).mult(solid(),[0,0,0.5,1,0.5,0.25,0,0,0,0,0].smooth(0.99).fast(fadeT()))
// fadeC= ()=> solid(1,1,1).mult(solid(),[0,0,0.25,0.5,1,0.75,1,1,1,1,1].smooth(0.99).fast(0.05))
// a1=()=>noise(2,0.05).mult(fade())
// a2=()=>gradient(1).shift(0,0,1).mult(solid(),0.7).mult(fade())
// a2b=()=>gradient(1.5).shift(0,0,1).modulateScale(osc(8).modulateRotate(src(o0))).mult(solid(),0.2).mult(fade())
// a3=()=>noise(1,0.2).luma(0.9).mult(solid(),0.25).mult(fade())
// a4=()=>solid().mult(src(o0),0.5).mult(fade())
// a4=()=>solid().blend(src(o0),0.9).mult(fade())
// //
// solid()
// .add(a1(),0.9)
// .add(a2(),0.7)
// .add(a2b(),0.4)
// .blend(a3().luma(0.8),0.4)
// .blend(a4().scale(1.09),0.5)//feedback
// .add(a4().scale(1.01),0.125)//feedback
// .add(a4().luma(0.9).thresh().modulateScale(a1()),0.125)//feedback
// .add(a4().posterize(1,16).mult(osc(2).rotate(1.57)).modulateScale(a2b()),0.8)//feedback
// .mult(solid(0,0,1),0.55)
// .add(solid(1,1,1).luma(),0.2)
// .contrast(1.4)
// .out(o1)
// //
// speed = 3
// //
// osc(80,0.025).modulate(noise(1))
// .out(o2)
// //
// // mix
// solid()
// .add(src(o1))
// .blend(src(o2),0.049)
// .add(shape(300,0.15,0.5).mult(src(o2).rotate(()=>time/64),0.9).mult(fadeC()),0.3)
// .add(src(o2),[0,0,0.5,1,0.5,0].smooth(0.9).fast(0.05))
// // .out(o0)
// .out()
// //
//
//
//
//
//
//
// ////
//
// // PART 4  TRIANGLE
// // size=()=> [0.1,0.4,0.6].smooth(0.9).fast(0.02)
// tri=()=>
// shape(3)
// .scale([0.1,0.4,0.6,1,1.2,2,2.5,3,4,5,6,6,6].smooth(0.9).fast(0.5))
// // .scale((()=>time/1-0.1))
// // .mult(shape(2).repeat(4,16),[0, 1].smooth(0.9).fast(0.3),0.3)
// // .mult(shape(2).scrollY(0.02).repeat(4,16),[0, 1].smooth(0.9).fast(0.3),0.6)
// .color(1,0.5,0.2)
// .blend(src(o0).scale(1.02,1.05),0.5)
// //
// triMask=()=> shape(3,0.7).invert()
// bg=()=> solid().add(noise(1).color(1,0.6,0.2))
// //
// solid()
// .add(bg().mult(triMask()),[0,0,1,1].smooth(0.9).fast(0.9))
// .add(tri(),[0,0,1,1,1,1].smooth(0.9).fast(0.2))
// .out(o2)
// //
// //
// speed = 0.75
// //
// // PART 3 FOKKER PALETTE
// size=()=> 0.8
// posA=()=> 0.02
// posB=()=> 0.01
// pos=()=> (posX(),posY())
// //COLORS
// w=()=>solid(1,1,1,1)
// b=()=>solid()
// bl=()=>solid(0,0,1)
// //
// seq=()=> w().mult(b(),[0,0,0,0,0,0,0])// ITERATES A BLACK INTERVAL
// gh=()=> //GRID X
// shape(2).repeat(1,1).scrollX(0.01,-0.02).repeat(1,1).scrollY(0.01,0.02)
// .repeat(8,8)
// gk=()=>
//   gh().kaleid([0.02,0.03,0.02,2].smooth(0.99).fast(0.004))
//   .repeat(4,4).scale(0.8)
// gv=()=> //GRID Y
// gh().rotate(1)
// //
// g=()=>
// solid()
// .add(gh())
// .add(gv())
// //
// bw=()=>
// g()
// // .add(g().rotate(()=>time/32)) // ROTATE CREATES WEIRD FLICKR
// //
// bb=()=>
// g().mult(solid(0,0,1))
// //
// solid()
// //BLEND MATERIALS
// .add(bw())
// .blend(bb(),0.25)
// // BASIC COLOR AND GEOMETRY UNTIL HERE
// //BLEND FEEDBACK FROM HERE
// .blend(src(o0).scale(1.01),[0.4,0.8].smooth(0.9).fast(0.03))
// // .blend(bb().scale(1.05).rotate(1.07),[0.4,0.2].smooth(0.9).fast(0.04))
// // .blend(src(o0).scrollY(0.15,-0.035).scale(4).mult(seq()),[0.4,0.2].smooth(0.9).fast(0.03))
// .mult(bl(),[0.2,0].smooth(0.99).fast(0.02)) //MORE BLUE
// // // ADD KALEID FUNCTION
// .blend(gk(),0.25)
// .mult(gk().luma(),0.25)
// .kaleid(3)// ANNE LIKES` THIS ONE
// // //MODULATE OUT
// .modulate(gk().scale(2))
// .modulate(noise(0.25,0.025),0.125)
// // //GENERAL OUT FX
// .scale(size())
// //   .contrast(1.7)
// //   .saturate(1.5)
// .scrollX(posA(),-posB()).scrollY(posA(),posB())
// // .mult(solid(),[1,1,1,1,1,1,0].smooth(0.9).fast(0.05))
// // .mult(solid())// FULL FADE OUT
// // .blend(src(o2),[0,0,0,1,1,1,1].smooth(0.9).fast(0.05))// TRIANGLE
// // .mult(solid(),[1,1,1,0,0,0,0])
// // .mult(solid())// FULL FADE OUT
//   .out()
//
//
//
// //PART 2 // CIRCLE FADES ADD THESE TO PART 1
// // solid()
// .add(shape(300,0.15,0.5).mult(src(o2).rotate(()=>time/64),0.9).mult(fadeC()),0.3)
// .add(src(o2),[0,0,0.5,1,0.5,0].smooth(0.9).fast(0.05))
// .out(o0)
//
//
// // PART 1 - fade in
// fadeT= ()=> 0.16
// fade= ()=> solid(1,1,1).mult(solid(),[0,0,0.5,1,0.5,0.25,0,0,0,0,0].smooth(0.99).fast(fadeT()))
// fadeC= ()=> solid(1,1,1).mult(solid(),[0,0,0.25,0.5,1,0.75,1,1,1,1,1].smooth(0.99).fast(0.05))
// a1=()=>noise(2,0.05).mult(fade())
// a2=()=>gradient(1).shift(0,0,1).mult(solid(),0.7).mult(fade())
// a2b=()=>gradient(1.5).shift(0,0,1).modulateScale(osc(8).modulateRotate(src(o0))).mult(solid(),0.2).mult(fade())
// a3=()=>noise(1,0.2).luma(0.9).mult(solid(),0.25).mult(fade())
// a4=()=>solid().mult(src(o0),0.5).mult(fade())
// a4=()=>solid().blend(src(o0),0.9).mult(fade())
// //
// solid()
// .add(a1(),0.9)
// .add(a2(),0.7)
// .add(a2b(),0.4)
// .blend(a3().luma(0.8),0.4)
// .blend(a4().scale(1.09),0.5)//feedback
// .add(a4().scale(1.01),0.125)//feedback
// .add(a4().luma(0.9).thresh().modulateScale(a1()),0.125)//feedback
// .add(a4().posterize(1,16).mult(osc(2).rotate(1.57)).modulateScale(a2b()),0.8)//feedback
// .mult(solid(0,0,1),0.55)
// .add(solid(1,1,1).luma(),0.2)
// .contrast(1.4)
// .out(o1)
// //
// speed = 3
// //
// osc(80,0.025).modulate(noise(1))
// .out(o2)
// //
// // mix
// solid()
// .add(src(o1))
// .blend(src(o2),0.049)
// .add(shape(300,0.15,0.5).mult(src(o2).rotate(()=>time/64),0.9).mult(fadeC()),0.3)
// .add(src(o2),[0,0,0.5,1,0.5,0].smooth(0.9).fast(0.05))
// // .out(o0)
// .out()
// //
//
//
//
//
//
//
//
//
// // PART 4  TRIANGLE
// tri=()=>
// shape(3)
// .scale((()=>time/100-0.5))
// .mult(shape(2).repeat(4,16),[0, 1].smooth(0.9).fast(0.3),0.3)
// .mult(shape(2).scrollY(0.02).repeat(4,16),[0, 1].smooth(0.9).fast(0.3),0.6)
// .color(1,0.5,0.2)
// .blend(src(o0).scale(1.02,1.05),0.5)
// //
// bg=()=> shape(3,0.7).invert().mult(noise(1).color(1,0.6,0.2))
// //
// solid()
// .add(bg(),0.9)
// .add(tri())
// .out()
//
//
// // PART 3 FOKKER PALETTE
// size=()=> 0.8
// posA=()=> 0.02
// posB=()=> 0.01
// pos=()=> (posX(),posY())
// //COLORS
// w=()=>solid(1,1,1,1)
// b=()=>solid()
// bl=()=>solid(0,0,1)
// //
// seq=()=> w().mult(b(),[0,0,0,0,0,0,0])// ITERATES A BLACK INTERVAL
// gh=()=> //GRID X
// shape(2).repeat(1,1).scrollX(0.01,-0.02).repeat(1,1).scrollY(0.01,0.02)
// .repeat(8,8)
// gk=()=>
//   gh().kaleid([0.02,0.03,0.02,2].smooth(0.99).fast(0.004))
//   .repeat(4,4).scale(0.8)
// gv=()=> //GRID Y
// gh().rotate(1)
// //
// g=()=>
// solid()
// .add(gh())
// .add(gv())
// //
// bw=()=>
// g()
// // .add(g().rotate(()=>time/32)) // ROTATE CREATES WEIRD FLICKR
// //
// bb=()=>
// g().mult(solid(0,0,1))
// //
// solid()
// //BLEND MATERIALS
// .add(bw())
// .blend(bb(),0.25)
// // BASIC COLOR AND GEOMETRY UNTIL HERE
// //BLEND FEEDBACK FROM HERE
// .blend(src(o0).scale(1.01),[0.4,0.8].smooth(0.9).fast(0.03))
// // .blend(bb().scale(1.05).rotate(1.07),[0.4,0.2].smooth(0.9).fast(0.04))
// // .blend(src(o0).scrollY(0.15,-0.035).scale(4).mult(seq()),[0.4,0.2].smooth(0.9).fast(0.03))
// .mult(bl(),[0.2,0].smooth(0.99).fast(0.02)) //MORE BLUE
// // // ADD KALEID FUNCTION
// // .blend(gk(),0.25)
// .mult(gk().luma(),0.25)
// .kaleid(3)// ANNE LIKES` THIS ONE
// // //MODULATE OUT
// .modulate(gk().scale(2))
// .modulate(noise(0.25,0.025),0.125)
// // //GENERAL OUT FX
// .scale(size())
// //   .contrast(1.7)
// //   .saturate(1.5)
// .scrollX(posA(),-posB()).scrollY(posA(),posB())
//   .out()
//
//
//
// //PART 2 // CIRCLE FADES ADD THESE TO PART 1
// // solid()
// .add(shape(300,0.15,0.5).mult(src(o2).rotate(()=>time/64),0.9).mult(fadeC()),0.3)
// .add(src(o2),[0,0,0.5,1,0.5,0].smooth(0.9).fast(0.05))
// .out(o0)
//
//
// // PART 1 - fade in
// fadeT= ()=> 0.16
// fade= ()=> solid(1,1,1).mult(solid(),[0,0,0.5,1,0.5,0.25,0,0,0,0,0].smooth(0.99).fast(fadeT()))
// fadeC= ()=> solid(1,1,1).mult(solid(),[0,0,0.25,0.5,1,0.75,1,1,1,1,1].smooth(0.99).fast(0.05))
// a1=()=>noise(2,0.05).mult(fade())
// a2=()=>gradient(1).shift(0,0,1).mult(solid(),0.7).mult(fade())
// a2b=()=>gradient(1.5).shift(0,0,1).modulateScale(osc(8).modulateRotate(src(o0))).mult(solid(),0.2).mult(fade())
// a3=()=>noise(1,0.2).luma(0.9).mult(solid(),0.25).mult(fade())
// a4=()=>solid().mult(src(o0),0.5).mult(fade())
// a4=()=>solid().blend(src(o0),0.9).mult(fade())
// //
// solid()
// .add(a1(),0.9)
// .add(a2(),0.7)
// .add(a2b(),0.4)
// .blend(a3().luma(0.8),0.4)
// .blend(a4().scale(1.09),0.5)//feedback
// .add(a4().scale(1.01),0.125)//feedback
// .add(a4().luma(0.9).thresh().modulateScale(a1()),0.125)//feedback
// .add(a4().posterize(1,16).mult(osc(2).rotate(1.57)).modulateScale(a2b()),0.8)//feedback
// .mult(solid(0,0,1),0.55)
// .add(solid(1,1,1).luma(),0.2)
// .contrast(1.4)
// .out(o1)
// //
// speed = 3
// //
// osc(80,0.025).modulate(noise(1))
// .out(o2)
// //
// // mix
// solid()
// .add(src(o1))
// .blend(src(o2),0.049)
// .out()
// //
//
//
// /////////////////
//
//
// // PART 4  TRIANGLE
// tri=()=>
// shape(3)
// .scale((()=>time/100-0.5))
// .mult(shape(2).repeat(4,16),[0, 1].smooth(0.9).fast(0.3),0.3)
// .mult(shape(2).scrollY(0.02).repeat(4,16),[0, 1].smooth(0.9).fast(0.3),0.6)
// .color(1,0.5,0.2)
// .blend(src(o0).scale(1.02,1.05),0.5)
// //
// bg=()=> shape(3,0.7).invert().mult(noise(1).color(1,0.6,0.2))
// //
// solid()
// .add(bg(),0.9)
// .add(tri())
// .mult(solid(),[0,1,1,1].smooth(0.9).fast(0.02))
// .out()
//
//
//
// //OLDER VERSIONS
//
// // PARTS 1 and 2
//
// // PART 1 - fade in
// fadeT= ()=> 0.16
// fade= ()=> solid(1,1,1).mult(solid(),[0,0,0.5,1,0.5,0.25,0,0,0,0,0].smooth(0.99).fast(fadeT()))
// fadeC= ()=> solid(1,1,1).mult(solid(),[0,0,0.25,0.5,1,0.75,1,1,1,1,1].smooth(0.99).fast(0.05))
// a1=()=>noise(2,0.05).mult(fade())
// a2=()=>gradient(1).shift(0,0,1).mult(solid(),0.7).mult(fade())
// a2b=()=>gradient(1.5).shift(0,0,1).modulateScale(osc(8).modulateRotate(src(o0))).mult(solid(),0.2).mult(fade())
// a3=()=>noise(1,0.2).luma(0.9).mult(solid(),0.25).mult(fade())
// a4=()=>solid().mult(src(o0),0.5).mult(fade())
// a4=()=>solid().blend(src(o0),0.9).mult(fade())
// //
// solid()
// .add(a1(),0.9)
// .add(a2(),0.7)
// .add(a2b(),0.4)
// .blend(a3().luma(0.8),0.4)
// .blend(a4().scale(1.09),0.5)//feedback
// .add(a4().scale(1.01),0.125)//feedback
// .add(a4().luma(0.9).thresh().modulateScale(a1()),0.125)//feedback
// .add(a4().posterize(1,16).mult(osc(2).rotate(1.57)).modulateScale(a2b()),0.8)//feedback
// .mult(solid(0,0,1),0.55)
// .add(solid(1,1,1).luma(),0.2)
// .contrast(1.4)
// .out(o1)
// //
// speed = 3
// //
// osc(80,0.025).modulate(noise(1))
// .out(o2)
// //
// // mix
// solid()
// .add(src(o1))
// // .blend(src(o2),0.049)
// //PART 2 // CIRCLE FADES
// .add(shape(300,0.15,0.5).mult(src(o2).rotate(()=>time/64),0.9).mult(fadeC()),0.3)
// // .add(src(o2),[0,0,0.5,1,0.5,0].smooth(0.9).fast(0.05))
// .out(o0)
//
// // PART 3
// // FOKKER ORGAN
// //SIZE + POS
// size=()=> 0.5
// posA=()=> 0.02
// posB=()=> 0.01
// pos=()=> (posX(),posY())
// //COLORS
// w=()=>solid(1,1,1,1)
// b=()=>solid()
// bl=()=>solid(0,0,1)
// //
// seq=()=> w().mult(b(),[0,0,0,0,0,0,0])// ITERATES A BLACK INTERVAL
// gh=()=> //GRID X
// shape(2).repeat(1,1).scrollX(0.01,-0.02).repeat(1,1).scrollY(0.01,0.02)
// .repeat(8,8)
// gk=()=>
//   gh().kaleid([0.02,0.03,0.02,2].smooth(0.99).fast(0.004))
//   .repeat(4,4).scale(0.8)
// gv=()=> //GRID Y
// gh().rotate(1)
// //
// g=()=>
// solid()
// .add(gh())
// .add(gv())
// //
// bw=()=>
// g()
// // .add(g().rotate(()=>time/32)) // ROTATE CREATES WEIRD FLICKR
// //
// bb=()=>
// g().mult(solid(0,0,1))
// //
// solid()
// //BLEND MATERIALS
// .add(bw())
// .blend(bb(),0.25)
// //BLEND FEEDBACK
// .blend(src(o0).scale(1.01),[0.4,0.8].smooth(0.9).fast(0.005))
// .blend(bb().scale(1.05).rotate(1.07),[0.4,0.2].smooth(0.9).fast(0.004))
// .blend(src(o0).scale(4).mult(seq()),[0.4,0.2].smooth(0.9).fast(0.008))
// .mult(bl(),[0.2,0].smooth(0.99).fast(0.005)) //MORE BLUE
// // ADD KALEID FUNCTION
// .blend(gk(),0.25)
// .mult(gk().luma(),0.25)
// .kaleid(3)// ANNE LIKES THIS ONE
// //MODULATE OUT
// .modulate(gk().scale(2))
// .modulate(noise(0.25),0.125)
// .modulate(shape(4,0.12,1))// VIGNETTE
// //GENERAL OUT FX
// .scale(size())
// //   .contrast(1.7)
//   .saturate(1.5) // HI SATURATION
// .scrollX(posA(),-posB()).scrollY(posA(),posB())
//   .out()
//
//
//
// //SIZE + POS
// size=()=> 0.5
// posA=()=> 0.02
// posB=()=> 0.01
// pos=()=> (posX(),posY())
// //COLORS
// w=()=>solid(1,1,1,1)
// b=()=>solid()
// bl=()=>solid(0,0,1)
// //
// seq=()=> w().mult(b(),[0,0,0,0,0,0,0])// ITERATES A BLACK INTERVAL
// gh=()=> //GRID X
// shape(2).repeat(1,1).scrollX(0.01,-0.02).repeat(1,1).scrollY(0.01,0.02)
// .repeat(8,8)
// gk=()=>
//   gh().kaleid([0.02,0.03,0.02,2].smooth(0.99).fast(0.004))
//   .repeat(4,4).scale(0.8)
// gv=()=> //GRID Y
// gh().rotate(1)
// //
// g=()=>
// solid()
// .add(gh())
// .add(gv())
// //
// bw=()=>
// g()
// // .add(g().rotate(()=>time/32)) // ROTATE CREATES WEIRD FLICKR
// //
// bb=()=>
// g().mult(solid(0,0,1))
// //
// solid()
// //BLEND MATERIALS
// .add(bw())
// .blend(bb(),0.25)
// //BLEND FEEDBACK
// .blend(src(o0).scale(1.01),[0.4,0.8].smooth(0.9).fast(0.005))
// .blend(bb().scale(1.05).rotate(1.07),[0.4,0.2].smooth(0.9).fast(0.004))
// .blend(src(o0).scale(4).mult(seq()),[0.4,0.2].smooth(0.9).fast(0.008))
// // .mult(bl(),[0.2,0].smooth(0.99).fast(0.005)) //MORE BLUE
// // ADD KALEID FUNCTION
// .blend(gk(),0.25)
// .mult(gk().luma(),0.25)
// .kaleid(3)
// //MODULATE OUT
// .modulate(gk().scale(2))
// .modulate(noise(0.25),0.125)
// .modulate(shape(4,0.12,1))// VIGNETTE
// // .scale(size())
// //   .contrast(0.7)
// //   .contrast(1.5) // HI CONTRAST
// .scrollX(posA(),-posB()).scrollY(posA(),posB())
//   .out()
//
//
//
//
//
// //SIZE + POS
// size=()=> 0.5
// posA=()=> 0.04
// posB=()=> 0.02
// pos=()=> (posX(),posY())
// //COLORS
// w=()=>solid(1,1,1,1)
// b=()=>solid()
// bl=()=>solid(0,0,1)
// //
// seq=()=> w().mult(b(),[0,0,0,0,0,0,0])// ITERATES A BLACK INTERVAL
// gh=()=> //GRID X
// shape(2).repeat(1,1).scrollX(0.01,-0.02).repeat(1,1).scrollY(0.01,0.02)
// .repeat(8,8)
// gk=()=>
//   gh().kaleid([0.02,0.03,0.02,2].smooth(0.99).fast(0.004))
//   .repeat(4,4).scale(0.8)
// gv=()=> //GRID Y
// gh().rotate(1)
// //
// g=()=>
// solid()
// .add(gh())
// .add(gv())
// //
// bw=()=>
// g()
// // .add(g().rotate(()=>time/32)) // ROTATE CREATES WEIRD FLICKR
// //
// bb=()=>
// g().mult(solid(0,0,1))
// //
// solid()
// //BLEND MATERIALS
// .add(bw())
// .blend(bb(),0.5)
// .blend(src(o0).scale(1.01),[0.4,0.8].smooth(0.9).fast(0.005))
// .blend(src(o0).scale(1.07).mult(seq()),[0.6,0.2].smooth(0.9).fast(0.008))
// .blend(bb().scale(1.05).rotate(1.07),[0.4,0.2].smooth(0.9).fast(0.004))
// .mult(bl(),[0.3,0].smooth(0.99).fast(0.005))
// // ADD KALEID FUNCTION
// .blend(gk(),0.125)
// .mult(gk().luma(),0.25)
// .modulate(gk().scale(2))
// .kaleid(3)
// //MODULATE OUT
// .modulate(noise(0.25),0.125)
// // .scale(size())
// .scrollX(posA(),posB()).scrollY(posA(),-posB())
// //   .contrast(0.5)
//   .contrast(1.5) // HI CONTRAST
//   .out()
//
//
//
//
//
// //SIZE + POS
// size=()=> 0.5
// posA=()=> 0.04
// posB=()=> 0.2
// pos=()=> (posX(),posY())
// //COLORS
// w=()=>solid(1,1,1,1)
// b=()=>solid()
// bl=()=>solid(0,0,1)
// //
// seq=()=> w().mult(b(),[0,0,0,0,0,0,0])// ITERATES A BLACK INTERVAL
// gh=()=> //GRID X
// shape(2).repeat(1,1).scrollX(0.01,-0.02).repeat(1,1).scrollY(0.01,0.02).kaleid([0.02,0.03,0.02,2].smooth(0.99).fast(0.004))
//   .repeat(2,12).scale(0.8)
// gv=()=> //GRID Y
// gh().rotate(1)
// //
// g=()=>
// solid()
// .add(gh())
// .add(gv())
// //
// bw=()=>
// g()
// // .add(g().rotate(()=>time/32)
// //
// bb=()=>
// g()
// .rotate(()=>time/64).mult(solid(0,0,1))
// //
// solid()
// .add(bw())
// // .mult(bb(),0.35)
// // .blend(src(o0).scale(1.01),[0.4,0.9].smooth(0.7).fast(0.005))
// // .blend(src(o0).scale(1.07).mult(seq()),[0.3,0.6].smooth(0.7).fast(0.004))
// // .add(bb().luma().scale(1.15).rotate(1.57),[0.2,0.7].smooth(0.9).fast(0.004))
// // .mult(bl(),[0.3,0].smooth(0.99).fast(0.005))
// // .scale(size())
// // .scrollX(pos()).scrollY(pos())
//   .out()
//
//
//
//
// //SIZE + POS
// size=()=> 0.5
// posA=()=> 0.04
// posB=()=> 0.2
// pos=()=> (posX(),posY())
// //COLORS
// w=()=>solid(1,1,1,1)
// b=()=>solid()
// bl=()=>solid(0,0,1)
// //
// seq=()=> w().mult(b(),[0,0,0,0,0,0,0])// ITERATES A BLACK INTERVAL
// gh=()=> //GRID X
// shape(2).kaleid([0.02,0.03,0.02,0.08].smooth(0.99).fast(0.004)).repeat(1,1).scrollX(0.01,-0.02).repeat(1,1).scrollY(0.01,0.02)
//   .repeat(2,12).scale(0.8)
// gv=()=> //GRID Y
// gh().rotate(1)
// //
// g=()=>
// solid()
// .add(gh())
// .add(gv())
// //
// bw=()=>
// g()
// .rotate(()=>time/64)
// //
// bb=()=>
// g()
// .rotate(()=>time/64).mult(solid(0,0,1))
// //
// solid()
// .add(bw())
// // .mult(bb(),0.35)
// // .blend(src(o0).scale(1.01),[0.4,0.9].smooth(0.7).fast(0.005))
// // .blend(src(o0).scale(1.07).mult(seq()),[0.3,0.6].smooth(0.7).fast(0.004))
// // .add(bb().luma().scale(1.15).rotate(1.57),[0.2,0.7].smooth(0.9).fast(0.004))
// // .mult(bl(),[0.3,0].smooth(0.99).fast(0.005))
// // .scale(size())
// // .scrollX(pos()).scrollY(pos())
//   .out()
//
//
//
//
//
//
//
// // w=()=>solid(1,1,1,1)
// b=()=>solid()
// seq=()=> solid(1,1,1,1).repeat(1,1).mult(b(),[0,1,0,0,0,0,0])
// gh=()=>
// shape(2).kaleid([0.02,1.4].smooth(0.99).fast(0.004)).repeat(1,1).scrollX(0.01,0.02).repeat(1,1).scrollY(0.01,0.02)
//   .repeat(2,[8,12].smooth(0.99).fast(0.004))
// gv=()=>
// gh().rotate(1)
// //
// g=()=>
// solid()
// .add(gh())
// .add(gv())
// //
// bw=()=>
// g()
// .rotate(()=>time/64)
// //
// bb=()=>
// g()
// .rotate(()=>time/64).mult(solid(0,0,1))
// //
// solid()
// .add(bw())
// .mult(bb(),0.25)
// .blend(src(o0).scale(1.01),[0.4,0.9].smooth(0.7).fast(0.005))
// .blend(src(o0).scale(1.07).mult(seq()),[0.3,0.9].smooth(0.7).fast(0.004))
// .add(bb().luma().scale(1.15).rotate(1.57),[0.2,0.7].smooth(0.9).fast(0.14))
//   .out()
//
//
//
//
//
// // B Modulated Square colorama
//
// b1= ()=>
// solid()
// .layer(shape(400,0.1,1.5).luma([0.9,0.1].smooth(0.99).fast(0.025)))
// .colorama([1,2,2.2,2,1].smooth(0.99).fast(0.025)).modulateScale(src(o0))
// .mult(b1a())
// .add(b1a().scale(0.96).scrollX(0.001,0.0005),[0.2,0.7].smooth(0.9),0.7)
// .rotate(1.57).saturate(8).mult(solid(),0.7)
// //
// b1a= ()=>
// solid()
// .layer(osc(3,-0.15).add(osc(6,-0.05).scrollY(0.03),0.25),0.25).modulateScale(src(o0),0.25)
// //
// b1()
// .blend(src(o1).scale(1.2),0.5)
// .mult(src(o1).scale(1.2),0.1)
// .modulateRotate(noise(0.5))
// .repeat(3,3)
// .modulateKaleid(src(o0).scale(1.2),0.8)
// .out(o1)
// //
// src(o1)
// .out(o0)
//
//
// b1= ()=>
// solid()
// .layer(shape(4,0.1,1.5).luma([0.9,0.1].smooth(0.99).fast(0.025)))
// .colorama([1,2,2.2,2,1].smooth(0.99).fast(0.025)).modulateScale(src(o0))
// .mult(b1a())
// .add(b1a().scale(0.96).scrollX(0.001,0.0005),[0.2,0.7].smooth(0.9),0.7)
// .rotate(1.57).saturate(8).mult(solid(),0.7)
// //
// b1a= ()=>
// solid()
// .layer(osc(3,-0.15).add(osc(6,-0.05).scrollY(0.03),0.25),0.25).modulateScale(src(o0),0.25)
// //
// b1()
// .blend(src(o1).scale(1.2),0.5)
// .mult(src(o1).scale(1.2),0.1)
// // .layer(solid().diff(src(o0).scale(1.01)),0.001)
// .modulateRotate(noise(1)
// .out(o1)
// //
// src(o1)
// .out(o0)
//
// //
//
//
// b1= ()=>
// solid()
// .layer(shape(4,0.1,1.5).luma([0.9,0.1].smooth(0.99).fast(0.025)))
// .colorama([1,2,2.2,2,1].smooth(0.99).fast(0.025)).modulateScale(src(o0))
// .mult(b1a())
// .add(b1a().scale(0.96).scrollX(0.001,0.0005),[0.2,0.7].smooth(0.9),0.7)
// .rotate(1.57).saturate(8).mult(solid(),0.7)
// //
// b1a= ()=>
// solid()
// .layer(osc(3,-0.15).diff(osc(6).scrollY(-0.03))).modulateScale(src(o0),0.5)
// //
// b1()
// .blend(src(o1).scale(1.2),0.5)
// .mult(src(o1).scale(1.2),0.1)
// .out(o1)
// //
// src(o1)
// .out(o0)
//
// //
//
//
// b1= ()=>
// solid()
// .layer(shape(4,0.1,1.5).luma([0.9,0.1].smooth(0.99).fast(0.025)))
// .colorama([1,2,2.2,2,1].smooth(0.99).fast(0.025)).modulateScale(src(o0))
// .mult(b1a().saturate(18))
// .add(b1a().scale(0.96).scrollX(0.001,0.0005),[0.2,0.7].smooth(0.9),0.7)
// .rotate(1.57)
// //
// b1a= ()=>
// solid()
// .layer(osc(3,-0.15).diff(osc(6).scrollY(-0.03))).modulateScale(src(o0))
// //
// b1()
// .blend(src(o1).scale(1.2),0.5)
// .mult(src(o1).scale(1.2),0.1)
// .out(o1)
// //
// src(o1)
// .out(o0)
//
// //
//
//
// b1= ()=>
// solid()
// .layer(shape(4,0.1,1.5).luma([0.9,0.1].smooth(0.99).fast(0.025)))
// .colorama([1,2,2.2,2,1].smooth(0.99).fast(0.025)).modulateScale(src(o0))
// .mult(b1a())
// .add(b1a().scale(0.96).scrollX(0.001,0.0005),[0.2,0.7].smooth(0.9),0.7)
// .rotate(1.57)
// //
// b1a= ()=>
// solid()
// .layer(osc(3,-0.15).diff(osc(6).scrollY(-0.03))).modulateScale(src(o0))
// //
// b1()
// .blend(src(o1).scale(1.2),0.5)
// .mult(src(o1).scale(1.2),0.1)
// .out(o1)
// //
// src(o1)
// .out(o0)
//
//
// // part 1 - fade in
//
// // part 1 - fade in
// fadeT= ()=> 0.16
// fade= ()=> solid(1,1,1).mult(solid(),[0,0,0.5,1,0.5,0,0,0,0,0,0.5].smooth(0.99).fast(fadeT()))
// a1=()=>noise(2,0.05).mult(fade())
// a2=()=>gradient(1).mult(solid(),0.7).mult(fade())
// a2b=()=>gradient(1.5).modulateScale(osc(8).modulateRotate(src(o0))).mult(solid(),0.2).mult(fade())
// a3=()=>noise(1,0.2).luma(0.9).mult(solid(),0.25).mult(fade())
// a4=()=>solid().mult(src(o0),0.5).mult(fade())
// a4=()=>solid().blend(src(o0),0.9).mult(fade())
// //
// solid()
// .add(a1(),0.9)
// .add(a2(),0.7)
// .add(a2b(),0.4)
// .blend(a3().luma(0.8),0.4)
// .blend(a4().scale(1.09),0.5)//feedback
// .add(a4().scale(1.01),0.125)//feedback
// .add(a4().luma(0.9).thresh().modulateScale(a1()),0.125)//feedback
// .add(a4().posterize(1,16).mult(osc(2).rotate(1.57)).modulateScale(a2b()),0.8)//feedback
// .out()
// //
// speed = 3
//
//
//
//
// fade= ()=> solid(1,1,1).mult(solid(),[1,1,1,1,0,0,0,0].smooth(0.99).fast(0.16))
// a1=()=>noise(2,0.05).mult(fade())
// a2=()=>gradient(1).mult(solid(),0.5).mult(fade())
// a3=()=>noise(1,0.2).luma().mult(solid(),0.5).mult(fade())
// a4=()=>solid().mult(src(o0),0.5).mult(fade())
// a4=()=>solid().blend(src(o0),0.9).mult(fade())
// //
// solid()
// .add(a1(),0.5)
// .add(a2(),0.7)
// .add(a3(),0.5)
// .add(a4(),0.5)
// .out()
//
//
//
// //WITH NOISE
//
// sc= ()=> 0.5
// //
// sh= ()=> ([3,4,2,2,4].fast(0.125).smooth(0.9))
// //
// start= ()=> 0
// fb= ()=> 0.6
// rep= ()=> [3,2].fast(0.05)
// //
// // mix0 = ()=>([1,start()].fast(0.125).smooth(0.9),0,0,0,0)
// mix0 = ()=> 0
// mix1 = ()=>0.8
// mix2 = ()=> 0.9
// // mix2 = ()=>()=>a.fft[0]*3
// //
// solid()
//   .layer(noise(sh()).mult(osc().scale(sc()))).layer(noise(sh(),sc()/2).luma(0.5).mult(gradient(1)))
// .scrollX(-0.01,0.0001).scrollY(-0.01,-0.0001)
// // .repeat(rep())
// .add(src(o0).scale(0.95),fb())
//   .out(o1)
// //
// solid()
// osc(12,0.2,0.8).rotate(1.57)
// .diff(shape(4,1).mult(noise(2,0.5).luma(0.25).modulate(src(o2).scale(0.5))),0.5)
// .out(o2)
// //
// solid(1,1,1,1)
// 	.mult(solid(),mix0())
// 	.mult(src(o1),mix1())
// 	.mult(src(o2),mix2())
// // .scale(0.5)
// .out()
// //
// render(o0)
//
//
//
//
//
// //
//
//
// // WITH NOISE
//
// sc= ()=> 0.5
// //
// sh= ()=> ([3,4,2,2,4].fast(0.125).smooth(0.9))
// //
// start= ()=> 0
// fb= ()=> 0.6
// rep= ()=> [3,2].fast(0.05)
// //
// // mix0 = ()=>([1,start()].fast(0.125).smooth(0.9),0,0,0,0)
// mix0 = ()=> 0.5
// mix1 = ()=>0.8
// mix2 = ()=> 0.8
// // mix2 = ()=>()=>a.fft[0]*3
// //
// solid()
//   .layer(noise(sh()).mult(osc().scale(sc()))).layer(noise(sh(),sc()/2).luma(0.5).mult(gradient(1)))
// .scrollX(-0.01,0.0001).scrollY(-0.01,-0.0001)
// // .repeat(rep())
// .add(src(o0).scale(0.95),fb())
//   .out(o1)
// //
// solid()
// osc(2,0.2,0.8).rotate(1.57)
// .add(shape(4,0.25).mult(noise(2,0.5).luma(0.9)))
// .out(o2)
// //
// solid(1,1,1,1)
// 	.mult(solid(),mix0())
// 	.mult(src(o1),mix1())
// 	.mult(src(o2),mix2())
// // .scale(0.5)
// .out()
// //
// render(o0)
//
//
//
//
//
// //
//
//
//
//
//
// //
//
//
//
//
//
// //WITH GEOMETRY
//
// a.show()
//
// sc= ()=> 0.5
// //
// sh= ()=> ([3,4,2,2,4].fast(0.125).smooth(0.9))
// //
// fb= ()=> 0.6
// rep= ()=> [3,2].fast(0.05)
// //
// mix1 = ()=>0.9
// // mix2 = ()=>()=>a.fft[0]*3
// mix2 = ()=> 0.5
// //
// solid()
//   .layer(shape(sh()).mult(osc().scale(sc()))).layer(shape(sh(),sc()/2).luma(0.5).mult(gradient(1)))
// .scrollX(-0.01,0.0001).scrollY(-0.01,-0.0001)
// .repeat(rep())
// .add(src(o0).scale(0.95),fb())
//   .out(o1)
// //
// solid()
// osc(20,0.2,0.8).rotate(1.57)
// .out(o2)
// //
// solid(1,1,1,1)
// 	.mult(src(o1),mix1())
// 	.mult(src(o2),mix2())
// .scale(0.5)
// .out()
// //
// render(o0)
//
//
// // ctrl + enter = eval line
// // ctrl + alt(opt) + enter = eval chunk
//
//
//
//
//
//
// ////
//
//
// a.show()
//
// sc= ()=> 0.45
// sh= ()=> ([3,4,40].fast(0.25).smooth(0.9))
// fb= ()=> ()=> 0.6
// rep= ()=> [3,2].fast(0.05)
// //
// mix1 = ()=>1
// mix2 = ()=>()=>a.fft[0]*3
// //
// solid()
//   .layer(shape(sh()).mult(osc().scale(sc()))).layer(shape(sh(),sc()/2).luma(0.5).mult(gradient(1)))
// .scrollX(-0.01,0.0001).scrollY(-0.01,-0.0001)
// .repeat(rep())
// .add(src(o0).scale(0.95),fb())
//   .out(o1)
// //
// solid()
// osc(10,0.2,0.8).rotate(1.57)
// .out(o2)
// //
// solid(1,1,1,1)
// 	.mult(src(o1),mix1())
// 	.mult(src(o2),mix2())
// .out()
// //
// render(o0)
//
//
// // ctrl + enter = eval line
// // ctrl + alt(opt) + enter = eval chunk
