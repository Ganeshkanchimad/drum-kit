var buttons = document.querySelectorAll(".drum");
var btnValue = this.innerHTML;

    function makeSound (operater){
        switch (operater) {
            case "1":
                    var audio1 = new Audio('/audios/drum1.mp3')
                    audio1.play()
                break;

            case "2":
                    var audio2 = new Audio('/audios/drum2.mp3')
                    audio2.play()
                break;

            case "3":
                    var audio3 = new Audio('/audios/drum3.mp3')
                    audio3.play()
                break;

            case "4":
                    var audio4 = new Audio('/audios/drum4.mp3')
                    audio4.play()
                break;

            case "5":
                    var audio5 = new Audio('/audios/drum5.mp3')
                    audio5.play()
                break;

            case "6":
                    var audio6 = new Audio('/audios/drum6.mp3')
                    audio6.play()
                break;

            case "7":
                    var audio7 = new Audio('/audios/drum7.mp3')
                    audio7.play()
                break;

            
            default:
                break;
        }
    }

    for(i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click" , function respondToKey(innerHTML) {
            var bv = this.innerHTML
            makeSound(bv)
            btnAnimation(bv)
        } )
    }
    
    document.addEventListener("keypress" , function respondToKey(e) {
        var ev = e.key 
        makeSound(e.key)
        btnAnimation(e.key)
    });

    function btnAnimation(currentkey){
        var activeButton = buttons[currentkey-1]
        activeButton.classList.add("pressed")

        setTimeout(function(){
            activeButton.classList.remove("pressed")
        },150)


    }
