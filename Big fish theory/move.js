/* code for linking nav hover to artical content of the fish */ 
const red = document.getElementById('fish1');
const area = document.getElementById('dropDown');

red.addEventListener('mouseover', function() {

if (!document.getElementById('imgAffect')) {
const img = document.createElement('img');
img.src = 'art/Stat1.jpg';
img.width = 400;
img.id = 'imgAffect';
area.appendChild(img);

}
});

red.addEventListener('mouseout', function() {
const img = document.getElementById('imgAffect');
if (img) {
    img.remove();
}
});
// code for fish 2
const yellow = document.getElementById('fish2');


yellow.addEventListener('mouseover', function() {

if (!document.getElementById('imgAffect')) {
const img = document.createElement('img');
img.src = 'art/Stats2.jpg';
img.width = 400;
img.id = 'imgAffect';
area.appendChild(img);

}
});

yellow.addEventListener('mouseout', function() {
const img = document.getElementById('imgAffect');
if (img) {
    img.remove();
}
});
// code for fish 3
const orange = document.getElementById('fish3');


orange.addEventListener('mouseover', function() {

if (!document.getElementById('imgAffect')) {
const img = document.createElement('img');
img.src = 'art/Stats3.jpg';
img.width = 400;
img.id = 'imgAffect';
area.appendChild(img);

}
});

orange.addEventListener('mouseout', function() {
const img = document.getElementById('imgAffect');
if (img) {
    img.remove();
}
});
// code for fish 4
const pink = document.getElementById('fish4');


pink.addEventListener('mouseover', function() {

if (!document.getElementById('imgAffect')) {
const img = document.createElement('img');
img.src = 'art/Stats4.jpg';
img.width = 400;
img.id = 'imgAffect';
area.appendChild(img);

}
});

pink.addEventListener('mouseout', function() {
const img = document.getElementById('imgAffect');
if (img) {
    img.remove();
}
});
// code for fis 5
const green = document.getElementById('fish5');


green.addEventListener('mouseover', function() {

if (!document.getElementById('imgAffect')) {
const img = document.createElement('img');
img.src = 'art/Stats5.jpg';
img.width = 400;
img.id = 'imgAffect';
area.appendChild(img);

}
});

green.addEventListener('mouseout', function() {
const img = document.getElementById('imgAffect');
if (img) {
    img.remove();
}
});


//movement code

const player = document.getElementById('player');
let topPos = 180;
let leftPos = 180;

function move(direction) {
const step = 10;
switch (direction) {
case 'up':
if (topPos > 0) topPos -= step;
break;
case 'down':
if (topPos < 360) topPos += step;
break;
case 'left':
if (leftPos > 0) leftPos -= step;
break;
case 'right':
if (leftPos < 360) leftPos += step;
break;
}
player.style.top = topPos + 'px';
player.style.left = leftPos + 'px';
}

