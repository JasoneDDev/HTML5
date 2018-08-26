$(document).ready( function(e){
    
    $(function() {
    if(localStorage.getItem("itemDetail")) {
    var detailsObj = (localStorage.getItem("itemDetail")).split(',');
    DisplayDetail(detailsObj);
     localStorage.removeItem("itemDetail");
    }else{
        console.log('no data');
    }

});

function DisplayDetail(detailsObj){
    var desc='';
    if(detailsObj.length > 2){
        for(var i=2; i<detailsObj.length; i++){
            desc+=detailsObj[i] + ', ';
        };
    }
    console.log(desc);
    $('main.container').append( ''+
    '<div>'+
                '<div class="col-md-12">'+
                    '<div class="row">'+
                        '<h3 class="h2">'+ detailsObj[0] +'</h3>'+
                    '</div>'+
                    '<div class="row">'+
                        '<img src="' +detailsObj[1] + '"  alt="img-fluid. max-width" class="detail"/>'+
                    '</div>'+
                    '<div class="row"> '+
                            '<p>'+ desc +'</p>'+
                        '</div>'+
                    
                '</div>'+
    '</div>' );
};

$('#header').load('header.html');
});