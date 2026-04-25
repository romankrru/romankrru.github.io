export type Lang = "ru" | "en";

export const languages: Record<Lang, string> = {
  ru: "Русский",
  en: "English",
};

export const defaultLang: Lang = "ru";

export const ui = {
  ru: {
    "header.blog": "блог",
    "header.work": "опыт",
    "header.projects": "проекты",
    "home.hero.title": "Привет 👋🏻",
    "home.hero.text":
      "Я Frontend-разработчик из Ростова-на-Дону. Здесь пишу о том, что узнаю, пробую и нахожу интересным.",
    "home.posts.title": "Latest posts",
    "home.posts.seeAll": "See all posts",
    "home.projects.title": "Recent projects",
    "home.projects.seeAll": "See all projects",
    "home.work.title": "Work Experience",
    "home.work.seeAll": "See all work",
    "home.connect.title": "Let's Connect",
    "home.connect.text":
      "If you want to get in touch with me about something or just to say hi, reach out on social media or send me an email.",
    "blog.heading": "Blog",
    "blog.post.back": "Back to blog",
    "projects.heading": "Projects",
    "projects.post.back": "Back to projects",
    "work.heading": "Work",
    "footer.theme.light": "Светлая тема",
    "footer.theme.dark": "Тёмная тема",
    "footer.theme.system": "Системная тема",
  },
  en: {
    "header.blog": "blog",
    "header.work": "work",
    "header.projects": "projects",
    "home.hero.title": "Hello 👋🏻",
    "home.hero.text":
      "I am a Frontend developer from Rostov-on-Don. Here I write about what I learn, try, and find interesting.",
    "home.posts.title": "Latest posts",
    "home.posts.seeAll": "See all posts",
    "home.projects.title": "Recent projects",
    "home.projects.seeAll": "See all projects",
    "home.work.title": "Work Experience",
    "home.work.seeAll": "See all work",
    "home.connect.title": "Let's Connect",
    "home.connect.text":
      "If you want to get in touch with me about something or just to say hi, reach out on social media or send me an email.",
    "blog.heading": "Blog",
    "blog.post.back": "Back to blog",
    "projects.heading": "Projects",
    "projects.post.back": "Back to projects",
    "work.heading": "Work",
    "footer.theme.light": "Light theme",
    "footer.theme.dark": "Dark theme",
    "footer.theme.system": "System theme",
  },
} as const satisfies Record<Lang, Record<string, string>>;
