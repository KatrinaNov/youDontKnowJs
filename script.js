'use strict';

const books = document.querySelector('.books'),
      book = document.querySelectorAll('.book'),
      adv = document.querySelector('.adv');

// Восстановить порядок книг.
books.prepend(book[1]);
books.append(book[2]);
book[3].before(book[4]);

// Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
book[4].querySelector('h2 a').textContent = 'Книга 3. this и Прототипы Объектов';

// Удалить рекламу со страницы
adv.remove();

// Восстановить порядок глав во второй  книге
const chapterBook2 = book[0].querySelectorAll('li');
chapterBook2[9].after(chapterBook2[2]);
chapterBook2[3].after(chapterBook2[6]);
chapterBook2[6].after(chapterBook2[8]);
// Восстановить порядок глав в пятой книге
const chapterBook5 = book[5].querySelectorAll('li');
chapterBook5[1].after(chapterBook5[9]);
chapterBook5[4].after(chapterBook5[2]);
chapterBook5[8].before(chapterBook5[5]);
// в шестой книге добавить главу “Глава 8: За пределами ES6”
const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
book[2].querySelector('ul').append(newChapter);
book[2].querySelectorAll('li')[9].before(newChapter);