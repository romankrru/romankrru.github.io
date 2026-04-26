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
    "home.posts.title": "Последние посты",
    "home.posts.seeAll": "Смотреть все посты",
    "home.projects.title": "Последние проекты",
    "home.projects.seeAll": "Смотреть все проекты",
    "home.work.title": "Опыт",
    "home.work.seeAll": "Смотреть все",
    "home.connect.title": "Связаться со мной",
    "home.connect.text":
      "Если вы хотите связаться со мной по какому-либо вопросу или просто поздороваться, напишите мне в социальных сетях или отправьте письмо на электронную почту.",
    "blog.heading": "Блог",
    "blog.post.back": "Вернуться к блогу",
    "projects.heading": "Проекты",
    "projects.post.back": "Назад к проектам",
    "work.heading": "Опыт",
    "footer.theme.light": "Светлая тема",
    "footer.theme.dark": "Тёмная тема",
    "footer.theme.system": "Системная тема",
    "header.lang.switch": "Switch to English",
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
    "header.lang.switch": "Переключить на Русский",
  },
} as const satisfies Record<Lang, Record<string, string>>;
