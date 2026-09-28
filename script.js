const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false')}));

// Jika file foto struktur belum tersedia, tampilkan placeholder bersih.
document.querySelectorAll('.person-image img').forEach(img=>{
  img.addEventListener('load',()=>{ const ph=img.parentElement.querySelector('.image-placeholder'); if(ph) ph.style.display='none'; }); img.addEventListener('error',()=>{img.classList.add('broken'); const ph=img.parentElement.querySelector('.image-placeholder'); if(ph) ph.style.display='grid';});
});
