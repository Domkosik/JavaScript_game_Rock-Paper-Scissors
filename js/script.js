//❗❗variables❗❗
        ///--------------------------------------------------------------------------------------------------
        let buttons = document.getElementsByClassName("btn");
        colors = [ '#F70073', '#F700F7', '#F7A500', '#F7F700', '#00D6F7', '#00E700', '#B500F7', '#40E0D0', '#D2691E', '#FFFF00', '#A9A9A9', '#FF1493', '#228B22', '#4B0082', '#BC8F8F'];
        btnRock = document.getElementById("btn-rock");
        btnPaper = document.getElementById("btn-paper");
        btnScissors = document.getElementById("btn-scissors");
        gameObjects = document.getElementById("gameObjects");
        boardAfter = document.getElementById("boardAfter");
        conclusion = document.getElementById("conclusion");
        //rockWin = document.getElementById("rockWin");
        //paperWin = document.getElementById("paperWin");
        //scissorsWin = document.getElementById("scissorsWin");
        //lose = document.getElementById("lose");
        //win = document.getElementById("win");
        //draw = document.getElementById("draw");
        //note = document.getElementsByClassName("note");
        let computerObject, playerScore;

        //❗❗EVENTS❗❗

        //--------------------------------------------------------------------------------------------------
        // On load function --> launch #main_header change & change of colors in icon
        window.addEventListener("load", SetchangeHeader);
        window.addEventListener("load", setRandomColor);

        //--------------------------------------------------------------------------------------------------
        // If user click on buttons --> change GameBoards, generate random object
        for (let i = 0 ; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(){
            gameObjects.style.display = "none"; 
            boardAfter.style.display = "flex";
            randomObject();
            conclusion.classList.add("fadeIn");
        })}
        

        //--------------------------------------------------------------------------------------------------
        // If user click on rock button --> generate ROCK object and result
        btnRock.addEventListener("click", showRock);
        btnRock.addEventListener("click", playRock);

        //--------------------------------------------------------------------------------------------------
        // If user click on paper button --> show PAPER object and result
        btnPaper.addEventListener("click", showPaper);
        btnPaper.addEventListener("click", playPaper);

        //--------------------------------------------------------------------------------------------------
        // If user click on scissors button --> generate SCISSORS object and result
        btnScissors.addEventListener("click", showScissors);
        btnScissors.addEventListener("click", playScissors);

        //--------------------------------------------------------------------------------------------------
        // If user click & keyDown on "input - email" launch emailValidation
        document.getElementById("email").addEventListener("blur", emailValidation);

        //❗❗FUNCTIONS❗❗
        //--------------------------------------------------------------------------------------------------
        // function: Auto-Generation of numbers(objects) "1-3" & add object on the screen
        function randomObject(){
            computerObject = Math.ceil(Math.random()*3);
            let computerImg = document.querySelector(".computerChoice");
            computerImg.src = "img/"+computerObject+".png";
            conclusion.classList.remove("fadeIn");
        }

        //--------------------------------------------------------------------------------------------------
        // function: generate ROCK object
        function showRock(){
            playerScore = 1;
            const playerImg = document.querySelector(".playerChoice");
            playerImg.src = "img/1.png";
        }

         //--------------------------------------------------------------------------------------------------
        // function: generate PAPER object
        function showPaper(){
            playerScore = 2;
            const playerImg = document.querySelector(".playerChoice");
            playerImg.src = "img/2.png";
        }
        
        //--------------------------------------------------------------------------------------------------
        // function: generate Scissors object
        function showScissors(){
            playerScore = 3;
            const playerImg = document.querySelector(".playerChoice");
            playerImg.src = "img/3.png";
        }
        
        //--------------------------------------------------------------------------------------------------
        // function: if user play ROCK, do result
        function playRock(){
                if (computerObject === 2){
                    lose.classList.remove("unfinished");
                    lose.classList.add("finished");
                    win.classList.add("unfinished");
                    draw.classList.add("unfinished");
                }
                else if (computerObject === 3){
                    win.classList.remove("unfinished");
                    win.classList.add("finished");
                    lose.classList.add("unfinished");
                    draw.classList.add("unfinished");
                    
                }
                else if (computerObject === 1){
                    draw.classList.remove("unfinished");
                    draw.classList.add("finished");
                    lose.classList.add("unfinished");
                    win.classList.add("unfinished");
                }
            }

        //--------------------------------------------------------------------------------------------------
        // function: if user play PAPER, do result
            function playPaper(){
                if (computerObject === 2){
                    draw.classList.remove("unfinished");
                    draw.classList.add("finished");
                    lose.classList.add("unfinished");
                    win.classList.add("unfinished");
                    
                }
                else if (computerObject === 3){
                    lose.classList.remove("unfinished");
                    lose.classList.add("finished");
                    win.classList.add("unfinished");
                    draw.classList.add("unfinished");
                    
                }
                else if (computerObject === 1){
                    win.classList.remove("unfinished");
                    win.classList.add("finished");
                    lose.classList.add("unfinished");
                    draw.classList.add("unfinished");
                    
                }
            }

        //--------------------------------------------------------------------------------------------------
        // function: if user play SCISSORS, do result
        function playScissors(){
            if (computerObject === 2){
                win.classList.remove("unfinished");
                win.classList.add("finished");
                lose.classList.add("unfinished");
                draw.classList.add("unfinished");
                
            }
            else if (computerObject === 3){
                draw.classList.remove("unfinished");
                draw.classList.add("finished");
                lose.classList.add("unfinished");
                win.classList.add("unfinished");
                
            }
            else if (computerObject === 1){
                lose.classList.remove("unfinished");
                lose.classList.add("finished");
                win.classList.add("unfinished");
                draw.classList.add("unfinished");
                
            }
        }

        

        //--------------------------------------------------------------------------------------------------
        // function: change in #main_header from word to icon
        function changeHeader(){
            document.getElementById("change1").style.display = "none";
            document.getElementById("change2").style.display = "inline-block";
        };
        
        function SetchangeHeader(){
        setTimeout(changeHeader, 2500)
        };

        //--------------------------------------------------------------------------------------------------
        // function: color icon in #main_header by random color from array
        function setColor() {
			var newColor = colors[Math.floor(Math.random()*colors.length)];
			document.getElementById("change2").style.color = newColor;
        };
        function setRandomColor(){
        setInterval(setColor, 2000)
        };

        //--------------------------------------------------------------------------------------------------
        // function: email Validation
        var email_name = document.getElementById("email");

        function emailValidation(){
            var key = event.key; // "a", "1", "Shift", etc.
            var mailformat = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;
            var email_value = email_name.value;

            if(!email_value.match(mailformat))
            { 
                document.getElementById("email_err").innerHTML = "This is not valid email format.";
                document.getElementById("email_err").style.color = "#FF0000";
            } else 
            {
                document.getElementById("email_err").innerHTML = "Valid email format";
                document.getElementById("email_err").style.color = "#00AF33";
            }
        };