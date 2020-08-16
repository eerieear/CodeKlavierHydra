
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
// .mult(solid(),[1,1,1,1,1,1,0].smooth(0.9).fast(0.05))
// .mult(solid())// FULL FADE OUT
// .blend(src(o2),[0,0,0,1,1,1,1].smooth(0.9).fast(0.05))// TRIANGLE
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



