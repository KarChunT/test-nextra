import Icon from '@mdi/react';
import { mdiSsh } from '@mdi/js';
import { TbNumber12Small, TbBrandDocker } from 'react-icons/tb';
import { FaGitAlt, FaPython } from 'react-icons/fa';
import { BiCube } from 'react-icons/bi';

export const APP_NAME: string = 'KarChunT';
export const APP_ICON: string = '/penguin-nobg.webp';
export const JOB_POSITION: string = 'Infrastructure and DevOps Engineer';
export const JOB_COMPANY: string = 'Intel';
export const GITHUB_URL: string = 'https://github.com/KarChunT/karchunt.com';
export const DOCS_REPO_BASE: string = `${GITHUB_URL}/tree/main`;
export const LINKEDIN_URL: string = 'https://www.linkedin.com/in/karchuntan';
export const CREDLY_URL: string = 'https://www.credly.com/users/kar-chun-tan';
export const CHANNELS = {
  github: {
    title: 'GitHub',
    href: GITHUB_URL,
  },
  linkedin: {
    title: 'Linkedin',
    href: LINKEDIN_URL,
  },
  newsletter: {
    title: 'Newsletter',
    href: 'https://karchunt.substack.com/',
  },
  email: {
    title: 'karchuntan.1999@gmail.com',
    href: 'mailto:karchuntan.1999@gmail.com',
  },
};

export const PERSONAL = [
  {
    quote:
      'Passion is the key to success. Passion means everything to me, as part of my passion and motivation, I love to inspire people and my ambition is to develop a new technology that can revolutionize the world.',
    name: 'Tan Kar Chun',
    designation: 'Infrastructure & DevOps Engineer',
    src: '/personal/anotherme.webp',
  },
];

export const TOP_TAGLINE = [
  { text: 'Welcome', delay: 0 },
  { text: 'to', delay: 200 },
  { text: <b>{APP_NAME}</b>, delay: 400 },
  { text: '—', delay: 600 },
  { text: 'Public', delay: 800 },
  { text: 'Engineering', delay: 1000 },
  { text: 'digital', delay: 1200 },
  { text: 'notebook', delay: 1400 },
];

export const MAIN_HEADLINE = [
  { text: 'Blending', delay: 1600 },
  { text: 'and', delay: 1750 },
  { text: 'amplifying', delay: 1900 },
  { text: 'each', delay: 2050 },
  { text: "skill's", delay: 2200 },
  { text: 'strength', delay: 2350 },
];

export const HERO_SUB_HEADLINE = [
  { text: 'Reinforces', delay: 2600 },
  { text: 'continuous', delay: 2750 },
  { text: 'growth', delay: 2900 },
  { text: 'and', delay: 3050 },
  { text: 'adaptation', delay: 3200 },
];

export const HERO_BOTTOM_TAGLINE = [
  { text: 'Curated', delay: 3500 },
  { text: 'hub', delay: 3650 },
  { text: 'for', delay: 3800 },
  { text: 'documentating', delay: 3950 },
  { text: '—', delay: 4050 },
  { text: 'my', delay: 4100 },
  { text: 'journeys', delay: 4250 },
];

export const DOCUMENTATION = {
  '12 Factor App': {
    title: '12 Factor App',
    href: '/docs/12-factor-app',
    description:
      'It is a methodology for building software-as-a-service applications with best practices.',
    icon: TbNumber12Small,
  },
  Docker: {
    title: 'Docker',
    href: '/docs/docker/what-is-docker',
    description:
      'Docker is an open platform for developing, shipping, and running applications.',
    icon: TbBrandDocker,
  },
  SSH: {
    title: 'SSH',
    href: '/docs/ssh/ssh-overview',
    description:
      'SSH stands for Secure Shell (SSH) Protocol that is mainly used to connect to a Linux server remotely.',
    icon: () => (
      <Icon
        className="rounded-md border border-[#2e2c23] p-[6px]"
        path={mdiSsh}
        size={1.5}
      />
    ),
  },
  Git: {
    title: 'Git',
    href: '/docs/git/what-is-git',
    description:
      'Git is a distributed version control system that tracks file changes.',
    icon: FaGitAlt,
  },
  'Python OOP': {
    title: 'Python OOP',
    href: '/docs/python-oop/concepts-of-oop',
    description:
      'Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure software programs.',
    icon: FaPython,
  },
  Taskfile: {
    title: 'Taskfile',
    href: '/docs/taskfile/what-is-taskfile',
    description:
      'Taskfile is a task runner / build tool that simplifies the automation of routine development tasks.',
    icon: BiCube,
  },
};

//   title: 'Kubernetes',
//   description:
//     'Kubernetes, also known as k8s, is an open source system to deploy, scalwe, and manage containerized applications.',
//   link: '/docs/kubernetes',

//   title: 'Data Structures and Algorithms',
//   description:
//     'Data structures are used to organize, store, and manipulate data in memory, while algorithms are used to solve specific problems.',
//   title: 'Design Pattern',
//   description: 'Solving typical software design problems.',
