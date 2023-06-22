// let tg = window.Telegram.WebApp
// let buyBtn = document.getElementById('buy')
// let orderBtn = document.getElementById('order')
// tg.expand();

// buyBtn.addEventListener('click', () => {
//     document.getElementById('main').style.display = 'none'
//     document.getElementById('form').style.display = 'block'
//     // document.getElementById('user_name').value = tg.initDataUnsafe.user.first_name + ' ' + tg.initDataUnsafe.user.last_name
// })

// orderBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     document.getElementById('error').innerText = ''
//     let name = document.getElementById('user_name').value
//     let date = document.getElementById('date').value

//     if (date) {
//     } else {
//         document.getElementById('error').innerText = 'Ошибка в имени'
//         return
//     }

//     if(name.length < 5) {
//         document.getElementById('error').innerText = 'Ошибка в имени'
//         return
//     }
    
//     let data = {
//         name: name,
//         date: date
//     }

//     tg.sendData(JSON.stringify(data))

//     tg.close()
//     console.log(data)
// })

let tg = window.Telegram.WebApp
let statsBtn = document.getElementById('stats')
let prdBtn = document.getElementById('period')
let date2 = document.getElementById('date2')
tg.expand()

prdBtn.addEventListener('click', (e) => {
    e.preventDefault()
    date2.style.display = 'block'
})

statsBtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('error').innerText = ''
    let date1 = document.getElementById('date1').value
    let date2 = document.getElementById('date2').value
    if (date1) {} else {
                document.getElementById('error').innerText = 'Выбери дату'
                return
            }

    let type = (date2) ? 'period':'one_day';
    let data = {
        type: type,
        date1: date1,
        date2: date2
    }

    tg.sendData(JSON.stringify(data))
    tg.close()
})