
document.addEventListener('DOMContentLoaded', addNote2) 


class form  {};

form.noteText = document.querySelector(`#formNoteText1`);
form.noteText2 = document.querySelector(`#formNoteText2`);
form.addButton = document.querySelector(`#formAddButton`);

const notes = document.querySelector(`#notes`);

form.noteText.focus();
form.noteText2.focus();

function addNote() {

let d = new Date();
const date = d.getFullYear();
const date1 = d.getMonth();
const date2 = d.getDate();

const a1 = '<font size="-1">'+date+`.`+date1+`.`+date2+'</font>';

 
 
  let text = '<font size="+2">'+form.noteText.value+'</font>';
  let text2 = form.noteText2.value;
  let All="<strong>" +text + "</strong>"+'<br/>'+text2+'<br/>'+a1;
  let temp1 =localStorage.getItem('content')+'<br/>'+'<br/>'+All;
  let note = document.createElement(`div`);
 
  
  


  note.classList.add(`note`);
 
  note.innerHTML = `<br/><br/><div class='note-text'><strong>${text}</strong></div><div class='note-text'>${text2}</div>${a1}`;
  
  localStorage.setItem('content',temp1);
  notes.appendChild(note);

  form.noteText.value = ``;
  form.noteText.focus();
  form.noteText2.value = ``;
  form.noteText2.focus();

 
}


function addNote2() {

    let text = localStorage.getItem('content');
    let note = document.createElement(`div`);
    
  
    note.classList.add(`note`);
    
    note.innerHTML = `<div class='note-text1'>${text}</div>`;
    notes.appendChild(note);
  
    form.noteText.value = ``;
    form.noteText.focus();
    form.noteText2.value = ``;
    form.noteText2.focus();
  











form.addButton.addEventListener(`click`, function (e) {
  e.preventDefault();  
  if (form.noteText.value != `` && form.noteText2.value != ``) {
    addNote();
    
   

  }
})
}
