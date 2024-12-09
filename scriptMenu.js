const menuButton = ["Suppen", "Vorspeisen", "Schweinefleisch", "Rindfleisch", "Huehnerfleisch", "Ente", "Reis", "Nudeln", "Garnelen", "Vegetarische", "Spezialitaeten", "Getraenke", "Desserts", "Beilagen", "Fisch"];

function Suppen() {
    var element = document.getElementById("Suppen");
    element.className = "menu-button-clicked";

    if (element = "Suppen") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Suppen") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["Pekingsuppe", "Gemüsesuppe", "Hühnersuppe", "Wan-Tan-Suppe", "Tom-Kha-Gai", "Tom-Yam-Gai"]
    const preise = ["3,00 €","3,50 €","4,00 €","5,00 €","4,50 €","3,50 €"]

    var existingElement = document.getElementsByClassName("menu-grid");
    

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }

    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Suppen";
}

function Vorspeise() {
    var element = document.getElementById("Vorspeisen");
    element.className = "menu-button-clicked";

    if (element = "Vorspeisen") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Vorspeisen") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["Vegetarische Mini-Frühlingsrolle (8 Stück)", "Frühlingsrolle (1 Stück mit Rindfleisch)", "Gebackene Wantan (Hackfleisch im Teilmantel)", "Gemischter Salat", "Hühnersalat", "Hühnerspieß (mit Saté Sauce)", "Paniertes Hühnerfleisch (süßsauer Sauce)", "Paniertes Schweinefleisch (süßsauer Sauce)", "Gebratene Nudeln mit Gemüse", "Gebratener Reis mit Gemüse", "Krabben-Chips"];
    const preise = ["3,00 €", "3,00 €", "5,50 €", "3,50 €", "5,50 €", "5,00 €", "4,50 €", "4,50 €", "4,00 €", "4,00 €", "3,00 €"];


    var existingElement = document.getElementsByClassName("menu-grid");
    

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }


    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Vorspeisen";
}


function Schweinefleisch() {
    var element = document.getElementById("Schweinefleisch");
    element.className = "menu-button-clicked";

    if (element = "Schweinefleisch") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Schweinefleisch") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["Chop-Suey mit verschiedenem Gemüse", "Kong-Pao mit Bambus, Karot, Zwiebeln, Paprika", "Dong-Co mit chinesischer Pilze, Bambus, Sojasprossen", "Saté mit Erdnuss, Sesam und Gemüse", "Paniertes Schweinefleisch mit süßsaurer Sauce", "Rotcurry mit Kokosmilch und Gemüse – scharf", "Szechuan mit Gemüse", "Gelbcurry mit Gemüse", "Gewürzkräuter mit Kräuter, Knoblauch und Gemüse – scharf", "Zitronengras mit Zitro., Knoblauch und Gemüse – scharf", "Schweinefleisch (paniert) mit Gemüse und gewünschter Sauce"];
    const preise = ["9,00 €", "9,00 €", "9,50 €", "9,00 €", "8,50 €", "9,00 €", "9,00 €", "9,00 €", "9,50 €", "9,50 €", "10,00 €"];


    var existingElement = document.getElementsByClassName("menu-grid");
    

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }


    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Schweinefleisch";
}

function Rindfleisch() {
    var element = document.getElementById("Rindfleisch");
    element.className = "menu-button-clicked";

    if (element = "Rindfleisch") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Rindfleisch") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["Chop-Suey mit verschiedenem Gemüse", "Kong-Pao mit Bambus, Karot, Zwiebeln, Paprika", "Dong-Co mit chinesischer Pilze, Bambus, Sojasprossen", "Saté mit Erdnuss, Sesam und Gemüse", "Süßsauer-Sauce mit Gemüse", "Rotcurry mit Kokosmilch und Gemüse – scharf", "Szechuan mit Gemüse", "Gelbcurry mit Gemüse", "Gewürzkräuter mit Kräuter, Knoblauch und Gemüse – scharf", "Zitronengras mit Zitro., Knoblauch und Gemüse – scharf", "Zwiebeln"];
    const preise = ["10,50 €", "10,50 €", "11,00 €", "10,50 €", "10,50 €", "10,50 €", "10,50 €", "10,50 €", "11,00 €", "11,00 €", "11,00 €"];


    var existingElement = document.getElementsByClassName("menu-grid");
    

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }


    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Rindfleisch";
}

function Huehnerfleisch() {
    var element = document.getElementById("Huehnerfleisch");
    element.className = "menu-button-clicked";

    if (element = "Huehnerfleisch") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Huehnerfleisch") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["Chop-Suey mit verschiedenem Gemüse", "Kong-Pao mit Bambus, Karot, Zwiebeln, Paprika", "Dong-Co mit chinesischer Pilze, Bambus, Sojasprossen", "Saté mit Erdnuss, Sesam und Gemüse", "Paniertes mit süßsaurer Sauce", "Rotcurry mit Kokosmilch und Gemüse – scharf", "Szechuan mit Gemüse", "Gelbcurry mit Gemüse", "Gewürzkräuter mit Kräuter, Knoblauch und Gemüse – scharf", "Zitronengras mit Zitro., Knoblauch und Gemüse – scharf", "Paniertes mit Gemüse und gewünschter Sauce"];
    const preise = ["9,00 €", "9,00 €", "9,50 €", "9,00 €", "8,50 €", "9,00 €", "9,00 €", "9,00 €", "9,50 €", "9,50 €", "10,00 €"];



    var existingElement = document.getElementsByClassName("menu-grid");
    

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }


    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Hühnerfleisch";
}

