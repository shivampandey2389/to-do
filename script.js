let inp=document.getElementById("inpel");
let list_cnt=document.querySelector(".list-cnt")

let run=()=>{
  if(inp.value===""){
    alert("you must write something")
  }
  else{
    let li=document.createElement("li")
    li.innerHTML=inp.value
    list_cnt.appendChild(li)
    let span=document.createElement("span")
    span.innerHTML="\u00d7"
    li.appendChild(span)
  }
  inp.value=""
  save()
}
list_cnt.addEventListener("click",(e)=>{
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")
    save()
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove()
    save()
  }
})
function save(){
  localStorage.setItem("data",list_cnt.innerHTML)
}
function show(){
  list_cnt.innerHTML=localStorage.getItem("data")
}
show()