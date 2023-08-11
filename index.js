// "selectors"
// the document object in the next line of code represents the html document
// that is displayed in the window that this js code/script is used in.
// the following code looks through the whole html page (querySelector method) for the first instance of an
// element with the .toggle-btn selector and stores it in the themeToggleBtn variable that the javascript code can understand.
// Things to look up: the DOM (Document Object Model) and the manipulation of it if you're not sure!
const themeToggleBtn = document.querySelector(".toggle-btn");

// "state"
// we take the current status of some value in the html page's local storage and store it into a variable that js can understand
const theme = localStorage.getItem("theme");

// "on mount"
// this is next line of code is a cheeky way to do the 2nd thing (after the &&/logical AND operator) if the 1st thing
// (before the &&/logical AND operator) is "truthy" in value.
// the following line of code is something to be evaluated when the page loads/initializes denoted by the term "on mount"
// Things to look up: falsy and truthy values and logical operators for conditional statements, mounting/demounting
theme && document.body.classList.add(theme);

// "handlers"
// this block of code handles the state of dark-mode being on or off. We have css stylings in index.css that determine
// what happens when "dark-mode" exists as a class for body or not.
// this block of code INITIALLY adds (but ultimately toggles) dark-mode as a "status"/class to the body element.
// it then conditionally checks if the class "dark-mode" exists already on the body element. If it is, store that value
// in local storage as a key-value pair with "theme" as the key and "dark-mode" as the paired value. Otherwise, it removes
// the key (and essentially the paired value as well)
// Things to look up:
handleThemeToggle = () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.removeItem("theme");
  }
};

// "events"
// this following line of code adds an event listener to the first instance of an element with the ".toggle-btn" selector
// in the html code (also locally saved into the themeToggleBtn variable from the top) so that everytime that element is clicked
// (note the first argument in the addEventListener method), the handleThemeToggle function we defined in the block of code
// above gets executed (note the 2nd value of the addEventListener method).
themeToggleBtn.addEventListener("click", handleThemeToggle);

//a clean way to think about organizing your js code (if not just remembering what step you're on or what you need to do next) is
// thinking in terms of these 5 steps: figure out your SELECTORS (what you want to manipulate in the DOM), determine if you need to
// manage or handle the STATE of anything (any values you might need to keep track of), set up what you need to do ON MOUNT (when
// the code first renders/loads), define your HANDLERS (usually the logic of what you need to manipulate in the DOM), and set up your
// EVENTS (so that you have some means of triggering the changes in your html code whether it be by click, hover, etc.)
