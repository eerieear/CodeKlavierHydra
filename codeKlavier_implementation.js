// // PART 3 FOKKER GEOMETRY
// size=()=> 0.8
// r=()=> 4
// texture= ()=> 0.8
// //
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
//   .repeat(r,r).scale(0.8)
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


//SETUP
https://hydra.ojack.xyz/?code=JTJGJTJGJTIwUEFSVCUyMDMlMjBGT0tLRVIlMjBHRU9NRVRSWSUwQXNpemUlM0QoKSUzRCUzRSUyMDAuOCUwQXIlM0QoKSUzRCUzRSUyMDQlMEF0ZXh0dXJlJTNEJTIwKCklM0QlM0UlMjAwLjglMEElMkYlMkYlMEFwb3NBJTNEKCklM0QlM0UlMjAwLjAyJTBBcG9zQiUzRCgpJTNEJTNFJTIwMC4wMSUwQXBvcyUzRCgpJTNEJTNFJTIwKHBvc1goKSUyQ3Bvc1koKSklMEElMkYlMkZDT0xPUlMlMEF3JTNEKCklM0QlM0Vzb2xpZCgxJTJDMSUyQzElMkMxKSUwQWIlM0QoKSUzRCUzRXNvbGlkKCklMEFibCUzRCgpJTNEJTNFc29saWQoMCUyQzAlMkMxKSUwQSUyRiUyRiUwQXNlcSUzRCgpJTNEJTNFJTIwdygpLm11bHQoYigpJTJDJTVCMCUyQzAlMkMwJTJDMCUyQzAlMkMwJTJDMCU1RCklMkYlMkYlMjBJVEVSQVRFUyUyMEElMjBCTEFDSyUyMElOVEVSVkFMJTBBZ2glM0QoKSUzRCUzRSUyMCUyRiUyRkdSSUQlMjBYJTBBc2hhcGUoMikucmVwZWF0KDElMkMxKS5zY3JvbGxYKDAuMDElMkMtMC4wMikucmVwZWF0KDElMkMxKS5zY3JvbGxZKDAuMDElMkMwLjAyKSUwQS5yZXBlYXQoOCUyQzgpJTBBZ2slM0QoKSUzRCUzRSUwQSUyMCUyMGdoKCkua2FsZWlkKCU1QjAuMDIlMkMwLjAzJTJDMC4wMiUyQzIlNUQuc21vb3RoKDAuOTkpLmZhc3QoMC4wMDQpKSUwQSUyMCUyMC5yZXBlYXQociUyQ3IpLnNjYWxlKDAuOCklMEFndiUzRCgpJTNEJTNFJTIwJTJGJTJGR1JJRCUyMFklMEFnaCgpLnJvdGF0ZSgxKSUwQSUyRiUyRiUwQWclM0QoKSUzRCUzRSUwQXNvbGlkKCklMEEuYWRkKGdoKCkpJTBBLmFkZChndigpKSUwQSUyRiUyRiUwQWJ3JTNEKCklM0QlM0UlMEFnKCklMEElMkYlMkYlMjAuYWRkKGcoKS5yb3RhdGUoKCklM0QlM0V0aW1lJTJGMzIpKSUyMCUyRiUyRiUyMFJPVEFURSUyMENSRUFURVMlMjBXRUlSRCUyMEZMSUNLUiUwQSUyRiUyRiUwQWJiJTNEKCklM0QlM0UlMEFnKCkubXVsdChzb2xpZCgwJTJDMCUyQzEpKQ==


// MIX
////motif3a
solid()
////motif3b
  .add(bb().scale(1.05).rotate(1.07),[0.4,0.2].smooth(0.9).fast(0.04),0.08).scrollX(posA(),-posB()).scrollY(-posA(),posB())
