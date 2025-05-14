let toggleBtn = document.querySelector("#navbar-toggler");
let linkContainer = document.querySelector(".links");



toggleBtn.addEventListener("click", ()=>{
    
    linkContainer.classList.toggle("active");
})



/*let cards = document.querySelectorAll(".card");
let overlayBox = document.querySelector(".overlay");

console.log('success');
console.log(cards, overlayBox);


cards.forEach(card=>{
    card.addEventListener("click", ()=>{
        
       overlayBox.classList.toggle(".overlay-active"); 
    })
})

*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".link");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry=>{
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`.link[href="#${id}"]`);
            if(entry.isIntersecting){
                navLinks.forEach(a => a.classList.remove("active"));
                link.classList.add("active");
            } 
            
        });
    }, {
        threshold: 0.5,
    }
);

sections.forEach(section => {
    observer.observe(section);
    
});



















