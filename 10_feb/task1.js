function addtext()
{
    var fname = document.form.fname.value;
    var lname = document.form.fname.value;
    var age = document.form.age.value;
    var gender = document.form.gender.value;

    document.writeln("Thank you! You have just entered the following:");
    document.writeln("<pre>");
    document.writeln("First Name    : " + fname);
    document.writeln("Last Name     : " + lname);
    document.writeln("Age : " + age);
    document.writeln("Gender : " + gender);

}