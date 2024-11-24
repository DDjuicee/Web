// 创建一个包含完整时间信息的 data 对象 
const data = {
  year: 0,
  month: 0,
  day: 0,
  weekday: '',
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  timeZoneOffset: 'UTC+08:00', // 固定为北京时间
  updateTime: function() {
    // 使用 UTC 时间偏移来计算北京时间
    const now = new Date();
    const utcTimestamp = now.getTime() + now.getTimezoneOffset() * 60 * 1000; // 当前时间的 UTC 时间戳
    const beijingTimestamp = utcTimestamp + 8 * 60 * 60 * 1000; // 北京时间的 UTC+8 时间戳
    const beijingTime = new Date(beijingTimestamp);

    this.year = beijingTime.getFullYear();
    this.month = beijingTime.getMonth() + 1; // 月份从 0 开始，需要加 1
    this.day = beijingTime.getDate();
    this.weekday = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][beijingTime.getDay()]; // 获取星期
    this.hours = beijingTime.getHours();
    this.minutes = beijingTime.getMinutes();
    this.seconds = beijingTime.getSeconds();
    this.milliseconds = beijingTime.getMilliseconds(); // 获取毫秒
  },
  formatTime: function() {
    // 格式化时间为完整的时间字符串，精确到秒并包含时区
    let timeString = `${this.year}年${this.month < 10 ? '0' + this.month : this.month}月${this.day < 10 ? '0' + this.day : this.day}日 ` +
           `${this.weekday} ` +
           `${this.hours < 10 ? '0' + this.hours : this.hours}:${this.minutes < 10 ? '0' + this.minutes : this.minutes}:${this.seconds < 10 ? '0' + this.seconds : this.seconds} ` +
           `时区: ${this.timeZoneOffset}`;

    // 每到20和50分钟时输出活动提醒
    if (this.minutes === 20 || this.minutes === 50) {
      timeString += "\n站起来活动一下吧！";
    }

    return timeString;
  }
};

// 每秒更新一次时间并显示
function updateClock() {
  data.updateTime(); // 更新时间
  document.getElementById('clock').textContent = data.formatTime(); // 更新时钟显示
}

// 初次加载时更新一次时钟
updateClock();
// 每秒更新时钟
setInterval(updateClock, 1000); // 以秒为单位更新
