export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: '',
    subtitle: '',
    description: 'Portfolio of Nilson Gaspar',
    image: {
        src: '',
        alt: 'Nilson Gaspar'
    },
    headerNavLinks: [
        {
            text: 'NILSON GASPAR',
            href: '/'
        },
        {
            text: 'Works',
            href: '/projects'
        },
        {
            text: 'Notes',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [], // Empty array to remove footer nav links
    socialLinks: [
        {
            text: '',
            href: ''
        },
        {
            text: '',
            href: ''
        },
        {
            text: '',
            href: ''
        }
    ],
    hero: {
        title: 'Im a product designer based in Lisbon with an academic background in Communication Design. Previously Grafana, Jungle AI and Aptoide. Learn more about me or jump straight to the work.',
        text: '',
        image: {
            src: '',
            alt: ''
        },
        actions: [] // Empty actions array to remove the button
    },

    postsPerPage: 8,
    projectsPerPage: 12
};

export default siteConfig;
