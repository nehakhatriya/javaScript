console.log("welcome to notes")

//if user adds a note, add to the local storage
let adBtn = document.getElementById('addBtn')
adBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
})

//displaying notes
function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach((element, index) => {
        html += ` <div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
         <h5 class="card-title">Note ${index+1} </h5>
         <p class="card-text">${element}</p>
         <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
       </div>
     </div> `
    });
  let notesEln=document.getElementById('notes')
  if(notesObj.length !=0)
  {
      notesEln.innerHTML=html;
  }
  else {
    notesEln.innerHTML=`Nothing to show!`;
}
}

//deleting notes

function deleteNote(index){
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1)
    localStorage.setItem("notes",JSON.stringify(notesObj))
    showNotes();
    
}
//search functionality

   
let searchTxt=document.getElementById("searchTxt")
searchTxt.addEventListener("input",function(){
    let inputVal=searchTxt.value
 let notesCards = document.getElementsByClassName("notecard")
 Array.from(notesCards).forEach(function(element){
     let cardTxt=element.getElementsByTagName("p")[0].innerText;
     if(cardTxt.includes(inputVal)){
         element.style.display="block";
     }
     else{
     element.style.display="none";
     }
 })
})