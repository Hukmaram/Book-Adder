console.log('JS file EES6 version');
showBook()
class Book{
    constructor(name,author,type){
        this.name=name;
        this.author=author;
        this.type=type;
    }
}
class Display{
validate(book){
    if(book.name.length>0 && book.author.length>0 && book.type.length>0){
        return true;
    }
    else{
        return false;
    }
}

insert(mybook){
    let booklist=localStorage.getItem('books');
    let bookArr;
    if(booklist==null){
        bookArr=[];
    }
    else{
     bookArr=JSON.parse(booklist);
    }
    bookArr.push(mybook);
    localStorage.setItem('books',JSON.stringify(bookArr));
    showBook();
}
clear(){
    let myForm=document.getElementById('bookForm');
    myForm.reset();
}

show(messageType){
   if(messageType==='Success'){
    myAlert.innerHTML=`<p><i class="fa fa-check-circle"></i> ${messageType}! Your book has been added successfully</p>`;
    myAlert.setAttribute('style','display: block;background-color: blueviolet;')
    setTimeout(function(){
     myAlert.style.display="none";
    },3000)
   }
   else if(messageType==='Error'){
    myAlert.innerHTML=`<p><i class="fa fa-exclamation-triangle"></i> ${messageType}! Please enter field value</p>`;
    myAlert.setAttribute('style','display: block;background-color: #ff0033; width:20%');
    setTimeout(function(){
        myAlert.style.display="none";
       },3000)
}
}
}


let bookform=document.getElementById('bookForm');
bookform.addEventListener('submit',submitFnc);
function submitFnc(e){
let name=document.getElementById('book').value;
 let author=document.getElementById('author').value;
 let type=document.getElementById('type').value;
 let book=new Book(name,author,type);
 let display=new Display(book)
 if(display.validate(book)){
     display.insert(book);
    display.clear();
     display.show('Success');
 }
 else{
    display.show('Error');
 }
 e.preventDefault()
}


function showBook(){
    let bookDiv=document.getElementById('bookDiv');
let booklist=localStorage.getItem('books'); 
let bookArr;
if(booklist==null){
    bookArr=[];
}
else{
    bookArr=JSON.parse(booklist); 
}
let html='';
bookArr.forEach(function(bookProperty){
    html+=`<div id ="item" class="item">
    <b>Book Name - </b> ${bookProperty.name}</br></br>
    <b>Author Name - </b> ${bookProperty.author}</br></br>
    <b>Type -</b> ${bookProperty.type}</br>
    </div>`
})
if(bookArr.length!=0){
    bookDiv.innerHTML=html;
}
else{
    bookDiv.innerHTML=`<p style="color:red">No book found</p>`
}
}