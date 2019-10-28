let container = document.getElementById('container')
let textInput = document.getElementById('textInput')
let addBtn = document.getElementById('addBtn')


textInput.addEventListener('keyup' , function(e){
    if(e.key === 'Enter' && e.target.value.length > 0){
        validation(e.target.value)
    }
})

addBtn.addEventListener('click', function(e){
    if(textInput.value.length > 0){
        validation(textInput.value)
    }
})

let validation = function(text){
    textInput.value = "";
    let buttonDelete = document.createElement('button');  
    let buttonComplete = document.createElement('button');         
    let phrase = document.createElement('span');
    let itemContainer = document.createElement('div');
    phrase.setAttribute('class', 'phrase');                       
    phrase.innerText = text;
    buttonDelete.setAttribute('class', 'buttonDelete')
    buttonDelete.innerText = 'Delete';
    buttonComplete.setAttribute('class', 'buttonComplete')
    buttonComplete.innerText = 'Complete'
    itemContainer.setAttribute('class', 'itemContainer')
    itemContainer.appendChild(buttonDelete)
    itemContainer.appendChild(buttonComplete)
    itemContainer.appendChild(phrase)
    container.appendChild(itemContainer)

    buttonComplete.addEventListener('click', function(event){
        if(buttonComplete.innerText === 'Complete'){
            // const phrase = document.querySelector('.phrase')
            phrase.style.textDecoration = "line-through"
            buttonComplete.innerText = 'Undo'
    
        }else{
            phrase.style.cssText = " text-decoration: none;"
            buttonComplete.innerText = 'Complete';
            
        }
    })
    buttonDelete.addEventListener('click', function(event){
        container.removeChild(itemContainer)
    })
    
}
    // const buttonComplete = document.querySelector('.buttonComplete')
    // console.log(buttonComplete)
    
   