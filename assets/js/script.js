var saveButton = $('.saveBtn');
var timeBlock = $('.time-block');
var notif = $('#currentDay');
var saveNotif = $('<h3>');

$(document).ready(function() { 

  saveButton.click(function () {
    saveNotif.remove();
    var ID = $(this).parent().attr('id');
    var text = $(this).siblings('textarea');
    var textContent = text.val();
    localStorage.removeItem(ID);
    localStorage.setItem(ID, textContent);
  })

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var testTime = dayjs().hour();
  function classChecker() {
    timeBlock.each(function() {
      notif.text(dayjs().format('dddd - MM/DD/YYYY'))

      var ID = parseInt($(this).attr('id'));
      if (ID == testTime) {
        $(this).removeClass('past present future').addClass('present');
      }
      else if (ID < testTime) {
        $(this).removeClass('past present future').addClass('past');
      }
      else {
        $(this).removeClass('past present future').addClass('future');
      }
    })
  }
  setInterval(classChecker, 1000);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  timeBlock.each(function() {
    var ID = $(this).attr('id');
    var textContent = localStorage.getItem(ID);
    var textArea = $(this).children('textarea');
    if (textContent) {
      textArea.text(textContent);
    }
  })

  // TODO: Add code to display the current date in the header of the page.

});