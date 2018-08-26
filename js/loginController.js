
$(document).ready( function(e){

    var ruleNames=[];

   
    $('span[data-rule]').each(function(element) {
        var ruleName = $( this ).attr('data-rule');
        if(ruleNames.indexOf(ruleNames)<0) {
            ruleNames.push(ruleName);
        }
    });

    var validate = function(){
        var messages = $('.validation-messages span');
        messages.each(function(message){
            $( this ).addClass( "hide" );
        });
        $('#change-email-form')[0].checkValidity();
    };


    var validationFail = function(e){
        var element, validity;
        element = e.currentTarget;
        validity = element.validity;

        if(!validity.valid){
            ruleNames.forEach(function(ruleName){
                checkRule(validity, ruleName, element);
            });
            e.preventDefault();
        }
    };

    var checkRule = function(state, ruleName, element){// this unhides the text to say the issue
        if(state[ruleName]){
            var el = $(element);
            var rules = $(el).next().children(' [data-rule="' + ruleName + '"]');
            rules.each(function(rule){
                $(this).removeClass('hide');

            });
        }
    };

    $('input:not(button)').each(function(input) {
        $(this)[0].oninvalid = validationFail;
        $(this)[0].onblur = validate;
    });

    $('#login-button').on('click', validate);
});