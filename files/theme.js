// can change defaultTheme to
// "cinematic"(default black theme)
// "classic"(blue theme)
// "slateBlue"(blue+gray theme)
// "dark" (dark gray theme)
// "light"(light theme)

var defaultTheme = "slateBlue";

// can change customZoom to adjust default zoom level
// 1.0 = 100% (default zoom level)
// 1.25 = 125%

var customZoom = 1.0;

//
//
// Do not edit anything below this line, unless you know what you're doing
//
//

var theme = params.has("theme") ? params.get("theme") : defaultTheme;
var zoom = params.has("zoom") ? parseFloat(params.get("zoom")) : customZoom;

var themes = {
  classic: {
    display: "Classic (2018)",
    colors: {
      logo: "#e3e3eb",
      fg1: "#ffffff",
      fg2: "#000000",
      bg1: "#282550eb",
      bg2: "#ffd22beb",
      accent1: "#ffd22b",
      accent2: "#ffffff",
    },
  },
  dark: {
    display: "Dark (2022)",
    colors: {
      logo: "#e3e3eb",
      fg1: "#ffffff",
      fg2: "#000000",
      bg1: "#242424eb",
      bg2: "#ddddddeb",
      accent1: "#ffd22b",
      accent2: "#ffffff",
    },
  },
  light: {
    display: "Light (2024)",
    colors: {
      logo: "#282550",
      fg1: "#000000cc",
      fg2: "#000000cc",
      bg1: "#f5f2eaeb",
      bg2: "#dededeeb",
      accent1: "#d6caad",
      accent2: "#979799",
    },
  },
  cinematic: {
    display: "Cinematic (2026)",
    colors: {
      logo: "#dedede",
      fg1: "#eeeeee",
      fg2: "#d0d0d0",
      bg1: "#000000",
      bg2: "#2e2e2e",
      accent1: "#ffd22b",
      accent2: "#aeaeae",
    },
  },
  slateBlue: {
    display: "Slate Blue (2027)",
    colors: {
      logo: "#c5c7ce",
      fg1: "#dedee7",
      fg2: "#dedee7",
      bg1: "#181d35d9",
      bg2: "#41444bd9",
      accent1: "#c7ab6d",
      accent2: "#7f90b3",
    },
  },
};

var root = document.querySelector(":root");

root.style.setProperty("--zoom", zoom.toString());
root.style.setProperty("--logo-color", themes[theme].colors.logo);
root.style.setProperty("--primary", themes[theme].colors.fg1);
root.style.setProperty("--secondary", themes[theme].colors.fg2);
root.style.setProperty("--primary-banner-color", themes[theme].colors.bg1);
root.style.setProperty("--secondary-banner-color", themes[theme].colors.bg2);
root.style.setProperty("--primary-accent-color", themes[theme].colors.accent1);
root.style.setProperty(
  "--secondary-accent-color",
  themes[theme].colors.accent2,
);
