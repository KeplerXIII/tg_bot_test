let tg = window.Telegram.WebApp
let buyBtn = document.getElementById('buy')
let orderBtn = document.getElementById('order')

buyBtn.addEventListener('click', () => {
    document.getElementById('main').style.display = 'none';
    document.getElementById('form').style.display = 'block';
    document.getElementById('user_name').value = tg.initDataUnsafe.user.first_name + ' ' + tg.initDataUnsafe.user.last_name
    
})

orderBtn.addEventListener('click', () => {
    tg.close()
})