// check the list of fonts at https://unpkg.com/browse/figlet@1.4.0/fonts/
// the list can also be seen on demo of Figlet library:
// http://patorjk.com/software/taag/#p=display&f=Standard&t=jQuery%20Terminal
figlet.defaults({fontPath: 'https://unpkg.com/figlet@1.4.0/fonts/'});
figlet.preloadFonts(["Standard", "Slant"], ready);

var term;

function ready() {
    term = $('body').terminal(function(cmd) {
        // echo function will run it in each render,
        // so text can be resized based on cols
        this.echo(() => render(cmd));
    }, {
        greetings: function() {
            return render('Figlet Demo', 'Slant') +
                `\n[[;rgba(255,255,255,0.99);]jQuery Terminal ${$.terminal.version}]. Type something to render figlet text.\n`;
        }
    });
}

function render(text, font) {
    return figlet.textSync(text, {
        font: font || 'Standard',
        width: !term ? 80 : term.cols(),
        whitespaceBreak: true
    });
}
