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
  start() {
    const _startHelper = () => {
      this.running = true;
      this.startTime = new Date();
      console.log(this.startTime.getSeconds());
      return;
    };
    this.running ? console.error("stopwatch is running") : _startHelper();
    return;
  }
  stop() {
    const _stopHelper = () => {
      this.running = false;
      this.endTime = new Date();
      console.log(this.endTime.getSeconds());
      const seconds =
        (this.endTime.getTime() - this.startTime.getTime()) / 1000;
      this.duration += seconds;
      return;
    };
    !this.running ? console.error("stopwatch is not running") : _stopHelper();
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
console.log(watch);
