export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6750A4",
        onPrimary: "#FFFFFF",
        surface: "#FFFBFE",
        onSurface: "#1C1B1F",
      },
      scrollPadding: {
        'top-20': '80px',
      },
      borderRadius: {
        material: "24px",
      },
      boxShadow: {
        material: "0px 3px 6px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
