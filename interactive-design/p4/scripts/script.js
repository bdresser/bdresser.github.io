$.ajax({
  "url":"https://www.kimonolabs.com/api/apj445t4?apikey=AzNc6Pz6KaVJP6RKKLSD118MzFmCrExP",
  "crossDomain":true,
  "dataType":"jsonp",
  //Make a call to the Kimono API following the "url" 
  
  'success': function(response){ 
  // If the call request was successful and the data was retrieved, this function will create a list displaying the data

    var collection = response.results.collection1;

    var description = collection[Math.floor(Math.random()*(collection.length))];
    console.log(description.description.text);

    $('.description').append(description.description.text);
  
    }
});