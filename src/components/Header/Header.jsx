import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__title">
          <span className="header__icon">🍽️</span>
          RECEITAS DO MUNDO
        </h1>
        <p className="header__subtitle">
          Explore receitas de qualquer lugar do planeta
        </p>
      </div>
    </header>
  );
}
