interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

// Green - Blue

export const primary: PaletteColor = {
  main: "#4fc3f7",
  dark: "#3788ac",
  light: "#72cff8",
  contrastText: "#000",
};

export const secondary: PaletteColor = {
  main: "#4db6ac",
  dark: "#357f78",
  light: "#70c4bc",
  contrastText: "#FFF",
};

export const success: PaletteColor = {
  main: "#2e7d32",
};

export const error: PaletteColor = {
  main: "#c62828",
};

export const warning: PaletteColor = {
  main: "#f9a825",
};
