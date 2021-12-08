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

   return tl;
}

function dirt(){
    const tl = gsap.timeline();
    tl.from("#d1", {alpha:0,rotate:120, duration:0.1,opacity:0})
    .from("#d2", {alpha:0,rotate:-120, duration:0.1})
    .from("#d3", {alpha:0,rotate:120, duration:0.1})
    .from("#d4", {alpha:0,rotate:120, duration:0.1})
    .from("#d5", {alpha:0,rotate:120, duration:0.1})
    .from("#d6", {alpha:0,rotate:120, duration:0.1})
    .from("#d7", {alpha:0,rotate:120, duration:0.1})
    .from("#d8", {alpha:0,rotate:120, duration:0.1})
    .from("#d9", {alpha:0,rotate:120, duration:0.1})
    .from("#d10", {alpha:0,rotate:120, duration:0.1})
    .from("#d11", {alpha:0,rotate:120, duration:0.1})
    .from("#d12", {alpha:0,rotate:120, duration:0.1})
    .from("#d13", {alpha:0,rotate:120, duration:0.1})
    .from("#d14", {alpha:0,rotate:120, duration:0.1})
    .from("#d15", {alpha:0,rotate:120, duration:0.1})
    .from("#d16", {alpha:0,rotate:120, duration:0.1})
    .from("#d17", {alpha:0,rotate:120, duration:0.1})
    .from("#d18", {alpha:0,rotate:120, duration:0.1})
    .from("#d19", {alpha:0,rotate:120, duration:0.1})
    .from("#d20", {alpha:0,rotate:120, duration:0.1})
    .from("#d21", {alpha:0,rotate:120, duration:0.1})
    .from("#d22", {alpha:0,rotate:120, duration:0.1})
    .from("#d23", {alpha:0,rotate:120, duration:0.1})
    .from("#d24", {alpha:0,rotate:120, duration:0.1})
    .from("#d25", {alpha:0,rotate:120, duration:0.1})
    .from("#d26", {alpha:0,rotate:120, duration:0.1})
    .from("#d27", {alpha:0,rotate:120, duration:0.1})
    .from("#d28", {alpha:0,rotate:120, duration:0.1})
    .from("#d29", {alpha:0,rotate:120, duration:0.1})
    .from("#d30", {alpha:0,rotate:120, duration:0.1})
    .from("#d31", {alpha:0,rotate:120, duration:0.1})
    .from("#d32", {alpha:0,rotate:120, duration:0.1})
    .from("#d33", {alpha:0,rotate:120, duration:0.1})
    .from("#d34", {alpha:0,rotate:120, duration:0.1})
    .from("#d35", {alpha:0,rotate:120, duration:0.1})
    .from("#d36", {alpha:0,rotate:120, duration:0.1})
    .from("#d37", {alpha:0,rotate:120, duration:0.1})
    .from("#d38", {alpha:0,rotate:120, duration:0.1})
    .from("#d39", {alpha:0,rotate:120, duration:0.1})
    .from("#d40", {alpha:0,rotate:120, duration:0.1})
    .from("#d41", {alpha:0,rotate:120, duration:0.1})
    .from("#d42", {alpha:0,rotate:120, duration:0.1})
    .from("#d43", {alpha:0,rotate:120, duration:0.1})
    .from("#d44", {alpha:0,rotate:120, duration:0.1})
    .from("#d45", {alpha:0,rotate:120, duration:0.1})
    
    return tl;
}



//     return tl;
// }


mainTL.add(dirt())
.add(logo())
.add(words())


GSDevTools.create();


















































