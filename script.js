let header = document.getElementById("header");
header.innerHTML = "inhale, exhale, and experience...";

let year = 2024;
let artist = "Taylor Swift";
let date = 10+9;
alert(artist + "'s New Album The Tortured Poet's Department Out April " + date + "th!");
console.log(year + " is the year of album drops!");


//countdown to album release
let text;
//today's date
let today = new Date();
let release = new Date();
//date of album release
release.setFullYear(2024, 3, 19);

if (today == release || release < today) {
  //TTPD = The Tortured Poet's Department
  text = "Check out TTPD!";
} else {
  text = "TTPD did not drop yet :(";
}
console.log(text);

