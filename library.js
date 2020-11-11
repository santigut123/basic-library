//make library array
let myLibrary=[];
const library= document.querySelector(".library");

//Book Object with title author pages and hasread
function Book(title,author,pages,hasRead)
{
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.hasRead=hasRead;
    
}
Book.prototype.getTitle=function(){
    return "Title: "+this.title;
}
Book.prototype.getAuthor=function(){
    return "Author: "+this.author;
}
Book.prototype.getPages=function(){
    return "On Page "+this.pages;
}
Book.prototype.gethasRead=function(){
    return ""+this.hasRead;
}
// initial test to see and tweak UI


// make a function that adds a book object to the array of books
function addBook(library,book){
    library[library.length]=book;
}
//Make function to print all books in library adds them to website
function printBooks()
{
    library.textContent="";
    for(let i =0;i<myLibrary.length;i++){
        let k=i;
        let book= document.createElement("div");
        fillBookElement(myLibrary[i],book,i);
        let changestatus=book.querySelector(".changeStatus");
        changestatus.addEventListener("click",function(){
            changeRead(k);
        });
        let remove=book.querySelector(".remove");
        remove.addEventListener("click",function(){
            removeBook(k);
        });
        library.appendChild(book);
        

    }
}
function removeBook(bookNum){
    myLibrary.splice(bookNum-1,1);
    printBooks();

}
//function to make add info to book element in f
function fillBookElement(book,bookDiv,bookNum){
    bookDiv.setAttribute("data-bookNum",bookNum);
    bookDiv.setAttribute("class","book");
    let title= document.createElement("div");
    title.setAttribute("class","book-info");
    let author= document.createElement("div");
    author.setAttribute("class","book-info");
    let pages= document.createElement("div");
    pages.setAttribute("class","book-info");
    let status= document.createElement("div");
    status.setAttribute("class","book-info");
    let changeStatus=document.createElement("button");
    changeStatus.setAttribute("class","changeStatus");
    changeStatus.setAttribute("data-bookNum",bookNum);
    let remove= document.createElement("button");
    remove.setAttribute("class","remove");
    remove.setAttribute("data-bookNum",bookNum);
    

    
    title.textContent=book.getTitle();
    author.textContent=book.getAuthor();
    pages.textContent=book.getPages();
    status.textContent="Status: "+book.gethasRead();
    changeStatus.textContent="Change Status";
    remove.textContent="REMOVE BOOK";
    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(status);
    bookDiv.appendChild(changeStatus);
    bookDiv.appendChild(remove);
    }
function changeRead(bookNum){
    
    status=myLibrary[bookNum].gethasRead();
    if (status=="Read")
    {
        console.log("test");
        myLibrary[bookNum].hasRead="Not Read";
    }
    else{
        
        myLibrary[bookNum].hasRead="Read";

    }
    printBooks();

}
const addButton= document.querySelector("#addBook");
let title="";
let author="";
let pages="";
let hasRead="";
addButton.addEventListener('click',function(){
    title=document.querySelector("#title").value;
    author=document.querySelector("#author").value;
    pages=document.querySelector("#pages").value;
    hasRead=document.querySelector("#hasread").checked;
    if (hasread==true)
    {
        addBook(myLibrary,new Book(title,author,pages,"Read"));
        printBooks();
    }
    else{
        addBook(myLibrary,new Book(title,author,pages,"Not Read"));
        printBooks();
    }
});



printBooks();
console.log(myLibrary);
//Make function that takes in the Data attribute of bookNum and then removes it from the array
//Make a function that changes hasRead status 
