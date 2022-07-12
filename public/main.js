const btn = document.querySelectorAll('.showToken');
const search = document.querySelector('#search');

[...btn].forEach((item) => {

    item.addEventListener('click', (e) => {
        e.preventDefault();

    if(search.classList.contains('hidden')){
        search.classList.remove('hidden');
    } else {
        search.classList.add('hidden');
    }
});

})

