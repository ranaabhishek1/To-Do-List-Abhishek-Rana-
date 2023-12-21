let addBtn=document.querySelector("#add-btn");

let text=document.querySelector(".text");

let addText=document.querySelector(".add-text");

let removeBtn=document.querySelector(".remove-btn");

addBtn.addEventListener("click",()=>{
    addText.style.display="block"
    removeBtn.style.display="block"
    addText=text.innerText;

})

removeBtn.addEventListener("click",()=>{
    addText.style.display="none"
    removeBtn.style.display="none"
})