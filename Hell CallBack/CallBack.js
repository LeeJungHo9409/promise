/*

Hell CallBack Test

JavaScript is '동기' or '비동기'.

자바스크립트 특성
맨위부터 읽고 읽은대로 실행한다.

그대신, hoisting (호이스팅) 
-var, function 선언문은 먼저 실행하라.-
기능으로 인해 먼저 실행된다.
c언어로 따지자면 함수를 위에서 선언하는 것과 동일인데
그것보다 더 좋은점은 아무대나 막써도 알아서 지정해줌.

*/

console.log('1');
setTimeout(function(){
    console.log('2');
}, 1000); //비동기
console.log('3');

//즉각적 콜백 Synchronous callback
function printImmediately(print){ 
    print();
}// 맨 처음으로 실행

printImmediately(() => console.log('hello'));//동기

//느긋한 콜백 asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print,timeout);
}
printWithDelay(()=>console.log('async callback'), 2000); //비동기

//hell!!!

class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        //프론트엔드에선 백엔드가 하찮아 보일떄가 이럴때
        //실제는 백엔드가 정보를 할꺼번에 넘겨준다고 한다.
        //YOUTUBE  피셜
    }
}