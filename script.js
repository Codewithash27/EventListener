var a = document.querySelector(".change-image");
var flag = 0;
var b = document.getElementById("checkbox");

a.addEventListener("click", function () {
    if (b.checked) {
        document.querySelector(".image").src = "https://wallpapercave.com/wp/wp12494708.jpg";
        a.innerHTML = "Image Changed via Checkbox";
    } else {
        if (flag === 0) {
            document.querySelector(".image").src = "https://images6.alphacoders.com/132/1320541.png";
            a.innerHTML = "Image Changed";
            flag = 1;
        } else {
            document.querySelector(".image").src = "https://www.hdwallpapers.in/download/one_piece_characters_of_one_piece_4k_hd_anime-3840x2160.jpg";
            a.innerHTML = "Image Changed back";
            flag = 0;
        }
    }
});