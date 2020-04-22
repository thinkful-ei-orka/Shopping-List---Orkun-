// To complete this challenge requires:

// Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
// Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
// Linking to your application JavaScript file from the index.html page.
// Using this and event delegation

// Requirements
// In terms of user experience, your shopping list app must allow users to:
// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button :)
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
// Additionally:

// Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().
$(function main() {

$("#js-shopping-list-form").on('submit', event => {
    let value = $('#shopping-list-entry').val();
    event.preventDefault()
    console.log("A button was clicked");
    $(".shopping-list").append(`<li>
        <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
             <span class="button-label">check</span>
          </button>
           <button class="shopping-item-delete">
             <span class="button-label">delete</span>
           </button>
        </div>
    </li>`)
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', event => {
        $(event.currentTarget).parents('li').find('.shopping-item').toggleClass('shopping-item__checked')
    })

    $('.shopping-list').on('click', '.shopping-item-delete', event => {
        $(event.currentTarget).parents('li').remove()
    })

})


  