import lupa from "../../assets/search.svg";
import "./Input.css";

export interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  label?: string;
  id?: string;
  pesquisa?: boolean;
}

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
