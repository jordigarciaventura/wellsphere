export const route = {
  dashboard: "/",
  login: "/login",
  register: "/register",
  welcome: "/welcome",
  chats: "/chats",
  chat(chatId: string) {
    return `/chats/${chatId}`;
  },
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
};

export const url = {
  repository: "https://github.com/jordigarciaventura/DayCraft",
};
