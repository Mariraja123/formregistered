var studentArray=[];
function validate() {
   
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var mobile_number = document.getElementById('mobile_number').value;
    var designation = document.getElementById('designation').value;
    var experience = document.getElementById('experience').value;
    var password = document.getElementById('password').value;
    var project = document.getElementById('project').value;
    var male = $("input[type='radio'][name='gender']:checked").val();
    var selected = document.getElementById("example-getting-started").value;
    var extracourses= document.getElementById('extracourses').value;
    var Textarea1= document.getElementById('Textarea1').value;
    var gender;

    if (male == "female") {
        gender = "female";
    }
    else {
        gender = "male"
    }
    var todo = JSON.parse(localStorage.getItem('studentsRecord'));
    if(todo!=null)
    {
    for(let i=0;i<todo.length;i++){
     studentArray.push(todo[i]);
    }
    }
    var selected = []; // create an array to hold all currently selected motivations

    // loop through each available motivation
    $('#example-getting-started option').each(function () {
        // if it's selected, add it to the array above
        if (this.selected) {
            selected.push(this.value);
        }
    });

      //nt',JSON.stringify(first_name,first_name))
      

    var stuObj = {
        id: studentArray.length + 1,
        first_name: first_name, last_name: last_name, mobile_number: mobile_number, designation: designation, experience: experience, password: password, project: project, gender: gender, courses: selected,extracourses:extracourses,about:Textarea1,
    };

    studentArray.push(stuObj);
     localStorage.setItem('studentsRecord', JSON.stringify(studentArray));
   
  //
    var r1 = /^[a-zA-Z]+$/;
    var box1 = document.getElementById('first_name');
    if (r1.test(box1.value) == false) {
        document.getElementById("first_name").innerHTML = "*name will not entered*";
        alert("Enter the first name");

        box1.focus();
        box1.style.border = "5px solid red";
        return false;
    }
    else {
        document.getElementById("first_name").innerHTML = "*valid name*";
        box1.focus();
        box1.style.border = "1px solid white";
        // myObj.push({ fName: document.querySelector('#first_name').value })
        //Object.assign(myObj, { fName: document.querySelector('#first_name').value });
        // console.log(Object.assign(document.querySelector('#first_name').value,myObj.fName))
        // myObj.fName(document.getElementById("first_name").value)
    }

    var r2 = /^[a-zA-Z]+$/;
    var box2 = document.getElementById('last_name');
    if (r2.test(box2.value) == false) {
        document.getElementById("last_name").innerHTML = "*name will not entered*";
        box2.focus();
        box2.style.border = "5px solid red";
        return false;
    }

    else {
        document.getElementById("last_name").innerHTML = "*valid name*";
        box2.focus();
        box2.style.border = "1px solid white";
        // localStorage.setItem('lname', name.value);
        // Object.assign(myObj, { lName: document.querySelector('#last_name').value });

        // var storedName = localStorage.getItem('lname', 'value');
        // var userName = document.getElementById('last_name');
    }
    var box3 = document.getElementById('mobile_number');
    if (box3.value == "" || isNaN(box3.value) || box3.value.length > 10 || box3.value.length < 10) {
        document.getElementById("mobile_number").innerHTML = "wrong";
        alert("ënter your phone number");
        box3.focus();
        box3.style.border = "5px solid red";
        return false;
    }
    else {
        document.getElementById("mobile_number").innerHTML = "correct";
        box3.focus();
        box3.style.border = "1px solid white";
        //Object.assign(myObj, { mobilenumber: document.querySelector('#mobile_number').value });
    }
    var r3 = /^[a-zA-Z]+$/;
    var box4 = document.getElementById('designation');
    if (r3.test(box4.value) == false) {
        document.getElementById("designation").innerHTML = "*name will not entered*";
        box4.focus();
        box4.style.border = "5px solid red";
        return false;
    }

    else {
        document.getElementById("designation").innerHTML = "*valid name*";
        box4.focus();
        box4.style.border = "1px solid white";
        //Object.assign(myObj, { designation: document.querySelector('#designation').value });
    }

    var r4 = /^[a-zA-Z]+$/;
    var box6 = document.getElementById('experience');
    if (r4.test(box6.value) == false) {
        document.getElementById("experience").innerHTML = "*name will not entered*";
        alert("select experience");
        box6.focus();
        box6.style.border = "5px solid red";
        return false;
    }

    else {
        document.getElementById("experience").innerHTML = "*valid name*";
        box6.focus();
        box6.style.border = "1px solid white";
        //Object.assign(myObj, { experience: document.querySelector('#experience').value });
    }
    var r5 = /^[a-zA-Z]+$/;
    var box7 = document.getElementById('password');
    if (r5.test(box7.value) == false) {
        document.getElementById("password").innerHTML = "*name will not entered*";
        box7.focus();
        box7.style.border = "5px solid red";
        return false;
    }
    else {
        document.getElementById("password").innerHTML = "*valid name*";
        box7.focus();
        box7.style.border = "1px solid white";
        //Object.assign(myObj, { password: document.querySelector('#password').value });
    }
    // var a = document.getElementById("genderm");
    //var b = document.getElementById("genderf");
    //if (a.checked == false && b.checked == false) {
    //  alert("select gender");
    // Object.assign(myObj, { gender: document.querySelector('#gender').value });
    //}
    var r6 = /^[a-zA-Z]+$/;
    var box8 = document.getElementById('project');
    if (r6.test(box8.value) == false) {
        document.getElementById("project").innerHTML = "*name will not entered*";
        box8.focus();
        box8.style.border = "5px solid red";
        return false;
    }
    else {
        document.getElementById("project").innerHTML = "*valid name*";
        box8.focus();
        box8.style.border = "1px solid white";
        //Object.assign(myObj, { "project": document.querySelector('#project').value })

    }
    //localStorage.setItem("obj", JSON.stringify(myObj));
}

