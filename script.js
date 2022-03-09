const main = document.querySelector('main')
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayList() {
    main.innerHTML = "";
    list.forEach(item => {
const div = document.createElement('div');
div.textContent = item;
 main.append(div);
    });
}


function sortDescending(){
    list.sort((a, b) => a < b ? 1 : -1);                
    };

    function showOdd(){
        return list.filter(item => item % 2 != 0);
    };

    function showOdd(){
        return list.filter(item => item % 2 != 0);
    };

    displayList(); 

 let aside = document.querySelector('#sort-descending').addEventListener('click', function() {
    sortDescending();
    displayList();
 });
 
 let aside = document.querySelector('#sort-ascending').addEventListener('click', function() {
    sortDescending();
    displayList();
 });
 
 let aside = document.querySelector('#All').addEventListener('click', function() {
    sortDescending();
    displayList();
 });



 


