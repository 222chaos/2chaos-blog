var posts=["2024/05/20/git之获取远程分支（fetch5种方法）/","2024/04/23/import后面加入-和不加大括号有什么区别/","2024/04/23/五天速成electron——day0/","2024/05/03/什么是css变量？/","2024/05/08/大学/","2024/04/23/常用DNS地址列表/","2024/04/29/规范的 git commit/","2024/04/30/浅度对比 Shadcn 与 Ant Design/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };