import { create } from "zustand";

interface UserState {
  email: string | null;
  hasVoted: boolean;
  setEmail: (email: string | null) => void;
  setHasVoted: (value: boolean) => void;
}

const useUser = create<UserState>((set) => {
  const storedUser = localStorage.getItem("user");
  const initialUser: UserState = storedUser ? JSON.parse(storedUser) : { email: null, hasVoted: false };

  return {
    email: initialUser.email,
    hasVoted: initialUser.hasVoted,
    setEmail: (email) => {
      set(() => ({ email }));
      localStorage.setItem("user", JSON.stringify({ ...initialUser, email }));
    },
    setHasVoted: (value) => {
      set(() => ({ hasVoted: value }));
      localStorage.setItem("user", JSON.stringify({ ...initialUser, hasVoted: value }));
    },
  };
});

export default useUser;
