export type Skill = {
    name: string
    icon: string
    url: string
}

export type SkillGroup = {
    name: string
    skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
    {
        name: 'Frontend',
        skills: [
            {name: 'TypeScript',  icon: 'skill-icons:typescript',        url: 'https://www.typescriptlang.org/'},
            {name: 'Vue.js',      icon: 'skill-icons:vuejs-light',       url: 'https://vuejs.org/'},
            {name: 'Nuxt',        icon: 'skill-icons:nuxtjs-light',      url: 'https://nuxt.com/'},
            {name: 'Vite',        icon: 'skill-icons:vite-light',        url: 'https://vitejs.dev/'},
            {name: 'TailwindCSS', icon: 'skill-icons:tailwindcss-light', url: 'https://tailwindcss.com/'},
            {name: 'Pinia',       icon: 'skill-icons:pinia-light',       url: 'https://pinia.vuejs.org/'},
        ],
    },
    {
        name: 'Backend',
        skills: [
            {name: 'PHP',     icon: 'skill-icons:php-light',     url: 'https://www.php.net/'},
            {name: 'Laravel', icon: 'skill-icons:laravel-light', url: 'https://laravel.com/'},
            {name: 'Ktor',    icon: 'skill-icons:ktor-light',    url: 'https://ktor.io/'},
            {name: 'Rust',    icon: 'skill-icons:rust',          url: 'https://www.rust-lang.org/'},
        ],
    },
    {
        name: 'Mobile',
        skills: [
            {name: 'Kotlin Multiplatform', icon: 'skill-icons:kotlin-light', url: 'https://kotlinlang.org/docs/multiplatform.html'},
        ],
    },
    {
        name: 'Datos & Cloud',
        skills: [
            {name: 'Supabase',   icon: 'skill-icons:supabase-light',   url: 'https://supabase.com/'},
            {name: 'PostgreSQL', icon: 'skill-icons:postgresql-light', url: 'https://www.postgresql.org/'},
            {name: 'Cloudflare', icon: 'skill-icons:cloudflare-light', url: 'https://cloudflare.com/'},
        ],
    },
    {
        name: 'DevOps',
        skills: [
            {name: 'Docker', icon: 'skill-icons:docker',       url: 'https://www.docker.com/'},
            {name: 'Github', icon: 'skill-icons:github-light', url: 'https://github.com/Glass109'},
        ],
    },
]

export const learning: Skill[] = [
    {name: 'Astro',            icon: 'skill-icons:astro',               url: 'https://astro.build/'},
    {name: 'Svelte',           icon: 'skill-icons:svelte',              url: 'https://svelte.dev/'},
    {name: 'Bun',              icon: 'skill-icons:bun-light',           url: 'https://bun.sh/'},
    {name: 'Spring',           icon: 'skill-icons:spring-light',        url: 'https://spring.io/'},
    {name: 'Python',           icon: 'skill-icons:python-light',        url: 'https://www.python.org/'},
    {name: 'OpenCV',           icon: 'skill-icons:opencv-light',        url: 'https://opencv.org/'},
    {name: 'Java',             icon: 'skill-icons:java-light',          url: 'https://www.java.com/'},
    {name: 'AWS',              icon: 'skill-icons:aws-light',           url: 'https://aws.amazon.com/'},
    {name: 'Swift',            icon: 'skill-icons:swift',               url: 'https://developer.apple.com/swift/'},
    {name: 'Flutter',          icon: 'skill-icons:flutter-light',       url: 'https://flutter.dev/'},
    {name: 'Arduino',          icon: 'skill-icons:arduino',             url: 'https://www.arduino.cc/'},
    {name: 'Github Actions',   icon: 'skill-icons:githubactions-light', url: 'https://github.com/features/actions'},
    {name: 'Kafka',            icon: 'skill-icons:kafka',               url: 'https://kafka.apache.org/'},
    {name: 'Redis',            icon: 'skill-icons:redis-light',         url: 'https://redis.io/'},
]
