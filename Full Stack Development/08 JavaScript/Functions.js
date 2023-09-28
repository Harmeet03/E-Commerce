// document.getElementById("forms").addEventListener(submit, (e) => {
    //     e.defaultPrevented();
    //     let maths = document.getElementById("maths").value;
    //     let english = document.getElementById("english").value;
    //     let bst = document.getElementById("bst").value;
    //     let accounts = document.getElementById("accounts").value;
    //     let eco = document.getElementById("eco").value;
    //     let total = marks(Number(maths), Number(english), Number(bst), Number(accounts), Number(eco));
    //     console.log("Total Marks are ", total);
    //     document.getElementById("result").innerText = "You got" + total
    // });
    
// Form Percentage
function myPrint(){
    event.preventDefault();
    let maths = document.getElementById("maths").value;
    let english = document.getElementById("english").value;
    let bst = document.getElementById("bst").value;
    let accounts = document.getElementById("accounts").value;
    let eco = document.getElementById("eco").value;
    let total = marks(Number(maths), Number(english), Number(bst), Number(accounts), Number(eco));
    console.log("Total Marks are ", total);
    let percent = Percentage(total);
    console.log("Total Percentage is ", percent);
    document.getElementById("result").innerText = "You got " + total + " marks. " + percent + "% overall out of " + Total + " marks.";
}

let TotalMarks
function marks(maths, english, bst, accounts, eco){
    TotalMarks = maths + english + bst + accounts + eco;
    if(TotalMarks > 500){
        return "Error as your total marks is more than 500";
    }
    else if(maths > 100 || bst > 100 || english > 100 || accounts > 100 || eco > 100){
        return "Error! Please try again and make sure your marks are below or equal 100."
    }
    return TotalMarks;
}


let Total = 500;
console.log("Total marks:", TotalMarks);

function Percentage(total){
    let Perc = total * 100 / Total;
    return Perc;
}