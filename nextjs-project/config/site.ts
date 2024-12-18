export const route = {
  landing: "/",
  home: "/home",
  login: "/login",
  register: "/register",
  welcome: "/welcome",
  chat: "/chat",
  journal: "/journal",
  journalDay(date: string) {
    return `/journal/${date}`;
  },
  tasks: "/tasks",
  task(taskId: string) {
    return `/tasks/${taskId}`;
  },
  newTask: "/tasks/new",
  insights: "/insights",
  settings: "/settings",
  pricing: "/pricing",
  profile: "/settings/profile",
  questionnaire: "/questionnaire",
  tutorial: "/tutorial",
  forgotPassword: "/forgot-password",
};

export const url = {
  repository: "https://github.com/jordigarciaventura/DayCraft",
};
