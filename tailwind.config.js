/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "dist/*.{html,js,php}"
    ],

    relative: true,
    transform: (" (content) => content.replace(/taos:/g,'')"),
    files: ['dist/*.{php,html,js}'],

    safelist: [
        '!duration-[0ms]',
        '!delay-[0ms]',
        'html.js :where([class*="taos:"]:not(.taos-init))'
    ],

    theme: {
        screens: {
            'sm': { 'min': '640px', 'max': '767' },
            'md': { 'min': '768px', 'max': '1023' },
            'lg': { 'min': '1024px', 'max': '1279' },
            'xl': { 'min': '1280px', 'max': '1535' },
            '2xl': { 'min': '1536px' },
            'xs': { 'min': '320px', 'max': '567' }
        },
        font: {
            "avenir-bold": ["avenir-bold", "bold"],
            "avenir-regular": ["avenir-regular", "normal"],

        },
        extend: {
            overflow: {
                hidden: 'hidden',
            },
        },
    },
    plugins: [
        require('flowbite/plugin'),
        require('taos/plugin')

    ],
}