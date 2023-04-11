// let result = (Math.random() * (3 - 0) + 0).toFixed(1);
// let result1 = 1.2;


const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name'],
        age: '',
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Змініть код лише під цим рядком
function updateRecords(records, id, prop, value) {

    // if (records[id][prop] === '') {
    //     delete records[id][prop];
    // }
    // else if (prop !== 'tracks' && value !== '') {
    //     records[id][prop] = value;
    // }
    if (!records[id].hasOwnProperty('tracks')) {
        records[id].gggggg = [];
    } else if (prop === 'tracks' && value !== '') {
        records[id].tracks.push(value);
    }


    // if (!records[id].hasOwnProperty('tracks')) {
    //     records[id].tracks = [];
    // }

    // else if (prop === 'tracks' && value !== '') {
    //     records[id]['tracks'] = value;
    // }

    // if (records[id][prop] === '') {
    //     delete records[id][prop];
    // }


    //

    // додає властивість  records[id]['age'] = 'gjhjhj';

    return records;


}



console.log(updateRecords(recordCollection, 5439, 'trasks', "Take a Chance on Me"));



// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
// };

// Only change code below this line
// const half = ({ stats }) => {

//     const { max, min } = stats;

//     return max + min;
// };
// console.log(stats);
// console.log(half);
// Only change code above this line


// ------

// function removeFirstTwo(list) {
//     // Only change code below this line

//     const [, ...shorterList] = list;
//     // Change this line
//     // Only change code above this line
//     return shorterList;


// }


// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);

// console.log(sourceWithoutFirstTwo);

// -----

// //✅ Деструктуризація масиву. Спред в масиві,

// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b, arr); // повертає 1,2, [3,4,5,6,7]
// console.log(a, b, ...arr); // повертає правильно масив [1,2,3,4,5,6,7]




//✅ Рахує % одиничок, тобто студентів які зрозуміли матеріал

// let statistic = '11100000';

// function getSuccessRate() {

//     let increment = 0;
//     let result = 0;

//     for (let i = 0; i <= statistic.length; i++) {
//         if (statistic[i] === '1') {
//             increment++;
//         }

//         // return result;
//     }
//     result = increment / statistic.length * 100;

//     console.log(Math.round(result), '%');
// }

// getSuccessRate('1100');



// const name = 'Missha';

// for (const letter of name) {
//     let rev = ''

//     if (letter === 's') {
//         rev += letter
//     }

//     console.log(rev);
// }



//✅ Створення об'єкта та операції з ним

// let userName = {};

// userName.name = "'Masha"
// userName['like movies'] = true;
// userName['abilities'] = {
//     spead: 150,
//     age: 25,
// };


// userName.name = 'Mariya'

// delete userName.abilities;


// console.log(userName);

// let userName2 = userName;

// userName2.name = 'Oleg';

// console.log(userName2);

// console.log(userName === userName2);

//Створення об'єкта та операції з ним


// // ✅ якщо виклик перед то не працюватиме

// //✅ - Це ФУНКЦІАНАЛЬНИЙ ВИРАЗ - МОЖНА ЗАПИСАТИ РЕЗУЛЬТАТ ВИКОНАННЯ ФУНКЦІЇ  У ЗМІННУ.
// const multiply = function (x) {
//     console.log(x.length);;
// };

// // ✅ Працює виклик після оголошення
// multiply('dfghfg');




// Завдання 2  - вивести значення суми покупки в залежності від партнерської знижки

// const totalSpent = 50;
// let payment = 1000;
// let discount = 0;

// console.log(totalSpent);

// if (totalSpent >= 5000) {
//     discount = 10;
//     payment = payment - (payment * discount / 100);A
//     console.log(`Оформлюєм замовлення на суму ${payment} зі знижкою ${discount}%`);
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     discount = 5;
//     payment = payment - (payment * discount / 100);
//     console.log(`Оформлюєм замовлення на суму ${payment} зі знижкою ${discount}%`);
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//     discount = 2;
//     payment = payment - (payment * discount / 100);
//     console.log(`Оформлюєм замовлення на суму ${payment} зі знижкою ${discount}%`);
// } else {
//     console.log(`не партнер, знижки не передбачено`);
// }



// Задача 1

// let balance = 10000;
// let payment = 10000;

// alert(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо баланс на рахунку `);

// if (payment <= balance) {
//     const result = balance - payment;

//     alert(`Увас залишилось ${result} кредитів. Знімаємо кошти`);
// } else {
//     alert(`Не достатньо коштів на рахукку. Операція завершена`);
// }



