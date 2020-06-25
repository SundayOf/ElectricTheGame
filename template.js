//start button
let start_button = document.createElement('div');
        start_button.className = "start_button";
        start_button.innerHTML = `<input id="but" type="button" value="START">`;
            document.body.append(start_button);      

            
// GAME
        document.getElementById('but').addEventListener('click', function Create2(event) {
            let main = document.createElement('div');
            main.className = "main";
            main.innerHTML = `
            <div id="game">
                <div class="button" id="1.1" onmouseup="BlockClick('1.1')"></div>
                <div class="button" id="1.2" onmouseup="BlockClick('1.2')"></div>
                <div class="button" id="1.3" onmouseup="BlockClick('1.3')"></div>
                <div class="button" id="1.4" onmouseup="BlockClick('1.4')"></div>
                <div class="button" id="1.5" onmouseup="BlockClick('1.5')"></div>
                <div class="button" id="2.1" onmouseup="BlockClick('2.1')"></div>
                <div class="button" id="2.2" onmouseup="BlockClick('2.2')"></div>
                <div class="button" id="2.3" onmouseup="BlockClick('2.3')"></div>
                <div class="button" id="2.4" onmouseup="BlockClick('2.4')"></div>
                <div class="button" id="2.5" onmouseup="BlockClick('2.5')"></div>
                <div class="button" id="3.1" onmouseup="BlockClick('3.1')"></div>
                <div class="button" id="3.2" onmouseup="BlockClick('3.2')"></div>
                <div class="button" id="3.3" onmouseup="BlockClick('3.3')"></div>
                <div class="button" id="3.4" onmouseup="BlockClick('3.4')"></div>
                <div class="button" id="3.5" onmouseup="BlockClick('3.5')"></div>
                <div class="button" id="4.1" onmouseup="BlockClick('4.1')"></div>
                <div class="button" id="4.2" onmouseup="BlockClick('4.2')"></div>
                <div class="button" id="4.3" onmouseup="BlockClick('4.3')"></div>
                <div class="button" id="4.4" onmouseup="BlockClick('4.4')"></div>
                <div class="button" id="4.5" onmouseup="BlockClick('4.5')"></div>
                <div class="button" id="5.1" onmouseup="BlockClick('5.1')"></div>
                <div class="button" id="5.2" onmouseup="BlockClick('5.2')"></div>
                <div class="button" id="5.3" onmouseup="BlockClick('5.3')"></div>
                <div class="button" id="5.4" onmouseup="BlockClick('5.4')"></div>
                <div class="button" id="5.5" onmouseup="BlockClick('5.5')"></div>
            </div>
                            `;
            document.body.append(main);
            document.getElementById('but').classList.add('hide')
            })