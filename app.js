var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
const header =document.querySelector("header");
const sectionOne = document.querySelector("#home");
 
const sectionOneoptions ={
    rootMargin: "-200px 0px 0px 0px"
} ;

const sectionOneObserver new IntersectionObserver(function(entries, sectiontOneObserver)
{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
                 header.classList.add("nav-link");
        }else {
                 header.classList.remove("nav-link");
        }
    
    });
}
, sectionOneoptions);

sectionOneObserver.observer(sectionOne);
  



const header =document.querySelector("header");
const bodyTag =document.querySelector("body");
const mYnav =document.getElementsByClassName("nav-link");
myElem =document.querySelector("nav li a");
let scrolled = () => {
    let dec = scrollY / {(bodyTag.scrollHeight - innerHeight)};
    return Math.floor(dec * 10);
}


addEventListener("scroll",() => 
{
    myNav.style.setProperty("background",scrolled() > 50 ?: "var(--color2")": "var(--color1)"
    )
})