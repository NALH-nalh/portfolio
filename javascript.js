const sliderimages =[
    "ポートフォリオ画像(プログラミング)_アートボード 1.jpg",
    "ポートフォリオ画像(ライティング)_アートボード 1.jpg",
    "ポートフォリオ画像(動画編集)_アートボード 1.jpg",
    "ポートフォリオ画像(イラスト作成)_アートボード 1.jpg",
    "ポートフォリオ画像(画像編集)_アートボード 1.jpg",
];

let currentindex = 0;

const sliderimage = document.getElementById("slider-image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

sliderimage.src = sliderimages[currentindex];
sliderimage.alt = sliderimages[currentindex];

prev.addEventListener("click",()=>{
    currentindex = (currentindex-1+sliderimages.length)%sliderimages.length;
    sliderimage.src = sliderimages[currentindex];
    sliderimage.alt = sliderimages[currentindex];

    sliderimage.classList.remove("fade-anim");
    void sliderimage.offsetWidth;
    sliderimage.classList.add("fade-anim");  
});

next.addEventListener("click",()=>{
    currentindex = (currentindex+1)%sliderimages.length;
    sliderimage.src = sliderimages[currentindex];
    sliderimage.alt = sliderimages[currentindex];  

        sliderimage.classList.remove("fade-anim");
    void sliderimage.offsetWidth;
    sliderimage.classList.add("fade-anim"); 
});

const intervalTime = 3000;

setInterval(() => {
    currentindex = (currentindex + 1) % sliderimages.length;
    sliderimage.src = sliderimages[currentindex];
    sliderimage.alt = sliderimages[currentindex];

    sliderimage.classList.remove("fade-anim");
    void sliderimage.offsetWidth;
    sliderimage.classList.add("fade-anim"); 
}, intervalTime);


const profileimage = document.querySelectorAll("#profile-image");
const Programmingimage = document.querySelectorAll("#Programming-image");
const Writingimage = document.querySelectorAll("#Writing-image");
const videoedtingimage = document.querySelectorAll("#video-edting-image");
const illustraitonimage = document.querySelectorAll("#illustraiton-image");
const imageeditingimage = document.querySelectorAll("#image-editing-image");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }else{
            entry.target.classList.remove("visible");
        };
    });
},{threshold:0.3});

profileimage.forEach(el => observer.observe(el));
Programmingimage.forEach(el => observer.observe(el));
Writingimage.forEach(el => observer.observe(el));
videoedtingimage.forEach(el => observer.observe(el));
illustraitonimage.forEach(el => observer.observe(el));
imageeditingimage.forEach(el => observer.observe(el));





const profileskill = document.querySelectorAll("#profile-skill");
const Programmingskill = document.querySelectorAll("#Programming-skill");
const Writingskill = document.querySelectorAll("#Writing-skill");
const videoedtingskill = document.querySelectorAll("#video-edting-skill");
const illustraitonskill = document.querySelectorAll("#illustraiton-skill");
const imageeditingskill = document.querySelectorAll("#image-editing-skill");

const observer2 = new IntersectionObserver((entries) =>{
entries.forEach(entry=>{
    if(entry.isIntersecting){
        entry.target.classList.add("invisible");
    }else{
        entry.target.classList.remove("invisible");
    };
});
},{threshold:0.3});


profileskill.forEach(le => observer2.observe(le));
Programmingskill.forEach(le => observer2.observe(le));
Writingskill.forEach(le => observer2.observe(le));
videoedtingskill.forEach(le => observer2.observe(le));
illustraitonskill.forEach(le => observer2.observe(le));
imageeditingskill.forEach(le => observer2.observe(le));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const dott = document.getElementById("dott");

sliderimages.forEach((_,index)=>{
    const dot = document.createElement("div");
    dot.classList.add("indicator");
    if(index === currentindex){
    dot.classList.add("activer");
    }
    dot.addEventListener("click",()=>{
    currentindex = index;
    updateslider();
    });
    dott.appendChild(dot);
});

function updateslider(){
    sliderimage.src = sliderimages[currentindex];
    sliderimage.alt = sliderimages[currentindex];
    document.querySelectorAll(".indicator").forEach((dot,index)=>{
        dot.classList.toggle("activer",index === currentindex);
    });
};

prev.addEventListener("click",()=>{
    currentindex = (currentindex-1+sliderimages.length)%sliderimages.length;
    updateslider();
});

next.addEventListener("click",()=>{
    currentindex = (currentindex+1)%sliderimages.length;
    updateslider();
    
});