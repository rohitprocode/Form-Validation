//Create Function for take id and pass error in a particular place of error(span tag)/
function setErrors(id, error) {
    //Sets error inside tag of id

    element = document.getElementById(id);
    element.getElementsByClassName('errorMsg')[0].innerHTML = error;
}

function validateForm() {
    // In the place of myForm you should write name of form in a document
    //In the place of myFirstName you should write name of input in a form where you get input value
    let onsubmit_condition = true;

    //First Input
    let name = document.forms['myForm']["myFirstName"].value;
    if (name.length < 3) {
        setErrors('divfName', "*Length of Name is too Short!");
        onsubmit_condition = false;
    }

    if (name.length > 12) {
        setErrors('divfName', "*Length of Name is too Long!");
        onsubmit_condition = false;
    }

    if (Number(name)) {
        setErrors('divfName', '*Name cannot be a Number');
        onsubmit_condition = false;
    }

    //Second Input
    let middle_name = document.forms['myForm']['myMiddleName'].value;

    if ((middle_name.length > 0) && (middle_name.length < 3)) {
        setErrors('divmName', '*Length of middle name is too short!');
        onsubmit_condition = false;
    }

    if (middle_name.length > 12) {
        setErrors('divmName', "*Length of middle name is too long!");
    }

    if (Number(middle_name)) {
        setErrors('divmName', '*Name can not be a Number!');
        onsubmit_condition = false;
    }

    //Third Input
    let lastName = document.forms['myForm']['myLastName'].value;
    
    if(lastName.length < 3){
        setErrors('divlaName','*Length of last name is too short!');
        onsubmit_condition = false;
    }

    if(lastName.lastName > 12){
        setErrors('divlaName','*Length of last name is too long!');
        onsubmit_condition = false;
    }

    if(Number(lastName)){
        setErrors('divlaName','*Name cannot be Number!');
        onsubmit_condition = false;
    }


    return onsubmit_condition;
}