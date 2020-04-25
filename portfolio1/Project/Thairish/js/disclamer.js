const disclamerLink = document.querySelector('.disclamerLink');
const disclamer = document.querySelector('.disclamer')

disclamerLink .onclick = function(){
    if(disclamerLink.classList.contains('close')){
        disclamerLink.classList.remove('close')
        disclamer.classList.remove('open')
    } else{
        disclamerLink.classList.add('close')
        disclamer.classList.add('open')
    }
}

