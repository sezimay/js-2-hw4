let dda = document.getElementById('box');
let requestURL = fetch('https://jsonplaceholder.typicode.com/posts').then((respon)=>{
  const data  = respon.json()
  return data
}).then((data)=>{
  console.log(data);
  for(index in data){
dda.innerHTML += `<div class='post'> <p>UserId:${data[index].userId} </p>  <p>Id:${data[index].id}</p>  <p>Title:${data[index].title}</p> <p>Body:${data[index].body}</p></div>`
  }
});