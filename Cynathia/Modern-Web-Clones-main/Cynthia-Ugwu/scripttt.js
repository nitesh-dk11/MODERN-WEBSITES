
function nesi_dk (nesi){

    let timeout ; 
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
                       document.querySelector('"'+nesi+'"').style.transform = `translate(${clientX}px ,${clientY}px) scale(1,1)`;
                   },100)
           
               })
           }
           function mouseFollower(xscale , yscale) {
               window.addEventListener("mousemove" , function({clientX,clientY}){
                    document.querySelector('"'+nesi+'"').style.transform = `translate(${clientX}px ,${clientY}px) scale(${xscale} ,${yscale})`;
               })
           }
    
           circleOval() ;
           mouseFollower();
}
nesi_dk(".miniCircle");