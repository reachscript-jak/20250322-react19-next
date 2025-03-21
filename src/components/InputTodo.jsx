const style = {
  backgroundColor: "#c6e5d9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export function InputTodo({ disabled, formAction }) {
  // フォーム送信時のデフォルト動作を防止するラッパー関数
  const handleSubmit = (formData) => {
    formAction(formData);
    return false;
  };

  return (
    <div style={style}>
      <form action={handleSubmit}>
        <input
          disabled={disabled}
          placeholder="TODOを入力"
          name="todoText"
        />
        <button type="submit" disabled={disabled}>
          追加
        </button>
      </form>
    </div>
  );
}
