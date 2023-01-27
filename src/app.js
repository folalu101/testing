// app.js for business Logic

// Arrow function without parameter
set = () =>{
    let element = document.getElementsByName('cssProperty');
    console.log(element);

    // for loop
    for ( let i = 0; i < element.length; i++){

        // showproprty and vale 
        let cssProperty = element[i].getAttribute('id');

        let cssValue = element[i].value;

        // modify div
        let div = document.getElementById('modify');
        div.style[cssProperty] = cssValue;

        console.log(cssProperty, cssValue);
    }
};

// Normal function
// function set (){
//     alert("clicked")
// };