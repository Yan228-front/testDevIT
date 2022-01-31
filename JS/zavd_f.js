class ConcurencyQueue {
  constructor(concurency) {}

  //встать в очередь
  queue(order, requestId) {
    requestId = requestId || 0; //служебная переменная
    if (requestId < 0 || requestId >= order.length) {
      return;
    }
    order[requestId](function () {
      callAjaxFunctions(order, requestId + 1);
    });
  }

  //удалить из очереди после выполнения
  deQueue(requestId) {}

  //Обработка очереди
  queuing(requestId) {}
}

const rec1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

const recN = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("pool");
  }, 300);
});

console.log(rec1, recN);

let concQueue = new ConcurencyQueue(3);
let ReqId1 = concQueue.queue(rec1);
let ReqIdN = concQueue.queue(recN);
//concQueue.queuing(ReqId1...ReqIdN)
