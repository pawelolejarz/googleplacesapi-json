/**
 * Created by pawelolejarz on 14.10.2017.
 */

(function($) {
    $('#search').keyup(function(){
        var searchField = $('#search').val();
        if(searchField === '')  {
            $('#results').html('');
            return;
        }
        var regex = new RegExp(searchField, "i");
        var output = '<div class="container">';
        $.getJSON('data.json', function(data) {
            $.each(data, function(key, val){
                if ((val.name.search(regex) != -1) || (val.vicinity.search(regex) != -1)) {
                    output += '<div></div>';
                    output += '<div class="box col-xs-12 col-sm-6 col-md-4 col-lg-4">';
                    output += '<div class="panel panel-info" style="cursor: pointer;">';
                    output += '<div class="panel-heading">' + val.name + '</div>';
                    output += '<div class="panel-body"><img src="'+val.icon+'" class="thumbnail" style="width:50px" alt="Image">';
                    output += '<div class="panel-footer">' + val.vicinity + '</div>';
                    output += '</div>';
                    output += '</div>';
                    output += '</div>';
                }
            });
            output += '</div>';
            $('#results').html(output);

            // $(".box").click(function(){
            //     alert ($(this).text())
            // });

            $(document).ready(function () {
            $(".box").on('click', function(){

                alert(($(this).text()));
                $(".cover").fadeIn('slow');
                $(".popup").fadeIn('slow');

            });
            $(".popup").on('click', function () {
                if($(event.target).is("#close")){
                    $(".cover").fadeOut('slow');
                    $(".popup").fadeOut('slow');
                }
            });
            $(".cover").on('click', function () {
                $(".cover").fadeOut('slow');
                $(".popup").fadeOut('slow');
            });
            });
    });

    });

})(jQuery);


