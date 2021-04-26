const firebaseConfig = {
    apiKey: "AIzaSyD2_DQpH5I6YJvisvtHWSzavlDrceY-pX4",
    authDomain: "project1-b6dd0.firebaseapp.com",
    projectId: "project1-b6dd0",
    storageBucket: "project1-b6dd0.appspot.com",
    messagingSenderId: "722132625592",
    appId: "1:722132625592:web:e56c0b171110d6b2756c4d",
    measurementId: "G-48882YCTB4"
  };
  firebase.initializeApp(firebaseConfig);
  var ref=firebase.database().ref().child("students")

  function insertData(){
      
      var sname=document.getElementById("sname").value
      var rollno=document.getElementById("rollno").value

      ref.child(sname).set({
            sname:sname,
            rollno:rollno
      })
      console.log("Inserting data ....")
  }

  function deleteData(){
      var id=window.prompt("Enter the roll number to be deleted");
      ref.child(id).remove()
      console.log("Entry deleted")
  }

  function updateData(){
      var sname = document.getElementById("sname").value
      var rollno = document.getElementById("rollno").value  
      ref.child(sname).update({rollno:rollno})
      console.log("Entry Updated")
  }

  

  function displayData(){
    var table1=document.createElement("TABLE")
    table1.border="1"
    row=table1.insertRow(-1)
        cellh1=row.insertCell(-1)
        cellh2=row.insertCell(-1)
        cellh1.innerHTML="<b>Roll No.</b>"
        cellh2.innerHTML="<b>Name</b>"
        ref.on("value",(snap)=>{
            snap.forEach((data)=>{
                row1=table1.insertRow(-1)
                cell1=row1.insertCell(-1)
                cell1.innerHTML=data.val().rollno
                cell2=row1.insertCell(-1)
                cell2.innerHTML=data.val().sname
            })
        })
    var div=document.getElementById("table1");
    div.append(table1);
  }