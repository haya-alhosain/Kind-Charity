var bar = document.getElementById('bar');
var navbar = document.getElementById('navbar');
var close = document.getElementById('close')
// point lista
bar.onclick = function () {
  navbar.classList.add('active2');
  close.style.display = "block"
  bar.style.display = "none"
}
close.onclick = function () {
  navbar.classList.remove('active2');
  close.style.display = "none"
  bar.style.display = "block"
}