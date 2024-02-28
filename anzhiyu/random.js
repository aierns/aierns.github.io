var posts=["2024/02/14/2024/","2024/02/14/Algorithm/","2024/02/28/ProgrammingOptimization/","2024/02/12/C/","2024/02/16/AIGC/","2024/02/12/hello-world/","2024/02/14/Java/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };