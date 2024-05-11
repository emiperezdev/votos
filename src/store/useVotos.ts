import {create} from "zustand";

interface VotosState {
  votosPartidos: {
    [partido: string]: number;
  };
  setVotosPartido: (partido: string, votos: number) => void;
}

const useVotos = create<VotosState>((set) => {
  const storedState = localStorage.getItem("votosState");
  const initialState = storedState ? JSON.parse(storedState) : {
    votosPartidos: {
      partido1: 0,
      partido2: 0,
      partido3: 0,
      partido4: 0,
      partido5: 0,
    },
  };

  return {
    ...initialState,
    setVotosPartido: (partido, votos) =>
      set((state) => ({
        votosPartidos: {
          ...state.votosPartidos,
          [partido]: votos,
        },
      })),
  };
});

useVotos.subscribe((state) => {
  localStorage.setItem("votosState", JSON.stringify(state));
});

export default useVotos;
