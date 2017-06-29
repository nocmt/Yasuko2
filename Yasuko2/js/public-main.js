$(document).ready(function() {

    //到达固定高度显示工具条
    $(window).scroll(function() {
        if($(this).scrollTop() > 500) {
            $(".side-tool").fadeIn();
        } else {
            $(".side-tool").fadeOut();
        }
    });
    //显示顶部搜索框
    $(".menu-search").click(function() {
        //顶部搜索框动画
        $(".public-search-box").animate({
            height: 'toggle'
        });
    });
    //回到顶部
    $(".tool-top").click(function() {
        var speed = 300; //滑动的速度
        $('body,html').animate({
            scrollTop: 0
        }, speed);
        return false;
    });
    $(".tool-chart").click(function() {
        swal({
            title: '网站统计',
            text: '网站已运行：2222天 | 总访问量：9999次',
            timer: 3000
        }).then(
            function() {},
            // handling the promise rejection
            function(dismiss) {
                if(dismiss === 'timer') {
                    console.log('I was closed by the timer')
                }
            }
        );
    });
    $(".tool-share").click(function() {
        swal({
          title: '分享页面',
          type: 'info',
          html:
            '<span><a class="swal-share" href="http://connect.qq.com/widget/shareqq/index.html?url=http%3A%2F%2F127.0.0.1%3A8020%2FYasuko2%2Findex.html%230-sqq-1-96187-9737f6f9e09dfaf5d3fd14d775bfee85&title=Nocmt%E7%9A%84%E4%B8%AA%E4%BA%BA%E5%B0%8F%E7%AB%99%EF%BC%8C%E7%BC%84%E9%BB%98%E6%97%A0%E8%A8%80%EF%BC%8C%E5%AD%98%E5%BF%B5%E4%BA%8E%E5%BF%83%E3%80%82&desc=&summary=&site=baidu&pics=http%3A%2F%2Fimage.nocmt.com%2F2017060701%2F0.jpg" title="分享到QQ好友"><i class="fa fa-qq" aria-hidden="true"></i></a></span>' +
            '<span><a class="swal-share" href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2F127.0.0.1%3A8020%2FYasuko2%2Findex.html%230-qzone-1-77018-d020d2d2a4e8d1a374a433f596ad1440&title=Nocmt%E7%9A%84%E4%B8%AA%E4%BA%BA%E5%B0%8F%E7%AB%99%EF%BC%8C%E7%BC%84%E9%BB%98%E6%97%A0%E8%A8%80%EF%BC%8C%E5%AD%98%E5%BF%B5%E4%BA%8E%E5%BF%83%E3%80%82&desc=&summary=&site=&pics=http%3A%2F%2Fimage.nocmt.com%2F2017060701%2F0.jpg" title="分享到QQ空间"><i class="fa fa-star" aria-hidden="true"></i></a></span>' +
            '<span><a class="swal-share" href="http://service.weibo.com/share/share.php?url=http%3A%2F%2F127.0.0.1%3A8020%2FYasuko2%2Findex.html%230-tsina-1-14960-397232819ff9a47a7b7e80a40613cfe1&title=Nocmt%E7%9A%84%E4%B8%AA%E4%BA%BA%E5%B0%8F%E7%AB%99%EF%BC%8C%E7%BC%84%E9%BB%98%E6%97%A0%E8%A8%80%EF%BC%8C%E5%AD%98%E5%BF%B5%E4%BA%8E%E5%BF%83%E3%80%82&appkey=1343713053&pic=http%3A%2F%2Fimage.nocmt.com%2F2017060701%2F0.jpg&searchPic=true " title="分享到新浪微博"><i class="fa fa-weibo" aria-hidden="true"></i></a></span>',
        });
    });
});