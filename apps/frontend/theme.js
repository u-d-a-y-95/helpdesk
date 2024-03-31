const theme = {
  color: {
    primary: "#204983",
  },
  font: {
    size: 14,
    weight: 500,
    color: "red",
  },
};

export const getTailwindCss = () => {
  return {
    color: theme.color,
    textColor: theme.font.color,
    fontSize: theme.font.size,
    fontWeight: theme.font.weight,
  };
};
