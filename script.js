function toggleTheme(){
document.body.classList.toggle("light");
const light=document.body.classList.contains("light");
document.getElementById("themeIcon").textContent=light?"☀️":"🌙";
document.getElementById("themeText").textContent=light?"Light Mode":"Dark Mode";
localStorage.setItem("theme",light?"light":"dark");
}
if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light");
}
function searchContent(k){
k=k.toLowerCase();
document.querySelectorAll(".card").forEach(c=>{
c.style.display=c.innerText.toLowerCase().includes(k)?"block":"none";
});
}
