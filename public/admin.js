
// Your Code Here

async function main() {
  let response = (await fetch('http://localhost:3001/listBooks'))
  let books = await response.json()
  books.forEach(renderBook)
}

function renderBook() {
  let root = document.querySelector('#root')

  let li = document.createElement('li')
  li.textContent = book.title

  let quantityInput = document.createElement('input')
  quantityInput.value = book.quantity

  let saveButton = document.createElement('button')
  saveButton.textContent = 'Save'

  saveButton.addEventListener('click', () => {
      fetch('http://localhost:3001/updateBook', {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              id: book.id,
              quantity: quantityInput.value
          })
      })
  })

  li.append(quantityInput, saveButton)
  root.append(li)

}

main();
















// Retrieve a list of books from the server.

// fetch("http://localhost:3000/admin.html",{
//       method:"PATCH",
//     header:{
// 'Content_Type':"application/json"
// },
// body:JSON.stringify({
    
//         "id": 3,
//         "title": "The Annals of Arathrae",
//         "year": 2016,
//         "description": "This anthology tells the intertwined narratives of six fairy tales.",
//         "quantity": 8,
//         "imageURL": "/assets/arathrae.jpeg"
//       })
// })
// Display a list of book titles to the admin.
// fetch("http://localhost:3001/listBooks",{
//     method:"GET",
//     headers:{'Content_Type':"application/json"},
//     body:JSON.stringify({
//               "id": 3,
//               "title": "The Annals of Arathrae",
//               "year": 2016,
//               "description": "This anthology tells the intertwined narratives of six fairy tales.",
//               "quantity": 8,
//               "imageURL": "/assets/arathrae.jpeg"
          
//     })
// })

// Place a text input next to each book title.


// function myFunction() {
//     var x = document.createElement("INPUT");
//     x.setAttribute("type", "number");
//     x.setAttribute("value", "quantity");
//     document.body.appendChild(x);
//   }