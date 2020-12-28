var fs = require('fs');

var wordLines = fs.readFileSync("words.txt", 'utf8').split("\n")

var cards = []
// for (var i = 0; i < 20; i++) {
for (var i = 0; i < wordLines.length; i++) {
    cards.push(wordLines[i].split("|"))
}

var flashcardHtml = `
<!DOCTYPE html>
<head>
    <meta charset="utf-8" />
    <style type="text/css" media="screen,print">
        .new-page {
            page-break-before: always;
        }
    </style>

    <style>
        * {
          box-sizing: border-box;
        }

        /* Create two equal columns that floats next to each other */
        .column {
          float: left;
          width: 50%;
          padding: 10px;
        }

        /* Clear floats after the columns */
        .row:after {
          content: "";
          display: table;
          clear: both;
        }
        .row{
          height: 133px;
          text-align: center
        }
    </style>
</head>
<body>
    <div>

`

var pageFront = ""
var pageBack = ""
for (var i = 0; i < cards.length; i+=2) {
    cards[i+1] = cards[i+1] ?  cards[i+1]: [" "," "] // blank div if no more cards
    pageFront += `
        <div class="row">
            <div class="column">
                <h3>` + cards[i][0] + `</h3>
            </div>`
    pageBack += `
        <div class="row">
            <div class="column">
                <h3>` + cards[i+1][1] + `</h3>
            </div>`
    pageFront += `
            <div class="column">
                <h3>` + cards[i+1][0] + `</h3>
            </div>
        </div>`
    pageBack += `
            <div class="column">
                <h3>` + cards[i][1] + `</h3>
            </div>
        </div>`

    if(i%10==8 || i >= cards.length - 2){
        pageFront += `
        <div class="new-page"></div>
        <p>&nbsp</p>
`
        pageBack += `
        <div class="new-page"></div>
        <p>&nbsp</p>
`
        flashcardHtml += pageFront + pageBack
        pageFront = ""
        pageBack = ""
    }
}

flashcardHtml += `
    </div>
</body>
`

fs.writeFileSync('flashcardHtml.html', flashcardHtml)

