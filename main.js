const posts = [
    {
        "id": 1,
        "content": "La pioggia è quella che ti fa correre per andare sotto il primo tendone che trovi, visto che hai dimenticato l'ombrello a casa. E' l'acqua che scende dal cielo, quando le nubi grigie si addensano. E se fuori cade la pioggia, tu cosa fai? Leggi la vasta raccolta di frasi, aforismi e citazioni sulla pioggia che abbiamo selezionato per te!",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "I buoni hanno il viso di pane, le guance di mollica e gli occhi dorati come il grano. Solo nel sorriso si vede una linea più spessa, come una crosta indurita dalle avversità",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Se sei abbastanza fortunato di aver vissuto a Parigi come un giovane uomo, allora per il resto della tua vita ovunque andrai, sarà con te, a Parigi è un continuo banchettare.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "“Ogni lettore, quando legge, legge se stesso. L’opera dello scrittore è soltanto uno strumento ottico offerto al lettore per permettergli di discernere quello che, senza libro, non avrebbe forse visto in se stesso”.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "null"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "La scuola è il nostro passaporto per il futuro, poiché il domani appartiene a coloro che oggi si preparano ad affrontarlo.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let postLikes = [];

let container2 = document.getElementById("container");


function creazionePost( posts ){
    container2.innerHTML +=
    `<div class="post">
    <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                    
                        <img class="profile-pic" src="${posts.author.image}" alt="${posts.author.name}">                    
                    </div>
                    <div class="post-meta__data" id="container">
                        <div class="post-meta__author">${posts.author.name}</div>
                        <div class="post-meta__time">${posts.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts.content}</div>
            <div class="post__image">
                <img src="${posts.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" id="like"  data-postid="${posts.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="${posts.id}"  class="js-likes-counter">${posts.likes}</b> persone
                    </div>
                </div> 
            </div> `           
  }


function stampaPost( arrayPost ){
    for(let i=0; i < arrayPost.length; i++){
        creazionePost( arrayPost[i] )
        /*let dataAmericana = arrayPost[i].created.split("-");
        console.log(dataAmericana)
        let dataItaliana = dataAmericana[2] + "-" +dataAmericana[1] + "-" + dataAmericana[0]
        //console.log(dataItaliana)
        let dataContainer = document.querySelectorAll(".post-meta__time");
        dataContainer.innerHTML = dataItaliana
        //console.log(dataContainer)*/
}}

stampaPost( posts )

/*if(posts[i].author.image == null){
    posts[i].author.image = "??"
    console.log(posts[i].author.image)
}*/


/*objIndex = posts.findIndex((obj => obj.id == 1));

//Log object to Console.
console.log("Before update: ", posts[objIndex])

//Update object's name property.
posts[objIndex].created = "Laila"

//Log object to console again.
console.log("After update: ", posts[objIndex])
*/

posts.forEach((element, index) => {
    if(element.author.image == "null") {
        element[index] = "??";
        console.log(element[index])
        element[index].innerHTML  = "??";
    }
});

/*let dataAmericana = posts[i].created.split("-");
let dataItaliana = dataAmericana[2] + "-" +dataAmericana[1] + "-" + dataAmericana[0]
console.log(dataItaliana)
let dataContainer = document.querySelectorAll(".post-meta__time");
dataContainer.innerHTML = dataItaliana
//console.log(dataContainer)*/


let newArr = posts.map(obj => {
    if (obj.author.image == "null") {
    return {...obj.author, image: '??'};
}

return obj;
});

console.log(newArr);




let likeButton = document.querySelectorAll(".like-button");
let likeButtonIcon = document.querySelectorAll(".like-button__icon");
let likeButtonLabel = document.querySelectorAll(".like-button__label")
let likePostCounter = document.getElementById(".js-likes-counter")


for (let i = 0; i < likeButton.length; i++){
    likeButton[i].addEventListener("click", function(){
    let likePostCounter = document.getElementById(parseInt(i+1))
    console.log(likePostCounter)
    if(likeButtonIcon[i].classList.contains('like-button--liked')){
        likeButtonIcon[i].classList.remove("like-button--liked");
        likeButtonLabel[i].classList.remove("like-button--liked");
        likePostCounter.innerHTML = (parseInt( likePostCounter.innerHTML ) - 1 )
        //postLikes.splice([i],1)
        //console.log([i])
    }else{
        likeButtonIcon[i].classList.add("like-button--liked");
        likeButtonLabel[i].classList.add("like-button--liked");
        likePostCounter.innerHTML = (parseInt( likePostCounter.innerHTML ) + 1 )
        postLikes.push([i+1])
        
    }
    console.log(postLikes)
})}




