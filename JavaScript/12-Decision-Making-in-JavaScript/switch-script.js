const dayNumber = 6;

switch (dayNumber) {
  case 1:
    console.log("It is Monday Today");
    break;
  case 2:
    console.log("It is Tuesday Today");
    break;
  case 3:
    console.log("It is Wednesday Today");
    break;
  case 0 /** ORDER OF CASE STATEMENTS DOES NOT MATTER */:
    console.log("It is Sunday Today");
    break;
  case 4:
    console.log("It is Thursday Today");
    break;
  case 5:
    console.log("It is Friday Today");
    break;
  case 6:
    console.log("It is Saturday Today");
    break;
  case 6 /** THERE CAN BE DUPLICATE CASE BUT THE FIRST ONE WILL BE EXECUTED */:
    console.log("It is Saturday Today repeated");
    break;
  default: /** THERE CANNOT BE DUPLICATE DEFAULT */
    console.log("Please enter valid day number");
}

const username = "cdpatra";
const userAge = 21;

switch (true) {
  case userAge > 0 && userAge <= 4:
    console.log(`${username} is a kid.`);
    console.log(`and he/she is playing.`);
    break;

  case userAge >= 5 && userAge <= 17:
    console.log(`${username} is a school going student.`);
    console.log(`and he/she is learning maths and science.`);
    break;

  case userAge >= 18 && userAge <= 24: {
    console.log(`${username} is a college going student.`);
    console.log(`and he/she is learning computer science.`);

    switch (true) {
      case userAge >= 20:
        console.log(`${username} is above 19`);
        break;

      default:
        console.log(`${username} is below 20`);
    }
    break;
  }

  case userAge >= 25 && userAge <= 45:
    console.log(`${username} is working professional`);
    console.log(`and he/she is a web-developer`);
    break;

  case userAge > 45 && userAge <= 120:
    console.log(`${username} is retired.`);
    console.log(`and he/she reads newspaper`);
    break;

  case userAge > 120:
    console.log(`${username} is immortal`);
    break;

  default:
    console.log(`Please enter a valid age`);
}
// WE CAN DO IN THIS WAY BECAUSE IN JS CASES HAVING SAME VALUES ARE POSSIBLE, AS ONLY ONE CONDITION WILL BE TRUE AND REST WILL BE FALSE;

const grade = "b";
switch (grade.toUpperCase()) {
  case "A":
    console.log(`Your score is between 85% to 100%`);
    break;
  case "B":
    console.log(`Your score is between 75% to 85%`);
    break;
  case "C":
    console.log(`Your score is between 60% to 75%`);
    break;
  case "D":
    console.log(`Your score is between 50% to 60%`);
    break;
  case "E":
    console.log(`Your score is between 30% to 50%`);
    break;
  default:
    console.log(`Sorry you FAILED !!!`);
}
/** SWITCH CASE INTERNALLY USES STRICT COMPARISON (I.E. ===) TO COMPARE THE CASE WITH THE GIVEN EXPRESSION */
