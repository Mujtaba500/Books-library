
const dialog = document.querySelector('dialog')
const addBookbtn = document.getElementById('add-book-btn')
const booksHolder = document.getElementById('books-holder')
const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const readCheck = document.getElementById('read')

const form = document.getElementById('my-form')
let myLibrary = [];

addBookbtn.addEventListener('click', function openForm() {
   dialog.showModal()
  
})

 form.addEventListener('submit', addBookToLibrary)


function Book(title, author, pages, read, id) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.id = id
}



function addBookToLibrary(event) {
  // do stuff here
  event.preventDefault()
  if(readCheck.checked){
  myLibrary.push(new Book(titleInput.value, authorInput.value, Number(pagesInput.value), true, myLibrary.length))
  } else {1
    myLibrary.push(new Book(titleInput.value, authorInput.value, Number(pagesInput.value), false, myLibrary.length))
  }
  render()
  titleInput.value = ''
  authorInput.value = ''
  pagesInput.value = ''
  readCheck.checked = false
  dialog.close()
}

  booksHolder.addEventListener('click' , function remove(e){
       if(e.target.className === 'remove-btn'){
       for(let j = 0; j < myLibrary.length; j++){
        if(e.target.id == myLibrary[j].id){
          myLibrary.splice(j, 1)
        }
       }
       for(let k =0; k < myLibrary.length; k++){
        myLibrary[k].id = k
       }
       render()
      }
      if(e.target.className === 'read-btn'){
        myLibrary[e.target.id].read = false
        render()
      }
      if(e.target.className === 'notread-btn'){
        myLibrary[e.target.id].read = true
        render()
      }
  })


function render() {
  booksHolder.innerHTML = ''
  for(let i = 0; i < myLibrary.length; i++){
    if(myLibrary[i].read === true){
  booksHolder.innerHTML += `
  <div>
   <p>${myLibrary[i].title}</p>
   <p>${myLibrary[i].author}</p>
   <p>${myLibrary[i].pages} pages</p> 
   <button id='${i}' class="read-btn">Read</button>
   <button id='${i}' class="remove-btn">Remove</button>
  </div>
  `
  }

  else {
    booksHolder.innerHTML += `
  <div>
   <p>${myLibrary[i].title}</p>
   <p>${myLibrary[i].author}</p>
   <p>${myLibrary[i].pages} pages</p> 
   <button id='${i}' class="notread-btn">Not Read</button>
   <button id='${i}' class="remove-btn">Remove</button>
  </div>
  `
  }
}
 
  }

