const firstName1 = "Akash";
const firstName2 = "Akash";
const firstName3 = "Aka" + "sh"; // address of firstName3 is not equal to firstName1 and firstName2 (refer the memory diagram to understand)
console.log(firstName1 === firstName2); //output-> true
console.log(firstName1 === firstName3); //output-> true
/** IN PRIMITIVE DATA TYPES, COMPARISON OPERATORS COMPARE VARIABLE NOT ON THE BASIS OF THEIR ADDRESSES, RATHER ON THE BASIS OF THEIR VALUES, IF 2 VARIABLES HAVE DIFFERENT ADDRESS BUT HAVE SAVE VALUE THEN COMPARISON OPERATOR RETURN TRUE, BUT IN CASE OF NON-PRIMITIVE DATA TYPES, IF ADDRESS OF BOTH THE VARIABLES ARE DIFFERENT EVEN THOUGH THEIR VALUES ARE SAME, COMPARISON OPERATOR RETURN FALSE */

const myNum1 = 21;
const myNum2 = 21;

const isGraduate = false;
const hasJob = false;
const isLearning = true;

const myNull = null;
const myUndefined = undefined;

const myEmptyString = "";
