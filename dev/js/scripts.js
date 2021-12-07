import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, TextPlugin, MotionPathPlugin, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");


const mainTL = gsap.timeline();


function logo(){
    const tl = gsap.timeline();
    tl.from("#greenlogo",{alpha:"0",y:"+=300", duration:2, scaleY:2});
    return tl;
}

function words(){
    const tl = gsap.timeline();
   tl.from("#Pennsylvania",{alpha:0 })
}

function dirt(){
    const tl = gsap.timeline();
    tl.from("#d1", {alpha:0,rotate:120, duration:0.1})
    .from("#d2", {alpha:0,rotate:-120, duration:0.1})
    .from("#d3", {alpha:0,rotate:120, duration:0.1})

    
}



//     return tl;
// }


mainTL.add(dirt())
.add(logo())
.add(words())


GSDevTools.create();


















































