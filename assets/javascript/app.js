
      var channelName = "TechGuyWeb";
// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
$(document).ready(function(){
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response) {
    //     console.log(response);
    //   });

    $.get("https://www.googleapis.com/youtube/v3/channels",{
        part: "contentDetails",
        forUsername: channelName,
        key: "AIzaSyDDjAtFUlvDYNDJyzf_aok7-rHVSDKRd60"},
        function(data){
            $.each(data.items, function(i,item){
                console.log(item);
                cid = item.id;//.contentDetails.relatedPlaylists.uploads;
                getVid(cid);
            })
        }
    );
    
    function getVid(cid){
        console.log(cid);
        $.get("https://www.googleapis.com/youtube/v3/playlists",{
        part: "snippet,contentDetails",
        maxResults: 10,
        //playlistId : pid,
        channelId: cid,//"UC29ju8bIPH5as8OGnQzwJyA",
        key: "AIzaSyDDjAtFUlvDYNDJyzf_aok7-rHVSDKRd60"},
        function(data){
            $.each(data.items, function(i,item){
                console.log(item);
                videTitle = item.snippet.title;
                output="<li>"+videTitle+"</li>";
                $("#results").append(output);
            })
        }
    );
    }
});