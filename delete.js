const deleteBtn = document.getElementsByClassName('delete-button')[0];
const clearBtn = document.getElementsByClassName('clear-button')[0];


deleteBtn.addEventListener('click', () =>{
    const activeLists = document.querySelectorAll('li.active');
    for(let activeList of activeLists){
        deleteNode(activeList);
    };
})

clearBtn.addEventListener('click', () =>{
    const lists = document.getElementsByTagName('li');
    for(let li of lists){
        console.log(lists);
        deleteNode(li);
    };
})