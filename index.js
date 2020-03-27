const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

btn.onclick = () => {
  menu.classList.toggle('closed');
  btn.classList.toggle('closed');
  if (menu.classList[1] == undefined){
    menu.style.justifyContent = 'space-around';
  } else {
    window.setTimeout(function(){
      menu.style.justifyContent = '';
    }, 350)
  };
};