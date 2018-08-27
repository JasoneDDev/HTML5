$(document).ready( function(e){
var paintingData='{"p1":{"name":"Woodland Encounter", "imgPath":"img/paintings/painting4.jpg", "desc":"Woodland Encounter - Grey Wolf 22x15 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p2":{"name":"Autumn Dip", "imgPath":"img/paintings/painting.jpg", "desc":"Autumn Dip - River Otters 22x15 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p3":{"name":"Puppy Commission", "imgPath":"img/paintings/painting1.jpg", "desc":"PPuppy Commission - Private collection 8x10 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p4":{"name":"Among The Birch", "imgPath":"img/paintings/painting2.jpg", "desc":"Among The Birch - Great Grey Owl 22x15 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p5":{"name":"On The Prowl", "imgPath":"img/paintings/painting3.jpg", "desc":"On The Prowl - Canadian Lynx 22x15 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p6":{"name":"Sandhill In The Mist", "imgPath":"img/paintings/painting12.jpg", "desc":"Sandhill In The Mist - Sandhill Crane 9x4 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p7":{"name":"The Sentry", "imgPath":"img/paintings/painting5.jpg", "desc":"The Sentry - Bison 22x15 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p8":{"name":"A New Dawn", "imgPath":"img/paintings/painting6.jpg", "desc":"A New Dawn - Whooping Crane 22x15 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p9":{"name":"Dore Lake Sunset", "imgPath":"img/paintings/painting7.jpg", "desc":"Dore Lake Sunset - Dore Lake 11x15 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p10":{"name":"East Coast Eagle", "imgPath":"img/paintings/painting8.jpg", "desc":"East Coast Eagle - Bald Eagle 22x15 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p11":{"name":"Grey Owls Cabin", "imgPath":"img/paintings/painting9.jpg", "desc":"Grey Owls Cabin - Prince Albert NP 22x15 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p12":{"name":"Blueberry Fields", "imgPath":"img/paintings/painting10.jpg", "desc":"Blueberry Fields - Black Bear 22x15 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p13":{"name":"Regina Bound", "imgPath":"img/paintings/painting11.jpg", "desc":"Regina Bound - Regina Area 9x11 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p14":{"name":"The Big Aventurer", "imgPath":"img/paintings/painting13.jpg", "desc":"The Big Adventurer - Ivy(Daughter) 11x15 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "},'+
'"p15":{"name":"Peace Valley", "imgPath":"img/paintings/painting14.jpg", "desc":"Peace Valley - Regina Area 9x11 watercolor painting Jason E. Doucette Fine Art Saskatoon, Saskachewan "}'+
'}';

var coralData = '{"zoa":{"name":"Sunny D","imgPath":"img/coral/sunnyd.png", "desc":"Sunny d is a great easy to care for zoa. Growth rate is great and they are a nice vibrant orange color."},'+
'"zoa2":{"name":"Purple Monster Zoa" , "imgPath":"img/coral/purplem.png", "desc":"Striking color both in daylight and blue leds, the Purple Monster zoa is an excellent addition to any reef tank."},'+
'"zoa3":{"name":"Petroglyph Zoa" , "imgPath":"img/coral/petroglyph.jpg", "desc":"Large polyped zoa with a subtle but striking look and pattern. Displays very brightly in both regular and blue leds."},'+
'"zoa4":{"name":"CatsPaw SPS" , "imgPath":"img/coral/catspaw.jpg", "desc":"Striking color both in daylight and blue leds, the Purple Monster zoa is an excellent addition to any reef tank."},'+
'"zoa5":{"name":"Anemone Crab" , "imgPath":"img/coral/crust1.jpg", "desc":"Large polyped zoa with a subtle but striking look and pattern. Displays very brightly in both regular and blue leds."},'+
'"zoa6":{"name":"Jawfish" , "imgPath":"img/coral/fish1.jpg", "desc":"Striking color both in daylight and blue leds, the Purple Monster zoa is an excellent addition to any reef tank."},'+
'"zoa7":{"name":"Bonsai" , "imgPath":"img/coral/bonsai.jpg", "desc":"Large polyped zoa with a subtle but striking look and pattern. Displays very brightly in both regular and blue leds."},'+
'"zoa8":{"name":"Pink Lemonade" , "imgPath":"img/coral/pinklemon.jpg", "desc":"Striking color both in daylight and blue leds, the Purple Monster zoa is an excellent addition to any reef tank."},'+
'"zoa9":{"name":"forest fire" , "imgPath":"img/coral/forestfire.jpg", "desc":"Large polyped zoa with a subtle but striking look and pattern. Displays very brightly in both regular and blue leds."},'+
'"coral10":{"name":"Milli Acro" , "imgPath":"img/coral/milli.jpg", "desc":"Striking color both in daylight and blue leds, the Purple Monster zoa is an excellent addition to any reef tank."},'+
'"coral11":{"name":"Pink birdsnest" , "imgPath":"img/coral/birdsnest1.jpg", "desc":"Large polyped zoa with a subtle but striking look and pattern. Displays very brightly in both regular and blue leds."},'+
'"coral12":{"name":"Birds Of Paradise" , "imgPath":"img/coral/birdsnest2.jpg", "desc":"Striking color both in daylight and blue leds, the Purple Monster zoa is an excellent addition to any reef tank."},'+
'"coral13":{"name":"Walt Disney" , "imgPath":"img/coral/disney.jpg", "desc":"Large polyped zoa with a subtle but striking look and pattern. Displays very brightly in both regular and blue leds."},'+
'"coral14":{"name":"favia" , "imgPath":"img/coral/favia.jpg", "desc":"Striking color both in daylight and blue leds, the Purple Monster zoa is an excellent addition to any reef tank."},'+
'"coral15":{"name":"Wrasse" , "imgPath":"img/coral/fish2.jpg", "desc":"Large polyped zoa with a subtle but striking look and pattern. Displays very brightly in both regular and blue leds."}'+

'}';

var cDataParsed = $.parseJSON(coralData);
var pDataParsed = $.parseJSON(paintingData);

function BuildDataBlock(data){
    //return;

    var itemCount=0;
    
    for (var key in data) {
        itemCount++;
        var dKey = data[key];
       
        $('.loadingBin .h3').after( ''+
        '<a href="#" class="itemHolderMain" data-detailsName=" ' + dKey['name'] +'" data-detailsImg="' +dKey['imgPath'] + '" data-detailsDesc="'+ dKey['desc'] +'">'+
        '<div class="itemHolder">'+
                    '<div class="col-md-12">'+
                        '<div class="row">'+
                            '<h3 class="h2">'+ dKey['name'] +'</h3>'+
                        '</div>'+
                        '<div class="row">'+
                            '<img src="' +dKey['imgPath'] + '"  alt="Responsive image"/>'+
                        '</div>'+
                        '<div class="row"> '+
                                '<p>'+ dKey['desc'] +'</p>'+
                            '</div>'+
                        
                    '</div>'+
        '</div> ' +
        '</a>');
        
    };

$('#dynamicTitle').html(itemCount + ' Dynamically Loaded Elements From JSON Data.');


$(".loadingBin").on('click', 'a', function(e) {
   // alert('clicked item ');
   e.preventDefault();
    var values = [$(this).attr('data-detailsName'), $(this).attr('data-detailsImg'), $(this).attr('data-detailsDesc')];
    //console.log(values);
    localStorage.setItem("itemDetail",values);
    window.open("detailPage.html", "_self");

});

//console.log($('a'));
};

$("#dataPicker").on('change', function(e) {
    
    $('.itemHolderMain').remove();

    console.log('i feel triggered');
    var val= $(this).val();
    if(val == 'Corals'){
        BuildDataBlock(cDataParsed);
    }else if(val == 'Paintings'){
        BuildDataBlock(pDataParsed);
     }
});

});