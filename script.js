var t1 = gsap.timeline();
gsap.set(".a",{
    opacity: 0,
    y: 50
})
gsap.set("#right img",{
    opacity: 0,
    y: 10,
    scale: 1.6 
})
t1.from("#left",{
    width: 0,
    duration: 1.2,
    ease: Expo.easeInOut
})
t1.from("#right",{
    width: 0,
    duration: 1.2,
    ease: Expo.easeInOut
})
t1.to(".a",{
    delay: -2,
    stagger: .1,
    opacity: 1,
    y:0,
    ease: Expo.easeInOut,
    duration: 2.3
})
t1.to("#right img",{
    delay: -1,
    opacity: 1,
    y:0,
    scale: 1,
    ease: Expo.easeInOut,
    duration: 1.5
})

