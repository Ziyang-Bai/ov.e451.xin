function search(engine) {
    try {
        var query = document.getElementById('searchQuery').value;
        var url = '';

        if (engine === 'google') {
            url = 'https://www.google.com/search?q=' + escape(query);
        } else if (engine === 'bing') {
            url = 'https://www.bing.com/search?q=' + escape(query);
        }

        window.location.href = url;
    } catch (e) {
        document.getElementById('debug').innerText = '搜索时发生错误: ' + e.message;
    }
}

function showTime() {
    try {
        var date = new Date();
        var timeString = '当前时间：' + date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日 ' + date.getHours() + '时' + date.getMinutes() + '分' + date.getSeconds() + '秒';
        document.getElementById('time').innerText = timeString;
    } catch (e) {
        document.getElementById('debug').innerText = '显示时间时发生错误: ' + e.message;
    }
}

// 页面加载时显示时间并实时更新
window.onload = function() {
    showTime();
    setInterval(showTime, 1000); // 每秒更新一次时间
};

function toggleDetails() {
    var details = document.querySelector('.details');
    var expandBtn = document.querySelector('.expand-btn');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        expandBtn.innerText = '收起';
    } else {
        details.style.display = 'none';
        expandBtn.innerText = '展开';
    }
}
