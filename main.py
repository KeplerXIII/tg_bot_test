from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo
import json

bot = Bot('5396061392:AAFey3qztihNxidd8btHlfye24p4XmMffV8')
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    markup.add(types.KeyboardButton('Открыть страницу', web_app=WebAppInfo(url='https://keplerxiii.github.io/tg_bot_test/')))
    await message.answer('Привет, мой друг!', reply_markup=markup)

@dp.message_handler(content_types=['web_app_data'])
async def web_app(mesage: types.Message):
    res = json.loads(mesage.web_app_data.data)
    await mesage.answer(res['name'] + '' + res['date'])

executor.start_polling(dp)