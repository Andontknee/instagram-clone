const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main-content");
let htmlString = "";

// Loop through the array to generate the HTML for each post
posts.forEach(post => {
    htmlString += `
        <article class="post">
            
            <header class="post-header">
                <img src="${post.avatar}" alt="${post.name}" class="post-avatar">
                <div class="post-author-info">
                    <h2 class="post-name">${post.name}</h2>
                    <p class="post-location">${post.location}</p>
                </div>
            </header>
            
            <img src="${post.post}" alt="Post by ${post.name}" class="post-image">
            
            <section class="post-body">
                <div class="action-icons">
                    <img src="images/icon-heart.png" alt="Like" class="icon">
                    <img src="images/icon-comment.png" alt="Comment" class="icon">
                    <img src="images/icon-dm.png" alt="Share" class="icon">
                </div>
                <p class="likes-count"><span class="bold">${post.likes} likes</span></p>
                <p class="post-caption"><span class="bold">${post.username}</span> ${post.comment}</p>
            </section>
            
        </article>
    `;
});

// Inject the generated HTML into the DOM
mainEl.innerHTML = htmlString;
