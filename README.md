# TradGame
This project is a small online application written in React called ATrad that allows users to learn French words and their English translations.

In this project, there is a list of words with their French and English translations, and a list of colours. Each time the user clicks on the "New word" button, a random word is chosen from the word list and displayed in French with a random coloured background. The user is then asked to enter the English translation of the word in a text field. If the translation entered is correct, a point is added to the user's score and a new word is chosen. If the translation is incorrect, one point is removed from the user's score and they must try again.

The project uses the useState hook to store the background colours, user input and score, and the useEffect hook to initialise the first random word when the application loads. The project also uses an interface to define the shape of each word in the word list and functions to handle random word generation, user response submission and score reset.

<img width="1440" alt="Capture d’écran 2023-03-20 à 22 00 53" src="https://user-images.githubusercontent.com/119426862/226464905-ebf14623-b7f8-418b-93f5-e92ab2eb3a58.png">
