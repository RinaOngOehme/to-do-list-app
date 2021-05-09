function newItem() {
//Add a new item to the list:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
};
//Cross an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

 let li = $('<li></li>');
	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//Add a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//sort list
   $('#list').sortable();
