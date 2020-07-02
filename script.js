function scrollAppear(){
    var slideInElement = document.querySelector('.slideIn');
    var slideInPosition = slideInElement.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if(slideInPosition < screenPosition){
        slideInElement.classList.add('appear');
    }
    console.log(slideInPosition);
}

window.addEventListener('scroll', scrollAppear);