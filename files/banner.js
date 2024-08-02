var customBannerItems = [
  "2024 _____ Annual Akhand Keertan Smaagam at _____ Gurdwara",
  "WhatsApp Contact at +5 55 55 55 55 55",
];

var bannerItems = params.has("banner")
  ? params.getAll("banner")
  : customBannerItems;
