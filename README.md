# Flashcards

Formats word lists into a document that can be printed onto standard business-card-paper (2" x 3.5" /  10 cards per sheet)


## Use

### No-code use:

This page is [hosted online](https://zmitton.github.io/flashcards/) and has Spanish words (so far)

### Code use:

- coerce your text into the format see in the `words.txt` file (i.e.)
```
uno|one
ellos|they
casa|home
hombre|man
```
- run the `index.js` file using $ `node index.js` at your terminal
- open the `flashcardHtml.html` file (which it creates) in a browser (chrome recommended)
- print the page using a printer that is capable of printing on two sides (check the preview to make sure everything is correct)

Works very nicely with [THIS](https://www.amazon.com/gp/product/B08BZHQVV8/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1) paper.


### Contributing

This is very "bare bones". I think the next step would be do create a "frame" inside which, the user could specify CSS. That would allow the user to implement the card exactly as intended. I don't intend on doing that, but would be happy to see someone do it in a way that was also backwards compatible


#### Words.txt

The current words.txt file is the 1000 most used Spanish words. Would be open to a PR that adds other languages 1000 most used words.
