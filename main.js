'use strict';
const btnNav=document.querySelector('.mobile-btn-nav');

btnNav.addEventListener('click',function(){
  document.querySelector('body').classList.toggle('active');
});

document.querySelector('main').addEventListener('click',function(e){
  if(!e.target.closest('.main-nav')){
    document.querySelector('body').classList.remove('active');
  }
})