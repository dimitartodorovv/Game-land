
const boxes = {
    loading: document.querySelector('#loadingBox'),
    error: document.querySelector('#errorBox'),
    info: document.querySelector('#infoBox')

}

boxes.info.addEventListener('click', hideInfo)
boxes.error.addEventListener('click', HideErrorMessage)

export function showInfo(message) {
         
   boxes.info.children[0].textContent = `${message}`

   boxes.info.style.display = 'block';
  
   setTimeout(() => {
    boxes.info.style.display = 'none';
   },3000)
  
}

function hideInfo() {
        boxes.info.style.display = 'none';
}

export function errorMessage(message) {

    boxes.error.children[0].textContent = `${message}`
    boxes.error.style.display = 'block'
}    

function HideErrorMessage(){
    boxes.error.style.display = 'none'
}



// Loading for AJAX notification
let requsets = 0;

export function showLoadign() {
    requsets++;
    boxes.loading.style.display = 'block';

}

export function hideLoading(){
    requsets--;
    if(requsets === 0){

        boxes.loading.style.display = 'none';
    }

}

