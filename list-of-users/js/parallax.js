
window.addEventListener('scroll', function (e) {
    //console.log(document.body.scrollTop);
  
  var $parallax = document.getElementById('parallax');
  var posY = document.body.scrollTop * 0.21;
  $parallax.style.backgroundPosition = '50%'+posY+'0%';
})