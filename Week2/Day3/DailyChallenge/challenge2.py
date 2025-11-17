from googletrans import Translator
import asyncio


french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
dict_trans = {}
translator = Translator()

async def get_trans(list_french_words):
    trans = await translator.translate(list_french_words, 'en', 'fr')
    for element in trans:
        dict_trans[element.origin] = element.text

    return dict_trans

result = asyncio.run(get_trans(french_words))
print(result)
