const selections = document.getElementsByClassName('fake__container');
const addBtn = document.getElementsByClassName('add-button')[0];




for(let fake of selections){
    addToggleFunctional(fake);
};


addBtn.addEventListener('click', createListElement);

function addToggleFunctional(toggler){
    toggler.addEventListener('click',() =>{
        toggler.classList.toggle('active');
        toggler.parentNode.classList.toggle('active');
        console.log('actived');
    })
}

function checkIsEmpty(node){
    if(node.getElementsByClassName('li__content')[0].value == ''){
        deleteNode(node);
    }
}

function deleteNode(node){
    if(node.previousElementSibling)node.previousElementSibling.getElementsByTagName('input')[0].focus();
    node.innerHTML = null;
    node.remove();
}

function createListElement() {
    const li = document.createElement('li');
    li.insertAdjacentHTML('afterbegin',`
    <div class="li__close">&times;</div>
                   
        <span class="fake__container">
                    <span class="fake"></span>
        </span>            
    <input class="li__content" type="text">
    `); 
    document.getElementsByClassName('todo__ul')[0].appendChild(li);
    const input = li.getElementsByTagName('input')[0];
    const toggler = li.getElementsByClassName('fake__container')[0];
    const close = li.getElementsByClassName('li__close')[0];
    input.focus();
    addToggleFunctional(toggler);
    li.addEventListener('keypress', (event) =>{
        const keyName = event.key;
        
        if(keyName == 'Enter') {
            checkIsEmpty(li)
            input.blur();
        };        
    });
    close.addEventListener('click', () =>{
        console.log('deleted');
        deleteNode(li);
    });
}
