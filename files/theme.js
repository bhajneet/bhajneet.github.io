// can change to "light", "dark", "classic", etc
var customTheme = "dark";
var customZoom = 1.0;

var theme = params.has("theme") ? params.get("theme") : customTheme;
var zoom = params.has("zoom") ? parseFloat(params.get("zoom")) : customZoom;

// hexadecimal color code for transparency
// https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4

var themes = {
  light: {
    logo: "#282550",
    fg1: "#000000cc",
    fg2: "#000000cc",
    bg1: "#f5f2eaeb",
    bg2: "#dededeeb",
    accent1: "#d6caad",
    accent2: "#979799",
  },
  dark: {
    logo: "#e3e3eb",
    fg1: "#ffffff",
    fg2: "#000000",
    bg1: "#242424eb",
    bg2: "#ddddddeb",
    accent1: "#ffd22b",
    accent2: "#ffffff",
  },
  cinematic: {
    logo: "#dedede",
    fg1: "#eeeeee",
    fg2: "#bebebe",
    bg1: "#000000",
    bg2: "#2e2e2e",
    accent1: "#ffd22b",
    accent2: "#aeaeae",
  },
  classic: {
    logo: "#e3e3eb",
    fg1: "#ffffff",
    fg2: "#000000",
    bg1: "#282550eb",
    bg2: "#ffd22beb",
    accent1: "#ffd22b",
    accent2: "#ffffff",
  },
};

var root = document.querySelector(":root");

root.style.setProperty("--zoom", zoom.toString());
root.style.setProperty("--logo-color", themes[theme].logo);
root.style.setProperty("--primary", themes[theme].fg1);
root.style.setProperty("--secondary", themes[theme].fg2);
root.style.setProperty("--primary-banner-color", themes[theme].bg1);
root.style.setProperty("--secondary-banner-color", themes[theme].bg2);
root.style.setProperty("--primary-accent-color", themes[theme].accent1);
root.style.setProperty("--secondary-accent-color", themes[theme].accent2);
