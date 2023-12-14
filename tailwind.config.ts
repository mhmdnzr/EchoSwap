import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/views/**/*.{js,ts,jsx,tsx,mdx}',
        './src/controllers/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            boxShadow: {
                '3xl': '5px 5px 0px 0px #122C62',
            }
        },
        borderWidth: {
            DEFAULT: '1px',
            '0.5': '0.5px',
        }
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#1E69FF",
                    "secondary": "#122C62",
                    "accent": "#7E7E7E",
                    "neutral": "#0C0E11",
                    "base-100": "#0C0E11",
                    "base-200": "#222",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#ff9d00",
                    "error": "#f87272",
                },
            },
        ],
    },
}
export default config
