"use client";

import { useActionState, useState } from "react";
import { CompleteTodos } from "../components/CompleteTodos";
import { IncompleteTodos } from "../components/IncompleteTodos";
import { InputTodo } from "../components/InputTodo";

export default function Todo() {
  const [todoText, formAction, isPending] = useActionState(async (prevState, formData) => {
    const todoText = formData.get("todoText");
    if (todoText && todoText !== "") {
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
    }
    return "";
  }, '');

  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        disabled={isMaxLimitIncompleteTodos}
        formAction={formAction}
      />
      {isMaxLimitIncompleteTodos && (
        <p style={{ color: "red" }}>
          登録できるTODOは5個までだよ〜。消化しろ〜。
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
}
