const imageLinks = [
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/668465/pexels-photo-668465.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/117139/pexels-photo-117139.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/66896/tulips-flowers-fish-eye-red-66896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/845242/pexels-photo-845242.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/226424/pexels-photo-226424.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600",
];
const image = document.getElementById("image");
image.setAttribute("src", imageLinks[0]);
let intervalID;
let currentIndex = 0;

slideImage(currentIndex);
function slideImage(index) {
  intervalID = setInterval(() => {
    image.innerHTML = null;
    image.setAttribute("src", imageLinks[++index]);
    index > 20 ? (index = 0) : "";
    currentIndex = index;
  }, 1000);
}

const next = document.getElementById("next");
const prev = document.getElementById("prev");

prev.addEventListener("click", () => {
  clearInterval(intervalID);
  if (currentIndex > 0) {
    currentIndex--;
    normalSlider(currentIndex);
  }
});

next.addEventListener("click", () => {
  clearInterval(intervalID);
  if(currentIndex < 20) {
    currentIndex++;
    normalSlider(currentIndex);
  }
});

function normalSlider(index) {
  image.innerHTML = null;
  image.setAttribute("src", imageLinks[index]);
}
