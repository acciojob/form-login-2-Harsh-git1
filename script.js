//your JS code here. If required.
const form = document.getElementById("form");

function click() {
    

    const output = "First Name: " + form.fn.value + "\n" +
                    "Last Name: " + form.ln.value + "\n" +
                    "Phone Number: "+ form.pn.value+ "\n"+
                    "Email ID: " + form.ei.value;
    alert(output);
}

form.btn.addEventListener("click", click);