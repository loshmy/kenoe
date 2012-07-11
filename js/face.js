
function logToFb() {
    window.fbAsyncInit = function () {
        FB.init({
            appId: '102088773270632',
            status: true,
            cookie: true,
            xfbml: true,
            oauth: true
        });
        FB.login(function (response) {
            if (response.authResponse) {
                FB.api('/me', function (response) {
                    var fb_data = {
                        username: response.username,
                        id: response.id,
                        email: response.email,
                        first_name: response.first_name,
                        last_name: response.last_name,
                        gender: response.gender,
                        languages: response.languages,
                        location: response.location,
                        publish_actions: response.publish_actions
                    };

                    korisnik.ime = fb_data.first_name;
                    korisnik.prezime = fb_data.last_name;
                    korisnik.mail = fb_data.email;
                    korisnik.publish_actions = fb_data.publish_actions;
                    console.log(korisnik);
                    if (korisnik.ime == "" || korisnik.prezime == "" || korisnik.mail == "") {
                        window.location.reload();
                    }
                    else {

                        init_all();

                    }

                    //                                    var request = $.ajax({
                    //                                        url: '<?php echo base_url(); ?>fblogin/check_user',
                    //                                        type: 'POST',
                    //                                        data: fb_data,
                    //                                        cache: false,
                    //                                       
                    //                                        error: function(msg) { console.log("error"); }
                    //                                    });                                 
                });
            } else {
                //console.log('User cancelled login or did not fully authorize.');

                // window.location.replace('<?php echo base_url('fblogin'); ?>');
            }
        }, { scope: 'email, user_location, publish_actions' });
    };

    (function (d) {
        var js, id = 'facebook-jssdk'; if (d.getElementById(id)) { return; }
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        d.getElementsByTagName('head')[0].appendChild(js);
    } (document));
}



$(function () {

    // On click of the post to wall link, display the publish to stram dialog
    $('#InviteCallToAction').click(function (e) {

        e.preventDefault();

        fbHelper.showPublishToStreamDialog({
            onSuccessCallBack: function () {
                alert('Hvala vam. Vaša poruka je uspešno okačena na vaš facebook zid.');
            }
        });

    });


    // Show invite dialog
    $('#PostOnWallCallToAction').click(function (e) {

        e.preventDefault();

        $('#InviteContainer').fadeIn('fast');

    });

});
function iscrtajget() {
    FB.api(
            '/me/keno-greenteam:get',
            'post',
            { new_high_score: 'http://apps.facebook.com/keno-greenteam' },
            function (response) {
                if (!response || response.error) {
                    alert('Error occured');
                } else {
                    alert('Action was successful! Action ID: ' + response['id']);
                }
            });
}

function postToFeed() {
    var obj = {
        method: 'feed',
        link: 'http://apps.facebook.com/keno-greenteam',
        picture: 'http://edit.png',
        name: korisnik.ime + ' je osvojio ' + credit + ' poena u igri Keno.',
        caption: 'Osvojite i vi!',
        description: 'Besplatna igra na sreću.'
    };

    function callback(response) {
        //alert('Post was successful! Post ID:' + response['id']);
    }

    FB.ui(obj, callback);
}

