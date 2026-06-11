// Hàm bật/tắt chế độ tối (Dark Mode)
function toggleTheme() {
    document.body.classList.toggle("dark");
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

// Tự động đếm và hiển thị tổng số tài liệu khi vừa tải xong trang web
window.onload = () => {
    let cards = document.querySelectorAll(".card");
    document.getElementById("counter").innerHTML = "📄 Tổng số: " + cards.length + " tài liệu";
};
