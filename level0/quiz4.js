/** 문제
 * 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
 * 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
 * n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
 * 6   -> 1
 * 10  -> 5
 * 4   -> 2
 */
function solution(n) {
    var answer = 0;
    let pizza = 6;
    let max_cnt = 50;

    if(0<n && n<101) {
        for(let i=1; i<= max_cnt; i++) {
            if(((pizza * i) % n === 0)) {
                answer = i;
                break;
            }
        }
    }

    /*let answer = 1;
    while (answer * 6 % n) {
        answer++;
    }*/

    console.log(answer);
    return answer;
}

solution(4);
