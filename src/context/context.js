import React, { useState } from 'react';

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

  const [language, setLanguage] = useState('es-ES');

  const txt_es = {
    "BUTTON1": "Volver",
    "BUTTON2": "Cambiar Idioma",
    "CAST": "Actores/Actrices",
    "RELEASE": "Fecha de Lanzamiento",
    "GENDER":"Género",
    "NORESULTS":"Sin especificar"
  }
  const txt_pt = {
    "BUTTON1": "Retorna",
    "BUTTON2": "Mudar idioma",
    "CAST": "Atores/Atrizes",
    "RELEASE": "Data de Lançamento",
    "GENDER":"Gênero",
    "NORESULTS":"Indeterminado"
  }

  const appState = {
    language,
    setLanguage,
    txt_es,
    txt_pt
  };

  return (
    <Context.Provider value={appState}>
        { children }
    </Context.Provider>
  )
}
export const ContextConsumer = Context.Consumer;