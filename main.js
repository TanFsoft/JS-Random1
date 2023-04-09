'use strict';


let FindNumber = Math.trunc(Math.random() * 20) + 1;

//Math.random() để tạo 1 số ngẫu nhiên từ 0-1..sau đó nhân với 20 
//Math.trucn() để lấy phần nguyên của kết quả,cộng thêm 1 để số ngẫu nhiên đc tạo ra nằm trong 1 -20

let score = 20;
let highscore = 0;
//  var có thể được cập nhật và khai báo lại trong phạm vi tồn tại
// let có thể được cập nhật nhưng không thể khai báo lại
// const không thể cập nhật và không thể khai báo lại


document.querySelector('.check').addEventListener('click', function () {//22
  const guess = Number(document.querySelector('.guess').value);//21//là input gues.value là lấy value và gán vào gues
  console.log(guess, typeof guess);//in ra biến guess và typeof của nó

  // khi rỗng
  if (!guess) {           
       document.querySelector('.message').textContent = ' No number!';
    // khi đoán đúng
  } else if (guess === FindNumber) {
    document.querySelector('.message').textContent = ' Correct Number!';

    document.querySelector('.number').textContent = FindNumber;//cho dấu chấm hỏi bằng với chữ random
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('body').style.color ='red'

    

    if (score > highscore) {
        //Nếu điểm số hiện tại của người chơi lớn hơn điểm số cao nhất đã đạt được,
        // thì điểm số cao nhất sẽ được cập nhật và hiển thị trên trang web.
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // khi sai
  } else if (guess !== FindNumber) {
    if (score > 1) {
       document.querySelector('.message').textContent =
       guess > FindNumber ? ' Too high!' : ' Too low!';
      score--;//diểm số giảm đi 1 nè
      document.querySelector('.score').textContent = score;//cập nhật lại số điểm sau khi bị trừ 
    } else {//nếu điểm =1 thì lose
      document.querySelector('.message').textContent = ' You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }


});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  FindNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

   document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
 


});

