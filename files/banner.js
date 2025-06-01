// Fill in custom banner items here between double quotes
// The usual banner items are automatically added
// E.g. "Visit www.AKJ.org for recordings, literature, and more"

var customBannerItems = ["", "", ""];

var customIsBanner = true;

// Do not touch anything below this line unless you know what you're doing

var isBanner =
  params.has("minimal") && params.get("minimal") === "true"
    ? false
    : customIsBanner;

var bannerItems = params.has("banner")
  ? params.getAll("banner")
  : customBannerItems;
