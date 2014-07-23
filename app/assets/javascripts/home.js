$(document).ready(function(){
  $.ajax({
    dataType: 'json',
    url: Routes.articles_path()
  })
  .done(function(data){
    $('#container').html(HandlebarsTemplates.articles(data));
  });
});
