var game_btn = document.getElementById('game_btn')
var profile_btn = document.getElementById('profile_btn')
var balans_btn = document.getElementById('balans_btn')
var admin_btn = document.getElementById('admin_btn')

// Проверка юзер-агента и добавление контента на страницу
if (!/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Находим элемент с id "Mobile"
    var mobileDiv = document.getElementById('Mobile');
    
    // Проверяем, есть ли такой элемент
    if (mobileDiv) {
        // Если элемент существует, удаляем его содержимое
        mobileDiv.innerHTML = '';
        
        // Создаем элементы для сообщения и ссылки
        var message = document.createElement('div');
        message.style.cssText = 'position: fixed; top: 0; left: 0;height: 100%; width: 100%; background-color: #f44336; color: white; text-align: center; padding: 10px;display:flex;flex-direction: column;justify-content: center;';
        message.innerHTML = 'Доступ разрешен только с мобильных устройств. Пожалуйста, используйте телеграм бота @BurmaldaFuntestbot.';
        
        var link = document.createElement('a');
        link.href = 'https://t.me/BurmaldaFuntestbot';
        link.style.cssText = 'color: white; text-decoration: underline; margin-left: 10px;';
        link.textContent = 'Перейти к телеграм боту';
        
        // Добавляем элементы на страницу в тег body
        document.body.appendChild(message);
        message.appendChild(link);
    }
}

// let input_stavka = document.querySelectorAll(".input_stavka")

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
