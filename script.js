const questionTag = document.querySelector('button');

questionTag.addEventListener('click', () => {
    let inputValue = document.querySelector('input').value;
    
    if (inputValue < 22){
        alert("Nah! She's Older.");
    }else if (inputValue > 22){
        alert("She's almost there!!");
    }else {
        alert("Happy Birthday today");
    }
});