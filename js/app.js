

var app = {
    mousePressed : false,
    sizeInit: 15,
    sizeInitPixel: 15,
    sizeUser: 0,
    sizeUserPixel: 0,
    createRadioButton: function(tableau) {
        const container2 = document.getElementById('buttonRadio');
        for (let i = 0; i < tableau.length; i++) {
            const elementInputButton = document.createElement('input');
            elementInputButton.type = 'radio';
            elementInputButton.classList.add('radio');
            elementInputButton.id = tableau[i];
            elementInputButton.name = 'style';
            elementInputButton.value = tableau[i];
            elementInputButton.style.backgroundColor=tableau[i];
            container2.appendChild(elementInputButton);
        }
    },
    createInputcolor : () =>{
        const container3 = document.getElementById('rangesRGB');
        let inputColor = document.createElement('input');
        inputColor.type = 'color';
        inputColor.id = 'inputColor';
        inputColor.value = '#000000';
        let labelInputColor = document.createElement('label');
        labelInputColor.for = 'inputColor';
        labelInputColor.textContent = 'choose your color';
        container3.appendChild(labelInputColor);
        container3.appendChild(inputColor);  

    },
        
     
    //  * function which create grid of number*number case in #invader
    //  * @param {number} number 
    create_grid: function (number, sizePixel) {
        for (let j = 0; j < number; j++) {
            var line_grille = document.createElement('div');
            line_grille.classList.add('invader__line');
            for (let i = 0; i < number; i++) {
                var case_grille = document.createElement('div');
                case_grille.style.backgroundColor = 'white';
                case_grille.style.width = sizePixel + 'px';
                case_grille.style.height = sizePixel + 'px';
                case_grille.classList.add('invader__case');
                // line.appendChild(Case);
                // document.getElementById('invader')
                line_grille.appendChild(case_grille);
            }
            document.getElementById('invader')
                .appendChild(line_grille);
        }
    },
    init: () => {

        // evenement to switch from white to black or from black to writte for grids
        document.getElementById('invader')
            .addEventListener('mousedown', function (event) {
                app.mousePressed = true;
                console.log('mousedown');
                // console.log('event.target ', event.target);
                var activCase = event.target;
                if (event.target.classList.contains('invader__case')) {
                    activCase.style.backgroundColor = app.styleUser;
                }
            });
        document.getElementById('line')
            .addEventListener('mouseup', function (event) {
                app.mousePressed = false;
                console.log('mouseUP');
            });
        document.getElementById('invader')
            .addEventListener('mousemove', function (event) {
                var activCase = event.target;
                if (event.target.classList.contains('invader__case') && app.mousePressed === true) {
                    activCase.style.backgroundColor = app.styleUser;
                }
            });
        

        // add input field in form #configuration for grid size
        var sizeChoiceInput = document.createElement('input');
        sizeChoiceInput.id = 'sizeChoiceInput';
        sizeChoiceInput.type = 'number';
        sizeChoiceInput.placeholder = 'taille de la grille';
        // sizeChoiceInput.value = 8;
        document.getElementById('configuration').appendChild(sizeChoiceInput);

        // add input field in form #configuration for each grid pixel size 
        var sizePixel = document.createElement('input');
        sizePixel.placeholder = 'Taille des pixels';
        sizePixel.id = 'sizePixelChoice'; // ou sizePixel.setAttribute('type', number);
        sizePixel.type = 'number';
        document.getElementById('configuration').appendChild(sizePixel);

        // add submit button in form #configuration for grid size
        var buttonSubmit = document.createElement('button');
        buttonSubmit.id = 'submitbutton';
        buttonSubmit.textContent = 'Valider';
        document.getElementById('configuration').appendChild(buttonSubmit);
        
        app.createInputcolor();
        app.createRadioButton(app.styles);

        // evenement lorsque qu on soumet le formulaire : appui sur le bouton submit
        // on recupere la valeur de l input size
        // on efface la grille et on regenere une grille avec argument size
        document.getElementById('configuration')
            .addEventListener('submit', function (event) {
                event.preventDefault();
                console.log('appui repere sur boutono submit');
                app.sizeUser = document.getElementById('sizeChoiceInput').value;
                app.sizeUserPixel = document.getElementById('sizePixelChoice').value;
                console.log('app.sizeUserPixel:', app.sizeUserPixel);
                console.log('app.sizeUser:', app.sizeUser);
                document.getElementById('invader').innerHTML = '';
                app.create_grid(app.sizeUser, app.sizeUserPixel);
            });

        //evenemt qui repere clic sur bouton radio
        document.getElementById('inputColor').addEventListener('change', (event) =>{
            app.styleUser = event.target.value;
            document.getElementById('activeColor').style.backgroundColor = app.styleUser;
            document.getElementById('activeColorFontBlack').textContent = 'active color: '+app.styleUser;
            document.getElementById('activeColorFontWhite').textContent = 'active color: '+app.styleUser;
        });
        document.getElementById('buttonRadio')
            .addEventListener('click', function (event) {
                if (event.target.classList.contains('radio')) {
                    console.log('cliq repere sur un radio');
                    var radios = document.getElementsByClassName('radio');
                    // console.log(radios);
                    for (var i = 0; i < radios.length; i++) {
                        if (radios[i].checked) {
                            app.styleUser = radios[i].value;
                            radios[i].style.color = 'red';
                        }
                    }
                    document.getElementById('activeColor').style.backgroundColor = app.styleUser;
                    document.getElementById('activeColorFontBlack').textContent = 'active color: '+app.styleUser;
                    document.getElementById('activeColorFontWhite').textContent = 'active color: '+app.styleUser;
                }
            });
        app.create_grid(app.sizeInit, app.sizeInitPixel);
        console.log('init');
    },
    styles: [
        'AliceBlue',
        'AntiqueWhite',
        'Aqua',
        'Aquamarine',
        'Azure',
        'Beige',
        'Bisque',
        'Black',
        'BlanchedAlmond',
        'Blue',
        'BlueViolet',
        'Brown',
        'BurlyWood',
        'CadetBlue',
        'Chartreuse',
        'Chocolate',
        'Coral',
        'CornflowerBlue',
        'Cornsilk',
        'Crimson',
        'Cyan',
        'DarkBlue',
        'DarkCyan',
        'DarkGoldenRod',
        'DarkGray',
        'DarkGrey',
        'DarkGreen',
        'DarkKhaki',
        'DarkMagenta',
        'DarkOliveGreen',
        'DarkOrange',
        'DarkOrchid',
        'DarkRed',
        'DarkSalmon',
        'DarkSeaGreen',
        'DarkSlateBlue',
        'DarkSlateGray',
        'DarkSlateGrey',
        'DarkTurquoise',
        'DarkViolet',
        'DeepPink',
        'DeepSkyBlue',
        'DimGray',
        'DimGrey',
        'DodgerBlue',
        'FireBrick',
        'FloralWhite',
        'ForestGreen',
        'Fuchsia',
        'Gainsboro',
        'GhostWhite',
        'Gold',
        'GoldenRod',
        'Gray',
        'Grey',
        'Green',
        'GreenYellow',
        'HoneyDew',
        'HotPink',
        'IndianRed',
        'Indigo',
        'Ivory',
        'Khaki',
        'Lavender',
        'LavenderBlush',
        'LawnGreen',
        'LemonChiffon',
        'LightBlue',
        'LightCoral',
        'LightCyan',
        'LightGoldenRodYellow',
        'LightGray',
        'LightGrey',
        'LightGreen',
        'LightPink',
        'LightSalmon',
        'LightSeaGreen',
        'LightSkyBlue',
        'LightSlateGray',
        'LightSlateGrey',
        'LightSteelBlue',
        'LightYellow',
        'Lime',
        'LimeGreen',
        'Linen',
        'Magenta',
        'Maroon',
        'MediumAquaMarine',
        'MediumBlue',
        'MediumOrchid',
        'MediumPurple',
        'MediumSeaGreen',
        'MediumSlateBlue',
        'MediumSpringGreen',
        'MediumTurquoise',
        'MediumVioletRed',
        'MidnightBlue',
        'MintCream',
        'MistyRose',
        'Moccasin',
        'NavajoWhite',
        'Navy',
        'OldLace',
        'Olive',
        'OliveDrab',
        'Orange',
        'OrangeRed',
        'Orchid',
        'PaleGoldenRod',
        'PaleGreen',
        'PaleTurquoise',
        'PaleVioletRed',
        'PapayaWhip',
        'PeachPuff',
        'Peru',
        'Pink',
        'Plum',
        'PowderBlue',
        'Purple',
        'RebeccaPurple',
        'Red',
        'RosyBrown',
        'RoyalBlue',
        'SaddleBrown',
        'Salmon',
        'SandyBrown',
        'SeaGreen',
        'SeaShell',
        'Sienna',
        'Silver',
        'SkyBlue',
        'SlateBlue',
        'SlateGray',
        'SlateGrey',
        'Snow',
        'SpringGreen',
        'SteelBlue',
        'Tan',
        'Teal',
        'Thistle',
        'Tomato',
        'Turquoise',
        'Violet',
        'Wheat',
        'White',
        'WhiteSmoke',
        'Yellow',
        'YellowGreen'
    ],
    styleUser: 'white'
};



app.init();

// var double = function (number){
//     return number*2
// }

// const double = (number) => {
//     return number*2
// }