<script>

function toggleTheme(){
    document.body.classList.toggle("dark");
}

function searchDocs(){

    let input=
    document.getElementById("search")
    .value.toLowerCase();

    let cards=
    document.querySelectorAll(".card");

    let count=0;

    cards.forEach(card=>{

        let text=
        card.innerText.toLowerCase();

        if(text.includes(input)){
            card.style.display="block";
            count++;
        }
        else{
            card.style.display="none";
        }

    });

    document.getElementById("counter")
    .innerHTML=
    "📄 "+count+" tài liệu";
}

window.onload=()=>{

    let cards=
    document.querySelectorAll(".card");

    document.getElementById("counter")
    .innerHTML=
    "📄 "+cards.length+" tài liệu";

};

</script>
