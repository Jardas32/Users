const block = document.querySelector('.textContent');
const count = document.querySelector('.count');

// const list = ('http://jsonplaceholder.typicode.com/posts'); 100 пользователей
// https://swapi.dev/api/films  фильмы  
// https://jsonplaceholder.typicode.com/users 10 пользщыателей

            //   Запрос на сервер чисел

// async function showInfo() {
//   const response = await fetch('https://swapi.dev/api/films')
//       if(response.ok) {
//         const data = await response.json();
//         let arr = Array(data);
//         arr.forEach((item, index)  => {
//          let atext = document.createElement('a');
//          atext.setAttribute('class', 'aText');
//          atext.textContent = `${item.results[0].characters[2]}`;
//          block.append(atext);
//             console.log(item.results[0].characters[11]);
//         })
      
//         // console.log(data);
//         // console.log(data.results[1].characters);
//         // console.log(data.results[1].planets);
//       }
//       else {
//         console.log('ERROR HTTPS ' + response.status);
//       }
// }
// showInfo();


// fetch('https://jsonplaceholder.typicode.com/users')
//      .then((response) => {
//         return response.json()
//      })
//      .then((data) => {
// // console.log(data);
//    function render() {
//       block.innerHTML = ``;
//       document.querySelector('.count').textContent = data.length;
//       data.forEach((item, index) => {
      
//       if(item.id ) {
//          document.querySelector('.textContent').classList.add('gridsclass');
//          let newuser = document.createElement('div');
//          newuser.setAttribute('class', 'users');
//          newuser.innerHTML = `
//          <p class="title">${item.name}</p>
//          <p class="pbody">${item.username}</p>
//          <span class="userid">${item.email}</span>
//          <button data-index="${index}" class="btclosed">X</button>
//          `
//          block.append(newuser);
//       }
    
//     })
//  } 

// render();
     

//                   //  Удаление пользователей

//       document.onclick = (e) => {
//          const position = e.target.getAttribute('data-index');
//          if(e.target.classList.contains('btclosed') && position !== null) {
//             data.splice(position, 1);
//             render();
//          }
//       }

// });



// fetch('http://jsonplaceholder.typicode.com/posts')
//      .then((response) => {
//         return response.json()
//      })
//      .then((data) => {

//    function render() {
//       block.innerHTML = ``;
//       document.querySelector('.count').textContent = data.length;
//       data.find(item => {
//          let id = item.userId;

//          if(item.userId === 2) {
//             // console.log(item);
          
//          }
//          else {
//             // console.log(`Пользователя с таким ID нет!!!`);
//          }
//       })
//       data.forEach((item, index) => {
//       // console.log(item);
//       let userId = item.userId;

//       // console.log(userId);
//       if(item) {
//          document.querySelector('.textContent').classList.add('gridsclass');
//          let newuser = document.createElement('div');
//          newuser.setAttribute('class', 'users');
//          newuser.innerHTML = `
//          <p class="title">${item.title}</p>
//          <p class="pbody">${item.body}</p>
//          <span class="userid">${item.id}</span>
//          <button data-index="${index}" class="btclosed">X</button>
//          `
//          block.append(newuser);
//       }
//       else {
//         // document.querySelector('.count').textContent = 0;
//         block.textContent = `Такого пользователя нет...!`;
//         // let ptext = document.createElement('p');
//         // ptext.setAttribute('class', 'textNO');
//         // ptext.textContent = `Такого пользователя нет...!`;
//         // block.append(ptext);
//       }
   
//     })
//  }

// render();

//                   //  Удаление пользователей

//       document.onclick = (e) => {
//          const position = e.target.getAttribute('data-index');
//          if(e.target.classList.contains('btclosed') && position !== null) {
//             alert('Удалить пользователя???');
//             data.splice(position, 1);
//             render();
//          }
//       }

// });


//                //   Работа с товарами Fetch


// fetch('/databasa.json') 
//    .then((response) => {
//       return response.json();
//    })
//    .then((data) => {

//  function rendercard() {
//     let out = `<table class="tables">`;
//     let totalCart = 0;
//     let total = 0;
//     let quantity = 1;
// const spanquant = document.querySelector('.spanquant');
// for (const id in data) {
//         out += `<td><button class="bt" data-id="${id}">x</button></td>`;
//         out += `<td> <img class="imgcart" src="${data[id].image}"></td>`;
//         out += `<td>${data[id].title}</td>`;
//         out += `<td>${data[id].price} $</td>`;
//         out += `<td> <button class="btMinus" data-id="${id}">-</button> <span class="spanquant">${quantity}</span> <button class="btPlus" data-id="${id}">+</button></td>`;
//         out += `</tr>`;
//         total += data[id].price * data[id];
//         totalCart += data[id];
//         console.log(data[id]);
//     }
//         out += `<tr class="trNull">
//         <td colspan="4" class="tdtotal">Total:</td>
//         <td>${total}</td>
//         </tr>`
//       //   out += `<p class="ptotal">${totalCart}</p>`;
//         out += `</table>`;
//         block.innerHTML = out;
//       //   let cartsid = korz.childNodes[1].firstChild.childNodes;

//       //   if(cartsid.length <= 1) {
//       //       korz.innerHTML = ``;
//       //       korz.innerHTML = `Ваша корзина пуста!`
//       //   }

    
// };

// block.addEventListener(`click`, event => {
   
//     if(event.target.classList.contains(`bt`)){
//        cartRemove(event.target.dataset.id);
//     }
//     if(event.target.classList.contains(`btPlus`)){
//         cartPlus();
//     }
//     if(event.target.classList.contains(`btMinus`)){
//         cartMinus(event.target.dataset.id);
//     }
// })


// function cartRemove(id) {
//     delete data[id];
//     rendercard();
// }

// function cartPlus() {
//    quantity++;
//     rendercard();
// }

// function cartMinus(id) {

//     if(data[id].id - 1 === 0) {
//         cartRemove(id);
//     } 
//     else {
//         data[id].id--;
//         rendercard();
//     }
// }

// rendercard();

// });



// const newCarts = [

// {
//     id: 1,
//     name: 'Alex',
//     age: 20
// },
// {
//   id: 2,
//   name: 'Nik',
//   age: 33
// },
// {
//   id: 3,
//   name: 'Zak',
//   age: 25
// },
// {
//   id: 4,
//   name: 'Micky',
//   age: 17
// },

// ];

// let newProduct = 
//   {
//     id: 5,
//     name: 'Tim',
//     age: 28
// };



// newCarts.forEach((item, index) => {

//   if(item.age === 17) {
//     // newCarts.pop();
//     newCarts.splice(3, 1)
//     newCarts.push(newProduct);
//   }

// });

// console.log(newCarts);


async function getData() {

    let response = await fetch('https://jsonplaceholder.typicode.com/photos')
    let data = await response.json();

    if(response.ok) {
      function renders() {
        block.innerHTML = ``;
        count.textContent = `Users`;
 data.forEach((item, index) => {
         
          if(item.id <= 20) {
             let users = document.createElement('div');
             users.setAttribute('class', 'user');
             users.innerHTML = `
             <p class="title">${item.title}</p>
             <a href="${item.url}" class="url">${item.url}</a>
             <a href="userinfo.html" class="bnailUrl">${item.thumbnailUrl}</a>
             <button data-index="${index}" class="bt">X</button>
             `
             block.append(users);
          }
        })
      }
       renders();
    }
    else {
        console.log('HTTPS... ERROR... ' + response.status);
    }

                  //  Delete-users               

document.onclick = (e) => {
  const position = e.target.getAttribute('data-index');
  if(e.target.classList.contains('bt') && position !== null) {
      data.splice(position, 1);
      renders();
  }
}

} 

getData();
    










//   "5555": {
//       "id": 1,
//       "title": "Цепная пила аккумуляторная",
//       "price": 1500,
//       "imges": "https://cdn.gwshop.ru/image/cache/650-486/product/2007807-1.png",
// },
//   "6666": {
//       "id": 2,
//       "title": "Складная ручная пила",
//       "price": 799,
//       "imges": "https://grn-tools.com.ua/image/cache/catalog/0_TOVARY/5_tajima/1_TOVARY/NOZHOVKY/GK-G2101-1000x1000__1_-removebg-preview-1000x1000.png",
// }

              //  Метод POST

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(newCarts),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8' 
//   },

// })
//      .then((response) => {
//         return response.json();
//      })
//      .then((data) => {
//       // console.log(data);
//       let arrData = Array(data);

//        arrData.forEach((item) => {
//         if(item.id  === 100) {
//            console.log(item[1]);
            
//         }else {
//            console.log(`Такого пользователя нет.`);
//         }
        
//        })

//      });


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data)
//     })









