var color = 'rgb(244, 216, 156)';
var colors = "rgb(67, 67, 67)";
var shadow = '0 0 1px rgba(254, 252, 124, 1),0 0 5px rgb(255, 217, 54),0 0 1px rgba(255, 198, 0, 0.2),0 0 6px rgba(255, 0, 0, 0.59),0 0 17px rgba(255, 194, 83, 0.34),0 0 1px rgb(255, 192, 0)'
var shadowNONE = 'none'

function Set_true(value){
    document.getElementById(value).style.background = color
    document.getElementById(value).style.boxShadow = shadow;
    document.getElementById(value).style.transition = 'all .5s ease';
}
function Set_false(value){
    document.getElementById(value).style.background = colors
    document.getElementById(value).style.boxShadow = shadowNONE;
}

function changecolor(value){
    CheckValue(value) == 0 ? (Set_true(value)):(Set_false(value))
}
function BlockClick(value){
    changecolor(value)
    PlaceAround(value)
    Count(value)
    Win()
}

function CheckValue(value){
    if(document.getElementById(value).style.background == color){
        return 1
    }
    else{
        return 0
    }
}

function PlaceAround(value){

    column = parseInt(value.split('.')[0])
    line = parseInt(value.split('.')[1])

    up = column - 1 + "." + line
    down = column + 1 + "." + line
    left = column + "." + (line - 1)
    right = column + "." + (line + 1)
    upright = column - 1 + "." + (line + 1)
    upleft = column - 1 + "." + (line - 1)
    downleft = column + 1 + "." + (line + 1)
    downright = column + 1 + "." + (line - 1)

    let array = [up,down,left,right,upright,upleft,downleft,downright]
    array.forEach(element => {
        try{
            changecolor(element)
        }
        catch(e){

        }
    });
}
//------------------------------------------------------//
//Counter
function Default(){
    let h1 = 0;
    let h2 = 0;
    set_nix_class("h2", h2);
    set_nix_class("h1", h1);
  }
    let h1 = 0;
    let h2 = 0;
  function Count() {
      h2+=1  
      if(h2 > 9){
          h2 = 0
          h1+=1
          if(h1 > 1){
              alert('Вы проиграли!')
              RestartGAME()
              h2 = 0
              h1 = 0
          }
      }
      set_nix_class("h2", h2);
      set_nix_class("h1", h1);   
    } 
//------------------------------------------------------//
//add, remove or toggle css classess
  function tog_class(id, cl) {
      var elem = document.getElementById(id);
      if (elem.classList.contains(cl) === true) {
        elem.classList.remove(cl);
      } else {
        elem.classList.add(cl);
      }
    }
    
  function add_class(id, cl) {
      var elem = document.getElementById(id);
      if (elem.classList.contains(cl) !== true) {
        elem.classList.add(cl);
      }
    }
    
  function rem_class(id, cl) {
      var elem = document.getElementById(id);
      if (elem.classList.contains(cl) === true) {
        elem.classList.remove(cl);
      }
    }
//------------------------------------------------------//
//Class changes
  function set_nix_class(target, val) {
      for (i = 0; i < 10; i++) {
        if (i != val) {
          rem_class("nix_" + target + "_" + i, "nix_open");
        }
      }
      add_class("nix_" + target + "_" + val, "nix_open");
    }
//------------------------------------------------------//
    function Win(){
if(document.getElementById('1.1').style.background == color){
if(document.getElementById('1.2').style.background == color){
if(document.getElementById('1.3').style.background == color){
if(document.getElementById('1.4').style.background == color){
if(document.getElementById('1.5').style.background == color){
if(document.getElementById('2.1').style.background == color){
if(document.getElementById('2.2').style.background == color){
if(document.getElementById('2.3').style.background == color){
if(document.getElementById('2.4').style.background == color){
if(document.getElementById('2.5').style.background == color){
if(document.getElementById('3.1').style.background == color){
if(document.getElementById('3.2').style.background == color){
if(document.getElementById('3.3').style.background == color){
if(document.getElementById('3.4').style.background == color){
if(document.getElementById('3.5').style.background == color){
if(document.getElementById('4.1').style.background == color){
if(document.getElementById('4.2').style.background == color){
if(document.getElementById('4.3').style.background == color){
if(document.getElementById('4.4').style.background == color){
if(document.getElementById('4.5').style.background == color){
if(document.getElementById('5.1').style.background == color){
if(document.getElementById('5.2').style.background == color){
if(document.getElementById('5.3').style.background == color){
if(document.getElementById('5.4').style.background == color){
if(document.getElementById('5.5').style.background == color){
setTimeout(() => { alert("Congrats! YOU ARE WINNER!")
document.location.reload(true); }, 500);}}}}}}}}}}}}}}}}}}}}}}}}}}

function RestartGAME(){
  
  Default()

  document.getElementById('1.1').style.background = colors
  document.getElementById('1.2').style.background = colors
  document.getElementById('1.3').style.background = colors
  document.getElementById('1.4').style.background = colors
  document.getElementById('1.5').style.background = colors
  document.getElementById('2.1').style.background = colors
  document.getElementById('2.2').style.background = colors
  document.getElementById('2.3').style.background = colors
  document.getElementById('2.4').style.background = colors
  document.getElementById('2.5').style.background = colors
  document.getElementById('3.1').style.background = colors
  document.getElementById('3.2').style.background = colors
  document.getElementById('3.3').style.background = colors
  document.getElementById('3.4').style.background = colors
  document.getElementById('3.5').style.background = colors
  document.getElementById('4.1').style.background = colors
  document.getElementById('4.2').style.background = colors
  document.getElementById('4.3').style.background = colors
  document.getElementById('4.4').style.background = colors
  document.getElementById('4.5').style.background = colors
  document.getElementById('5.1').style.background = colors
  document.getElementById('5.2').style.background = colors
  document.getElementById('5.3').style.background = colors
  document.getElementById('5.4').style.background = colors
  document.getElementById('5.5').style.background = colors

  document.getElementById('1.1').style.boxShadow = shadowNONE
  document.getElementById('1.2').style.boxShadow = shadowNONE
  document.getElementById('1.3').style.boxShadow = shadowNONE
  document.getElementById('1.4').style.boxShadow = shadowNONE
  document.getElementById('1.5').style.boxShadow = shadowNONE
  document.getElementById('2.1').style.boxShadow = shadowNONE
  document.getElementById('2.2').style.boxShadow = shadowNONE
  document.getElementById('2.3').style.boxShadow = shadowNONE
  document.getElementById('2.4').style.boxShadow = shadowNONE
  document.getElementById('2.5').style.boxShadow = shadowNONE
  document.getElementById('3.1').style.boxShadow = shadowNONE
  document.getElementById('3.2').style.boxShadow = shadowNONE
  document.getElementById('3.3').style.boxShadow = shadowNONE
  document.getElementById('3.4').style.boxShadow = shadowNONE
  document.getElementById('3.5').style.boxShadow = shadowNONE
  document.getElementById('4.1').style.boxShadow = shadowNONE
  document.getElementById('4.2').style.boxShadow = shadowNONE
  document.getElementById('4.3').style.boxShadow = shadowNONE
  document.getElementById('4.4').style.boxShadow = shadowNONE
  document.getElementById('4.5').style.boxShadow = shadowNONE
  document.getElementById('5.1').style.boxShadow = shadowNONE
  document.getElementById('5.2').style.boxShadow = shadowNONE
  document.getElementById('5.3').style.boxShadow = shadowNONE
  document.getElementById('5.4').style.boxShadow = shadowNONE
  document.getElementById('5.5').style.boxShadow = shadowNONE
}