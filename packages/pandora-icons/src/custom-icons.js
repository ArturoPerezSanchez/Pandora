/**
 * FontAwesomeCustom, FAC, será el prefijo genérico para los iconos personalizado.
 */
const prefix = 'fac';

/**
 * Se van creando los iconos pertinentes siguiendo esta estructura:
 *   1. Se crea un objeto fa<<Icono>> con los parámetros que aparecen abajo.
 *   2. Para sacar la información del svg la página https://vecta.io/nano simplifica el SVG.
 *   3. Se añade dentro de _iconsCache y se hace un export por cada icono.
 */
const faHeart = {
  prefix: 'fac',
  iconName: 'heart',
  icon: [
    250, // width     [Parámetro de svg]
    250, // height    [Parámetro de svg]
    [], // ligatures [Opcional]
    '', // unicode   [Opcional]
    // svg path data    [Parámetro 'd' del path]
    'M213.1,6.7c-32.4-14.4-73.7,0-88.1,30.6C110.6,4.9,67.5-9.5,36.9,6.7C2.8,22.9-13.4,62.4,13.5,110.9C33.3,145.1,67.5,170.3,125,217c59.3-46.7,93.5-71.9,111.5-106.1C263.4,64.2,247.2,22.9,213.1,6.7z',
  ],
};

const faNike = {
  prefix: 'fac',
  iconName: 'nike',
  icon: [
    180, // width     [Parámetro de svg]
    180, // height    [Parámetro de svg]
    [], // ligatures [Opcional]
    '', // unicode   [Opcional]
    // svg path data    [Parámetro 'd' del path]
    'M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z',
  ],
};

const faEA = {
  prefix: 'fac',
  iconName: 'ea',
  icon: [
    25, // width     [Parámetro de svg]
    25, // height    [Parámetro de svg]
    [], // ligatures [Opcional]
    '', // unicode   [Opcional]
    // svg path data    [Parámetro 'd' del path]
    'M16.635 6.162l-5.928 9.377H4.24l1.508-2.3h4.024l1.474-2.335H2.264L.8 13.24h2.156L0 17.84h12.072l4.563-7.26 1.652 2.66h-1.4l-1.473 2.3h4.347l1.473 2.3H24zm-11.46.107L3.7 8.604l9.52-.035 1.474-2.3z',
  ],
};

const faGit = {
  prefix: 'fac',
  iconName: 'git',
  icon: [
    25, // width     [Parámetro de svg]
    25, // height    [Parámetro de svg]
    [], // ligatures [Opcional]
    '', // unicode   [Opcional]
    // svg path data    [Parámetro 'd' del path]
    'M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0l-2.17 2.175 2.76 2.76c.645-.215 1.38-.07 1.89.44a1.84 1.84 0 0 1 .438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435a1.84 1.84 0 0 1 0 2.604c-.72.72-1.88.72-2.6 0-.54-.54-.674-1.337-.404-1.996l-2.49-2.476v6.525a1.84 1.84 0 0 1 .488.348 1.85 1.85 0 0 1 0 2.6c-.72.72-1.89.72-2.61 0s-.72-1.88 0-2.598c.182-.18.387-.316.605-.406v-6.59c-.217-.09-.424-.222-.6-.4-.545-.545-.676-1.342-.396-2.01L7.636 3.7.45 10.88c-.6.605-.6 1.584 0 2.19l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187',
  ],
};

const faAngular = {
  prefix: 'fac',
  iconName: 'angular',
  icon: [
    25, // width     [Parámetro de svg]
    25, // height    [Parámetro de svg]
    [], // ligatures [Opcional]
    '', // unicode   [Opcional]
    // svg path data    [Parámetro 'd' del path]
    'M9.93 12.645h4.134L11.996 7.74m0-7.73l-11.3 3.98 1.725 14.76 9.585 5.243 9.588-5.238L23.308 4 11.996.01zm7.058 18.297h-2.636l-1.42-3.5H8.995l-1.42 3.5H4.937l7.06-15.648 7.057 15.648z    ',
  ],
};

const _iconsCache = {
  faHeart,
  faGit,
  faNike,
  faEA,
  faAngular,
};

export { _iconsCache as fac, prefix, faHeart, faNike, faGit, faEA, faAngular };
