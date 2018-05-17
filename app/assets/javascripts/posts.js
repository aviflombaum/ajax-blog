
$(function(){
  var postsOffset = 10;

  $("#load-more").on("click", function(){
    $.get("/posts.json?offset="+postsOffset, function(json){
      postsOffset += 10;

      json.forEach(function(post){
        $("ol").append("<li>"+post.title +"</li>")
      })
    })
  })
  
})
