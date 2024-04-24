var posts=["2024/04/23/abc/","2024/04/23/五天速成electron——day0/","2024/04/23/后面加入-和不加大括号有什么区别/","2024/04/23/test/","2024/04/23/常用DNS地址列表/","2024/04/23/hello-world/","2024/04/23/技术随想/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };