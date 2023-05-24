var animals = ["Cat" , "Dog" , "Cow" , "Fish" ]

// .indexOF-определяет индекс элемента
//alert(animals.indexOF("Cow"))

//alert("Исходный список: " + animals)

//splice-уд эл массива с опред индекса в опр колл-ве
newAnimals=animals.splice(2, 1)
alert("Измененный список:" + animals)
alert("Вырезанные из списка:" + newAnimals)