////motif3c
// .add(bw()).blend(bb(),0.25).blend(src(o0).scale(1.01),[0.4,0.8].smooth(0.9).fast(0.03)).scrollX(posA(),-posB()).scrollY(-posA(),posB())
////motif3d
// .blend(src(o0).scrollY(0.15,-0.035).scale(4).mult(seq()),[0.4,0.2].smooth(0.9).fast(0.03))
//
//KALEID
////motif3e
// .kaleid(3)// ANNE LIKES` THIS ONE
////motif3f
// .mult(bl(),[0.2,0].smooth(0.99).fast(0.02))
//// motif3g
// .mult(gk().scale(texture()).luma(),0.35)
////motif3h
// .blend(gk(),0.125)
//MODULATE OUT
////motif3i
// .modulate(noise(1,-0.025),0.25)
////motif3j
// .modulate(gk().scale(8).rotate(()=>time/32))
// //GENERAL OUT FX
////motif3k
// .scale(size())
////motif3l
//   .contrast(1.4).saturate(1.3)
.out()



// PART 1 + 2
// fadeT = () => 0.047;
// oscF = () => 8;
// fade = () => solid(1, 1, 1).mult(solid(), [0, 0, 0.5, 1, 0.5, 0.25, 0, 0, 0, 0, 0].smooth(0.99).fast(fadeT()));
// fadeC = () => solid(1, 1, 1).mult(solid(), [0, 0, 0.25, 0.5, 1, 0.75, 1, 1, 1, 1, 1].smooth(0.99).fast(0.05));
// a1 = () => noise(2, 0.05).mult(fade());
// a2 = () => gradient(1).shift(0, 0, 1).mult(solid(), 0.7).mult(fade());
// a2b = () => gradient(1.5).shift(0, 0, 1).modulateScale(osc(8).modulateRotate(src(o0))).mult(solid(), 0.2).mult(fade());
// a3 = () => noise(1, 0.2).luma(0.9).mult(solid(), 0.25).mult(fade());
// a4 = () => solid().mult(src(o0), 0.5).mult(fade());
// a4 = () => solid().blend(src(o0), 0.9).mult(fade());// mix defaults
// mix1b= ()=> 0.049;mix1c= ()=> 0.25;mix1d= ()=> 0.3;mix1e= ()=> 0.15;mix1f= ()=> 0.15;

