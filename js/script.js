//The DOM - Document Object Model

var theName = document.querySelector('.theName');
var theList = document.querySelector('.theList');
var clearBtn = document.querySelector('.clear');
var btn = document.querySelector('.theButton');

console.log('...');

var clickMe = function(){
    if (theName.value.length > 0){
        //alert('Oi : ' + theName.value);
        var li = "<li>" + theName.value + "</li>";

        theList.innerHTML = theList.innerHTML + li;
        callYou(theName.value);
        theName.value = '';

    }
}

function makeGreen(){
    document.querySelector('body').classList.add('grass');
}

// when the button is clicked => run this event!!!
btn.addEventListener('click', clickMe);

clearBtn.addEventListener('click', function(){
    theList.innerHTML = '';
});

//console.log();
