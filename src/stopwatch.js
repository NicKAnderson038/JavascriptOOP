class StopWatch {
  static settings() {
    return {
      startTime: null,
      endTime: null,
      running: false,
      duration: 0
    };
  }
  constructor(obj) {
    this.startTime = obj.startTime;
    this.endTime = obj.endTime;
    this.running = obj.running;
    this.duration = obj.duration;
  }
  static durationCalc() {
    return Object.defineProperty(this, "duration", {
      get: () => {
        return console.log(this.duration);
      }
    });
  }
  start() {
    this.running
      ? console.error("Stop watch is running")
      : (this.running = true);
    this.startTime = new Date();
    console.log(this.startTime.getSeconds());
    return;
  }
  stop() {
    !this.running
      ? console.error("Stop watch is not running")
      : (this.running = false);
    this.endTime = new Date();
    console.log(this.endTime.getSeconds());
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
    return;
  }
  reset() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
    return;
  }
  durationTime() {
    console.log(this.duration);
    return;
  }
}
const staticData = StopWatch.settings();
console.log("Fixed values", staticData);
const watch = new StopWatch(staticData);
