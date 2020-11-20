
const Coin = {
    state: 0,
    flip: function () {

        if (Math.random() > .5) {
            this.state = 0;
        } else {
            this.state = 1;
        }
    },
    toHTML: function () {
        const image = document.createElement('img');

        if (this.state === 0) {
            image.src = "./images/headcoins.png"
            image.width = "90";
            image.height = "90";

        } else {
            image.src = "./images/tailcoin.png"
            image.width = "90";
            image.height = "90";

        }
        return image;
    }
}

function display20Flips() {
    const results = [];

    for (var i = 0; i < 20; i++) {
        Coin.flip();
        document.write(Coin.toString());
        results.push(Coin.toString());
    }
    return results;
}
function display20Images() {
    const results = [];

    for (var i = 0; i < 20; i++) {
        Coin.flip();
        document.querySelector('body').appendChild(Coin.toHTML());
        results.push(Coin.toHTML());
    }
    return results;
}
display20Images();