document.getElementById('fire').style.top = '296px';
document.getElementById('fire').style.left = '610px';
document.getElementById('player').style.top = '400px';
document.getElementById('player').style.left = '550px';

var el = document.getElementById('player');
var bullet = document.getElementById('fire');
bullet.style.display = ' none'; 


var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var img4 = document.getElementById('img4')
var img5 = document.getElementById('img5')
var img6 = document.getElementById('img6')
var img7 = document.getElementById('img7')
var img8 = document.getElementById('img8')
var img9 = document.getElementById('img9')       


document.body.onkeydown = function (e) {
  bullet.style.display = ' none'; 
  bullet.style.top = (parseInt(el.style.top) +20) + 'px'
  bullet.style.left = (parseInt(el.style.left) + 55) + 'px'




    var KEYCODE_LEFT = 37;
    var KEYCODE_RIGHT = 39;
    var KEYCODE_UP = 38;
    var KEYCODE_DOWN = 40;
    var KEYCODE_SPACE = 32;
      
        if (e.keyCode == KEYCODE_LEFT) {
          el.style.left = (parseInt(el.style.left) - 10) + 'px';
          bullet.style.left = (parseInt(el.style.left) + 5) + 'px'
          el.style.transform = 'rotate(-90deg)';
          }
        else if (e.keyCode == KEYCODE_RIGHT) {
          el.style.left = (parseInt(el.style.left) + 10) + 'px';
            bullet.style.left = (parseInt(el.style.left) + 5) + 'px'
            el.style.transform = 'rotate(90deg)';}
        else  if (e.keyCode == KEYCODE_UP) {
          el.style.top = (parseInt(el.style.top) - 10) + 'px';
           bullet.style.top = (parseInt(el.style.top) +5) + 'px'
           el.style.transform = 'rotate(0deg)';}
        else if (e.keyCode == KEYCODE_DOWN) {
          el.style.top = (parseInt(el.style.top) + 10) + 'px'; 
           bullet.style.top = (parseInt(el.style.top) +5) + 'px';
           

        if (el.style.transform = 'rotate(-90deg)') {
           el.style.transform = 'rotate(-180deg)';}
        	} 


        if (e.keyCode == KEYCODE_SPACE) {   //SHOOTING WITH FIREBREATH
            bullet.style.display = 'block';
            bullet.style.transition ='top 3s ease-out 6s'
             bullet.style.transform = 'rotate(180deg)'

        if  (el.style.transform == 'rotate(-90deg)') { //IF DRAGON IS TO THE LEFT -> FIRE TO THE LEFT
            bullet.style.transform = 'rotate(-270deg)'
            bullet.style.left = (parseInt(el.style.left) - 255) +'px';

            function burn() {
              img5.style.display = 'block';
              img6.style.display = 'block';
              img7.style.display = 'block';
              img8.style.display = 'block'; }
            setTimeout(burn, 2000)
          } else if (el.style.transform == 'rotate(90deg)') { //IF DRAGON IS TO THE RIGHT -> FIRE TO THE RIGHT
            bullet.style.transform = 'rotate(270deg)'
            bullet.style.left = (parseInt(el.style.left) + 255) +'px';

            function burn1() {
              img11.style.display = 'block';
              img12.style.display = 'block';
              img13.style.display = 'block';
              img14.style.display = 'block';
            }
            setTimeout(burn1, 2000)

          } else if (el.style.transform == 'rotate(0deg)') { // IF DRAGON IS TO THE UP -> FIRE UP
            bullet.style.top = (parseInt(el.style.top) - 200) +'px';

            function burn2() {
              img1.style.display = 'block';
              img2.style.display = 'block';
              img3.style.display = 'block';
              img4.style.display = 'block';
            }
            setTimeout(burn2, 2000)

          } else if (el.style.transform == 'rotate(-180deg)')  { //IF DRAGON IS TO THE BOTTOM -> FIRE DOWN
            bullet.style.transform = 'rotate(0deg)'
            bullet.style.top = (parseInt(el.style.top) + 455) +'px';

            function burn3() {
              img17.style.display = 'block';
              img18.style.display = 'block';
              img19.style.display = 'block';
              img20.style.display = 'block';
            }
            setTimeout(burn3, 2000)
          }
           


          function totalburn(){
              img1.style.display = 'block';
              img2.style.display = 'block';
              img3.style.display = 'block';
              img4.style.display = 'block';
              img5.style.display = 'block';
              img6.style.display = 'block';
              img7.style.display = 'block';
              img8.style.display = 'block';
              img9.style.display = 'block';
              img10.style.display = 'block';
              img11.style.display = 'block';
              img12.style.display = 'block';
              img13.style.display = 'block';
              img14.style.display = 'block';
              img15.style.display = 'block';
              img16.style.display = 'block';
              img17.style.display = 'block';
              img18.style.display = 'block';
              img19.style.display = 'block';
              img20.style.display = 'block';
          }
          setTimeout(totalburn, 10000)

         img9.style.left = bullet.style.left
         img9.style.width = '5%';
         img9.style.top = (parseInt(bullet.style.top) + 20) +'px'
         img9.style.display = 'block'


        function dissapear() {
        var bullet = document.getElementById('fire');
        bullet.className = 'fired'
        }
          setTimeout(dissapear, 1000)
          }
          
          bullet.removeAttribute("class")








  		 }
