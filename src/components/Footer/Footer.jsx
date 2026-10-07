import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Dados fornecidos pela{" "}
        <a href="https://www.themealdb.com" target="_blank" rel="noopener">
          {" "}
          TheMealDB
        </a>
      </p>
    </footer>
  );
}
