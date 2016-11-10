function callYou(name){

    if (name.length > 10){
        alert('Hi, ' + name + " you got a long name!")
        makeGreen();
    }
    else{
        alert('hi, ' + name);
        document.querySelector('body').classList.remove('grass');
    }
    // write your code here

}
