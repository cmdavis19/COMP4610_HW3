/*
Christa Davis
christa_davis@student.uml.edu
Homework Assignment 3
GUI Programming I
6/16/22
*/
function printTable(){
  //variable numbers taking in from html document form
  var numberOne = Number(document.getElementById("input1").value);
  var numberTwo = Number(document.getElementById("input2").value);
  var numberThree = Number(document.getElementById("input3").value);
  var numberFour = Number(document.getElementById("input4").value);
    //temp number to iterate through form
    var tempNumOne = numberOne;
    var i=0;
    //write table onto page
    document.write('<table border="2" cellspacing="4"');
    //iterates through numbers and writes rows on table
    for(i=numberThree;i<=numberFour+1;i++)
    {
      document.write("<tr>");
      while(tempNumOne<numberTwo+1){
        //iterates through and writes cells into row
      document.write("<td>"+ tempNumOne*i + "</td>");
      tempNumOne = tempNumOne+1;
    }
    document.write("</tr>");
    tempNumOne = numberOne;
    }
    document.write("</table>");
    }
