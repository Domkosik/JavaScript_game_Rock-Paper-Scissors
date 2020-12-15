//❗❗variables❗❗
        ///--------------------------------------------------------------------------------------------------
        let buttons = document.getElementsByClassName("btn");
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
        let computerObject, playerScore0, computerScore0, totalPlayerScore, totalComputerScore;

        //❗❗EVENTS❗❗

        //--------------------------------------------------------------------------------------------------
        // On load --> launch #main_header change & change of colors in icon
        SetchangeHeader();
        colorInterval();

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
        btnRock.addEventListener("click", score);

        //--------------------------------------------------------------------------------------------------
        // If user click on paper button --> show PAPER object and result
        btnPaper.addEventListener("click", showPaper);
        btnPaper.addEventListener("click", playPaper);
        btnPaper.addEventListener("click", score);

        //--------------------------------------------------------------------------------------------------
        // If user click on scissors button --> generate SCISSORS object and result
        btnScissors.addEventListener("click", showScissors);
        btnScissors.addEventListener("click", playScissors);
        btnScissors.addEventListener("click", score);

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
        
            const playerImg = document.querySelector(".playerChoice");
            playerImg.src = "img/1.png";

        }

         //--------------------------------------------------------------------------------------------------
        // function: generate PAPER object
        function showPaper(){
            
            const playerImg = document.querySelector(".playerChoice");
            playerImg.src = "img/2.png";
        }
        
        //--------------------------------------------------------------------------------------------------
        // function: generate Scissors object
        function showScissors(){
            
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
                    playerScore0 = 0;
                    computerScore0 = 1;

                }
                else if (computerObject === 3){
                    win.classList.remove("unfinished");
                    win.classList.add("finished");
                    lose.classList.add("unfinished");
                    draw.classList.add("unfinished");
                    playerScore0 = 1;
                    computerScore0 = 0;

                }
                else if (computerObject === 1){
                    draw.classList.remove("unfinished");
                    draw.classList.add("finished");
                    lose.classList.add("unfinished");
                    win.classList.add("unfinished");
                    playerScore0 = 0;
                    computerScore0 = 0;

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
                    playerScore0 = 0;
                    computerScore0 = 0;
                    // document.getElementById("playerScore").innerHTML = "Your score: "+playerScore0;
                    // document.getElementById("computerScore").innerHTML = "Opponent's score: "+computerScore0;
                }
                else if (computerObject === 3){
                    lose.classList.remove("unfinished");
                    lose.classList.add("finished");
                    win.classList.add("unfinished");
                    draw.classList.add("unfinished");
                    playerScore0 = 0;
                    computerScore0 = 1;
                    // document.getElementById("playerScore").innerHTML = "Your score: "+playerScore0;
                    // document.getElementById("computerScore").innerHTML = "Opponent's score: "+computerScore0;
                }
                else if (computerObject === 1){
                    win.classList.remove("unfinished");
                    win.classList.add("finished");
                    lose.classList.add("unfinished");
                    draw.classList.add("unfinished");
                    playerScore0 = 1;
                    computerScore0 = 0;
                    // document.getElementById("playerScore").innerHTML = "Your score: "+playerScore0;
                    // document.getElementById("computerScore").innerHTML = "Opponent's score: "+computerScore0;
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
                playerScore0 = 1;
                computerScore0 = 0;
                // document.getElementById("playerScore").innerHTML = "Your score: "+playerScore0;
                // document.getElementById("computerScore").innerHTML = "Opponent's score: "+computerScore0;
            }
            else if (computerObject === 3){
                draw.classList.remove("unfinished");
                draw.classList.add("finished");
                lose.classList.add("unfinished");
                win.classList.add("unfinished");
                playerScore0 = 0;
                computerScore0 = 0;
                // document.getElementById("playerScore").innerHTML = "Your score: "+playerScore0;
                // document.getElementById("computerScore").innerHTML = "Opponent's score: "+computerScore0;
            }
            else if (computerObject === 1){
                lose.classList.remove("unfinished");
                lose.classList.add("finished");
                win.classList.add("unfinished");
                draw.classList.add("unfinished");
                playerScore0 = 0;
                computerScore0 = 1;
                // document.getElementById("playerScore").innerHTML = "Your score: "+playerScore0;
                // document.getElementById("computerScore").innerHTML = "Opponent's score: "+computerScore0;
            }
        }

        
        //--------------------------------------------------------------------------------------------------
        // function: score of the game
        function score (){
        let playerScore = 0;
            computerScore = 0;
            totalPlayerScore = playerScore + playerScore0;
            totalComputerScore = computerScore + computerScore0;
            document.getElementById("playerScore").innerHTML = "Your score: "+totalPlayerScore;
            document.getElementById("computerScore").innerHTML = "Opponent's score: "+totalComputerScore;
        };

        //--------------------------------------------------------------------------------------------------
        // function: smooth-transition in #main_header from word to GAMEPAD icon
        function changeHeader(){
            document.getElementById("change1").classList.add("fadeout");

            setTimeout(function(){
                document.getElementById("change1").style.display = "none"
            }, 700);
            document.getElementById("change2").classList.add("fadein");

            setTimeout(function(){
                document.getElementById("change2").style.display = "inline-block"
            }, 700);
        };

        function SetchangeHeader(){
        setTimeout(changeHeader, 2500)
        };

        //--------------------------------------------------------------------------------------------------
        // function: smooth transition of GAMEPAD icon color in #main_header 
        function changeColor(){
            var randomColor = "#"+Math.random().toString(16).substr(-6);
            document.getElementById("change2").style.color = randomColor;
        }
        function colorInterval(){
            setInterval(changeColor, 2200)
        };
        
        //--------------------------------------------------------------------------------------------------
        // function: smooth transition of GAMEPAD icon color in #main_header 
        function conclusionFading(){

        };

        //--------------------------------------------------------------------------------------------------
        // function: email Validation
        var email_name = document.getElementById("email");

        function emailValidation(event){
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