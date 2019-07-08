let prize = 0;
let askUser;
let numberRange = 8;
let randomInteger = Math.floor(Math.random() * numberRange + 1);
console.log(randomInteger);
let attempts = 4;
let maxPrize = 100;
let totalPrize = 0;
let three = 3;
let two = 2;
let four = 4;
let oneHundread = 100;
let eight = 8;

let playGame = confirm('Do you want to play game?');
if (!playGame) {
    alert('You did not become a billionaire, but can.');
} else {
    while (1 < attempts) {
        playGame = false;
        attempts--;

        let possiblePrize = maxPrize;
        if (attempts === two) {
            possiblePrize = Math.floor(maxPrize / two);
        }
        if (attempts === 1) {
            possiblePrize = Math.floor(maxPrize / four);
        }

        askUser = Number(prompt(`Choose a roulette pocket number from 0 to ${numberRange} \n
            Attepts left: ${attempts} \n
            Total prize: ${totalPrize} \n
            Possible prize on current attempt: ${possiblePrize}`));

        if (randomInteger === askUser && attempts === three) {
            playGame = true;
            prize = maxPrize + prize;
            alert(`Congratulation, you won!   Your prize is: ${prize} $. `);
            playGame = confirm('Do you want to play again?');
            if(playGame){
                attempts = three;
                maxPrize = maxPrize * two;
                numberRange += four;
                randomInteger = Math.floor(Math.random() * numberRange + 1);
                playGame = false;
                attempts = four;
                continue;
            }
            break;
        } else if (randomInteger === askUser && attempts === two) {
            playGame = true;
            prize = Math.floor(maxPrize / two);
            alert(`Congratulation, you won!   Your prize is: ${prize} $. `);
            playGame = confirm('Do you want to play again?');
            if(playGame){
                attempts = three;
                maxPrize = maxPrize * two;
                numberRange += four;
                randomInteger = Math.floor(Math.random() * numberRange + 1);
                playGame = false;
                attempts = four;
                continue;
            }
            break;
        } else if (randomInteger === askUser && attempts === 1) {
            playGame = true;
            prize = Math.floor(maxPrize / four);
            alert(`Congratulation, you won!   Your prize is: ${prize} $. `);
            playGame = confirm('Do you want to play again?');
            if(playGame){
                attempts = three;
                maxPrize = maxPrize * two;
                numberRange += four;
                randomInteger = Math.floor(Math.random() * numberRange + 1);
                playGame = false;
                attempts = four;
                continue;
            }
            break;
        } else if (randomInteger !== askUser && attempts === 1) {
            prize = 0;
            alert(`Thank you for your participation. Your prize is: ${prize}$`)
            playGame = confirm('Do you want to play again?');
            if(playGame){
                attempts = three;
                maxPrize = oneHundread;
                numberRange = eight;
                randomInteger = Math.floor(Math.random() * numberRange + 1);
                playGame = false;
                attempts = four;
                continue;
            }else{
                break;
            }
        }
    }
}