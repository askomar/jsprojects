'use strict';

const numberOfFIlms = +prompt('Скольлко фильмов вы посмотрели?', '');

if(numberOfFIlms < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (numberOfFIlms >= 10 && numberOfFIlms <= 30) {
    alert("Вы классический зритель");
} else if (numberOfFIlms >30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}
 
const personalMovieDB = {
    count : numberOfFIlms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let i = 0;
while (i < 2) {
    const a = prompt('Один из послежних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
        console.log("error");
    }
    i++;
};

console.log(personalMovieDB);