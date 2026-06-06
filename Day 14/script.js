async function demo() {
    var res = await fetch("https://fakestoreapi.com/products/");
    var result = await res.json();
    console.log(result);   
}

demo();