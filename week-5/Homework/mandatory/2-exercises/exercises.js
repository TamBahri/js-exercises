/**
 *  objects = key + value , name: "Chris", job: "Teacher"
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  arrayOfPeople.forEach((person) => {
    let content = document.querySelector("#content");
    let Names = document.createElement("h1");
    let Jobs = document.createElement("h2");
    Names.innerHTML = person.name;
    Jobs.innerHTML = person.job;
    content.appendChild(Names);
    content.appendChild(Jobs);
  });
}

/**
 *
 * Create a list of shopping items.[Array of items[] You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let content = document.querySelector("#content");
  let shoppingList = document.createElement("ul");
  shopping.forEach((arrayListItem) => {
    let unorderList = document.createElement("li");
    shoppingList.appendChild(unorderList);
    unorderList.innerHTML = arrayListItem;
  });
  content.appendChild(shoppingList);

  //Write your code in here
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  books.forEach((bookBody) => {
    let content = document.querySelector("#content");
    let bookInfo = document.createElement("p");
    let unorderBookList = document.createElement("ul");
    let infList = document.createElement("li");
    content.appendChild(unorderBookList);
    unorderBookList.appendChild(infList);
    infList.appendChild(bookInfo);
    bookInfo.innerHTML = `${bookBody.title}, ${bookBody.author}`;

    if (bookBody.alreadyRead == true) {
      infList.style.backgroundColor = "green";
    } else {
      infList.style.backgroundColor = "red";
    }
  });
}
// (bookBody.alreadyRea)? infList.style.backgroundColor = "green": infList.style.backgroundColor = "red";

//Write your code in here

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

exerciseThree(books);
