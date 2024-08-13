/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                azul: "#08b0ec",
                verde: "#b4d87c",
                blanco24: "#f8ffff",
                ries231: "#C48B27",
                ries232: "#0e1e2f",
                ries221: "#0178be",
                ries222: "#adc7ee",
                ries211: "#f650ff",
                ries212: "#8d5fff",
                ries201: "#00afef",
                ries202: "#ffaf8c",
                ries191: "#1aabe3",
                ries192: "#fbbc40",
            },
            fontFamily: {
                title: "Varela Round",
                body: "Montserrat",
            },
            animation: {
                "spin-slow": "spin 75s linear infinite",
            },
        },
    },
    plugins: [],
}
