var posts=["2024/05/20/git之获取远程分支（fetch5种方法）/","2024/04/23/import后面加入-和不加大括号有什么区别/","2024/05/03/什么是css变量？/","2024/04/23/五天速成electron——day0/","2024/04/23/常用DNS地址列表/","2024/04/29/规范的 git commit/","2024/04/30/浅度对比 Shadcn 与 Ant Design/","2024/06/10/面试题之css（一）/","2024/06/12/面试题之css（三）/","2024/06/11/面试题之css（二）/","2024/06/14/面试题之css（四）/","2024/06/15/面试题之es6（一）/","2024/06/21/git之获取删除分支/","2024/06/16/面试题之node.js（一）/","2024/07/02/什么是 prd/","2024/07/11/面试题之http/","2024/08/04/近期热门的小米手环(自用)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };