
const form = document.querySelector('dialog')
const addBookbtn = document.getElementById('add-book-btn')
const booksHolder = document.getElementById('books-holder')

addBookbtn.addEventListener('click', function openForm() {
  form.showModal()
  
})

const myLibrary = [
  {
    title: 'harry potter',
    author: 'jk rowlin',
    pages: 200,
    read: true
  },
  {
    title: 'gk',
    author: 'yoyo',
    pages: 97,
    read: false
  },
  {
    title: 'yaya',
    author: 'hello',
    pages: 9,
    read: true
  },
{
  title: 'yaya',
    author: 'hello',
    pages: 9,
    read: true
},
{
  title: 'yaya',
    author: 'hello',
    pages: 9,
    read: true
},
{
  title: 'yaya',
    author: 'hello',
    pages: 9,
    read: true
},
{
  title: 'yaya',
    author: 'hello',
    pages: 9,
    read: true
}

];

function Book() {
  // the constructor...
}



function addBookToLibrary() {
  // do stuff here
  
}

function render() {
  for(let i = 0; i < myLibrary.length; i++){
  booksHolder.innerHTML += `
  <div>
   <p>${myLibrary[i].title}</p>
   <p>${myLibrary[i].author}</p>
   <p>${myLibrary[i].pages} pages</p> 
   <button class="read-btn">Read</button>
   <button class="remove-btn">Remove</button>
  </div>
  `
  }
}
render()