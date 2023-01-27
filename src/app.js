// app.js for business Logic

// Arrow function without parameter
set = () =>{
    let element = document.getElementsByName('cssProperty');
    console.log(element);

    // for loop
    for ( let i = 0; i < element.length; i++){
        console.log(element[i].value);
    }
};

// Normal function
// function set (){
//     alert("clicked")
// };