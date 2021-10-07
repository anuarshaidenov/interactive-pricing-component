const progressBar = document.querySelector(".progress-bar");
const inputRange = document.querySelector(".range");
const price = document.getElementById("price");
const pageviews = document.getElementById("pageviews");
let per = "/ month";
let priceValue = "16.00";

const btnSwitch = document.querySelector(".btn-switch");
const swtch = document.querySelector(".btn-switch__switch");
let isOn = false;

/* Percentage formula = price * (25/100) */

const calcYearly = function (num) {
  return parseFloat(parseFloat(num) * (25 / 100));
};

inputRange.addEventListener("input", function () {
  progressBar.style.width = `${this.value}%`;

  if (Number(this.value) === 0) {
    pageviews.innerText = `10K Pageviews`;
    priceValue = "8.00";
    price.innerHTML = `$${
      isOn ? `${calcYearly(parseFloat(priceValue))}.00` : priceValue
    } <span class="base-text" id="per">${per}</span>`;
  }
  if (Number(this.value) === 25) {
    pageviews.innerText = `50K Pageviews`;
    priceValue = "12.00";
    price.innerHTML = `$${
      isOn ? `${calcYearly(parseFloat(priceValue))}.00` : priceValue
    } <span class="base-text" id="per">${per}</span>`;
  }

  if (Number(this.value) === 50) {
    pageviews.innerText = `100K Pageviews`;
    priceValue = "16.00";
    price.innerHTML = `$${
      isOn ? `${calcYearly(parseFloat(priceValue))}.00` : priceValue
    } <span class="base-text" id="per">${per}</span>`;
  }

  if (Number(this.value) === 75) {
    pageviews.innerText = `500K Pageviews`;
    priceValue = "24.00";
    price.innerHTML = `$${
      isOn ? `${calcYearly(parseFloat(priceValue))}.00` : priceValue
    } <span class="base-text" id="per">${per}</span>`;
  }

  if (Number(this.value) === 100) {
    pageviews.innerText = `1M Pageviews`;
    priceValue = "36.00";
    price.innerHTML = `$${
      isOn ? `${calcYearly(parseFloat(priceValue))}.00` : priceValue
    } <span class="base-text" id="per">${per}</span>`;
  }
});

btnSwitch.addEventListener("click", function (e) {
  e.preventDefault();
  if (isOn) {
    swtch.style.transform = "translateX(3px)";
    btnSwitch.style.backgroundColor = "hsl(223, 50%, 87%)";
    isOn = false;
    price.innerHTML = `$${priceValue} <span class="base-text" id="per">${per}</span>`;
  } else {
    swtch.style.transform = "translateX(100%)";
    btnSwitch.style.backgroundColor = "hsl(174, 86%, 45%)";
    isOn = true;
    price.innerHTML = `$${`${calcYearly(
      parseFloat(priceValue)
    )}.00`} <span class="base-text" id="per">${per}</span>`;
  }
});
