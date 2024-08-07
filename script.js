/* .js files add interaction to your website */
var factList = [
  "The global temperature has increased by 1.01°C (2°F) since the late 19th century - NASA",/*0*/
  "Global sea level rose about 8 inches in the last century - NASA",/*1*/
  "The 100 least-emitting countries generate 3% of total emissions. The 10 largest emitters contribute 68% - UN",/*2*/
  "Emissions must drop 7.6% per year from 2020 to 2030 to keep temperatures from exceeding 1.5°C and 2.7% per year to stay below 2°C - UN",
"Average global temperatures in 2020 were 1.76°F warmer than the 20th century average - making it the second-hottest year on record"];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
