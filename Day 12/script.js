function valid() {
    var element = document.getElementById("input").value; // thiru@guvi.in
    console.log(element);
    if (element === "thiru@guvi.in") {
        alert("Welcome to Home Page")
    } else {
        alert("Invalid User!")
    }
}