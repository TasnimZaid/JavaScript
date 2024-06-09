// Q2 :

const Fruits = ["Apple" , "Orange" , "Blueberry", "Strawberry" , "Mango"];


const newUl = document.createElement('ul');

const newPic = [
    './Fruits/apples.jpg' ,
    './Fruits/orange.jpg' ,
    './Fruits/blueberry.jpg' ,
    './Fruits/strawberry.jpg',
    './Fruits/mango.jpg'

]


for (let i = 0 ; i < Fruits.length ; i++){
    const newLi = document.createElement('li');
    newUl.appendChild(newLi) ;
    const img = document.createElement('img');
    img.src = newPic[i];
    newLi.appendChild(img) ;

    newLi.style.width = "200px";
    newLi.style.height = "200px";
    newLi.style.listStyleType = "square";

    img.style.width = "200px";
    img.style.height = "200px";
    
    newUl.style.display = "flex" ; 
    newUl.style.flexWrap = "wrap"
    newLi.style.margin = "30px" ;
    
    


}

newUl.style.background = "white";

document.body.appendChild(newUl);

//  Q3 : Create a function that takes two arguments,
//  one is an array and the other is a number, 
// then return the index of the given value or 
// return -1 if the element cannot be found.




function arrayTest( arr , num){
    let i = 0
        if(num == arr[i]){
            for(i ; i <= arr.length ; i++){
            return arr.indexOf(arr[i]) ;}
        }
        else{
            return -1 ;
        }
    
    
}

const x = [1,10 ,5, 7 , 8] ;
var y = 9 ;

console.log(arrayTest(x , y))
window.alert("Index of the given value: " + arrayTest(x , y)) ;





