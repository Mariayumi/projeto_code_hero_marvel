import { useState, type ReactNode } from "react";
import "./Tabs.css";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: ReactNode[];
}

export function Tab({ children }: TabProps) {
  return <div>{children}</div>;
}

export function Tabs({ children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tabs">
      <div className="tab_headers">
        {children &&
          Array.isArray(children) &&
          children.map((child: any, index: number) => (
            <button
              key={index}
              className={`tab_botao ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {child.props.label}
            </button>
          ))}
      </div>
      <div className="tab_content">{children[activeIndex]}</div>
    </div>
  );
}