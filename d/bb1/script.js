//center the container
TweenMax.set(".container, #wrap", {position: 'absolute',left: '50%',xPercent: -50})
// just fix scaling so I can see what's going on
TweenMax.set("#fullSVG", {scale:.5, y:-200, x:-130});
TweenMax.set("#basketballFirst", {visibility: "hidden"});


// SVG MOTION PATH
var values = MorphSVGPlugin.pathDataToBezier("#motionPath", {align: "#basketball"});

// center the ball on the path and set the ball to the first 'values' of the motion path
TweenLite.set("#basketball", {
    x: values[0].x,
  y: values[0].y, 
  xPercent: -50,
  yPercent: -50,
  transformOrigin: "50% 50%"
});


// GSAP animate player and ball
var legs = new TimelineMax({yoyo:true, repeat:-1});
legs
.set("#basketball", {y:0})
 .to("#leg-front", 1,  {morphSVG:"#SHOTleg-front", ease:Expo.easeIn}, "0")
.to("#leg-front-boot", 1,  {morphSVG:"#SHOTleg-front-boot", ease:Expo.easeIn}, "0")
.to("#leg-front-sheen", 1,  {morphSVG:"#SHOTleg-front-sheen", ease:Expo.easeIn}, "0")
.to("#leg-part-back", 1,  {morphSVG:"#SHOTleg-part-back", ease:Expo.easeIn}, "0")
.to("#boot-2", 1,  {morphSVG:"#SHOTboot-2", ease:Expo.easeIn}, "0")
.to("#head-move", 1,  {morphSVG:"#SHOThead-move", ease:Expo.easeIn}, "0")
.to("#headPart1", 1,  {morphSVG:"#SHOTheadPart1", ease:Expo.easeIn}, "0")
.to("#headPart2", 1,  {morphSVG:"#SHOTheadPart2", ease:Expo.easeIn}, "0")
.to("#headPart3", 1,  {morphSVG:"#SHOTheadPart3", ease:Expo.easeIn}, "0")

.to("#arm-front-arm", 1, {morphSVG:{shape:"#SHOTarm-front-arm", shapeIndex:0}, ease:Expo.easeIn}, "0")
.to("#arm-front-hand", 1,  {morphSVG:"#SHOTarm-front-hand", ease:Expo.easeIn}, "0")
.to("#arm-back-arm", 1,  {morphSVG:{shape:"#SHOTarm-back-arm", shapeIndex:0}, ease:Expo.easeIn}, "0")

.to("#arm-back-hand", 1,  {morphSVG:"#SHOTarm-back-hand", ease:Expo.easeIn}, "0")
.to("#head, #body, #arm-front, #arm-back", 1,  {y:-17, ease:Expo.easeIn}, "0")
.to("#basketball", 1,  {y:-80,  ease:Expo.easeIn}, "0")
//.set("#basketballFirst", {visibility: "hidden"})
//.set("#basketball", {visibility: "visible"})
.to("#basketball", .85, {bezier: {values: values, type: "cubic", autoRotate: false }, ease:Sine.easeIn})
.to("#basketball", .85,  {y:87,  ease:Expo.easeOut})
.to("#basketball", .6,  {y:350,  ease:Expo.easeIn})
.to("#basketball", .4,  {y:167,  ease:Expo.easeOut})
.to("#basketball", .65,  {y:350,  ease:Expo.easeIn});



/*
TweenMax.to("#basketball", 1.2, {
      bezier: { values, type: "cubic", autoRotate: true },
      ease:Sine.easeIn,
      delay:  1.2,
      repeat: -1,      
    });

*/
//comment out next line to disable findShapeIndex() UI
//findShapeIndex("#arm-front-arm", "#SHOTarm-front-arm");

// my Master Timeline runs here
//var masterTimeline = new TimelineMax({repeat:-1});
//  masterTimeline;