var game_btn = document.getElementById('game_btn')
var profile_btn = document.getElementById('profile_btn')
var balans_btn = document.getElementById('balans_btn')
var admin_btn = document.getElementById('admin_btn')

// let input_stavka = document.querySelectorAll(".input_stavka")

//Пробная версия защиты
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Если юзер не заходит с мобильного устройства, перенаправляем на другую страницу или показываем сообщение
    window.location.href = "https://www.google.com/"; // Раскомментируйте, чтобы перенаправить на другую страницу
}

game_btn.addEventListener('click', function () {
    game_btn.className = "game active"
    profile_btn.className= "profile"
    balans_btn.className ="bank"
    admin_btn.className = "admin"
})

profile_btn.addEventListener('click', function () {
    game_btn.className = "game"
    profile_btn.className= "profile active"
    balans_btn.className ="bank"
    admin_btn.className = "admin"
})

balans_btn.addEventListener('click', function () {
    game_btn.className = "game"
    profile_btn.className= "profile"
    balans_btn.className ="bank active"
    admin_btn.className = "admin"
})
admin_btn.addEventListener('click', function () {
    game_btn.className = "game"
    profile_btn.className= "profile"
    balans_btn.className ="bank"
    admin_btn.className = "admin active"
})
document.querySelector('input').addEventListener('input', 
    ({ target: t }) => {
    t.value = Math.max(t.min, Math.min(t.max, t.value));
    console.log(document.querySelector('input').value)
 });
