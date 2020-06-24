var color = 'yellow';
var colors = "rgb(67, 67, 67)";



function Set_true(value){
    document.getElementById(value).style.background = color
}
function Set_false(value){
    document.getElementById(value).style.background = colors
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

    let array = [up,down,left,right]
    array.forEach(element => {
        try{
            changecolor(element)
        }
        catch(e){

        }
    });
}
















