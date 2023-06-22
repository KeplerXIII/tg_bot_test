from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo

bot = Bot('5396061392:AAFey3qztihNxidd8btHlfye24p4XmMffV8')
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton('Открыть страницу', web_app=WebAppInfo(url='https://keplerxiii.github.io/tg_bot_test/')))
    await message.answer('Привет, мой друг!', reply_markup=markup)

executor.start_polling(dp)