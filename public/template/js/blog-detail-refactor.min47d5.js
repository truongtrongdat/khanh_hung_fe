function CategoryModule(){const s=document.querySelector(".categoriesBtn");var e=document.querySelector(".asideClose");const t=document.querySelector(".asideCate"),o=document.querySelector(".bgPageOut"),i=document.querySelector("body"),r=document.querySelector(".hd"),n=document.querySelector(".mona-hiring-show");function c(){t.classList.remove("active"),o.classList.remove("active"),i.classList.remove("no-scroll"),n&&(n.style.display="block")}s&&(s.onclick=()=>{t.classList.add("active"),o.classList.add("active"),i.classList.add("no-scroll"),r.classList.add("out"),n&&(n.style.display="none")},e.onclick=()=>{c()},o.onclick=()=>{c()}),$(window).scroll(function(){var e,t,o,i;s&&(e=s,t=$(".blogContent").offset().top,o=t+$(".blogContent").height(),(i=$(e).offset().top)+$(e).height()<=o&&t<=i?s.classList.add("active"):s.classList.remove("active"))})}function createCountUpElement(t,e,o,i,s=""){let r=e;const n=(o-e)/i;!function e(){t.textContent=s?numberWithSeparator(r,s):r,(r+=n)<=o?requestAnimationFrame(e):t.textContent=s?numberWithSeparator(o,s):o}()}function numberWithSeparator(e,t){return e.toLocaleString(void 0,{useGrouping:!0,minimumFractionDigits:0,maximumFractionDigits:0}).replace(/,/g,t)}CategoryModule();let num=document.querySelectorAll(".countNum");function runLine(){var e=document.querySelectorAll(".asideBody li a");$(".content-main h2").each(function(o){$(window).scrollTop()>$(this).offset().top-500&&e.forEach(function(e,t){e.classList.remove("current"),t==o&&e.classList.add("current")})})}function SlideToggleModule(){$(document).ready(function(){$(document).ready(function(){$(".toggleOnclick").click(function(e){e.preventDefault();e=$(this).closest(".toggleParent");$(this).toggleClass("hide"),e.find(".toggleHide").stop().slideToggle()});var e=document.querySelector(".wdsContent.active");e&&$(e).find(".wdsMoreHide").stop().slideToggle(),$(".wdsMore").click(function(e){e.stopPropagation(),e.preventDefault();e=$(this).closest(".wdsContent");e&&($(e).find(".wdsMoreHide").is(":visible")||($(".wdsMoreHide").slideUp(),$(".wdsMoreHide").closest(".wdsContent").removeClass("active")),e.toggleClass("active"),e.find(".wdsMoreHide").stop().slideToggle())})})})}num.forEach(e=>{let t=parseInt(e.textContent),o=!(e.textContent=0);window.addEventListener("scroll",()=>{e.getBoundingClientRect().top<window.innerHeight&&o&&(createCountUpElement(e,0,t,75,"."),o=!1)})}),runLine(),$(window).scroll(function(){runLine()}),SlideToggleModule();const project=document.querySelector(".swiper-project-content"),lessonHome=(project&&new Swiper(project,{effect:"coverflow",slidesPerView:1.4,spaceBetween:20,centeredSlides:!0,loop:!0,slideToClickedSlide:!0,speed:800,coverflowEffect:{rotate:20,stretch:0,depth:0,modifier:1},breakpoints:{768:{loop:!0,slidesPerView:3,coverflowEffect:{rotate:20,stretch:100,depth:100,modifier:1}},1200:{slidesPerView:3.5,coverflowEffect:{rotate:20,stretch:100,depth:160,modifier:1}},1728:{slidesPerView:3.5,coverflowEffect:{rotate:25,stretch:100,depth:160,modifier:1}}}}),document.querySelector(".swiperLessonHome"));var swiper;lessonHome&&(swiper=new Swiper(lessonHome,{slidesPerView:"auto",speed:800}));const relatedArticles=document.querySelector(".related-articles"),swiperRelated=(relatedArticles&&(swiper=new Swiper(".related-articles-content-js ",{slidesPerView:4,spaceBetween:0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},500:{slidesPerView:2},768:{slidesPerView:3},1100:{slidesPerView:4}}})),document.querySelector(".swiperPosts"));swiperRelated&&(swiper=new Swiper(swiperRelated,{slidesPerView:"auto",speed:800}));