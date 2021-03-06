type Breakpoints<T> = Array<T> & {
  small: 0
  medium: '38em'
  large: '62em'
  xlarge: '68em'
}

export type ThemeType = any

export const theme: ThemeType = {
  breakpoints: ['38em', '62em', '68em', '110em'] as Breakpoints<any>,
  fonts: {
    normal: 'Nunito, -apple-system, BlinkMacSystemFont, "Helvetica Neue", helvetica, arial, sans-serif',
  },
  fontSizes: ['12px', '14px', '16px', '18px', '20px', '22px', '24px', '28px', '36px', '42px', '58px'],
  space: ['0', '8px', '16px', '24px', '32px', '40px', '48px', '54px', '62px', '70px'],
  sizes: ['0', '8px', '16px', '24px', '32px', '40px', '48px', '54px', '62px', '70px'],
  lineHeights: ['0', '8px', '16px', '24px', '32px', '40px', '48px', '54px', '62px', '70px'],
  radii: ['0', '4px', '6px', '8px', '12px'],
  colors: {
    bg: 'hsl(220, 13%, 95%)',
    borderColor: 'hsl(222, 67%, 51%)',
    primaryHoverBg: 'white',
    primaryHoverText: 'hsl(222, 67%, 51%)',
    menuBg: 'white',
    primary: 'hsl(222, 67%, 51%)',
    positive: '#00a697',
    warning: '#db7d11',
    negative: '#ff0039',
    dark: 'hsl(223, 675%, 9%)',
    black: 'hsl(0, 0%, 0%)',
    blacks: [
      'hsla(0, 0%, 0%, .9)',
      'hsla(0, 0%, 0%, .7)',
      'hsla(0, 0%, 0%, .5)',
      'hsla(0, 0%, 0%, .3)',
      'hsla(0, 0%, 0%, .1)',
    ],
    white: 'hsl(0, 0%, 100%)',
    whites: [
      'hsla(0, 0%, 100%, .9)',
      'hsla(0, 0%, 100%, .7)',
      'hsla(0, 0%, 100%, .5)',
      'hsla(0, 0%, 100%, .3)',
      'hsla(0, 0%, 100%, .1)',
    ],
    gray: 'hsl(0, 0%, 86%)',
    grays: [
      'hsl(0, 0%, 99%)',
      'hsl(0, 0%, 93%)',
      'hsl(220, 6%, 90%)',
      'hsl(0, 0%, 86%)',
      'hsl(0, 0%, 76%)',
      'hsl(0, 0%, 56%)',
      'hsl(0, 0%, 15%)',
      'hsl(208, 20%, 10%)',
      'hsl(208, 24%, 7%)',
    ],
    blue: 'hsl(220, 91%, 45%)',
    blues: [
      'hsl(220, 67%, 99%)',
      'hsl(220, 71%, 96%)',
      'hsl(222, 100%, 94%)',
      'hsl(220, 76%, 68%)',
      'hsl(220, 67%, 51%)',
      'hsl(220, 91%, 45%)',
      'hsl(220, 61%, 18%)',
      'hsl(226, 27%, 22%)',
      'hsl(223, 675%, 9%)',
    ],
    lightBlue: 'hsl(190, 100%, 39%)',
    lightBlues: [
      'hsl(190, 82%, 99%)',
      'hsl(190, 80%, 97%)',
      'hsl(196, 42%, 90%)',
      'hsl(190, 76%, 68%)',
      'hsl(190, 100%, 39%)',
      'hsl(190, 82%, 35%)',
      'hsl(190, 67%, 25%)',
      'hsl(190, 67%, 12%)',
      'hsl(190, 67%, 10%)',
    ],
    green: 'hsl(120, 100%, 33%)',
    greens: [
      'hsl(129, 60%, 99%)',
      'hsl(129, 60%, 97%)',
      'hsl(143, 34%, 88%)',
      'hsl(129, 34%, 64%)',
      'hsl(129, 93%, 33%)',
      'hsl(129, 62%, 30%)',
      'hsl(129, 60%, 20%)',
      'hsl(129, 60%, 12%)',
      'hsl(129, 60%, 10%)',
    ],
    red: 'hsl(347, 100%, 50%)',
    reds: [
      'hsl(347, 100%, 99%)',
      'hsl(347, 100%, 97%)',
      'hsl(347, 85%, 92%)',
      'hsl(347, 85%, 78%)',
      'hsl(347, 100%, 65%)',
      'hsl(347, 100%, 50%)',
      'hsl(347, 100%, 40%)',
      'hsl(347, 100%, 12%)',
      'hsl(347, 100%, 10%)',
    ],
    purple: 'hsl(297, 100%, 36%)',
    purples: [
      'hsl(297, 100%, 99%)',
      'hsl(297, 100%, 97%)',
      'hsl(293, 38%, 90%)',
      'hsl(297, 100%, 60%)',
      'hsl(297, 100%, 36%)',
      'hsl(297, 100%, 24%)',
      'hsl(297, 100%, 18%)',
      'hsl(297, 100%, 12%)',
      'hsl(297, 100%, 10%)',
    ],
    orange: 'hsl(31, 100%, 46%)',
    oranges: [
      'hsl(32, 86%, 99%)',
      'hsl(32, 86%, 97%)',
      'hsl(30, 42%, 91%)',
      'hsl(32, 86%, 78%)',
      'hsl(32, 86%, 65%)',
      'hsl(31, 100%, 46%)',
      'hsl(32, 86%, 40%)',
      'hsl(32, 86%, 12%)',
      'hsl(32, 86%, 10%)',
    ],
  },
} as const
