var forwardMultiplyGate = function(x, y) {
  return x * y;
};
forwardMultiplyGate(-2, 3); // -6 �� ���ϵ˴ϴ�.


// �ϳ��� ����Ʈ�� �ִ� ȸ��
var forwardMultiplyGate = function(x, y) { return x * y; };
var x = -2, y = 3; // �Է� ��

// x, y �� �����ϰ� ���ݾ� �����ϸ鼭 ���� ���� ����� ���� ���� �����մϴ�
var tweak_amount = 0.01;
var best_out = -Infinity;
var best_x = x, best_y = y;
for(var k = 0; k < 100; k++) {
  var x_try = x + tweak_amount * (Math.random() * 2 - 1); // x �� ���� ����
  var y_try = y + tweak_amount * (Math.random() * 2 - 1); // y �� ���� ����
  var out = forwardMultiplyGate(x_try, y_try);
  if(out > best_out) {
    // ������� �ְ� �� ���� ���� ��� �̸� ���ο� �ְ� ������ �����մϴ�
    best_out = out; 
    best_x = x_try, best_y = y_try;
  }
}

print("best_out : %d", best_out);