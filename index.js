
const dialog = document.querySelector('dialog')
const addBookbtn = document.getElementById('add-book-btn')
const booksHolder = document.getElementById('books-holder')
const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')

const form = document.getElementById('my-form')
let myLibrary = [];

addBookbtn.addEventListener('click', function openForm() {
   dialog.showModal()
  
})

 form.addEventListener('submit', addBookToLibrary)


function Book(title, author, pages) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.pages = pages
}



function addBookToLibrary(event) {
  // do stuff here
  event.preventDefault()
  myLibrary.push(new Book(titleInput.value, authorInput.value, Number(pagesInput.value)))
  render()
  titleInput.value = ''
  authorInput.value = ''
  pagesInput.value = ''
  dialog.close()
}

function render() {
  booksHolder.innerHTML = ''
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
