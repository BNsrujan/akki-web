const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
    });
document.querySelector("#ftext button")
.addEventlistener("mouseover", function(){
gsap.to("#future video",{
opacity: 1,
duration:1,
ease: Power4
})
})

document.querySelector("#ftext button")
.addEventlistener("mouseleave", function(){
gsap.to("#future video",{
opacity: 0,
duration:1,
ease: Power4
})
})