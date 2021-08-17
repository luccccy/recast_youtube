import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    data: {
      q: query,
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function(data) {
      console.log(data);
      callback(data);
    },
    error: function(response) {
      console.log('Request Failed');
    }
  });
};

export default searchYouTube;

// data
// Type: PlainObject or String or Array
// Data to be sent to the server. If the HTTP method is one that cannot have an entity body, such as GET, the data is appended to the URL.

// dataType (default: Intelligent Guess (xml, json, script, or html))
// Type: String
// The type of data that you're expecting back from the server. If none is specified, jQuery will try to infer it based on the MIME type of the response (an XML MIME type will yield XML, in 1.4 JSON will yield a JavaScript object, in 1.4 script will execute the script, and anything else will be returned as a string). The available types (and the result passed as the first argument to your success callback) are:

// success
// Type: Function( Anything data, String textStatus, jqXHR jqXHR )
// A function to be called if the request succeeds. The function gets passed three arguments: The data returned from the server, formatted according to the dataType parameter or the dataFilter callback function, if specified; a string describing the status; and the jqXHR (in jQuery 1.4.x, XMLHttpRequest) object. As of jQuery 1.5, the success setting can accept an array of functions. Each function will be called in turn. This is an Ajax Event.

// readAll: function(successCB, errorCB = null) {
//   $.ajax({
//     url: Parse.server,
//     type: 'GET',
//     data: { order: '-createdAt' },
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function(error) {
//       console.error('chatterbox: Failed to fetch messages', error);
//     }
//   });
// }
