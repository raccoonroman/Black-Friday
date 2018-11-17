// Set the date we're counting down to
const countDownDate1 = new Date("Nov 17, 2018 20:20:00").getTime();
const countDownDate2 = new Date("Nov 17, 2018 20:22:00").getTime();
const countDownDate3 = new Date("Nov 19, 2018 07:35:10").getTime();
const countDownDate4 = new Date("Nov 20, 2018 13:12:11").getTime();
const countDownDate5 = new Date("Nov 20, 2018 10:09:08").getTime();
const countDownDate6 = new Date("Nov 20, 2018 07:06:05").getTime();
const countDownDate7 = new Date("Nov 20, 2018 05:04:03").getTime();
const countDownDate8 = new Date("Nov 17, 2018 20:10:55").getTime();
const countDownDate9 = new Date("Nov 18, 2018 23:00:40").getTime();
const countDownDate10 = new Date("Nov 18, 2018 18:18:18").getTime();


const productItem1 = document.querySelector(".js-product-item-1");
const productItem2 = document.querySelector(".js-product-item-2");
const productItem3 = document.querySelector(".js-product-item-3");
const productItem4 = document.querySelector(".js-product-item-4");
const productItem5 = document.querySelector(".js-product-item-5");
const productItem6 = document.querySelector(".js-product-item-6");
const productItem7 = document.querySelector(".js-product-item-7");
const productItem8 = document.querySelector(".js-product-item-8");
const productItem9 = document.querySelector(".js-product-item-9");
const productItem10 = document.querySelector(".js-product-item-10");


const getHours = (distance) => {
  return Math.floor((distance / (1000 * 60 * 60)));
}

const getMinutes = (distance) => {
  return Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
}

const getSeconds = (distance) => {
  return Math.floor((distance % (1000 * 60)) / 1000);
}


// Update the count down every 1 second
const x = setInterval(function() {

  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance1 = countDownDate1 - now;
  const distance2 = countDownDate2 - now;
  const distance3 = countDownDate3 - now;
  const distance4 = countDownDate4 - now;
  const distance5 = countDownDate5 - now;
  const distance6 = countDownDate6 - now;
  const distance7 = countDownDate7 - now;
  const distance8 = countDownDate8 - now;
  const distance9 = countDownDate9 - now;
  const distance10 = countDownDate10 - now;

  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance2 / (1000 * 60 * 60)));
  // var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);
  const getTimer = (distance) => {
    return getHours(distance) + ":" + getMinutes(distance) + ":" + (getSeconds(distance) >= 10 ? getSeconds(distance) : '0' + getSeconds(distance));
  }

  // Display the result in the element with id="demo"
  document.getElementById("js-timer-1").innerHTML = getTimer(distance1);

  document.getElementById("js-timer-2").innerHTML = getTimer(distance2);

  document.getElementById("js-timer-3").innerHTML = getTimer(distance3);

  document.getElementById("js-timer-4").innerHTML = getTimer(distance4);

  document.getElementById("js-timer-5").innerHTML = getTimer(distance5);

  document.getElementById("js-timer-6").innerHTML = getTimer(distance6);

  document.getElementById("js-timer-7").innerHTML = getTimer(distance7);

  document.getElementById("js-timer-8").innerHTML = getTimer(distance8);

  document.getElementById("js-timer-9").innerHTML = getTimer(distance9);

  document.getElementById("js-timer-10").innerHTML = getTimer(distance10);


  const unlock = (distance, productItem) => {
     // If the count down is finished, write some text 
    if (distance < 0) {
      productItem.classList.remove('product-item--lock');
      productItem.classList.add('product-item--unlock');
      // clearInterval(x);
      // document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }

  unlock(distance1, productItem1);
  unlock(distance2, productItem2);
  unlock(distance3, productItem3);
  unlock(distance4, productItem4);
  unlock(distance5, productItem5);
  unlock(distance6, productItem6);
  unlock(distance7, productItem7);
  unlock(distance8, productItem8);
  unlock(distance9, productItem9);
  unlock(distance10, productItem10);
}, 1000);