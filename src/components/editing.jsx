import Image from "react-bootstrap/Image";
import editing1 from "../images/editing-1.jpg";
import editing2 from "../images/editing-2.jpg";
import editing3 from "../images/editing-3.jpg";
import editing4 from "../images/editing-4.jpg";

function EditingPortfolio() {
  const articles = getArticles()

  return (
    <div className="editing-portflio section">
      {articles.map((article) => (
        <a
          href={article.link}
          className="article"
          target="_blank"
          rel="noreferrer"
          key={article.title}
        >
          <h3 className="article-title mb-3">{article.title}</h3>
          <div className="">
            <Image src={article.image} fluid />
          </div>
        </a>
      ))}
    </div>
  );
}

export default EditingPortfolio;

function getArticles() {
      const articles = [
        {
          title: "Conscious language guide",
          image: editing1,
          link: "#",
        },
        {
          title: "Type 2 diabetes feature story",
          image: editing2,
          link: "#",
        },
        {
          title: "COVID-19 pandemic daily news updates",
          image: editing3,
          link: "#",
        },
        {
          title: "Eplontersen research papers",
          image: editing4,
          link: "#",
        },
      ];

      return articles;
}