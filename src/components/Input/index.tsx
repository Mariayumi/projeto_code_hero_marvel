import lupa from "../../assets/search.svg";
import type { InputProps } from "../../types/components/IInput";
import "./Input.css";

export default function Input({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  pesquisa = false,
}: InputProps) {
  return (
    <div className="componente_input">
      {label && (
        <label htmlFor={id} className="label_input">
          {label}
        </label>
      )}
      <div className="corpo_input">
        <input
          id={id}
          type={type || "text"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="campo_input" 
        />
        {pesquisa && <img src={lupa} alt="Lupa" className="icone_input" />}
      </div>
    </div>
  );
}
