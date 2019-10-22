$(document).ready(function(){
    
    $('.ajax-html').click(function(){
        let target = $(this).attr('data-target');

        $.ajax({
            //url: 
            url:'data/'+ target +'.html',
            dataType: 'html', // txt, html, xml, json
            data:{
                name: 'Zorica mijatovic'
            },
            method: 'GET',
            beforeSend: function(){
                $('#data-html-wrapper').html('<img src="https://www.thenewyorkwebsitedesigner.com/wp-content/uploads/2018/11/orange-loading.png">');
            }

        })
        .done(function(data){
            $('#data-html-wrapper').html(data);
        })
        .fail(function(jqXHR, textStatus){
            $('#data-html-wrapper').html(textStatus);
        })
        .always(function(){
            //alert('FINISH AJAX');
        });
    });

    $('#ajax-json').click(function(){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType: 'json', // txt, html, xml, json
            data:{
                name: 'Zorica mijatovic'
            },
            method: 'GET',
            beforeSend: function(){
                $('#data-json-wrapper').html('<img src="https://hackernoon.com/hn-images/0*4Gzjgh9Y7Gu8KEtZ.gif">');
            }
        }).done(function(data){
            $('#data-json-wrapper').empty();

            for(let x in data){
                $('#data-json-wrapper').append('<h2>NEWS '+ data[x].id +'</h2><h4>'+ data[x].title +'</h4><p>'+ data[x].body +'</p>');
            }
        }).fail(function(){
            $('#data-json-wrapper').html(textStatus);
        });
    });
    
    
    
    
    
});

