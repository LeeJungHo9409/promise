//promise 예제

//내장 객체 콜백 상향 버전 / 비동기!

/* 

1 상태 (state)
    무거운 오퍼레이션을 수행 중인지
    기능 수행이 다 진행되어 성공했는지 실패했는지
        pending(수행중) -> fulfilled (성공) or rejected (실패)

2 producer(제공자) / consumer(사용자) 차이점을 아는 것
    다른 견해 이해!
*/

//1. producer 파트 비동적으로 수행

//when new promise is created, the executor runs automatically.
//다른 클래스와 다르게 바로 실행되기에 불필요한 실행이 발생될 수 있음. 항상 유의해서 공부하기.
const promise = new Promise((resolve, reject)=>{  //Class, resolve(성공) / reject(실패) -> 콜백함수!
    //무거운 작업 많이함. 네트워크나 입출력하는 과정은 시간이 많이 걸립니다. 그래서 비동기적으로 수행해주는게 좋다. 느려지기 때문에!
    console.log('doing someting....');

    setTimeout(() => {
        resolve('JungHo');
    }, 2000);
});

//2. consumer 사용자or이용자 then, catch, finally
promise.then((value)=>{
    console.log(value);
});

