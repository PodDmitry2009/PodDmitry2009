function half_perimeter(){
    return (a+b+c)/2
}

function square(a, b, c){
    var p = half_perimeter()
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))

}




a= Number(prompt("введите сторону a"))
b= Number(prompt("введите сторону b"))
c= Number(prompt("введите сторону c"))

alert("Площадь треугольника: " + square(a, b, c))

function cube(side){
    function treugol(){
        return side*side;
    }

    return square()*side
}
