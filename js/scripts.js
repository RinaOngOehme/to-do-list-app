function newItem() {
  //Add a new item to the list:
  let li = $("<li id='inputValue'></li>");
  let inputValue = $('#input').val();
  li.append(inputValue);

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  };

  //remove an item
  $("crossOutButton").on('click', function() {
   $(this).parent().remove();
      });
  //Cross an item out:
  function crossOut() {
    li.toggleClass("strike");
	  }

  //sort list
   $("#list").sortable();
}
