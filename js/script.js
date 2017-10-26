/**
 * Created by pawelolejarz on 14.10.2017.
 */
//mapowanie skryptu JQuery
(function($) {
    $('#search').keyup(function(){
        // pobiera zawartość z inputa i przypisuje do zmiennej searchField
        var searchField = $('#search').val();
        if(searchField === '')  {
            // jeśli nic nie zostało wprowadzone w input to nic się nie wyświetla
            $('#results').html('');
            // wychodzi z funkcji
            return;
        }
        var regex = new RegExp(searchField, "i");
        var output = '<div class="container">';
        // tworzymy pustą tablicę na klucze
        var keys = [];
        $.getJSON('data.json', function(data) {
            $.each(data, function(key, val){ //
                if ((val.name.search(regex) != -1) || (val.vicinity.search(regex) != -1)) {
                    output += '<div id="box_' + key + '" class="col-xs-12 col-sm-6 col-md-4 col-lg-4">';
                    output += '<div class="panel panel-info" style="cursor: pointer;">';
                    output += '<div class="panel-heading">' + val.name + '</div>';
                    output += '<div class="panel-body"><img src="'+val.icon+'" class="thumbnail" style="width:50px" alt="Ikona">';
                    output += '<div class="panel-footer">' + val.vicinity + '</div>';
                    output += '</div>';
                    output += '</div>';
                    output += '</div>';
                    // dodaje klucz do tablicy kluczy
                    keys.push(key);
                }
            });
            output += '</div>';
            $('#results').html(output);

            // po wygenerowaniu bloczków przechodzimy po wszystkich kluczach
            $.each(keys,function(i,k){
                $("#box_"+k).click(function(){
                    // zapisuje w localStorage (pamięć przeglądarki) klucz - pod nazwą key
                    localStorage.setItem("key",k);
                    location.href = location.href + "/details";
                });
            });


        });

    });

})(jQuery);


