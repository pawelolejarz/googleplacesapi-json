/**
 * Created by pawelolejarz on 14.10.2017.
 */

$('#search').keyup(function(){
    var searchField = $('#search').val();
    if(searchField === '')  {
        $('#results').html('');
        return;
    }
    var regex = new RegExp(searchField, "i");
    var output = '<div class="" style="margin-bottom: 60px">';
    $.getJSON('data.json', function(data) {
        $.each(data, function(key, val){
            if ((val.name.search(regex) != -1) || (val.vicinity.search(regex) != -1)) {
                output += '<div class="" style="width: 300px; background-color:#3095d3; box-shadow: 0 0 20px 2px #1d2124; margin: 20px auto">';
                output += '<figure class="figure"; style="margin-bottom: 0px"><img style="margin-top: 20px; margin-left: 10px" class="figure-img img-fluid" src="'+val.icon+'" alt="'+ val.name +'" /><figcaption class="figure-caption" style="color: black; font-size: 25px; margin-left: 25px">'+ val.name +'</figcaption></figure></a>';
                output += '<div class="">';
                output += '<p style="margin-bottom: 0px; margin-left: 25px">' + val.vicinity + '</p>'
                output += '</div>';
                output += '</div>';
            }
        });
        output += '</div>';
        $('#results').html(output);
    });
});