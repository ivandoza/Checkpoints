import { useState } from "react";

export function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [submittedData, setSubmittedData] = useState(null);

  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      alert("Rellene todos los campos");
    } else {
      setSubmittedData(formData);
    }
  };

  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <label name="username">Usuario: </label>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleInput}
        />
        <label name="password"> Contraseña: </label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInput}
        />
        <button type="submit">Enviar</button>
      </form>
      {submittedData && (
        <div>
          <h4>Usuario: {submittedData.username}</h4>
          <h4>Contraseña: {submittedData.password}</h4>
        </div>
      )}
    </div>
  );
}
