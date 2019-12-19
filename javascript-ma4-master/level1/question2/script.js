// Fetch API, loop through array and link to html
fetch("https://jsonplaceholder.typicode.com/todos")
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            loopThroughResults(json);
        })
        .catch(function(error) {
            console.log(error);
        });

function loopThroughResults(cards) {

    let newHTML = "";

    for(let i = 0; i < cards.length; i++) { 
        newHTML += `<div class="title">
                        <p>${cards[i].userId}<p>
                        <p>${cards[i].id}<p>
                        <p>${cards[i].title}<p>
                        <p>${cards[i].completed}<p>
                    </div>`;
    };

    const container = document.querySelector(".container");
    container.innerHTML = newHTML;
}