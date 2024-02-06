gsap.from("#box1",{
    scale:1.5,
    duration:2,
    delay:1
})
gsap.to("#box2",{
    scrollTrigger:{
        trigger:"#box2",
        scroller:"body",
        markers: false,
        start:"top 80%",
        end:"bottom 10%",
        scrub: 2,
    },
    rotate:360,
    duration:2
})