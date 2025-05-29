/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pokeYellow: '#ECA539',
                pokeRed: '#C00E20',
                pokeBrightRed: '#F22539',
                pokeGray: {
                    400: '#353535',
                    300: '#5E5E5E',
                    200: '#BFBFBF',
                    100: '#E8E8E8',
                },
                pokeWhite: {
                    200: '#F5F5F5',
                    100: '#F9F9F9',
                },
                white: "#FFF",
                black: "#000",
            },
            animation: {
                'slow-spin': 'spin 3s linear infinite',
            },
            keyframes: {
                spin: {
                    to: { transform: 'rotate(360deg)' },
                },
            },
        },
    },
    plugins: [],
};
