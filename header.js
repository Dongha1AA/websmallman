
let toggleBtn = document.querySelector('#toggleBtn');
let menulist = document.querySelector('.menubar_items');
let link = document.querySelector('.menubar_link');

toggleBtn.addEventListener('click',clickFn);

function clickFn()
{
    menulist.classList.toggle('active');  
    link.classList.toggle('active');  
}
(function () {

    ('li > a').click(function (){
    
    ('html, body').animate({scrollTop: (this.hash).offset.top}, 300.)
    
    });
    
});
