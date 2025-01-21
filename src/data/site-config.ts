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
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Notes',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
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
        title: 'A Software Product Designer, currently open for new challenges. Previously Grafana, Jungle AI and Aptoide.',
        text: '',
        image: {
            src: '',
            alt: ''
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },

    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
