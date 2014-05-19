A Selectize plugin for disallowing removal of a selected element.

To install:

1. Add selectize-no-delete to your bower configuration
1. src/selectize-no-delete.js on your page or in your build process
1. add the selectize-no-delete to your selectize options:

    <pre>
    $("#demo").selectize({
      plugins: {
        'no-delete': {}
      }
    })
    </pre>

1. ...
1. Profit!

To get the example running:

1. clone the repo
1. npm install
1. grunt install
1. open up example/index.html
