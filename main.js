// Your code below
const isItColin = function(colin){
  return colin == 'Colin' ? 'Yes, that is Colin.' : 'No, that is not Colin.';
}

const isHot = function(hot){
  return hot >= 80 ? 'Yes, it is indeed hot.' : 'No, it is not hot.';
}

const helloThere = function(name){
  return name.length > 5 ? 'Hi, ' + name : 'Hello, ' + name;
}

const goodbyeYou = function(name = 'stranger'){
  return name.length > 0 ? 'Goodbye, ' + name : name;
}

const darkAndStormyNight = function(dark, rain){
  return dark === 'dark' && rain > 0.5 ? 'It was a dark and stormy night.' : 'My usual opening doesn\'t apply, I guess.'
}


// Our code below; do not touch!
if (typeof isItColin === 'undefined') {
  isItColin = undefined;
}

if (typeof isHot === 'undefined') {
  isHot = undefined;
}

if (typeof helloThere === 'undefined') {
  helloThere = undefined;
}

if (typeof goodbyeYou === 'undefined') {
  goodbyeYou = undefined;
}

if (typeof darkAndStormyNight === 'undefined') {
  darkAndStormyNight = undefined;
}

module.exports = {
  isItColin,
  isHot,
  helloThere,
  goodbyeYou,
  darkAndStormyNight,
}
