import { create } from "zustand";

interface LoginStateAction {
  isLogged: boolean;
  setLogged: (state: boolean) => void;
}

const useHasVoted = create<LoginStateAction>((set) => {
  const storedIsLogged = localStorage.getItem("isLogged");
  const initialIsLogged = storedIsLogged ? JSON.parse(storedIsLogged) : false;

  return {
    isLogged: initialIsLogged,
    hasVoted: false,
    setLogged: (state) => {
      set(() => ({ isLogged: state }));
      localStorage.setItem("isLogged", JSON.stringify(state));
    },
  };
});

export default useHasVoted;
