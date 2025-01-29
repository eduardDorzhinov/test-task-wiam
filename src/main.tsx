import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./app";

// Комментарии по задаче:
// Необходимо поменять кнопки назад и далее местами, так как более приоритетная
// кнопка должна находиться выше

// Комментарии по библиотекам:
// antd - библиотека ui компонентов, закрывает практически все кейсы по компонентам
// axios - стандартный инструмент для работы с запросами.
//    позволяет легко добавлять логику с отслеживанием статуса респонса (jwt токены итд), добавлять хедеры
// classnames - объединение стилей, достаточно простая и легковесная
// react-hook-form - позволяет гибко работать с формами, закрывает все кейсы из тз
// yup - хорошая валидация в связке с react-hook-form
// husky, lint-staged, prettier - сразу добавил, чтобы стилизовать код и не коммитить не собирающийся код

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