function done(id) {
    var todo = JSON.parse(localStorage.getItem('studentsRecord'));
    console.log(todo);
    var todos = todo.filter((Element) => Element.id == id);
    var frsname = todos[0].first_name;
    console.log(typeof (frsname));
    var lstname = todos[0].last_name;
    var mobile = todos[0].mobile_number;
    var des = todos[0].designation;
    var exe = todos[0].experience;
    var pro = todos[0].project;
    var pass = todos[0].password;
    var gender = todos[0].gender;
    var cou = todo[id-1].courses;
    var extra=todo[id-1].extracourses;
    var taxt=todo[id-1].about;
    //console.log(typeof cou[0], 'uhuhg');

    console.log(frsname, lstname, mobile, des, exe, pro, pass,cou,extra,taxt);
    

    document.getElementById("first_name").value=frsname;
    document.getElementById("last_name").value = lstname;
    document.getElementById("mobile_number").value = mobile;
    document.getElementById("designation").value = des;
    document.getElementById("experience").value = exe;
    document.getElementById("project").value = pro;
    document.getElementById("password").value = pass;
    document.getElementById("extracourses").value = extra;
    document.getElementById("Textarea1").value = taxt;

    $.each(cou, function(i,e){
        $("#example-getting-started option[value='" + e + "']").prop("selected", true);
        $("#example-getting-started option[value='" + e + "']").prop("disabled", true);
        
    });
    
    


    first_name.disabled = true;
    last_name.disabled = true;
    mobile_number.disabled = true;
    designation.disabled = true;
    experience.disabled = true;
    project.disabled = true;
    password.disabled = true;
    extracourses.disabled=true;
      Textarea1.disabled=true;
    //selected.disabled=true;
    
    //selected.disabled = true;
    if (gender == "male") {

        male.checked = true;
        female.disabled = true;
    }
    else {

        female.checked = true;
        male.disabled = true;
    }




}


var url_string = window.location.href;
var url = new URL(url_string);
var check = url.searchParams.has("id");
check = check.toString();
var id = url.searchParams.get("id");
id = parseInt(id);
var chk = check.localeCompare("true");
if (chk == 0) {
    done(id);
}
// multiselect dropdown field
//$("#selectpicker").select2({
  //  placeholder: "select courses", //placeholder
    //tags: true,

//});
//$("#selectpicker").

