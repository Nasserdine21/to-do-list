/**
 * Select items
 */
const alert = document.querySelector('.form__alert');
const form = document.querySelector('.form__info');
const input = document.getElementById('todo');
const submitBtn = document.querySelector('.submit');
const listItems = document.querySelector('.list__item');
const section = document.querySelector('#main');
const btnClear = document.querySelector('.clear');


/*Edit option */
let editElement;
let editFlag = false;
let editId = '';


/* Events */
window.addEventListener('DOMContentLoaded',loadContent);
btnClear.addEventListener('click',clearItems);

form.addEventListener('submit',addItem);



/* functions */
function addItem(e)
{
    e.preventDefault();

    let value = input.value;

    const id = new Date().getTime().toString();
  
    if(value && !editFlag){
        
      const dv = document.createElement('div');
            dv.setAttribute('class', 'list');

            dv.innerHTML = `<div class="list__item">

            <p class="list__text">${value}</p>
            <div class="list__action">
                <button class="list__button" id="edit">
                    <i class="fas fa-edit" class="list__button--edit"></i>
                </button>
                <button class="list__button" id="delete">
                    <i class="fas fa-trash" class="list__button--delete"></i>
                </button>
            </div>
            
        </div>`;

        dv.setAttribute('data-id', id);
        section.appendChild(dv);

        input.value = "";
        btnClear.classList.remove("hidden");

        const dltItem = document.querySelectorAll('#delete');
        const edtItm = document.querySelectorAll('#edit');
      
        

        dltItem.forEach(element => {
          element.addEventListener('click', deleteItem);
        });

        edtItm.forEach(elementEdit => {
          elementEdit.addEventListener('click', editItem);
        });
        

        Swal.fire(
          'Good job!',
          'Item Added successfully!',
          'success'
        )

        
       
    }
 
    else if(value && editFlag){
       editElement.innerHTML = value;
       input.value = "";
    }

    else{    
}
}
function clearItems(){

    let itms = document.querySelectorAll('.list');
      let i;
      for (i = 0; i < itms.length; i++) {
      itms[i].remove();
        }  

        btnClear.classList.add("hidden");
}
function deleteItem(e){
  let ItmByItm = document.querySelector('.list');
    ItmByItm.remove();
}
function editItem(e){
  editElement=e.currentTarget.parentElement.previousElementSibling
  input.value = editElement.innerHTML
  editFlag=true
}
function setBackToDefault(flag){ 
}
/****** Local Storage *****/
function addToLocalStorage(id,value){ 
}
function  removeFromLocalStorage(id)
{ 
}


function editLocalStorage(id,value){

  
}

function getFromLocalStorage(){
  
}


function loadContent(){

 

  }


  
