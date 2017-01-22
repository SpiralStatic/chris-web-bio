$(document).foundation();

function trigger() {
    $('#sparta').waypoint(function() {
        $('#sparta').find('.cd-timeline-img').addClass('animated bounceInLeft');
        $('#sparta').find('.cd-timeline-img').removeClass('is-hidden');
        $('#sparta').find('.cd-timeline-content').addClass('animated bounceInRight');
        $('#sparta').find('.cd-timeline-content').removeClass('is-hidden');
    }, { offset: '30%' });

    $('#aber').waypoint(function() {
        $('#aber').find('.cd-timeline-img').addClass('animated bounceInRight');
        $('#aber').find('.cd-timeline-img').removeClass('is-hidden');
        $('#aber').find('.cd-timeline-content').addClass('animated bounceInLeft');
        $('#aber').find('.cd-timeline-content').removeClass('is-hidden');
    }, { offset: '30%'});

    $('#prince').waypoint(function() {
        $('#prince').find('.cd-timeline-img').addClass('animated bounceInLeft');
        $('#prince').find('.cd-timeline-img').removeClass('is-hidden');
        $('#prince').find('.cd-timeline-content').addClass('animated bounceInRight');
        $('#prince').find('.cd-timeline-content').removeClass('is-hidden');
    }, { offset: '30%'});

    $('#lincoln').waypoint(function() {
            $('#lincoln').find('.cd-timeline-img').addClass('animated bounceInRight');
            $('#lincoln').find('.cd-timeline-img').removeClass('is-hidden');
            $('#lincoln').find('.cd-timeline-content').addClass('animated bounceInLeft');
            $('#lincoln').find('.cd-timeline-content').removeClass('is-hidden');
    }, { offset: '30%'});

    $('#bedale').waypoint(function() {
            $('#bedale').find('.cd-timeline-img').addClass('animated bounceInLeft');
            $('#bedale').find('.cd-timeline-img').removeClass('is-hidden');
            $('#bedale').find('.cd-timeline-content').addClass('animated bounceInRight');
            $('#bedale').find('.cd-timeline-content').removeClass('is-hidden');
    }, { offset: '30%'});
}

$(document).ready(function() {
    $('main').scroll(trigger);
});
