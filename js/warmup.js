'use strict';

//Add an event listener so that when the mouse enters ('mouseenter')
//the image, it's `src` changes to 'img/surprised.png'
var images = document.querySelector('img');
images.addEventListener('mouseenter', function() {
    images.setAttribute('src', 'img/surprised.png');
})

/*
$('img').mouseenter(function() {
    $(this).attr('src', 'img/surprised.png');
})

*/


//Extra: add an event listener so that when the mouse leaves ('mouseleave')
//the image, it's source changes back to `img/happy.png'
images.addEventListener('mouseleave', function() {
    images.setAttribute('src', 'img/happy.png');
})

//Add an event listener so that when the 'purple-button' is clicked,
//the 'big' and 'purple' classes are added to the 'instructions'
//paragraph in the header.
var purpleBtn = document.querySelector('#purple-button');
purpleBtn.addEventListener('click', function() {
    document.querySelector('.instructions')
        .classList.add('big', 'purple');
})

//Add an event listener so that when the 'content-button' is clicked,
//the text inside the <input> element is added as a NEW paragraph to the
//'#content' section
//    TIP: You can get what value is typed into the <input> but accessing
//         the elements '.value' property

var contBtn = document.querySelector('#content-button');
contBtn.addEventListener('click', function() {

    var text = document.querySelector('input').value;

    var p = document.createElement('p');
    p.textContent = text;

    document.querySelector('#content').appendChild(p);
})