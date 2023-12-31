const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

  
 let cDate = document.querySelector(".date") ;
 
 cDate.innerText = new Date()

 const date = new Date();


 



 let timeout ;  // circle oval ka hy ye part 

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".belem",{
        y:'0',
        duration:1.5,
        ease: Expo.easeInOut,
        stagger:0.2
        , delay:-1.2
    })

    .from(".hero_bottom",{
        y:'+12',
        opacity:0,
        duratiom: 1.5, 
    })
}



function circleOval() {
 let xscale = 1
 let yscale =1 

 let xprev = 0 ;
 let yprev = 0;


    window.addEventListener("mousemove" , function({clientX,clientY}){
         clearTimeout(timeout);
         let xdiff = clientX - xprev ;
         let ydiff = clientY - yprev ;

         xprev = clientX
         yprev = clientY

         xscale = gsap.utils.clamp(0.8 ,1.4 , xdiff)
         yscale = gsap.utils.clamp(0.8 ,1.4 , ydiff)

         mouseFollower(xscale ,yscale)
        
        timeout = setTimeout(()=>{
            document.querySelector(".minicircle").style.transform = `translate(${clientX}px ,${clientY}px) scale(1,1)`;
        },100)

    })
}


function mouseFollower(xscale , yscale) {
    window.addEventListener("mousemove" , function({clientX,clientY}){
         document.querySelector(".minicircle").style.transform = `translate(${clientX}px ,${clientY}px) scale(${xscale} ,${yscale})`;
    })
}



document.querySelectorAll(".elem").forEach(function(elem) {

    let rotate = 0 ;
    let differ = 0 ;

    elem.addEventListener("mouseleave", function(dets){

        

         gsap.to(elem.querySelector("h1 ,h5"),{
            opacity: 0.7 ,
            scale:1 ,
            duration:1
         })

         gsap.to(elem.querySelector("h5"),{
            opacity: 1 ,
            scale:1 ,
            duration:1.3
         })


     gsap.to(elem.querySelectorAll("img") ,{
       opacity: 0 ,
    
          })
    })




    elem.addEventListener("mousemove", function(dets){

        let imgtop =  dets.clientY - elem.getBoundingClientRect().top 

         diff = dets.clientX - rotate ;
         rotate = dets.clientX;

         gsap.to(elem.querySelector("h1 ,h5"),{
            opacity: 0.5 ,
            scale:0.9 ,
         })

         gsap.to(elem.querySelector("h5"),{
            opacity: 0.6 ,
            scale:0.9 ,
         })


     gsap.to(elem.querySelectorAll("img") ,{
       opacity: 1 ,
       ease: Power3, 
       top:imgtop,
       left:dets.clientX ,
       rotate:   gsap.utils.clamp(-20,20,diff *0.5) ,
          })
    })
})


mouseFollower();
firstPageAnim();
circleOval() ;



