$(document).ready(function(){
  $.ajax({
    dataType: 'json',
    url: Routes.profile_path()
  })
  .done(function(data){
    $('#container').html(HandlebarsTemplates.profile(data));
  });
});
