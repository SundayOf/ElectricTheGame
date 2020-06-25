var color = 'orange';
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
