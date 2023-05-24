function square_perimeter(side) {
    return side*4;
}

function square_square(side) {
    return side*side;
}

function cube(side){
    function square(){
        return side*side;
    }

    return square()*side
}

otvet=prompt("введите сторону куба")
alert("число в кубе"+cube(otvet) )
// alert("периметр квадрата : "+ square_perimeter(otvet) + ", площадь квадрата : "+ square_square(otvet))


