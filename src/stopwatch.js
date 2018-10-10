class StopWatch {
  static settings() {
    return {
      startTime: 0,
      endTime: 0,
      running: 0,
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
        return this.duration;
      }
    });
  }
  start() {
    this.running
      ? console.error("Stop watch is running")
      : (this.running = true);
    this.startTime = new Date();
  }
  stop() {
    !this.running
      ? console.error("Stop watch is not running")
      : (this.running = false);
    this.endTime = new Date();
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
}
const staticData = StopWatch.settings();
console.log("Fixed values", staticData);
const watch = new StopWatch(staticData);
