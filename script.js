document.addEventListener("DOMContentLoaded", function() {
  // 获取所有员工卡片
  const employeeCards = document.querySelectorAll(".employee-card");

  // 添加点击事件（onclick）
  employeeCards.forEach(function(card) {
    card.onclick = function() {
      const rating = this.getAttribute("data-rating");  // 获取评分
      alert("你点击了：" + this.textContent + " 评分：" + rating);  // 弹出员工评分
    };
  });

  // 添加鼠标悬停事件（onmouseover）和鼠标离开事件（onmouseout）
  employeeCards.forEach(function(card) {
    // 鼠标悬停时改变背景色
    card.onmouseover = function() {
      this.style.backgroundColor = "#b2ebf2"; // 改变为浅蓝色
    };

    // 鼠标离开时恢复背景色
    card.onmouseout = function() {
      this.style.backgroundColor = ""; // 恢复原背景色
    };
  });

  // 更新时钟显示
  function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    document.getElementById("clock").textContent = timeString;
  }

  // 每秒更新时钟
  setInterval(updateClock, 1000);
  updateClock(); // 初始化时钟显示
});
