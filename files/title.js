// Set the title here
//
// Do:
//
// Please use roman and Gurmukhi script. For example:
// "Annual Akhand Keertan Smaagam"
// "ਸਾਲਾਨਾ ਅਖੰਡ ਕੀਰਤਨ ਸਮਾਗਮ"
// "ਸ੍ਰੀ ਅਖੰਡ ਪਾਠ ਸਾਹਿਬ  (Los Angeles)"
// "Surrey ਰੈਣ ਸਬਾਈ ਕੀਰਤਨ"
//
// Please do add the location of the smagam. For example:
// "Akhand Keertan Smaagam (Dallas, TX)"
// "AKJ East London Smaagam"
// "Toronto Annual Akhand Keertan Smaagam"
//
// Please avoid:
// Avoid using "LIVE" in the title, as YouTube will automatically show this correctly
// Avoid adding "Annual" if the smagam does not occur every year
// Avoid repeating the month or year in the title, because the overlay already includes it.

var defaultTitle = "Akhand Keertan Smaagam";

//
//
// Do not edit anything below this line, unless you know what you're doing
//
//

var title = params.has("title") ? params.get("title") : defaultTitle;
