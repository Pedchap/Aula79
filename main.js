nameOfPersonArray = [];

   function submit()
   {

   var name1 = document.getElementById("nameOfPerson1").value;
   var name2 = document.getElementById("nameOfPerson2").value;
   var name3 = document.getElementById("nameOfPerson3").value;
   var name4 = document.getElementById("nameOfPerson4").value;

   nameOfPersonArray.push(name1);
   nameOfPersonArray.push(name2);
   nameOfPersonArray.push(name3);
   nameOfPersonArray.push(name4);

   console.log(nameOfPersonArray);

   document.getElementById("displayName").innerHTML = nameOfPersonArray;
   document.getElementById("submitButton").style.display = "none";
   document.getElementById("sortButton").style.display = "inline-block";

   }

function sorting()
{
   nameOfPersonArray.sort();
   console.log(nameOfPersonArray);
   document.getElementById("displayName").innerHTML = nameOfPersonArray;
}