/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {                
                primary: {
                    bg: 'var(--primary-color-bg)',
                    text: 'var(--primary-color-txt)',
                },
                secondary: {
                    bg: 'var(--secondary-color-bg)',
                    text: 'var(--secondary-color-txt)',
                },
                tertiary: {
                    bg: 'var(--tertiary-color-bg)',
                },
            },
            backgroundImage: {
                'hero-custom': "url('/imgs/blocco-a/HG_homepage_desktop_2.jpg')",
            },
            height: {
                'header-custom': 'var(--header-h)',
                'header-mob-custom': 'var(--header-mob-h)',
                'el-below-header': 'var(--h-el-below-header)',
                'el-below-header-mob': 'var(--h-el-below-header-mob)'
            },
            keyframes: {
                moveDownAndFade: {
                  '0%': { transform: 'translateY(0)', opacity: '1' },
                  '100%': { transform: 'translateY(30px)', opacity: '0' },
                },
            },
            animation: {
                moveDownAndFade: 'moveDownAndFade 3s infinite',
            },
        },
    },
    plugins: [],
};
