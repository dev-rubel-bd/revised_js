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

