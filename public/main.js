const btn = document.querySelector('.showToken');
const btnReceive = document.querySelector('.showReceive');
const search = document.querySelector('#search');
const receive = document.querySelector('#receive');


btn.addEventListener('click', (e) => {
    e.preventDefault();

if(search.classList.contains('hidden')){
    search.classList.remove('hidden');
} else {
    search.classList.add('hidden');
}
});


btnReceive.addEventListener('click', (e) => {
    e.preventDefault();

if(receive.classList.contains('hidden')){
    receive.classList.remove('hidden');
} else {
    receive.classList.add('hidden');
}
});


