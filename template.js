//start button
let start_button = document.createElement('div');
        start_button.className = "start_button";
        start_button.innerHTML = `<input id="but" type="button" value="START" onclick="Default()">`;
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
//counter
            let nixcont = document.createElement('div');
            nixcont.className = "nixcont";
            nixcont.innerHTML =`
                                    <div class="nixpair">
                                        <div class="nixbg">
                                            <div id="nix_h1_0" class="nix">0</div>
                                            <div id="nix_h1_1" class="nix">1</div>
                                            <div id="nix_h1_2" class="nix">2</div>
                                            <div id="nix_h1_3" class="nix">3</div>
                                            <div id="nix_h1_4" class="nix">4</div>
                                            <div id="nix_h1_5" class="nix">5</div>
                                            <div id="nix_h1_6" class="nix">6</div>
                                            <div id="nix_h1_7" class="nix">7</div>
                                            <div id="nix_h1_8" class="nix">8</div>
                                            <div id="nix_h1_9" class="nix">9</div>
                                        </div>
                                        <div class="nixbg">
                                            <div id="nix_h2_0" class="nix">0</div>
                                            <div id="nix_h2_1" class="nix">1</div>
                                            <div id="nix_h2_2" class="nix">2</div>
                                            <div id="nix_h2_3" class="nix">3</div>
                                            <div id="nix_h2_4" class="nix">4</div>
                                            <div id="nix_h2_5" class="nix">5</div>
                                            <div id="nix_h2_6" class="nix">6</div>
                                            <div id="nix_h2_7" class="nix">7</div>
                                            <div id="nix_h2_8" class="nix">8</div>
                                            <div id="nix_h2_9" class="nix">9</div>
                                        </div>
                                    </div>
                                `;
            document.body.append(nixcont);
//fake game
    let fakemain = document.createElement('div');
            fakemain.className = "fakemain";
            fakemain.innerHTML =`
            <div id="fake">
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
            <div class="fakebutton"></div>
        </div>`;
            document.body.append(fakemain);
            document.getElementById('but').addEventListener('click', function Deletefake(event) {
            document.getElementById('fake').style.display = "none"
                })