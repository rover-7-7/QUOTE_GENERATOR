var currentTime = new Date();
var t = currentTime.getHours();
if (t >= 1 && t < 12) {
  var s = (document.querySelector("h1").innerHTML =
    "Let's start our Morning with a new quote");
}
if (t >= 12 && t < 18) {
  var s = (document.querySelector("h1").innerHTML =
    "Let's start our Afternoon with a new quote");
}
if (t >= 18 && t <= 24) {
  var s = (document.querySelector("h1").innerHTML =
    "Let's start our Night with a new quote");
}

var q = [
  "'To live is the rarest thing in the world. Most people exist, that is all.'– Oscar Wilde",
  "'That it will never come again is what makes life so sweet.' – Emily Dickinson",
  "'It is never too late to be what you might have been.' – George Eliot",
  "'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.' – Ralph Waldo Emerson",
  "'All the world's a stage, and all the men and women merely players.' – William Shakespeare",
  "'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.' – Voltaire",
  "'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.' – Stephen King",
  "'A writer never has a vacation. For a writer life consists of either writing or thinking about writing.' – Eugene Ionesco",
  "'Do not hoard what seems good for a later place in the book, or for another book; give it, give it all, give it now.' – Annie Dillard",
  "'If there's a book that you want to read, but it hasn't been written yet, then you must write it.' – Toni Morrison",
];
var c = [
  "background-color: yellow",
  "background-color: rgb(43, 144, 226)",
  "background-color: #FF719A",
  "background-color: #FF3D81",
  "background-color: #FF5A36",
  "background-color: #FF63A2",
  "background-color: #FF417F",
  "background-color: #FF32B1",
  "background-color: #FF5C68",
  "background-color: #FF5E35",
  "background-color: #FF8C2C",
];

var d = [
  "background-color: #62C8FF",
  "background-color: #6BE5FF",
  "background-color: #5CD1FF",
  "background-color: #36C7FF",
  "background-color: #55E2FF",
  "background-color: #43C8FF",
  "background-color: #4FB7FF",
  "background-color: #3DB1FF",
  "background-color: #6BCDFF",
  "background-color: #57D1FF",
  "background-color: #3AA6FF",
];
document.querySelectorAll("button")[0].addEventListener("click", fun);
var i = 0;
function fun() {
  var v1 = Math.floor(Math.random() * 10);
  var p = q[v1];
  var y = c[v1];
  var m = d[v1];
  var s = (document.querySelector("h2").innerHTML = p);

  var randimg3 = y;
  document.querySelector("body").setAttribute("style", randimg3);
  var randimg4 = m;
  document.querySelector("#b1").setAttribute("style", randimg4);
}
