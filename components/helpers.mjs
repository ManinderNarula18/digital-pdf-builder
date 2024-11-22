export default {
  def: function (key, val) {
    if (key) {
      return key;
    } else {
      return val;
    }
  },
  youtube_parser: function (url) {
    // Ensure the url is a string and is not empty or undefined
    if (typeof url !== 'string' || !url) {
      return false; // Return false if the url is invalid
    }

    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);

    // Check if we have a valid match and the match is of the expected length (11 characters for the video ID)
    return match && match[7] && match[7].length === 11 ? match[7] : false;
  },
};
