// Set the date we're counting down to
var countDownDate1 = new Date("Nov 18, 2018 22:22:00").getTime();
var countDownDate2 = new Date("Nov 20, 2018 17:27:00").getTime();
var countDownDate3 = new Date("Nov 19, 2018 07:35:10").getTime();
var countDownDate4 = new Date("Nov 20, 2018 13:12:11").getTime();
var countDownDate5 = new Date("Nov 20, 2018 10:09:08").getTime();
var countDownDate6 = new Date("Nov 20, 2018 07:06:05").getTime();
var countDownDate7 = new Date("Nov 20, 2018 05:04:03").getTime();
var countDownDate8 = new Date("Nov 17, 2018 20:10:55").getTime();
var countDownDate9 = new Date("Nov 18, 2018 23:00:40").getTime();
var countDownDate10 = new Date("Nov 18, 2018 18:18:18").getTime();



var productItem1 = document.querySelector(".js-product-item-1");
var productItem2 = document.querySelector(".js-product-item-2");
var productItem3 = document.querySelector(".js-product-item-3");
var productItem4 = document.querySelector(".js-product-item-4");
var productItem5 = document.querySelector(".js-product-item-5");
var productItem6 = document.querySelector(".js-product-item-6");
var productItem7 = document.querySelector(".js-product-item-7");
var productItem8 = document.querySelector(".js-product-item-8");
var productItem9 = document.querySelector(".js-product-item-9");
var productItem10 = document.querySelector(".js-product-item-10");




function getHours(distance) {
	return Math.floor((distance / (1000 * 60 * 60)));
}

function getMinutes(distance) {
	return Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
}

function getSeconds(distance) {
	return Math.floor((distance % (1000 * 60)) / 1000);
}


// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance1 = countDownDate1 - now;
  var distance2 = countDownDate2 - now;
  var distance3 = countDownDate3 - now;
  var distance4 = countDownDate4 - now;
  var distance5 = countDownDate5 - now;
  var distance6 = countDownDate6 - now;
  var distance7 = countDownDate7 - now;
  var distance8 = countDownDate8 - now;
  var distance9 = countDownDate9 - now;
  var distance10 = countDownDate10 - now;

  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance2 / (1000 * 60 * 60)));
  // var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("js-timer-1").innerHTML = getHours(distance1) + ":" + getMinutes(distance1) + ":" + (getSeconds(distance1) >= 10 ? getSeconds(distance1) : '0' + getSeconds(distance1));

  document.getElementById("js-timer-2").innerHTML = getHours(distance2) + ":" + getMinutes(distance2) + ":" + (getSeconds(distance2) >= 10 ? getSeconds(distance2) : '0' + getSeconds(distance2));

  document.getElementById("js-timer-3").innerHTML = getHours(distance3) + ":" + getMinutes(distance3) + ":" + (getSeconds(distance3) >= 10 ? getSeconds(distance3) : '0' + getSeconds(distance3));

  document.getElementById("js-timer-4").innerHTML = getHours(distance4) + ":" + getMinutes(distance4) + ":" + (getSeconds(distance4) >= 10 ? getSeconds(distance4) : '0' + getSeconds(distance4));

  document.getElementById("js-timer-5").innerHTML = getHours(distance5) + ":" + getMinutes(distance5) + ":" + (getSeconds(distance5) >= 10 ? getSeconds(distance5) : '0' + getSeconds(distance5));

  document.getElementById("js-timer-6").innerHTML = getHours(distance6) + ":" + getMinutes(distance6) + ":" + (getSeconds(distance6) >= 10 ? getSeconds(distance6) : '0' + getSeconds(distance6));

  document.getElementById("js-timer-7").innerHTML = getHours(distance7) + ":" + getMinutes(distance7) + ":" + (getSeconds(distance7) >= 10 ? getSeconds(distance7) : '0' + getSeconds(distance7));

  document.getElementById("js-timer-8").innerHTML = getHours(distance8) + ":" + getMinutes(distance8) + ":" + (getSeconds(distance8) >= 10 ? getSeconds(distance8) : '0' + getSeconds(distance8));

  document.getElementById("js-timer-9").innerHTML = getHours(distance9) + ":" + getMinutes(distance9) + ":" + (getSeconds(distance9) >= 10 ? getSeconds(distance9) : '0' + getSeconds(distance9));

  document.getElementById("js-timer-10").innerHTML = getHours(distance10) + ":" + getMinutes(distance10) + ":" + (getSeconds(distance10) >= 10 ? getSeconds(distance10) : '0' + getSeconds(distance10));

  // If the count down is finished, write some text 
  if (distance1 < 0) {
  	productItem1.classList.remove('product-item--lock');
	productItem1.classList.add('product-item--unlock');
    // clearInterval(x);
    // document.getElementById("timer").innerHTML = "EXPIRED";
  }

  if (distance2 < 0) {
  	productItem2.classList.remove('product-item--lock');
	productItem2.classList.add('product-item--unlock');
  }

  if (distance3 < 0) {
  	productItem3.classList.remove('product-item--lock');
	productItem3.classList.add('product-item--unlock');
  }

  if (distance4 < 0) {
  	productItem4.classList.remove('product-item--lock');
	productItem4.classList.add('product-item--unlock');
  }

  if (distance5 < 0) {
  	productItem5.classList.remove('product-item--lock');
	productItem5.classList.add('product-item--unlock');
  }

  if (distance6 < 0) {
  	productItem6.classList.remove('product-item--lock');
	productItem6.classList.add('product-item--unlock');
  }

  if (distance7 < 0) {
  	productItem7.classList.remove('product-item--lock');
	productItem7.classList.add('product-item--unlock');
  }

  if (distance8 < 0) {
  	productItem8.classList.remove('product-item--lock');
	productItem8.classList.add('product-item--unlock');
  }

  if (distance9 < 0) {
  	productItem9.classList.remove('product-item--lock');
	productItem9.classList.add('product-item--unlock');
  }

  if (distance10 < 0) {
  	productItem10.classList.remove('product-item--lock');
	productItem10.classList.add('product-item--unlock');
  }
}, 1000);