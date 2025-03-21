

const navLink = document.querySelectorAll('.header .nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.header .nav');

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})


const activePage = ()=>{
    const header = document.querySelector('.header');
    const barsBox = document.querySelector('.bars-box');
    header.classList.remove('active');
    setTimeout(() =>{
     header.classList.add('active');
    }, 1000)
    
    navLink.forEach(link =>{
        link.classList.remove('active')
    });
    barsBox.classList.remove('active');
    setTimeout(() =>{
     barsBox.classList.add('active');
    }, 1000)
    sections.forEach(sections =>{
        sections.classList.remove('active')
    });
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}
navLink.forEach((link, idx) =>{
    link.addEventListener('click', ()=>{
        if(!link.classList.contains('active')){
            activePage()
            link.classList.add('active')
            setTimeout(() => {
                sections[idx].classList.add('active')
            }, 1000)
        }
    })
})

logoLink.addEventListener('click', ()=>{
    if(!navLink[0].classList.contains('active')){
        activePage()
        navLink[0].classList.add('active');
        setTimeout(() => {
            sections[0].classList.add('active')
        }, 1000)
    }
})

const resumeBtn = document.querySelectorAll('.reume-btn');

resumeBtn.forEach((btn, idx) => {
    btn.addEventListener('click', ()=>{
        const resumeDetail = document.querySelectorAll('.resume-detail')
        resumeBtn.forEach(btn=>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetail.forEach(detail=>{
            detail.classList.remove('active');
        });
        resumeDetail[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-left')
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-right');

let index = 0;
const activePortfolio = ()=>{
const imageSlide = document.querySelector('.portfolio-carousel .image-slide');
const portfolioDetail = document.querySelectorAll('.portfolio-detail')
imageSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
portfolioDetail.forEach(detail=>{
    detail.classList.remove('active')
});
portfolioDetail[index].classList.add('active');
}

arrowLeft.addEventListener('click', () => {
    if(index < 4){
        index++;
    }
    else{
        index = 5;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowRight.addEventListener('click', () => {
    if(index >1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});