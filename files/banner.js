// Add any custom banner items in double quotes.
//
// Default banner items are added automatically.
//
// For example, "Visit www.AKJ.org for recordings, literature, and more"
// will show by default and does not need to be added here.

var customBannerItems = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

var showBanner = true;

//
//
// Do not edit anything below this line, unless you know what you're doing
//
//

var isBanner =
  params.has("minimal") && params.get("minimal") === "true"
    ? false
    : showBanner;

var bannerItems = params.has("banner")
  ? params.getAll("banner")
  : customBannerItems;
