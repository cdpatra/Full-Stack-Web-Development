const alertResult = alert("This is alert()"); // ALERT GIVE ONLY ONE BUTTON i.e. OK
/** RETURN TYPE OF ALERT IS UNDEFINED */
console.log(`Value returned by alert(): ${alertResult}`);

const isConfirm = confirm("This is confirm()"); //CONFIRM GIVE TWO BUTTONS i.e. OK & CANCEL
/** RETURN TYPE OF CONFIRM IS BOOLEAN EITHER TRUE OR FALSE */
console.log(`Value returned by confirm(): ${isConfirm}`);

const promptResult = prompt("Please enter your name (This is prompt())"); //PROMPT GIVE AN INPUT BOX
/** RETURNS THE USER'S INPUT, IF USER CANCEL THE PROMPT THEN IT RETURNS NULL */
console.log(`Value returned by prompt(): ${promptResult}`);
