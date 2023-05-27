let customNumber=+prompt('Введите значение');

if ((typeof customNumber === "number")&&(!isNaN(customNumber))){
    if (customNumber % 2 === 0 ){
        console.log('Число четное');  
    } else {
        console.log('Число нечетное');
    }
} else {
    console.log('Упс, кажется, Вы ошиблись.');
}