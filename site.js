(function(){var b=document.querySelector('.menubtn'),m=document.getElementById('mobmenu');if(!b||!m)return;
function set(o){m.classList.toggle('open',o);b.setAttribute('aria-expanded',o?'true':'false');b.textContent=o?'Close':'Menu';document.documentElement.style.overflow=o?'hidden':'';}
b.addEventListener('click',function(){set(!m.classList.contains('open'));});
window.addEventListener('resize',function(){if(window.innerWidth>900)set(false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});})();