// SETUP
https://hydra.ojack.xyz/?code=JTJGJTJGJTIwJTJGJTJGJTIwUEFSVCUyMDElMEFmYWRlVCUyMCUzRCUyMCgpJTIwJTNEJTNFJTIwMC4wNDclM0IlMEFvc2NGJTIwJTNEJTIwKCklMjAlM0QlM0UlMjA4JTNCJTBBZmFkZSUyMCUzRCUyMCgpJTIwJTNEJTNFJTIwc29saWQoMSUyQyUyMDElMkMlMjAxKS5tdWx0KHNvbGlkKCklMkMlMjAlNUIwJTJDJTIwMCUyQyUyMDAuNSUyQyUyMDElMkMlMjAwLjUlMkMlMjAwLjI1JTJDJTIwMCUyQyUyMDAlMkMlMjAwJTJDJTIwMCUyQyUyMDAlNUQuc21vb3RoKDAuOTkpLmZhc3QoZmFkZVQoKSkpJTNCJTBBZmFkZUMlMjAlM0QlMjAoKSUyMCUzRCUzRSUyMHNvbGlkKDElMkMlMjAxJTJDJTIwMSkubXVsdChzb2xpZCgpJTJDJTIwJTVCMCUyQyUyMDAlMkMlMjAwLjI1JTJDJTIwMC41JTJDJTIwMSUyQyUyMDAuNzUlMkMlMjAxJTJDJTIwMSUyQyUyMDElMkMlMjAxJTJDJTIwMSU1RC5zbW9vdGgoMC45OSkuZmFzdCgwLjA1KSklM0IlMEFhMSUyMCUzRCUyMCgpJTIwJTNEJTNFJTIwbm9pc2UoMiUyQyUyMDAuMDUpLm11bHQoZmFkZSgpKSUzQiUwQWEyJTIwJTNEJTIwKCklMjAlM0QlM0UlMjBncmFkaWVudCgxKS5zaGlmdCgwJTJDJTIwMCUyQyUyMDEpLm11bHQoc29saWQoKSUyQyUyMDAuNykubXVsdChmYWRlKCkpJTNCJTBBYTJiJTIwJTNEJTIwKCklMjAlM0QlM0UlMjBncmFkaWVudCgxLjUpLnNoaWZ0KDAlMkMlMjAwJTJDJTIwMSkubW9kdWxhdGVTY2FsZShvc2MoOCkubW9kdWxhdGVSb3RhdGUoc3JjKG8wKSkpLm11bHQoc29saWQoKSUyQyUyMDAuMikubXVsdChmYWRlKCkpJTNCJTBBYTMlMjAlM0QlMjAoKSUyMCUzRCUzRSUyMG5vaXNlKDElMkMlMjAwLjIpLmx1bWEoMC45KS5tdWx0KHNvbGlkKCklMkMlMjAwLjI1KS5tdWx0KGZhZGUoKSklM0IlMEFhNCUyMCUzRCUyMCgpJTIwJTNEJTNFJTIwc29saWQoKS5tdWx0KHNyYyhvMCklMkMlMjAwLjUpLm11bHQoZmFkZSgpKSUzQiUwQWE0JTIwJTNEJTIwKCklMjAlM0QlM0UlMjBzb2xpZCgpLmJsZW5kKHNyYyhvMCklMkMlMjAwLjkpLm11bHQoZmFkZSgpKSUzQiUyRiUyRiUyMG1peCUyMGRlZmF1bHRzJTBBbWl4MWIlM0QlMjAoKSUzRCUzRSUyMDAuMDQ5JTNCbWl4MWMlM0QlMjAoKSUzRCUzRSUyMDAuMjUlM0JtaXgxZCUzRCUyMCgpJTNEJTNFJTIwMC4zJTNCbWl4MWUlM0QlMjAoKSUzRCUzRSUyMDAuMTUlM0JtaXgxZiUzRCUyMCgpJTNEJTNFJTIwMC4xNSUzQg==

// PART 1
//mini_motifsp
speed = 1
//mini_motiffq
oscF = () => 80;
// mini_motifno
noiseV= ()=> 1;
// mini_motif1b
mix1b= ()=> 0.049;
// mini_motif1c
mix1c= ()=> 0.25;
// mini_motif1d
mix1d= ()=> 0.3;
// mini_motif1e
mix1e= ()=> 0.15;
// mini_motif1f
mix1f= ()=> 0.15;
//
//motif1
solid().add(a1(), 0.9).add(a2(), 0.7).add(a2b(), 0.4).blend(a3().luma(0.8), 0.4).blend(a4().scale(1.09), 0.5).add(a4().scale(1.01), 0.125).add(a4().luma(0.9).thresh().modulateScale(a1()), 0.125).add(a4().posterize(1, 16).mult(osc(2).rotate(1.57)).modulateScale(a2b()), 0.8).mult(solid(0, 0, 1), 0.55).add(solid(1, 1, 1).luma(), 0.2).contrast(1.4).out(o1);
// motif2
osc(oscF(), 0.025).modulate(noise(noiseV())).out(o2);
// motif1a
solid()
// motif1b
.add(src(o1)).blend(src(o2),mix1b())
// motif1c
.add(shape(300,0.15,0.5),mix1c())
// motif1d
.mult(src(o2).scale(1.5).rotate(()=>time/64),mix1d())
// motif1e
.mult(fadeC(),mix1e())
// motif1f
.mult(src(o2).modulate(noise(1,0.15).scale(0.02,0.2),[0,0.5,1,0.7,0.5,0].smooth(0.9).fast(0.15),0),mix1f())
// motif1g
.out()

// PART 2
// motif2a
solid().add(src(o1),0.5).add(shape(300,0.15,[0.05,0.5,0.9,1.5,2].smooth(1).fast(0.02)).color(0,0,[0,0.25,0.5,1,1,1].smooth(0.9)),mix1c()*4).out()
