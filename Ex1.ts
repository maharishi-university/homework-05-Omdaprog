class Meditation {
  seconds: number = 0;
  constructor(seconds: number) {
    this.seconds = seconds;
  }

  start() {
    const countdown = () => {
      for (let index = 1; index <= this.seconds; index++) {
        setTimeout(() => console.log(index), 0);
      }
    };
    countdown();
    setTimeout(() => console.log("Jay Guru Dev"), 0);
  }
}

// Example usage:
const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log("Start meditation");
