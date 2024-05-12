const alertMessage = document.querySelector(`#alert-message`);
alertMessage.style.display = `none`;

const allGoalsInput = document.querySelectorAll(`.container section input[placeholder="Add new goal..."]`);
const allCheckboxes = document.querySelectorAll(`.container section .custom-checkbox`);

let totalGoalCount = 0;
const progress = document.querySelector(`#progress`);
const progressCount = document.querySelector(`#progress-count span`);

const progressMessages = [
   `Raise the bar by completing your goals!`,
   `Well begun is half done!`,
   `Just a step away, keep going!`,
   `Whoa! You just completed all the goals, time for chill :D`,
];
const progressMessage = document.querySelector(`#message`);
progressMessage.innerText = progressMessages[totalGoalCount];

const quotes = [
   `"Move one step ahead, today!"`,
   `"Keep Going, You're making great progress!"`,
   `"Believe in yourself."`,
   `"Today's progress is tomorrow's success."`,
   `"One step at a time."`,
   `"You're stronger than you think."`,
   `"Embrace the journey."`,
   `"Consistency is key."`,
];
const quote = document.querySelector(`#quote`);
let countQuote = 0;
quote.innerText = quotes[countQuote];
setInterval(() => {
   quote.innerText = quotes[(countQuote = (countQuote + 1) % quotes.length)];
}, 10000);

allGoalsInput.forEach((goalInput, index) => {
   // ! setting up the goals from the local storage
   goalInput.value = localStorage.getItem(`goal${index}`);
   // ! setting up the progress from the local storage
   if (localStorage.getItem(`checkbox${index}`) !== `` && localStorage.getItem(`checkbox${index}`) !== null) totalGoalCount++;
   progress.style.width = `${(totalGoalCount / 3) * 100}%`;
   if (totalGoalCount === 0) progressCount.parentElement.style.display = `none`;
   else progressCount.parentElement.style.display = `block`;
   progressCount.innerText = totalGoalCount;
   // !showing progress message
   progressMessage.innerText = progressMessages[totalGoalCount];

   // ! adding event listeners to each input
   goalInput.addEventListener(`input`, (e) => {
      alertMessage.style.display = `none`;
      localStorage.setItem(`goal${index}`, e.target.value);

      // ! if any one of the goal field is empty then remove all the checked box (if any) and make the progress bar 0
      if (e.target.value === ``) {
         alertMessage.style.display = `block`;
         totalGoalCount = 0;
         progress.style.width = `${(totalGoalCount / 3) * 100}%`;
         progressCount.parentElement.style.display = `none`;
         // ! showing progress message
         progressMessage.innerText = progressMessages[totalGoalCount];

         allGoalsInput.forEach((goalInput) => {
            goalInput.classList.remove(`goal-completed`);
         });
         allCheckboxes.forEach((checkbox, index) => {
            checkbox.classList.remove(`marked`);
            localStorage.setItem(`checkbox${index}`, ``);
         });
      }
   });
});

allCheckboxes.forEach((checkbox, index) => {
   // ! setting up the value from the local storage
   if (localStorage.getItem(`checkbox${index}`) === `true`) {
      checkbox.classList.add(`marked`);
      checkbox.nextElementSibling.classList.add(`goal-completed`);
   }

   // ! adding event listeners to each custom checkbox
   checkbox.addEventListener(`click`, (e) => {
      // ! checking that either all the goals are filled or not
      let isAllGoalsAreSet;
      for (let i = 0; i < allGoalsInput.length; i++) {
         if (allGoalsInput[i].value === ``) {
            alertMessage.style.display = `block`;
            isAllGoalsAreSet = false;
            break;
         }
         isAllGoalsAreSet = true;
      }

      if (isAllGoalsAreSet) {
         alertMessage.style.display = `none`;

         if ((localStorage.getItem(`checkbox${index}`) ?? ``) === ``) {
            localStorage.setItem(`checkbox${index}`, `true`);
            totalGoalCount++;
         } else {
            localStorage.setItem(`checkbox${index}`, ``);
            totalGoalCount--;
         }

         e.target.classList.toggle(`marked`);
         e.target.nextElementSibling.classList.toggle(`goal-completed`);

         // ! changing the progress bar
         progress.style.width = `${(totalGoalCount / 3) * 100}%`;
         // ! changing the progress count
         if (totalGoalCount === 0) progressCount.parentElement.style.display = `none`;
         else progressCount.parentElement.style.display = `block`;
         progressCount.innerText = totalGoalCount;
         // ! showing progress message
         progressMessage.innerText = progressMessages[totalGoalCount];
      }
   });
});
