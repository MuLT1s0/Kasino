var game_btn = document.getElementById('game_btn')
var profile_btn = document.getElementById('profile_btn')
var balans_btn = document.getElementById('balans_btn')
var admin_btn = document.getElementById('admin_btn')


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

