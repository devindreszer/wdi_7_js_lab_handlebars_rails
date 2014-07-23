Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

Handlebars.registerHelper('monthName', function(month) {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[month - 1];
});

Handlebars.registerHelper('contentWithBreaks', function(content){
  var paragraphs = content.split(/[*]/);

  result = "";
  paragraphs.filter(function(paragraph){
    return paragraph !== "";
  })
  .forEach(function(paragraph){
    result += "*" + paragraph + "<br><br>";
  });

  return new Handlebars.SafeString(result);
});
