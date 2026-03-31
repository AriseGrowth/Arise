import localFont from 'next/font/local'

// Use system font stack with CSS variable for consistent rendering
// When deploying, replace with next/font/google imports for Inter + Noto Serif Hebrew
export const inter = {
  variable: '--font-inter',
  className: '',
}

export const notoSerifHebrew = {
  variable: '--font-noto-serif-hebrew',
  className: '',
}
