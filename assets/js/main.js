const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
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
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
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
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
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
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const postLikedId = [];

/*
const listaPost = document.getElementById("container");

const postHtml = document.createElement("div");
postHtml.classList.add("post");

const postHeader = document.createElement("div");
postHeader.classList.add("post__header");

const postMeta = document.createElement("div");
postMeta.classList.add("post-meta");

const postMetaIcon = document.createElement("div");
postMetaIcon.classList.add("post-meta__icon");

const profilePic = document.createElement("img");
profilePic.classList.add("profile-pic");

const postMetaData = document.createElement("div");
postMetaData.classList.add("post-meta__data");

const postMetaAuthor = document.createElement("div");
postMetaAuthor.classList.add("post-meta__author");

const postMetaTime = document.createElement("div");
postMetaTime.classList.add("post-meta__time");

const postText = document.createElement("div");
postText.classList.add("post__text");

const postImg = document.createElement("div");
postImg.classList.add("post__image");

const postImageFile = document.createElement("img");

const postFooter = document.createElement("div");
postFooter.classList.add("post__footer");


const postLike = document.createElement("div");
postLike.classList.add("likes", "js-likes");

const postLikeCta = document.createElement("div");
postLikeCta.classList.add("likes__cta");

const postLikeButton= document.createElement("a");
postLikeButton.classList.add("like-button",  "js-like-button");
postLikeButton.setAttribute("data-postid", "0");

const postLikeButtonIcon= document.createElement("i");
postLikeButtonIcon.classList.add("like-button__icon",  "fas", "fa-thumbs-up");
postLikeButtonIcon.setAttribute("aria-hidden", "true");

const postLikeText = document.createElement("span");
postLikeText.classList.add("like-button__label");
postLikeText.innerText = " Mi piace";

const postLikeCounter = document.createElement("div");
postLikeCounter.classList.add("likes__counter");

const postLikeNumber = document.createElement("b");
postLikeNumber.classList.add("js-likes-counter");
postLikeNumber.setAttribute("id", "like-counter-0")

postLikeCounter.append("Piace a ");
postLikeCounter.appendChild(postLikeNumber);
postLikeCounter.append(" persone"); 







postLikeButton.appendChild(postLikeButtonIcon);
postLikeButton.appendChild(postLikeText);
postLikeCta.appendChild(postLikeButton);
postLike.appendChild(postLikeCta);
postLike.appendChild(postLikeCounter);
postFooter.appendChild(postLike);
postImg.appendChild(postImageFile);
postMetaData.appendChild(postMetaAuthor);
postMetaData.appendChild(postMetaTime);
postMetaIcon.appendChild(profilePic);
postMeta.appendChild(postMetaIcon);
postMeta.appendChild(postMetaData);
postHeader.appendChild(postMeta);
postHtml.appendChild(postHeader);
postHtml.appendChild(postText);
postHtml.appendChild(postImg);
postHtml.appendChild(postFooter);
listaPost.appendChild(postHtml);
*/



for(let i = 0; i < posts.length; i++){

    const listaPost = document.getElementById("container");

    const postHtml = document.createElement("div");
    postHtml.classList.add("post");

    const postHeader = document.createElement("div");
    postHeader.classList.add("post__header");

    const postMeta = document.createElement("div");
    postMeta.classList.add("post-meta");

    const postMetaIcon = document.createElement("div");
    postMetaIcon.classList.add("post-meta__icon");

    const profilePic = document.createElement("img");
    profilePic.classList.add("profile-pic");

    const postMetaData = document.createElement("div");
    postMetaData.classList.add("post-meta__data");

    const postMetaAuthor = document.createElement("div");
    postMetaAuthor.classList.add("post-meta__author");

    const postMetaTime = document.createElement("div");
    postMetaTime.classList.add("post-meta__time");

    const postText = document.createElement("div");
    postText.classList.add("post__text");

    const postImg = document.createElement("div");
    postImg.classList.add("post__image");

    const postImageFile = document.createElement("img");

    const postFooter = document.createElement("div");
    postFooter.classList.add("post__footer");


    const postLike = document.createElement("div");
    postLike.classList.add("likes", "js-likes");

    const postLikeCta = document.createElement("div");
    postLikeCta.classList.add("likes__cta");

    const postLikeButton= document.createElement("a");
    postLikeButton.classList.add("like-button",  "js-like-button");
    postLikeButton.setAttribute("data-postid", "0");

    const postLikeButtonIcon= document.createElement("i");
    postLikeButtonIcon.classList.add("like-button__icon",  "fas", "fa-thumbs-up");
    postLikeButtonIcon.setAttribute("aria-hidden", "true");

    const postLikeText = document.createElement("span");
    postLikeText.classList.add("like-button__label");
    postLikeText.innerText = " Mi piace";

    const postLikeCounter = document.createElement("div");
    postLikeCounter.classList.add("likes__counter");

    const postLikeNumber = document.createElement("b");
    postLikeNumber.classList.add("js-likes-counter");
    postLikeNumber.setAttribute("id", "like-counter-0")

    postLikeCounter.append("Piace a ");
    postLikeCounter.appendChild(postLikeNumber);
    postLikeCounter.append(" persone");

    postLikeButton.setAttribute("data-postid", `${posts[i].id}`);
    postLikeNumber.setAttribute("id", "like-counter-" + `${posts[i].id}`);

    if (posts[i].author.image != null){
        profilePic.setAttribute("src", `${posts[i].author.image}`);
        profilePic.alt = `${posts[i].author.name}` + " Profile picture";
        
        //console.log(posts[i].author.image);
    } else {
        profilePic.setAttribute("src", "https://unsplash.it/300/300?image=27");
        profilePic.alt = `${posts[i].author.name}` + " Profile picture";
    }

    postMetaAuthor.innerText = `${posts[i].author.name}`;

    postMetaTime.innerText = `${posts[i].created}`;

    postText.innerText = `${posts[i].content}`;

    postImageFile.setAttribute("src", `${posts[i].media}`);
    postImageFile.alt = "Post Image";

    postLikeNumber.innerText = `${posts[i].likes}`

    postLikeCta.addEventListener("click", function(){
        if(postLikeButton.classList.contains("like-button--liked") === false){
            postLikeNumber.innerText = parseInt(postLikeNumber.innerText) + 1;
            postLikeButton.classList.toggle("like-button--liked");
            postLikedId.push(posts[i].id);
            console.log(postLikedId);
        } else {
            const index = postLikedId.indexOf(posts[i].id);
            postLikeNumber.innerText = parseInt(postLikeNumber.innerText) - 1;
            postLikeButton.classList.toggle("like-button--liked");
            postLikedId.splice(index, 1)
            console.log(postLikedId);
        }
        
    });


















    postLikeButton.appendChild(postLikeButtonIcon);
    postLikeButton.appendChild(postLikeText);
    postLikeCta.appendChild(postLikeButton);
    postLike.appendChild(postLikeCta);
    postLike.appendChild(postLikeCounter);
    postFooter.appendChild(postLike);
    postImg.appendChild(postImageFile);
    postMetaData.appendChild(postMetaAuthor);
    postMetaData.appendChild(postMetaTime);
    postMetaIcon.appendChild(profilePic);
    postMeta.appendChild(postMetaIcon);
    postMeta.appendChild(postMetaData);
    postHeader.appendChild(postMeta);
    postHtml.appendChild(postHeader);
    postHtml.appendChild(postText);
    postHtml.appendChild(postImg);
    postHtml.appendChild(postFooter);
    listaPost.appendChild(postHtml);

    










}



