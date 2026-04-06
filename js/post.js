// call the api
const loadPost=()=>{
    const url="https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then((res) => res.json())
    .then((json) => displayPost(json))  
}

// const displayPost=(posts)=>{
//     // get the container
//     const postContainer= document.getElementById("post-container");
//     postContainer.innerHTML=" ";
//      for(let post of posts){
//         // create HTML element
//         const li=document.createElement("li");
//         li.innerText=post.title
//         // add li in cointainer
//         postContainer.appendChild(li);
//      }
// }


// Create a function 
const displayPost=(posts) => {
    // Get the container
    const postContainer=document.getElementById("post-container");
    // postContainer.innerHTML=""; 
    for(let post of posts){
        // creat HTML element 
        const postCard=document.createElement("div")
        postCard.innerHTML=` <div class="post-card">
            <h2>${post.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde itaque soluta earum quaerat in aperiam ratione, voluptates, accusamus quae aut vero voluptatem nam vel adipisci illum repellendus fuga! Tenetur?</p>

        </div>`
    // add post card
    postContainer.append(postCard);
    }

}