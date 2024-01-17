import Image from "react-bootstrap/Image";
import editing1 from "../images/editing-1-v2.jpg";
import editing2 from "../images/editing-2-v2.jpg";
import editing3 from "../images/editing-3-v2.jpg";
import editing4 from "../images/editing-4-v2.jpg";
import editing5 from "../images/editing-5-v2.jpg";

function EditingPortfolio() {
  const articles = getArticles();

  return (
    <>
      <h2 className="sub-heading" id="editing">
        Editing
      </h2>
      <hr className="sub-heading-divider"></hr>
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
    </>
  );
}

export default EditingPortfolio;

function getArticles() {
  const articles = [
    {
      title: "Conscious language guide",
      image: editing1,
      link: "https://transform.healthline.com/language?utm_source=corp&utm_medium=corp&utm_campaign=corp",
    },
    {
      title: "Type 2 diabetes feature story",
      image: editing2,
      link: "https://www.healthline.com/health/type-2-diabetes",
    },
    {
      title: "COVID-19 pandemic daily news updates",
      image: editing3,
      link: "https://www.healthline.com/health-news/covid-19-updates",
    },
    {
      title: "Eplontersen research papers",
      image: editing4,
      link: "https://jamanetwork.com/journals/jama/article-abstract/2810248",
    },
    {
      title: "Eplontersen conference poster",
      image: editing5,
      link: "https://ir.ionispharma.com/static-files/650ca891-ddb2-4f9d-9588-27ce015a96f2",
    },
  ];

  return articles;
}
