const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Jonathan Korn',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Jonathan Korn',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Jonathan Korn',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Jonathan Korn',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Jonathan Korn',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
