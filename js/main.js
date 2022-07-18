
//getting all required elements
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    }
    
}


const navi = document.querySelector('.navdesktop-list')

const changeStyleNav = () => {
	navi.classList.toggle('shrink', window.scrollY > 210)
}

window.addEventListener('scroll', changeStyleNav)

const navimob = document.querySelector('.navmobile-list')

const changeStyleNavmob = () => {
	navimob.classList.toggle('shrink', window.scrollY > 100)
}

window.addEventListener('scroll', changeStyleNavmob)

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active')
	navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(n =>
	n.addEventListener('click', () => {
		hamburger.classList.remove('active')
		navMenu.classList.remove('active')
	})
)


// const menuItems = document.querySelectorAll('a')
// const scrollSpySections = document.querySelectorAll('.section')


// const handleScrollSpy = () => {
//     if(document.body.classList.contains('main-page')) {

//         const sections = []

//         scrollSpySections.forEach(section => {
//             // console.log(window.scrollY);
//             // wartość scrolla
//             // console.log(section.offsetTop);
//             // odległośc danej sekcji od górnej krawędzi przeglądarki
//             // console.log(section.offsetHeight);
//             // wysokość każdej z sekcji

//             if(window.scrollY <= section.offsetTop + section.offsetHeight -103) {
//                 sections.push(section)
               
//                 const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
                
//                 menuItems.forEach(item => item.classList.remove('activee'))

//                 activeSection.classList.add('activee')
//             }
//         })
//     }
// }


// window.addEventListener('scroll', handleScrollSpy)