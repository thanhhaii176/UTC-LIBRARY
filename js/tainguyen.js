
const navs = document.querySelectorAll('.nav1');

navs.forEach(nav => {
  const conten = nav.querySelector('.conten1');       
  const btnLeft = nav.querySelector('.cuon.left');  
  const btnRight = nav.querySelector('.cuon.right'); 
  const items = conten.querySelectorAll('.item');     

  if (items.length > 0) {
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);

    btnRight.addEventListener('click', () => {
      conten.scrollLeft += itemWidth * 4; 
    });

    btnLeft.addEventListener('click', () => {
      conten.scrollLeft -= itemWidth * 4; 
    });
  }
});

const nav2s = document.querySelectorAll('.nav2');

nav2s.forEach(nav => {
  const conten = nav.querySelector('.conten2');      
  const btnLeft = nav.querySelector('.cuon.left');   
  const btnRight = nav.querySelector('.cuon.right');  
  const items = conten.querySelectorAll('.item1');    

  if (items.length > 0) {
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);

    btnRight.addEventListener('click', () => {
      conten.scrollLeft += itemWidth * 3; 
    });

    btnLeft.addEventListener('click', () => {
      conten.scrollLeft -= itemWidth * 3;
    });
  }
});









