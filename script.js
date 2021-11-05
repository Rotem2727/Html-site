function show_social() {
    var social_section_show = document.getElementById("social_section");

    if (social_section_show.style.display === "none") {
        social_section_show.style.display = "block";
        show_social_btn_id.innerHTML = "הסתר רשתות חברתיות";
    }
    else {
        social_section_show.style.display = "none";
        show_social_btn_id.innerHTML = "הצג רשתות חברתיות";
    }
}
