document.getElementById('prevent').addEventListener('click', noLink, false)

function noLink(e) {
  e.preventDefault()
  alert('Nope, thats preventDefault() in action :) So you have to scroll manually')
}




document.getElementById('stop').addEventListener('click', linkStopper, false)

function linkStopper(e){
  //e.preventDefault()
  e.preventDefault()
  e.stopImmediatePropagation()
  alert('Hah, and now it\'s stopPropagation() working :) So you have to click directly on a dragon or logo')

}





document.getElementById('nonStop').addEventListener('click', nonStop, false)

function nonStop(e){
  alert('Are you ready? Game starts in 3...2...1...')
  alert('3...')
  alert('2...')
  alert('1...')
e.stopPropagation()
}
