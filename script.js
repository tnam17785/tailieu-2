// Hàm bật/tắt chế độ tối (Dark Mode)
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

// Hàm tìm kiếm tài liệu theo thời gian thực
function searchDocs() {
    let input = document.getElementById("search").value.toLowerCase().trim();
    let cards = document.querySelectorAll(".card");
    let count = 0;

    cards.forEach(card => {
        let text = card.querySelector("h3").innerText.toLowerCase();

        if (text.includes(input)) {
            // Thay vì dùng "block", trả về chuỗi rỗng "" giúp thẻ card giữ nguyên thuộc tính hiển thị gốc
            card.style.display = ""; 
            count++;
        } else {
            card.style.display = "none";
        }
    });

    document.getElementById("counter").innerHTML = "📄 Tìm thấy: " + count + " tài liệu";
}
