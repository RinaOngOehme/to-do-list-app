let li = $("<li></li>");
let inputValue = $("#input").val();
li.append(inputValue);

if (inputValue === '') {
  alert("You must write something!");
} else {
  $("#list").append(li);
}

function crossOut() {
  li.toggleClass("strike");
}

li.on("dblclick", function (crossOut) {
  li.toggleClass("strike")
});

let crossOutButton = $("<crossOutbutton></crossOutButton>");
li.append(crossOutButton);

function deleteListItem() {
  li.addClass("delete")
};

$('#list').sortable();
