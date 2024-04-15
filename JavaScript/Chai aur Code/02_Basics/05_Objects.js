// OBJECTS DESTRUCTURING AND JSON API
const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// there are several ways to accessing the object's variables
console.log(course.courseInstructor); //this is also correct way; output->hitesh
const { courseInstructor } = course;
console.log(courseInstructor); //output->hitesh
const { courseInstructor: instructor } = course;
console.log(instructor); //output-> hitesh

// JSON STRUCTURE
/**
 * {
 *      "name": "cdpatra",  // in JSON the key are mainly in form of strings
 *      "courseName": "JS in hindi",
 *      "price": "free"
 * }
 */
// SOME TIMES API IS GIVEN IN THE FORM OF ARRAY OF OBJECTS
/**
 * [
 *      {},
 *      {},
 *      {}
 * ]
 */