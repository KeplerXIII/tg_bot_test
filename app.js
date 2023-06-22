let tg = window.Telegram.WebApp
let buyBtn = document.getElementById('buy')
let orderBtn = document.getElementById('order')
tg.expand();

buyBtn.addEventListener('click', () => {
    document.getElementById('main').style.display = 'none'
    document.getElementById('form').style.display = 'block'
    // document.getElementById('user_name').value = tg.initDataUnsafe.user.first_name + ' ' + tg.initDataUnsafe.user.last_name
})

orderBtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('error').innerText = ''
    let name = document.getElementById('user_name').value
    let date = document.getElementById('date').value
    if (date) {
        var hiddenInput = document.createElement("input")
        hiddenInput.setAttribute("type", "hidden");
        hiddenInput.setAttribute("name", "selectedDate");
        hiddenInput.setAttribute("value", date);
        document.appendChild(hiddenInput);
        newDate = hiddenInput.value
    }
    if (!date) {
        document.getElementById('error').innerText = 'Установите дату'
        return
    }
    if(name.length < 5) {
        document.getElementById('error').innerText = 'Ошибка в имени'
        return
    }

    let data = {
        name: name,
        date: newDate
    }

    tg.sendData(JSON.stringify(data))

    tg.close()
})