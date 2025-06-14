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
});

next.addEventListener("click",()=>{
    currentindex = (currentindex+1)%sliderimages.length;
    sliderimage.src = sliderimages[currentindex];
    sliderimage.alt = sliderimages[currentindex];  
});