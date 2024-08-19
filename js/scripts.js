$(document).ready(function () {
  function newItem() {
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);

    if (inputValue === "") {
      alert("You must write something!");
    } else {
      $("#list").append(li);
    }
    //2. Crossing an item out:
    function crossOut() {
      li.toggleClass("strike");
    }

    li.on("dblclick", crossOut);
    //3. Adding a delete button
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
      li.addClass("delete");
    }
    $("#list").sortable(); // Allows the items to be sorted
    $("#input").val(""); // Clear the input field after adding a new item
  }

  // Add event listener for Enter key
  $("#input").on("keypress", function (event) {
    if (event.which === 13) {
      // 13 is the Enter key code
      newItem();
      event.preventDefault(); // Prevent the default form submission
    }
  });
});
