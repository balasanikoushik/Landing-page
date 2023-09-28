
const sections = document.querySelectorAll('section');
const Ul = document.querySelector('ul');
const fragment = document.createDocumentFragment();
const goTop = document.getElementById('topScroll');


sections.forEach(section => {
    const navData = section.getAttribute("data-nav");
    const IdAttribute = section.getAttribute('id');
    const newli = document.createElement("li");
    const links = document.createElement("a");
    links.classList.add("menu__link");
    links.setAttribute('href',IdAttribute);
    links.addEventListener('click', e => {
        e.preventDefault();
        section.scrollIntoView({behavior : "smooth"})
    });
    const text = document.createTextNode(navData);

    links.appendChild(text);
    newli.appendChild(links);
    fragment.appendChild(newli);
    });
    Ul.appendChild(fragment);

        window.addEventListener('scroll',()=>{


        const activesec = document.getElementsByClassName('your-active-class')[0];

        if(activesec !== undefined){
            activesec.classList.remove('your-active-class')
        }
        const ActiveNav = document.getElementsByClassName('navactive')[0];

        if(ActiveNav !== undefined){
            ActiveNav.classList.remove('navactive')
        }

        sections.forEach(section => {

        const react = section.getBoundingClientRect();

        if(react.top >=-50 && react.top<394){
                               
                section.classList.add('your-active-class');
                
         const listactive = document.querySelectorAll(`a[href='${section.id}']`)[0].parentElement;

         listactive.classList.add("navactive");
                
        if (section.id == "section1"){   
                   
             goTop.style.display = 'none';
        }else {

             goTop.style.display ='block';
           }
        }
    })
})
    

 