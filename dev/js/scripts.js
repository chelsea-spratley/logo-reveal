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
   tl.from("#Pennsylvania",{alpha:0})
   .from("#Horticultural",{alpha:0})
   .from("#Society",{alpha:0})

   return tl;
}

function dirt(){
    const tl = gsap.timeline();
    tl.from("#d1", {alpha:0,rotate:120, duration:0.1, opacity: 0})
    .from("#d2", {alpha:0,rotate:-120, duration:0.1})
    .from("#d3", {alpha:0,rotate:120, duration:0.1})
    .from("#d4", {alpha:0,rotate:-120, duration:0.1})
    .from("#d5", {alpha:0,rotate:120, duration:0.1})
    .from("#d6", {alpha:0,rotate:-120, duration:0.1})
    .from("#d7", {alpha:0,rotate:120, duration:0.1})
    .from("#d8", {alpha:0,rotate:-120, duration:0.1})
    .from("#d9", {alpha:0,rotate:120, duration:0.1})
    .from("#d10", {alpha:0,rotate:-120, duration:0.1})
    .from("#d11", {alpha:0,rotate:120, duration:0.1})
    .from("#d12", {alpha:0,rotate:-120, duration:0.1})
    .from("#d13", {alpha:0,rotate:120, duration:0.1})
    .from("#d14", {alpha:0,rotate:-120, duration:0.1})
    .from("#d15", {alpha:0,rotate:120, duration:0.1})
    .from("#d16", {alpha:0,rotate:-120, duration:0.1})
    .from("#d17", {alpha:0,rotate:120, duration:0.1})
    .from("#d18", {alpha:0,rotate:-120, duration:0.1})
    .from("#d19", {alpha:0,rotate:120, duration:0.1})
    .from("#d20", {alpha:0,rotate:-120, duration:0.1})
    .from("#d21", {alpha:0,rotate:120, duration:0.1})
    .from("#d22", {alpha:0,rotate:-120, duration:0.1})
    .from("#d23", {alpha:0,rotate:120, duration:0.1})
    .from("#d24", {alpha:0,rotate:-120, duration:0.1})
    .from("#d25", {alpha:0,rotate:120, duration:0.1})
    .from("#d26", {alpha:0,rotate:-120, duration:0.1})
    .from("#d27", {alpha:0,rotate:120, duration:0.1})
    .from("#d28", {alpha:0,rotate:-120, duration:0.1})
    .from("#d29", {alpha:0,rotate:120, duration:0.1})
    .from("#d30", {alpha:0,rotate:-120, duration:0.1})
    .from("#d31", {alpha:0,rotate:120, duration:0.1})
    .from("#d32", {alpha:0,rotate:-120, duration:0.1})
    .from("#d33", {alpha:0,rotate:120, duration:0.1})
    .from("#d34", {alpha:0,rotate:-120, duration:0.1})
    .from("#d35", {alpha:0,rotate:120, duration:0.1})
    .from("#d36", {alpha:0,rotate:-120, duration:0.1})
    .from("#d37", {alpha:0,rotate:120, duration:0.1})
    .from("#d38", {alpha:0,rotate:-120, duration:0.1})
    .from("#d39", {alpha:0,rotate:120, duration:0.1})
    .from("#d40", {alpha:0,rotate:-120, duration:0.1})
    .from("#d41", {alpha:0,rotate:120, duration:0.1})
    .from("#d42", {alpha:0,rotate:-120, duration:0.1})
    .from("#d43", {alpha:0,rotate:120, duration:0.1})
    .from("#d44", {alpha:0,rotate:-120, duration:0.1})
    .from("#d45", {alpha:0,rotate:120, duration:0.1})
    .from("#d46", {alpha:0,rotate:-120, duration:0.1})
    .from("#d47", {alpha:0,rotate:120, duration:0.1})
    .from("#d48", {alpha:0,rotate:-120, duration:0.1})
    .from("#d49", {alpha:0,rotate:120, duration:0.1})
    .from("#d50", {alpha:0,rotate:-120, duration:0.1})
    .from("#d51", {alpha:0,rotate:120, duration:0.1})
    .from("#d52", {alpha:0,rotate:-120, duration:0.1})
    .from("#d53", {alpha:0,rotate:120, duration:0.1})
    .from("#d54", {alpha:0,rotate:-120, duration:0.1})
    .from("#d55", {alpha:0,rotate:120, duration:0.1})
    .from("#d56", {alpha:0,rotate:-120, duration:0.1})
    .from("#d57", {alpha:0,rotate:120, duration:0.1})
    .from("#d58", {alpha:0,rotate:-120, duration:0.1})
    .from("#d59", {alpha:0,rotate:120, duration:0.1})
    .from("#d60", {alpha:0,rotate:-120, duration:0.1})
    .from("#d61", {alpha:0,rotate:120, duration:0.1})
    .from("#d62", {alpha:0,rotate:-120, duration:0.1})
    .from("#d63", {alpha:0,rotate:120, duration:0.1})
    .from("#d64", {alpha:0,rotate:-120, duration:0.1})
    .from("#d65", {alpha:0,rotate:120, duration:0.1})
    .from("#d66", {alpha:0,rotate:-120, duration:0.1})
    .from("#d67", {alpha:0,rotate:120, duration:0.1})
    .from("#d68", {alpha:0,rotate:-120, duration:0.1})
    .from("#d69", {alpha:0,rotate:120, duration:0.1})
    .from("#d70", {alpha:0,rotate:-120, duration:0.1})
    .from("#d71", {alpha:0,rotate:120, duration:0.1})
    .from("#d72", {alpha:0,rotate:-120, duration:0.1})
    .from("#d73", {alpha:0,rotate:120, duration:0.1})
    .from("#d74", {alpha:0,rotate:-120, duration:0.1})
    .from("#d75", {alpha:0,rotate:120, duration:0.1})
    .from("#d76", {alpha:0,rotate:-120, duration:0.1})
    .from("#d77", {alpha:0,rotate:120, duration:0.1})
    .from("#d78", {alpha:0,rotate:-120, duration:0.1})
    .from("#d79", {alpha:0,rotate:120, duration:0.1})
    .from("#d80", {alpha:0,rotate:-120, duration:0.1})
    .from("#d81", {alpha:0,rotate:120, duration:0.1})
    .from("#d82", {alpha:0,rotate:-120, duration:0.1})
    .from("#d83", {alpha:0,rotate:120, duration:0.1})
    .from("#d84", {alpha:0,rotate:-120, duration:0.1})
    .from("#d85", {alpha:0,rotate:120, duration:0.1})
    .from("#d86", {alpha:0,rotate:-120, duration:0.1})
    .from("#d87", {alpha:0,rotate:120, duration:0.1})
    .from("#d88", {alpha:0,rotate:-120, duration:0.1})
    .from("#d89", {alpha:0,rotate:120, duration:0.1})
    .from("#d90", {alpha:0,rotate:-120, duration:0.1})
    .from("#d91", {alpha:0,rotate:120, duration:0.1})
    .from("#d92", {alpha:0,rotate:-120, duration:0.1})
    .from("#d93", {alpha:0,rotate:120, duration:0.1})
    .from("#d94", {alpha:0,rotate:-120, duration:0.1})
    .from("#d95", {alpha:0,rotate:120, duration:0.1})
    .from("#d96", {alpha:0,rotate:-120, duration:0.1})
    .from("#d97", {alpha:0,rotate:120, duration:0.1})
    .from("#d98", {alpha:0,rotate:-120, duration:0.1})
    .from("#d99", {alpha:0,rotate:120, duration:0.1})
    .from("#d100", {alpha:0,rotate:-120, duration:0.1})
    .from("#d101", {alpha:0,rotate:120, duration:0.1})
    .from("#d102", {alpha:0,rotate:-120, duration:0.1})
    .from("#d103", {alpha:0,rotate:120, duration:0.1})
    .from("#d104", {alpha:0,rotate:-120, duration:0.1})
    .from("#d105", {alpha:0,rotate:120, duration:0.1})
    .from("#d106", {alpha:0,rotate:-120, duration:0.1})
    .from("#d107", {alpha:0,rotate:120, duration:0.1})
    .from("#d108", {alpha:0,rotate:-120, duration:0.1})
    .from("#d109", {alpha:0,rotate:120, duration:0.1})
    .from("#d110", {alpha:0,rotate:-120, duration:0.1})
    .from("#d111", {alpha:0,rotate:120, duration:0.1})
    .from("#d112", {alpha:0,rotate:-120, duration:0.1})
    .from("#d113", {alpha:0,rotate:120, duration:0.1})
    .from("#d114", {alpha:0,rotate:-120, duration:0.1})
    .from("#d115", {alpha:0,rotate:120, duration:0.1})
    .from("#d116", {alpha:0,rotate:-120, duration:0.1})
    .from("#d117", {alpha:0,rotate:120, duration:0.1})
    .from("#d118", {alpha:0,rotate:-120, duration:0.1})
    .from("#d119", {alpha:0,rotate:120, duration:0.1})
    .from("#d120", {alpha:0,rotate:-120, duration:0.1})
    .from("#d121", {alpha:0,rotate:120, duration:0.1})
    .from("#d122", {alpha:0,rotate:-120, duration:0.1})
    .from("#d123", {alpha:0,rotate:120, duration:0.1})
    .from("#d124", {alpha:0,rotate:-120, duration:0.1})
    .from("#d125", {alpha:0,rotate:120, duration:0.1})
    .from("#d126", {alpha:0,rotate:-120, duration:0.1})
    .from("#d127", {alpha:0,rotate:120, duration:0.1})
    .from("#d128", {alpha:0,rotate:-120, duration:0.1})
    .from("#d129", {alpha:0,rotate:120, duration:0.1})
    .from("#d130", {alpha:0,rotate:-120, duration:0.1})
    .from("#d131", {alpha:0,rotate:120, duration:0.1})
    
    
    return tl;
}



mainTL.add(dirt())
.add(logo())
.add(words())


GSDevTools.create();


















































