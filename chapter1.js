var forwardMultiplyGate = function(x, y) {
  return x * y;
};
forwardMultiplyGate(-2, 3); // -6 이 리턴됩니다.


// 하나의 게이트가 있는 회로
var forwardMultiplyGate = function(x, y) { return x * y; };
var x = -2, y = 3; // 입력 값

// x, y 를 랜덤하게 조금씩 변경하면서 가장 좋은 출력을 내는 값을 추적합니다
var tweak_amount = 0.01;
var best_out = -Infinity;
var best_x = x, best_y = y;
for(var k = 0; k < 100; k++) {
  var x_try = x + tweak_amount * (Math.random() * 2 - 1); // x 를 조금 변경
  var y_try = y + tweak_amount * (Math.random() * 2 - 1); // y 를 조금 변경
  var out = forwardMultiplyGate(x_try, y_try);
  if(out > best_out) {
    // 현재까지 최고 값 보다 좋은 경우 이를 새로운 최고 값으로 저장합니다
    best_out = out; 
    best_x = x_try, best_y = y_try;
  }
}

print("best_out : %d", best_out);
