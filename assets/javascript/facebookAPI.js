// https://graph.facebook.com/529628444?fields=feed&access_token=YOUR_TOKEN


//  var queryURL = "https://graph.facebook.com/v2.11/10207157941490688?fields=feed&access_token=258507278047521|zcxXsMKuAnK4UYnpRSjiPy5YaHo";
 
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//     });
// https://graph.facebook.com/oauth/access_token?
// client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&
// grant_type=client_credentials
    // var fbul = "https://graph.facebook.com/oauth/access_token?grant_type=client_credentials&client_id=258507278047521&client_secret=9d6fbf0079bd00dda2a3af652263c770";
    // var fburl = "https://graph.facebook.com/201317759900688?fields=feed&";
    // console.log("sara");
    // $.get(fbul, function(auth_token){
    //     $.ajax({
    //         dataType: "jsonp",
    //         url: fburl+auth_token,
    //         success: function(res){
    //             console.log(res);

    //         }
    //     });
    // });
    // // var queryURL="https://graph.facebook.com/Sara Alinazari/posts?fields=full_picture,picture,link,message,created_time&limit=5&access_token=258507278047521|zcxXsMKuAnK4UYnpRSjiPy5YaHo";
    $(document).ready(function(){
    var queryURL="https://graph.facebook.com/me/posts?fields=picture,full_picture,link,created_time&access_token=258507278047521|zcxXsMKuAnK4UYnpRSjiPy5YaHo&limit=3";
    // feed?access_token=EAACEdEose0cBAHoKFE31EgXHevqiq428CatboBHxT6TTEfZBPuYb1Y9aOSsEcIrq7NVe2R7CebXkL0P8icRw3ZB22apvljSBZB07tGvX5wAEKasgZCDIohXEPLod9ZA3x8IWIt6ibdczaiTUYqlzQdCelrPo94b4dUENTVZAgYawUhoJDRBXBmlRymehtNpfVP98sYqJZCSfwZDZD";
   
   
    //var queryURL="https://graph.facebook.com/v2.11/10207157941490688/photos";
    $.ajax({
              url: queryURL,
              method: "GET"
            }).then(function(response) {
              console.log("response"+response);
            });

            // $.get(fbul, function(auth_token){
            //         $.ajax({
            //             dataType: "jsonp",
            //             url: queryURL,
            //             success: function(res){
            //                 console.log(res);
            
            //             }
            //         });
            //     });
            });