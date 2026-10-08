import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-description">
        Dados fornecidos pela{" "}
        <a
          href="https://www.themealdb.com"
          target="_blank"
          rel="noopener"
          className="footer-link"
        >
          {" "}
          TheMealDB
        </a>
      </p>
      <p className="author">
        Desenvolvido por{" "}
        <a href="https://github.com/coutomarcela" className="footer-link">
          Marcela do Couto
        </a>
      </p>
    </footer>
  );
}
