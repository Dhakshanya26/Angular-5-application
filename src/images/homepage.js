// $(function() {
//   // // Get page title
//   // var pageTitle = $("title").text();

//   // // Change page title on blur
//   // $(window).blur(function() {
//   //   $("title").text("👋");
//   // });

//   // // Change page title back on focus
//   // $(window).focus(function() {
//   //   $("title").text(pageTitle);
//   // });
// });




// init controller
var timer;
var debounce_time = 1000;
var controller = new ScrollMagic.Controller();


// // build scene
// new ScrollMagic.Scene({
//     duration: 850, // the scene should last for a scroll distance of 100px
//   })
//   .setTween("#liquid", 5, {
//     attr: {
//       scale: "500"
//     }
//   }) // trigger a TweenMax.to tween
//   .addTo(controller);

// new ScrollMagic.Scene({
//     duration: 150, // the scene should last for a scroll distance of 100px
//   })
//   .setTween("#portfolio-of", 5, {
//     css: {
//       opacity: "0",
//     }
//   }) // trigger a TweenMax.to tween
//   .addTo(controller);

// new ScrollMagic.Scene({
//     duration: 150, // the scene should last for a scroll distance of 100px
//   })
//   .setTween("#tagline", 5, {
//     css: {
//       opacity: "0",
//     }
//   }) // trigger a TweenMax.to tween
//   .addTo(controller);

// new ScrollMagic.Scene({
//     duration: 150, // the scene should last for a scroll distance of 100px
//     offset: 50
//   })
//   .setTween("#fadeaway", 5, {
//     css: {
//       opacity: "0"

//     }
//   }) // trigger a TweenMax.to tween
//   .addTo(controller);

// // build scene
// new ScrollMagic.Scene({
//     triggerElement: "#footer",
//     duration: 400, // the scene should last for a scroll distance of 100px
//     offset: 200 // start this scene after scrolling for 50px
//   })
//   .setTween("#badge_outer", 5, {
//     css: {
//       rotation: "360"
//     },
//     ease: Linear.easeInOut
//   }) // trigger a TweenMax.to tween
//   .addTo(controller);

// new ScrollMagic.Scene({
//     duration: 2000, // the scene should last for a scroll distance of 100px
//   })
//   .setTween("#scrollo", 5, {
//     css: {
//       rotation: "360"
//     },
//     ease: Linear.easeInOut
//   }) // trigger a TweenMax.to tween
//   .addTo(controller);

// new ScrollMagic.Scene({
//     duration: 400, // the scene should last for a scroll distance of 100px
//   })
//   .setTween("#scrollolol", 5, {
//     css: {
//       opacity: "0"
//     },
//     ease: Linear.easeInOut
//   }) // trigger a TweenMax.to tween
//   .addTo(controller);




// new ScrollMagic.Scene({
//     triggerElement: "#footer",
//     duration: 400
//   })
//   .setTween("#me_photo", {
//     css: {
//       top: "20px"
//     },
//     ease: Linear.easeInOut
//   })
//   .addTo(controller);

//   new ScrollMagic.Scene({
//       triggerElement: "#portfolio",
//       duration: 2500,
//       offset: -200,
//     })
//     .setTween("#portfoliointro", {
//       css: {
//         top: "500px"
//       },
//       ease: Linear.easeInOut
//     })
//     .addTo(controller);


// // build scene
// new ScrollMagic.Scene({
//     triggerElement: "#footer",
//     duration: 600, // the scene should last for a scroll distance of 100px
//     offset: 0 // start this scene after scrolling for 50px
//   })
//   .setTween("#footerscroll", {
//     opacity: "0.6",
//   })
//   .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#footer",
    duration: 300, // the scene should last for a scroll distance of 100px
    offset: -300

  })
  .setTween("#webgl", {
    opacity: "0.2",
  })
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#portfolio",
    duration: 600, // the scene should last for a scroll distance of 100px
    offset: -300

  })
  .setTween("#webgl", {
    opacity: "0.4",

  })
  .addTo(controller);

// new ScrollMagic.Scene({
//     triggerElement: "#spacer1"
//   })
//   .setClassToggle("#container", "active") // add class toggle
//   .addTo(controller);

// new ScrollMagic.Scene({
//     triggerElement: "#footer"
//   })
//   .setClassToggle("#container", "footer") // add class toggle
//   .addTo(controller);

// new ScrollMagic.Scene({
//     triggerElement: "#portfolio h1",
//     offset: 100
//   })
//   .setClassToggle("#portfolio h1", "loaded") // add class toggle
//   .addTo(controller);

// new ScrollMagic.Scene({
//     offset: 700,
//     duration: 2500
//   })
//   .setClassToggle("#scrollin", "loaded") // add class toggle
//   .addTo(controller);

//   new ScrollMagic.Scene({
//       offset: 400,
//       duration: 1000
//     })
//     .setClassToggle("#scrollin", "mobloaded") // add class toggle
//     .addTo(controller);

//     new ScrollMagic.Scene({
//         offset: 1200,
//       })
//       .setClassToggle("#scrollin", "mobgone") // add class toggle
//       .addTo(controller);

// new ScrollMagic.Scene({
//     offset: 800
//   })
//   .setClassToggle("#logo", "loaded") // add class toggle
//   .addTo(controller);

// new ScrollMagic.Scene({
//     triggerElement: "#portfolio"
//   })
//   .setClassToggle(".introtitle", "hidden") // add class toggle
//   .addTo(controller);

// new ScrollMagic.Scene({
//     triggerElement: "#portfolio"
//   })
//   .setClassToggle(".portfoliotitle", "show") // add class toggle
//   .addTo(controller);

// new ScrollMagic.Scene({
//     triggerElement: "#about"
//   })
//   .setClassToggle(".portfoliotitle", "hidden") // add class toggle
//   .addTo(controller);

// new ScrollMagic.Scene({
//     triggerElement: "#about"
//   })
//   .setClassToggle(".footertitle", "show") // add class toggle
//   .addTo(controller);

// new ScrollMagic.Scene({
//     triggerElement: "#dirt_days",
//     reverse: false
//   })
//   .setClassToggle("#dirt_days", "loaded") // add class toggle
//   .addTo(controller);


// new ScrollMagic.Scene({
//     triggerElement: "#asia",
//     reverse: false
//   })
//   .setClassToggle("#asia", "loaded") // add class toggle
//   .addTo(controller);;


// new ScrollMagic.Scene({
//     triggerElement: "#naturale",
//     reverse: false
//   })
//   .setClassToggle("#naturale", "loaded") // add class toggle
//   .addTo(controller);

//   new ScrollMagic.Scene({
//       triggerElement: "#sassi",
//       reverse: false
//     })
//     .setClassToggle("#sassi", "loaded") // add class toggle
//     .addTo(controller);
