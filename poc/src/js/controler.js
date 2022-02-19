// 'use strict';

// const form = document.querySelector('.form');
// const btn = document.querySelector('.form__btn');
// const inputname = document.querySelector('.form__input--name');
// const inputDate = document.querySelector('.form__input--Date');
// const inputTitle = document.querySelector('.form__input--Title');
// const inputTodo = document.querySelector('.form__input--Todo');

// //CLASS
// class List {
//   constructor(name, date, title, todolist) {
//     this.name = name;
//     this.date = date;
//     this.title = title;
//     this.todolist = todolist;
//   }
// }

// // const list = new List('aa', 'aaa', 'aaa', 'aaa');
// // console.log(list);

// //APPLICATION
// class App {
//   #ToDoList = [];
//   constructor() {
//     form.addEventListener('submit', this._getData.bind(this));
//   }

//   _getData = function (e) {
//     e.preventDefault();
//     const name = inputname.value;
//     const date = inputDate.value;
//     const title = inputTitle.value;
//     const todo = inputTodo.value;
//     const list = new List(name, date, title, todo);
//     console.log(list);
//     this.#ToDoList.push(list);
//     this._renderWorkout(list);
//     this._cleardata();
//   };
//   _cleardata() {
//     inputname.value = inputDate.value = inputTitle.value = inputTodo.value = '';
//   }

//   _renderWorkout(workout) {
//     let html = `
//       <li class="workout workout--${workout.name}" data-id="${workout.date}">
//         <h2 class="workout__title">${workout.title}</h2>
//         <div class="workout__details">
//           <span class="workout__value">${workout.todo}</span>
//           <span class="workout__unit">km</span>
//         </div>
//     `;
//     form.insertAdjacentHTML('afterend', html);
//   }
// }

// const app = new App();

'use strict';

const form = document.querySelector('.form');
const btn = document.querySelector('.form__btn');
const inputname = document.querySelector('.form__input--name');
const inputDate = document.querySelector('.form__input--Date');
const inputTitle = document.querySelector('.form__input--Title');
const inputTodo = document.querySelector('.form__input--Todo');
const bodyList = document.querySelector('.bodyList');

//CLASS
class List {
  id = Date.now();
  constructor(name, date, title, todolist) {
    this.name = name;
    this.date = date;
    this.title = title;
    this.todolist = todolist;
  }
}

// const list = new List('aa', 'aaa', 'aaa', 'aaa');
// console.log(list);

//APPLICATION
class App {
  #ToDoList = [];
  constructor() {
    form.addEventListener('submit', this._getData.bind(this));
  }

  _getData = function (e) {
    e.preventDefault();
    const name = inputname.value;
    const date = inputDate.value;
    const title = inputTitle.value;
    const todo = inputTodo.value;
    const list = new List(name, date, title, todo);
    console.log(list);
    this.#ToDoList.push(list);
    this._renderWorkout(list);
    this._cleardata();
  };
  _cleardata() {
    inputname.value = inputDate.value = inputTitle.value = inputTodo.value = '';
  }

  _renderWorkout(listItems) {
    let html = `
    <li ><button class="btn--close-modal">&times;</button></li>
      <li class="workout workout--running" data-id="${listItems.id}">
        <h2 class="workout__title">${listItems.title}${listItems.name} ${listItems.id}</h2>
        <div class="workout__details">
          <span class="workout__value">${listItems.todolist}</span>
          <span class="workout__unit">km</span>
          
        </div>
        </li>
    `;
    bodyList.insertAdjacentHTML('afterend', html);
  }

  _deleteData(id) {}
}

const app = new App();