function Ente() {
    var element = document.getElementById("Ente");
    element.className = "menu-button-clicked";

    if (element = "Ente") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Ente") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["Chop-Suey mit verschiedenem Gemüse", "Kong-Pao mit Bambus, Karot, Zwiebeln, Paprika", "Dong-Co mit chinesischer Pilze, Bambus, Sojasprossen", "Saté mit Erdnuss, Sesam und Gemüse", "Süßsauer-Sauce", "Rotcurry mit Kokosmilch und Gemüse – scharf", "Szechuan mit Gemüse", "Gelbcurry mit Gemüse", "Gewürzkräuter mit Kräuter, Knoblauch und Gemüse – scharf", "Zitronengras mit Zitro., Knoblauch und Gemüse – scharf", "Gewürzbohnen mit verschiedenem Gemüse"];
    const preise = ["13,50 €", "13,50 €", "14,00 €", "13,50 €", "13,00 €", "13,50 €", "13,50 €", "13,50 €", "14,00 €", "14,00 €", "14,00 €"];

    var existingElement = document.getElementsByClassName("menu-grid");
    

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }

    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Ente";
}

function Reis() {
    var element = document.getElementById("Reis");    
    element.className = "menu-button-clicked";

    if (element = "Reis") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Reis") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["mit Hühnerfleisch und Gemüse", "mit Schweinefleisch und Gemüse", "mit Rindfleisch und Gemüse", "Nasi-Goreng", "Gebratener Reis mit Gemüse", "mit knuspriger Ente und Gemüse", "mit knuspriger Ente, Garnelen, Rindfleisch, Schweinefleisch, Hühnerfleisch und Gemüse", "mit Garnelen und Gemüse"];
    const preise = ["8,50 €", "8,50 €", "9,50 €", "9,50 €", "6,50 €", "11,50 €", "12,00 €", "11,00 €"];

    var existingElement = document.getElementsByClassName("menu-grid");

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }

    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Reis";
}

function Nudeln() {
    var element = document.getElementById("Nudeln");
    element.className = "menu-button-clicked";

    if (element = "Nudeln") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Nudeln") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["mit Hühnerfleisch und Gemüse", "mit Schweinefleisch und Gemüse", "mit Rindfleisch und Gemüse", "Bami-Goreng", "gebratener Nudeln mit Hühnerfleisch, Garnelen, Curry und Gemüse", "Gebratener Nudeln mit Gemüse", "mit knuspriger Ente und Gemüse", "mit knuspriger Ente, Garnelen, Rindfleisch, Schweinefleisch, Hühnerfleisch und Gemüse", "mit Garnelen und Gemüse"];
    const preise = ["8,50 €", "8,50 €", "9,50 €", "9,50 €", "6,50 €", "11,50 €", "12,00 €", "11,00 €"];


    var existingElement = document.getElementsByClassName("menu-grid");

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }

    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Nudeln";
}

function Garnelen() {
    var element = document.getElementById("Garnelen");
    element.className = "menu-button-clicked";

    if (element = "Garnelen") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Garnelen") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["Chop-Suey mit verschiedenem Gemüse", "Kong-Pao mit Bambus, Karot, Zwiebeln, Paprika", "Dong-Co mit chinesischer Pilze, Bambus, Sojasprossen", "Saté mit Erdnuss, Sesam und Gemüse", "Süßsauer-Sauce", "Rotcurry mit Kokosmilch und Gemüse – scharf", "Szechuan mit Gemüse", "Gelbcurry mit Gemüse", "Gewürzkräuter mit Kräuter, Knoblauch und Gemüse – scharf", "Zitronengras mit Zitro., Knoblauch und Gemüse – scharf", "Gewürzbohnen mit verschiedenem Gemüse"];
    const preise = ["12,50 €", "12,50 €", "13,50 €", "12,50 €", "12,50 €", "12,50 €", "12,50 €", "13,50 €", "13,50 €", "13,50 €", "13,50 €"];


    var existingElement = document.getElementsByClassName("menu-grid");

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }

    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Garnelen";
}

function Vegetarische() {
    var element = document.getElementById("Vegetarische");
    element.className = "menu-button-clicked";

    if (element = "Vegetarische") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Vegetarische") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["gebratene gemischte Gemüse mit Chop-Suey Sauce", "gebratene gemischte Gemüse mit gewünschter Sauce", "gebratene Tofu mit gewünschter Sauce"];
    const preise = ["8,00 €", "8,50 €", "9,50 €"];


    var existingElement = document.getElementsByClassName("menu-grid");

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }

    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Vegetarische";
}

