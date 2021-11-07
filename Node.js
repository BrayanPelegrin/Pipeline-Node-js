function sumar() {
  var n1, n2, r;

  n1 = document.getElementById("N1").value;
  n2 = document.getElementById("N2").value;

  r = parseFloat(n1) + parseFloat(n2);

  document.getElementById("mostrar").innerHTML = "El resultado es " + r;
}
