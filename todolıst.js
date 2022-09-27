let btnDOM = document.querySelector("#liveToastBtn") 
let listDOM = document.querySelector("#list") 
let taskDOM = document.querySelector("#task") 
let ullength = document.getElementsByTagName("li"); 



for(let i=0; i < ullength.length;i++){ 
    let closeBtn = document.createElement("span"); 
    closeBtn.textContent = "\u00D7"; 
    closeBtn.classList.add("close"); 
    closeBtn.onclick = removeButton; 
    ullength[i].append(closeBtn);  
    ullength[i].onclick = check; 
}


btnDOM.addEventListener('click', listItem);

function check(){
  this.classList.toggle("checked"); 
}

function removeButton(){
  this.parentElement.remove(); 
}


function listItem() {
 
    if (taskDOM.value == "")  {  
    $(".error").toast("show"); 
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement('li') 
    listDOM.appendChild(liDOM); 
    liDOM.innerHTML = task.value; 
    taskDOM.value = "";
  
   
         liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");

        
}
}   