/**
 * Created by pawelolejarz on 24.10.2017.
 */

(function($) {
    var detailsKey = localStorage.getItem("key");
    var output = '';

    $.getJSON('../data.json', function(data) {
        $.each(data, function(key, val){

            if (key==detailsKey) {


                output += '<div class="panel panel-info" style="width: 300px; margin: 0 auto">';
                output += '<div class="panel-heading">' + val.name + '</div>';
                output += '<div class="panel-body"><img src="'+val.icon+'" class="thumbnail" style="width:50px" alt="Ikona">' + "Ocena lokalu: " + val.rating + '</div>';
                if(val.photos){
                    output += "<div class='panel-body'><img src='" + "https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&photoreference=" + val.photos[0].photo_reference +"&key=AIzaSyBsVYG1w-qni6dOOZtErjB6yZhvk2c20c8' style='display: block; margin-left: auto; margin-right: auto; margin-top: 5px; margin-bottom: 10px; box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); '/></div>"
                }
                output += '<div class="panel-footer">' + "Adres: " + val.vicinity + '</div>';
            }
        });
        $('#details').html(output);
    });


})(jQuery);
