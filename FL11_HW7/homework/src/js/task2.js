let total_prize = 0;
const first_prize = 100;
let first_pockets = 8;
const max_attempt = 3;
const two = 2;
const pocket_plus = 4;
if (confirm('Do you want to play a game?')) {
  let prize = first_prize;
  let max_pocket = first_pockets;
  let i = 0;
  for (; i !== 1; ) {
    let pocket = Math.floor(Math.random() * (max_pocket+1));
    let round_prize = prize;
    let attempt = max_attempt;
    while (attempt >= 1) {
      let usr_pocket = Number(prompt('Choose a roulette pocket number from 0 to ' + max_pocket + '\n' +
      'Attempts left: ' + attempt + '\n' + 'Total prize: ' + total_prize + '$' + '\n' +
      'Possible prize of current attempt: ' + round_prize + '$'));
        if (usr_pocket === pocket) {
          attempt = 1;
          total_prize += round_prize;
          prize = prize * two;
          max_pocket = max_pocket + pocket_plus;
          let ask = confirm('Congratulation, you won! Your prize is: ' + total_prize + '$. Do you want to continue?');
          if (!ask) {
              alert('Thank you for your participation. Your prize is: ' + total_prize + '$')
              if (!confirm('Do you want to continue?')) {
                i = 1;
              }
          }
        } else if (attempt > 1) {
            round_prize = round_prize/two;
        } else {
          total_prize = 0;
          alert('Thank you for your participation. Your prize is: ' + total_prize + '$')
          if (!confirm('Do you want to play again?')) {
            i = 1;
          } else {
            prize = first_prize;
            max_pocket = first_pockets;    
          }
        }
      attempt--;
    }
  }
} else {
    alert('You did not become a billionaire, but can.');
}