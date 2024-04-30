var posts=["2024/04/23/import后面加入-和不加大括号有什么区别/","2024/04/23/五天速成electron——day0/","2024/04/23/常用DNS地址列表/","2024/04/30/浅度对比 Shadcn 与 Ant Design/","2024/04/29/规范的 git commit/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };