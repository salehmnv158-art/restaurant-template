let menubutton = document.querySelector('.menu_site_button');

menubutton.addEventListener('mouseover', ()=>{
    menubutton.classList.add('menu_site_button-active');
    menubutton.classList.remove('menu_site_button-passive');
})

menubutton.addEventListener('mouseleave', ()=>{
    menubutton.classList.remove('menu_site_button-active');
    menubutton.classList.add('menu_site_button-passive');
})

let contreserve = document.querySelector('.reservation_ins_cont_book_a_table');

contreserve.addEventListener('mouseover', ()=>{
    contreserve.classList.add('reservation_ins_cont_book_a_table-active');
    contreserve.classList.remove('reservation_ins_cont_book_a_table-passive');
})

contreserve.addEventListener('mouseleave', ()=>{
    contreserve.classList.remove('reservation_ins_cont_book_a_table-active');
    contreserve.classList.add('reservation_ins_cont_book_a_table-passive');
})


let navbutact = document.querySelector('.navbar_activate_button');
let navbutdeact = document.querySelector('.navbar_deactivate_button');
let navbarright = document.querySelector('.navbar_right');

navbutact.addEventListener('click', ()=>{
    navbutact.classList.add('display_none');
    navbutdeact.classList.remove('display_none');
    navbarright.classList.remove('display_none');
})

navbutdeact.addEventListener('click', ()=>{
    navbutdeact.classList.add('display_none');
    navbutact.classList.remove('display_none');
    navbarright.classList.add('display_none');
})