function Fisch() {
    var element = document.getElementById("Fisch");
    element.className = "menu-button-clicked";

    if (element = "Fisch") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Fisch") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["mit Hühnerfleisch und Gemüse", "mit Schweinefleisch und Gemüse", "mit Rindfleisch und Gemüse", "Nasi-Goreng", "Gebratener Reis mit Gemüse", "mit knuspriger Ente und Gemüse", "mit knuspriger Ente, Garnelen, Rindfleisch, Schweinefleisch, Hühnerfleisch und Gemüse", "mit Garnelen und Gemüse"];
    const preise = ["8,50 €", "8,50 €", "9,50 €", "9,50 €", "6,50 €", "11,50 €", "12,00 €", "11,00 €"];

    var existingElement = document.getElementsByClassName("menu-grid");

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }

    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Fisch";
}

function Spezialitaeten() {
    var element = document.getElementById("Spezialitaeten");
    element.className = "menu-button-clicked";

    if (element = "Spezialitaeten") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Spezialitaeten") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = [
        "Schatz der Kaiser Ching - Knusprige Ente, Garnelen, Rind, Hühner, Schweinefleisch, Austernsauce, Gemüse",
        "Scharfes Schwert - Knusprige Ente, Garnelen, Rind, Hühner, Schweinefleisch, Gewürzbohnen, Gemüse",
        "Glück im Geschäft - Knusprige Ente, Garnelen, Rind, Hühner, Schweinefleisch, Dongco-Pilze, Gemüse",
        "Thailan-Tipan - Knusprige Ente, Garnelen, Rind, Hühner, Schweinefleisch, Kräuter, Knoblauch, Gemüse",
        "Rote Jade - Knusprige Ente, Garnelen, Rind, Hühner, Schweinefleisch, Gemüse",
        "Braun Diamant - Garnelen, Hühnerfleisch, Rindfleisch, Schweinefleisch, Hoisin-Sauce, Gemüse",
        "Feuer der Drache - Knusprige Ente, Garnelen, Rind, Hühner, Schweinefleisch, Zitronengras, Gemüse",
        "Pao-Pao Ente - Knusprige Ente, Hühner, Schweine, Rindfleisch, Szechuan-Sauce, Gemüse",
        "Goldene Perle - Knusprige Ente, Garnelen, Rind, Hühner, Schweinefleisch, Saté-Sauce, Gemüse"
    ];
    const preise = [
        "13,50 €",
        "14,00 €",
        "14,00 €",
        "14,00 €",
        "13,50 €",
        "12,50 €",
        "14,00 €",
        "12,50 €",
        "13,50 €"
    ];
    

    var existingElement = document.getElementsByClassName("menu-grid");

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }

    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Spezialität";
}

function Desserts() {
    var element = document.getElementById("Desserts");
    element.className = "menu-button-clicked";

    if (element = "Desserts") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Desserts") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["gebackene Banane mit Honig", "gebackener Apfel oder Ananas mit Honig"];
    const preise = ["3,50 €", "3,50 €"];


    var existingElement = document.getElementsByClassName("menu-grid");

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }

    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Dessert";
}

function Getraenke() {
    var element = document.getElementById("Getraenke");
    element.className = "menu-button-clicked";

    if (element = "Getraenke") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Getraenke") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["Cola", "Fanta", "verschiedene Säfte", "Pils (Rothaus-Tannenzäpfle)", "Bier – Hefe Weizen", "Pflaumen-Wein"];
    const preise = ["2,50 €", "2,50 €", "2,50 €", "3,00 €", "4,00 €", "9,00 €"];


    var existingElement = document.getElementsByClassName("menu-grid");

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }

    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Getränke";
}

function Beilagen() {
    var element = document.getElementById("Beilagen");
    element.className = "menu-button-clicked";

    if (element = "Beilagen") {
        for (let i = 0; i < menuButton.length; i++) {
            if (menuButton[i] != "Beilagen") {
                var element = document.getElementById(menuButton[i]);
                element.className = "menu-button";
            }
        }
    }

    remover();

    const gerrichte = ["Gebratene Reis", "Gebratene Nudeln", "Gekochter Reis", "Sambal Oelek, Soja Sauce", "Gewuenschte Sauce" ];
    const preise = ["3,00 €", "3,00 €", "1,50 €", "0,50 €", "2,50 €"];

    var existingElement = document.getElementsByClassName("menu-grid");

    for (let i = 0; i < gerrichte.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "grid-item";
        newDiv.innerHTML = gerrichte[i];
        var newDiv2 = document.createElement("div");
        newDiv2.className = "grid-price";
        newDiv2.innerHTML = preise[i];
        existingElement[0].appendChild(newDiv);
        existingElement[0].appendChild(newDiv2);
    }

    var menuTitle = document.getElementsByClassName("menu-title")[0];
    menuTitle.innerHTML = "Beilagen";
}

function remover() {
    const itemsToRemove = document.querySelectorAll(".grid-item, .grid-price");
    itemsToRemove.forEach(item => item.remove());
}