//Create a class named Video. The class should be constructed with the following parameters:
  // title (a string)
  // uploader (a string, the person who uploaded it)
  // time (a number, the duration of the video - in seconds)
class Video {
  constructor({title, uploader, time}) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }


// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
  watch() {
    console.log(`${this.uploader} watched all ${ this.time} of ${this.title}`)
  }
}

// Instantiate a new Video instance and call the watch() method.
const video1 = new Video("Funny cats", "Randy", 100);
video1.watch();

// Instantiate a second Video instance with different values.

const video2 = new Video("Sad dogs", "Rachel", 50);

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
const videoArr = [
  {
    title: "Introduction to JavaScript",
    uploader: "CodeWithAnna",
    time: 540,
  },
  {
    title: "CSS Flexbox in 15 Minutes",
    uploader: "FrontendNinja",
    time: 915,
  },
  {
    title: "Python for Absolute Beginners",
    uploader: "DevJourney",
    time: 1800,
  },
  {
    title: "Async JavaScript: Promises & Async/Await",
    uploader: "JS Explained",
    time: 1250,
  },
  {
    title: "Build a Responsive Webpage",
    uploader: "Design&Code",
    time: 2100,
  },
];


// Bonus: Loop through the array to instantiate those instances.
for (const {title, uploader, time} of videoArr) {
  let video1 = new Video({title, uploader, time})
  video1.watch();
}