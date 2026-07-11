const userPreferences = {
    id: 15,
    name: "José Ramírez",
    role: "student",
    theme: "dark",
    sidebar: "closed",
    language: "es",
    lastPage: "/subjects",
    notifications: true
};

localStorage.setItem(
    "userPreferences",
    JSON.stringify(userPreferences)
);