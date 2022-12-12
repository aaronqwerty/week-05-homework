var nowDate = $('#currentDay');
var currentTime = $('#currentTime');
var justHour = $('#currentHour');
var justMinute = $('#currentMinute');

var eightAm = $("#08am");
var nineAm = $("#09am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var thirteenPm = $("#13pm");
var fourteenPm = $("#14pm");
var fifteenPm = $("#15pm");
var sixteenPm = $("#16pm");
var seventeenPm = $("#17pm");
var eighteenPm = $("#18pm");


var HourTimes12 = ["8:00 AM","9:00 AM","10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"]
var HourTimes24 = ["08:00","09:00","10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

var currentDate = dayjs().format('dddd[,] DD MMMM YYYY');
var currentHour = dayjs().format('hh:mm:ss A');

var hour = dayjs().format('HH');

var userInput;
var hourSpan;


//Make : Blink Every Second
var t = setInterval(function () {
    var blink = document.getElementById('Blinking');
    blink.style.visibility = (blink.style.visibility == 'hidden' ? '' : 'hidden');
}, 500);
 
  function initPage() {

    displayTime()

    //console.log("Current Hour " + hour);

   $("#flexSwitchCheckReverse").prop("checked", JSON.parse(localStorage.getItem("timePref")));
   
    var init8 = JSON.parse(localStorage.getItem("hour-08"));
    eightAm.val(init8);
    
    var init9 = JSON.parse(localStorage.getItem("hour-09"));
    nineAm.val(init9);
  
    var init10 = JSON.parse(localStorage.getItem("hour-10"))
    tenAm.val(init10);
    
    var init11 = JSON.parse(localStorage.getItem("hour-11"))
    elevenAm.val(init11);
    
    var init12 = JSON.parse(localStorage.getItem("hour-12"))
    twelvePm.val(init12);
    
    var init13 = JSON.parse(localStorage.getItem("hour-13"))
    thirteenPm.val(init13);
    
    var init14 = JSON.parse(localStorage.getItem("hour-14"))
    fourteenPm.val(init14);
    
    var init15 = JSON.parse(localStorage.getItem("hour-15"))
    fifteenPm.val(init15);
   
    var init16 = JSON.parse(localStorage.getItem("hour-16"))
    sixteenPm.val(init16);
    
    var init17 = JSON.parse(localStorage.getItem("hour-17"))
    seventeenPm.val(init17);
    
    var init18 = JSON.parse(localStorage.getItem("hour-18"))
    eighteenPm.val(init18);
  }

  function scheduleColors() {
      
    $(".description").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        //console.log(timeTest);
        //console.log(hour);
        //console.log(this);
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
            $(this.rows = 5);
        }
    });
  }


  function displayTime() {
    if ($("#flexSwitchCheckReverse:checked").val()) {
        var getDate = dayjs().format('dddd[,] DD MMMM YYYY');
        var nowHour = dayjs().format('HH');
        var nowMinute = dayjs().format('mm');
        nowDate.text(getDate);
        justHour.text(nowHour);
        justMinute.text(nowMinute);
        hours122408.textContent = HourTimes24[0];
        hours122409.textContent = HourTimes24[1];
        hours122410.textContent = HourTimes24[2];
        hours122411.textContent = HourTimes24[3];
        hours122412.textContent = HourTimes24[4];
        hours122413.textContent = HourTimes24[5];
        hours122414.textContent = HourTimes24[6];
        hours122415.textContent = HourTimes24[7];
        hours122416.textContent = HourTimes24[8];
        hours122417.textContent = HourTimes24[9];
        hours122418.textContent = HourTimes24[10];

        } else {
        var getDate = dayjs().format('dddd[,] DD MMMM YYYY');
        var nowHour = dayjs().format('h');
        var nowMinute = dayjs().format('mm A');
        nowDate.text(getDate);
        justHour.text(nowHour);
        justMinute.text(nowMinute);
        hours122408.textContent = HourTimes12[0];
        hours122409.textContent = HourTimes12[1];
        hours122410.textContent = HourTimes12[2];
        hours122411.textContent = HourTimes12[3];
        hours122412.textContent = HourTimes12[4];
        hours122413.textContent = HourTimes12[5];
        hours122414.textContent = HourTimes12[6];
        hours122415.textContent = HourTimes12[7];
        hours122416.textContent = HourTimes12[8];
        hours122417.textContent = HourTimes12[9];
        hours122418.textContent = HourTimes12[10];
        }
  }




  $(document).ready(function(){
    initPage()
    scheduleColors()
    
  
    // Buttons (save to Local Storage)
    $(".saveBtn").on("click", function(){
      userInput = $(this).siblings(".description").val().trim();
      //console.log(userInput);
      hourSpan = $(this).parent().attr("id");
      //console.log(hourSpan);
      localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })
    
    //24 hour time
    $("#flexSwitchCheckReverse").on("click", function() {
      if ($("#flexSwitchCheckReverse").prop("checked")) {
        localStorage.setItem("timePref", true);
        console.log("24-Hour")
        initPage()
      } else {
        console.log("12-Hour")
        localStorage.setItem("timePref", false);  
        initPage()
        }
      })
  
    // Button for clear the day
    $("#clearSchedule").on("click", function(){
      localStorage.clear();
      initPage()
    }) 

  });

displayTime();
scheduleColors();
setInterval(displayTime, 1000);
setInterval(scheduleColors, 1000);

