import { createContext } from "react";

export const ThemeContext = createContext();// tema (dark o light)
export const AuthContext = createContext();//utente loggato


// export default {ThemeContext,AuthContext} restituisce un solo elemento ,ecco perchè si crea l'oggetto