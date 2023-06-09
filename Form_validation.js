
function getcolor(id,msg){
    element1 = document.getElementById(id);
    element1.getElementsByClassName('errorMsg')[0].innerHTML = msg;
}
function rgbalert(){
    let fname = document.forms['myForm']['myFirstName'].value;
    if ((fname.length >= 0) && (fname.length < 3)){
        getcolor('divfName','*Length of Name is too Short!123')
        document.getElementById('fnameInpu').style.border = "2px solid red";
    }
    if (fname.length > 12) {
        setErrors('divfName', "*Length of Name is too Long!");
        document.getElementById('fnameInpu').style.border = "2px solid red";
    }

    if (Number(fname)) {
        setErrors('divfName', '*Name cannot be a Number');
        document.getElementById('fnameInpu').style.border = "2px solid red";
    }
    else{
        getcolor('divfName','Looks Good')
        document.getElementById('fnameInpu').style.border = "2px solid lightgreen";
    }
}









//Create Function for take id and pass error in a particular place of error(span tag)/
function setErrors(id, error) {
    //Sets error inside tag of id

    element = document.getElementById(id);
    element.getElementsByClassName('errorMsg')[0].innerHTML = error;
}

function showerr() {
    let obj1 = document.getElementById('country_code');
    obj1 = obj1.setAttribute("style", "border-left: 2px solid red; border-top: 2px solid red; border-bottom: 2px solid red;");
}

function showerr2() {
    let obj2 = document.getElementById('numberInput');
    obj2 = obj2.setAttribute("style", "border-right: 2px solid red; border-top: 2px solid red; border-bottom: 2px solid red;");
}

function showerr3(){
    let obj3 = document.getElementById('country_code');
    obj3 = obj3.setAttribute("style","border-left: 2px solid lightgreen; border-top: 2px solid lightgreen; border-bottom: 2px solid lightgreen");
}

function showerr4(){
    let obj4 = document.getElementById('numberInput');
    obj4 = obj4.setAttribute("style","border-right : 2px solid lightgreen; border-top : 2px solid light green; border-bottom : 2px solid lightgreen");
}

function validateForm() {
    // In the place of myForm you should write name of form in a document
    //In the place of myFirstName you should write name of input in a form where you get input value
    let onsubmit_condition = true;

    // First Input
    let name = document.forms['myForm']["myFirstName"].value;
    if (name.length < 3) {
        setErrors('divfName', "*Length of Name is too Short!");
        document.getElementById('fnameInpu').style.border = "2px solid red";
        // if (onsubmit_condition == false) {
        //     document.getElementsByTagName('fnameInput').style.borderColor = "red";
        // }
        onsubmit_condition = false;

    }

    if (name.length > 12) {
        setErrors('divfName', "*Length of Name is too Long!");
        document.getElementById('fnameInpu').style.border = "2px solid red";
        onsubmit_condition = false;
    }

    if (Number(name)) {
        setErrors('divfName', '*Name cannot be a Number');
        document.getElementById('fnameInpu').style.border = "2px solid red";
        onsubmit_condition = false;
    }

    else {
        setErrors('divfName', 'Everything is ok');
        document.getElementById('fnameInpu').style.border = "2px solid lightgreen";
        onsubmit_condition = false;
    }


    //Second Input
    let middle_name = document.forms['myForm']['myMiddleName'].value;


    if ((middle_name.length > 0) && (middle_name.length < 3)) {
        setErrors('divmName', '*Length of middle name is too short!');
        document.getElementById('mnameInpu').style.border = "2px solid red";
        onsubmit_condition = false;
    }

    if (middle_name.length > 12) {
        setErrors('divmName', "*Length of middle name is too long!");
        document.getElementById('mnameInpu').style.border = "2px solid red";
        onsubmit_condition = false;
    }

    if (Number(middle_name)) {
        setErrors('divmName', '*Name can not be a Number!');
        document.getElementById('mnameInpu').style.border = "2px solid red";
        onsubmit_condition = false;
    }

    else {
        setErrors('divmName', 'Everything is ok');
        document.getElementById('mnameInpu').style.border = "2px solid lightgreen";
        onsubmit_condition = false;
    }

    //Third Input
    let lastName = document.forms['myForm']['myLastName'].value;

    if (lastName.length < 3) {
        setErrors('divlaName', '*Length of last name is too short!');
        document.getElementById('lnameInpu').style.border = "2px solid red";
        onsubmit_condition = false;
    }

    if (lastName.lastName > 12) {
        setErrors('divlaName', '*Length of last name is too long!');
        document.getElementById('lnameInpu').style.border = "2px solid red";
        onsubmit_condition = false;
    }

    if (Number(lastName)) {
        setErrors('divlaName', '*Name cannot be Number!');
        document.getElementById('lnameInpu').style.border = "2px solid red";
        onsubmit_condition = false;
    }

    else {
        setErrors('divlaName', 'Everything is ok');
        document.getElementById('lnameInpu').style.border = "2px solid lightgreen";
        onsubmit_condition = false;
    }

    //Fourth Input
    let email_Name = document.forms['myForm']['myEmail'].value;

    if (email_Name.length < 11) {
        setErrors('divemail', '*Length is too short!');
        document.getElementById('emailnameInpu').style.border = "2px solid red";
        onsubmit_condition = false;
    }

    if ((email_Name.length > 35)) {
        setErrors('divemail', '*Length is too Long!');
        document.getElementById('emailnameInpu').style.border = "2px solid red";
        onsubmit_condition = false;
    }

    else {
        setErrors('divemail', 'Everything is ok');
        document.getElementById('emailnameInpu').style.border = "2px solid lightgreen";
        onsubmit_condition = false;
    }

    //Fifth Input
    let phone_Number = document.forms['myForm']['myNum'].value;

    if (phone_Number.length !== 10) {
        setErrors('divnumber', '*Number must be 10 digits');
        document.getElementById('country_code').innerHTML = showerr();
        document.getElementById('numberInput').innerHTML = showerr2();
        onsubmit_condition = false;
    }

    else {
        setErrors('divnumber', 'Everything is ok');
        document.getElementById('country_code').innerHTML = showerr3();
        document.getElementById('numberInput').innerHTML = showerr4();
        onsubmit_condition = false;
    }

    //Sixth Input
    let passInput = document.forms['myForm']['myPass'].value;

    if (passInput.length < 8) {
        setErrors('divpass', 'Password should be atleast eight characters long');
        document.getElementById('pInpu').style.border = "2px solid red";
        onsubmit_condition = false;
    }

    else {
        setErrors('divpass', 'Everything is ok');
        document.getElementById('pInpu').style.border = "2px solid lightgreen";
        onsubmit_condition = false;
    }

    return onsubmit_condition;

}