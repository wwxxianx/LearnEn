import create from 'zustand';

const useAuthStore = create((set) => ({
    isAuthenticated: false,
    userId: "",
    userEmail: "",
    userRole: "",
    login: (({ role, email, userId }) => set({ isAuthenticated: true, userId, userEmail: email, userRole: role })),
    logout: () => set({ isAuthenticated: false, userEmail: "", userRole: "" }),
}));

export default useAuthStore;
