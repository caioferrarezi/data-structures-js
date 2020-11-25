import Queue from './queue.js';

export default function(players, num) {
  const queue = new Queue();
  const losers = [];

  for (let i = 0; i < players.length; i++) {
    queue.enqueue(players[i]);
  }

  while(queue.size > 1) {
    for(let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    losers.push(queue.dequeue());
  }

  return {
    losers,
    winner: queue.dequeue()
  };
}
