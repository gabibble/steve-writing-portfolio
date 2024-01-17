// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { PrismicImage, useSinglePrismicDocument } from "@prismicio/react";

function WritingPortfolio() {
  const [document] = useSinglePrismicDocument("writing_portfolio");
  // const document = getArticles();

  if (document && document.data.section_1_items.length) {
    const sections = [
      {
        title: document.data.section_1_title[0].text,
        items: document.data.section_1_items,
      },
      {
        title: document.data.section_2_title[0].text,
        items: document.data.section_2_items,
      },
    ];

    return (
      <div className="writing-portflio">
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="mt-4">{section.title}</h4>
            <Row className="section pt-3 pb-0 writing-portflio__articles">
              {section.items.map((article) => (
                <Col key={article.title[0].text} sm={6} md={4}>
                  <a
                    href={article.link.url}
                    className="article"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PrismicImage
                      field={article.image}
                      imgixParams={{ ar: "7:5", fit: "crop" }}
                      style={{ width: "100%" }}
                    />
                    <h5 className="mt-2 article-title">
                      {article.title[0].text}
                    </h5>
                  </a>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
    );
  }
}

export default WritingPortfolio;

function getArticles() {
  const articles = {
    id: "ZZYChBAAAFhEkRBu",
    uid: null,
    url: null,
    type: "writing_portfolio",
    href: "https://steve-writing-portfolio.cdn.prismic.io/api/v2/documents/search?ref=ZaBDMxAAACoA3V-x&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZZYChBAAAFhEkRBu%22%29+%5D%5D",
    tags: [],
    first_publication_date: "2024-01-04T00:57:52+0000",
    last_publication_date: "2024-01-11T19:36:19+0000",
    slugs: ["writing-portfolio"],
    linked_documents: [],
    lang: "en-us",
    alternate_languages: [],
    data: {
      section_1_title: [
        {
          type: "heading1",
          text: "Clinical Health",
          spans: [],
          direction: "ltr",
        },
      ],
      section_1_items: [
        {
          image: {
            dimensions: {
              width: 2500,
              height: 1500,
            },
            alt: "assorted medication tables and capsules",
            copyright: null,
            url: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHwyMnx8dml0YW1pbnxlbnwwfHx8fDE3MDQ5OTgwNzV8MA&ixlib=rb-4.0.3&q=85?auto=compress,format&rect=0,104,3126,1876&w=2500&h=1500",
            id: "nss2eRzQwgw",
            edit: {
              x: 0,
              y: -83.17338451695457,
              zoom: 0.799744081893794,
              background: "transparent",
            },
          },
          title: [
            {
              type: "heading3",
              text: "Citicoline: Potential Uses, Benefits, and Precautions",
              spans: [],
              direction: "ltr",
            },
          ],
          link: {
            link_type: "Web",
            url: "https://www.healthline.com/health/citicoline",
            target: "_blank",
          },
        },
        {
          image: {
            dimensions: {
              width: 2500,
              height: 1500,
            },
            alt: "gray wooden window",
            copyright: null,
            url: "https://images.unsplash.com/photo-1528158192183-362655e67b38?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHwxOHx8c2hpbmdsZXxlbnwwfHx8fDE3MDQ5OTgyNDF8MA&ixlib=rb-4.0.3&q=85?auto=compress,format&rect=0,199,6000,3600&w=2500&h=1500",
            id: "Ue1c9-Mkp0o",
            edit: {
              x: 0,
              y: -82.91666666666667,
              zoom: 0.4166666666666667,
              background: "transparent",
            },
          },
          title: [
            {
              type: "heading3",
              text: "What’s the Connection Between Shingles and Encephalitis?",
              spans: [],
              direction: "ltr",
            },
          ],
          link: {
            link_type: "Web",
            url: "https://www.healthline.com/health/shingles-encephalitis",
            target: "_blank",
          },
        },
        {
          image: {
            dimensions: {
              width: 2500,
              height: 1500,
            },
            alt: null,
            copyright: null,
            url: "https://images.prismic.io/steve-writing-portfolio/65a037a97a5e8b1120d57550_chemocreamimage.png?auto=format,compress?auto=compress,format&rect=0,62,4682,2809&w=2500&h=1500",
            id: "ZaA3qXpeixEg1XVQ",
            edit: {
              x: 0,
              y: -33.10551046561299,
              zoom: 0.5339598462195643,
              background: "transparent",
            },
          },
          title: [
            {
              type: "heading3",
              text: "What to Know About Chemotherapy Cream for Skin Cancer",
              spans: [],
              direction: "ltr",
            },
          ],
          link: {
            link_type: "Web",
            url: "https://www.healthline.com/health/cancer/what-to-know-about-chemotherapy-cream-for-skin-cancer/",
            target: "_blank",
          },
        },
        {
          image: {
            dimensions: {
              width: 2500,
              height: 1500,
            },
            alt: "white cigarette stick on white wall",
            copyright: null,
            url: "https://images.unsplash.com/photo-1555441293-6c6fb1eb9773?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHwyfHxzbW9raW5nfGVufDB8fHx8MTcwNDk5ODg2MHww&ixlib=rb-4.0.3&q=85?auto=compress,format&rect=0,186,5622,3373&w=2500&h=1500",
            id: "ryBnRg4c3L0",
            edit: {
              x: 0,
              y: -82.71077908217717,
              zoom: 0.44468160796869444,
              background: "transparent",
            },
          },
          title: [
            {
              type: "heading3",
              text: "Does Quitting Smoking Cause a Sore Throat?",
              spans: [],
              direction: "ltr",
            },
          ],
          link: {
            link_type: "Web",
            url: "https://www.healthline.com/health/quit-smoking/sore-throat-after-quitting-smoking",
            target: "_blank",
          },
        },
        {
          image: {
            dimensions: {
              width: 2500,
              height: 1500,
            },
            alt: "orange and white medication pill",
            copyright: null,
            url: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHwyfHxwaWxsc3xlbnwwfHx8fDE3MDQ5OTg5NzN8MA&ixlib=rb-4.0.3&q=85?auto=compress,format&rect=0,207,6240,3744&w=2500&h=1500",
            id: "w8p9cQDLX7I",
            edit: {
              x: 0,
              y: -82.9326923076923,
              zoom: 0.40064102564102566,
              background: "transparent",
            },
          },
          title: [
            {
              type: "heading3",
              text: "Antibiotics for Rhinitis: Uses and Effectiveness",
              spans: [],
              direction: "ltr",
            },
          ],
          link: {
            link_type: "Web",
            url: "https://www.healthline.com/health/antibiotics-for-rhinitis/",
            target: "_blank",
          },
        },
        {
          image: {
            dimensions: {
              width: 2500,
              height: 1500,
            },
            alt: "person in blue long sleeve shirt holding persons hand",
            copyright: null,
            url: "https://images.unsplash.com/photo-1615461065624-21b562ee5566?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHw2fHxibG9vZCUyMGRyYXd8ZW58MHx8fHwxNzA0OTk5MjY1fDA&ixlib=rb-4.0.3&q=85?auto=compress,format&rect=210,0,5582,3349&w=2500&h=1500",
            id: "ufwC2cmbaaI",
            edit: {
              x: -94.05792773962376,
              y: 0,
              zoom: 0.4478948939982084,
              background: "transparent",
            },
          },
          title: [
            {
              type: "heading3",
              text: "How to Prepare for a Blood Test",
              spans: [],
              direction: "ltr",
            },
          ],
          link: {
            link_type: "Web",
            url: "https://www.healthline.com/health/how-to-prepare-for-blood-test",
            target: "_blank",
          },
        },
        {
          image: {
            dimensions: {
              width: 2500,
              height: 1500,
            },
            alt: "person holding white cigarette stick",
            copyright: null,
            url: "https://images.unsplash.com/photo-1604545519887-21d8f035cd90?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHwyMXx8c21va2luZ3xlbnwwfHx8fDE3MDQ5OTg4NjB8MA&ixlib=rb-4.0.3&q=85?auto=compress,format&rect=0,137,4288,2573&w=2500&h=1500",
            id: "Xo1OlLe81t8",
            edit: {
              x: 0,
              y: -79.87406716417911,
              zoom: 0.5830223880597015,
              background: "transparent",
            },
          },
          title: [
            {
              type: "heading3",
              text: "The Link Between Smoking and Stomach Pain",
              spans: [],
              direction: "ltr",
            },
          ],
          link: {
            link_type: "Web",
            url: "https://www.healthline.com/health/smoking/smoking-and-stomach-pain",
            target: "_blank",
          },
        },
        {
          image: {
            dimensions: {
              width: 2500,
              height: 1500,
            },
            alt: "orange and white medication pill",
            copyright: null,
            url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHwzfHxwaWxsc3xlbnwwfHx8fDE3MDQ5OTg5NzN8MA&ixlib=rb-4.0.3&q=85?auto=compress,format&rect=0,202,6016,3610&w=2500&h=1500",
            id: "ZHys6xN7sUE",
            edit: {
              x: 0,
              y: -83.94281914893617,
              zoom: 0.41555851063829785,
              background: "transparent",
            },
          },
          title: [
            {
              type: "heading3",
              text: "What Can You Do About Stomach Pain From Antibiotics?",
              spans: [],
              direction: "ltr",
            },
          ],
          link: {
            link_type: "Web",
            url: "https://www.healthline.com/health/antibiotics/stomach-pain-caused-by-drugs",
            target: "_blank",
          },
        },
      ],
      section_2_title: [
        {
          type: "heading2",
          text: "Personal Narrative",
          spans: [],
          direction: "ltr",
        },
      ],
      section_2_items: [
        {
          image: {
            dimensions: {
              width: 2500,
              height: 1500,
            },
            alt: "a man holds his head while sitting on a sofa",
            copyright: null,
            url: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHwyfHxhbnhpZXR5fGVufDB8fHx8MTcwNDM0NzAwOHww&ixlib=rb-4.0.3&q=85?auto=compress,format&rect=0,130,5004,3002&w=2500&h=1500",
            id: "BuNWp1bL0nc",
            edit: {
              x: 0,
              y: -64.94804156674661,
              zoom: 0.49960031974420466,
              background: "transparent",
            },
          },
          title: [
            {
              type: "heading5",
              text: "How My Father’s Sudden Death Forced Me to Face My Anxiety",
              spans: [],
              direction: "ltr",
            },
          ],
          link: {
            link_type: "Web",
            url: "https://www.healthline.com/health/mental-health/my-fathers-death",
            target: "_blank",
          },
        },
        {
          image: {
            dimensions: {
              width: 2500,
              height: 1500,
            },
            alt: "woman sitting on black chair in front of glass-panel window with white curtains",
            copyright: null,
            url: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHwyfHxkZXByZXNzaW9ufGVufDB8fHx8MTcwNDM0NzAzN3ww&ixlib=rb-4.0.3&q=85?auto=compress,format&rect=0,177,5343,3206&w=2500&h=1500",
            id: "vXymirxr5ac",
            edit: {
              x: 0,
              y: -82.8186412128018,
              zoom: 0.46790192775594236,
              background: "transparent",
            },
          },
          title: [
            {
              type: "heading5",
              text: "4 Illustrations of What Anxiety Really Feels Like",
              spans: [],
              direction: "ltr",
            },
          ],
          link: {
            link_type: "Web",
            url: "https://www.healthline.com/health/mental-health/what-anxiety-looks-like",
            target: "_blank",
          },
        },
        {
          image: {
            dimensions: {
              width: 2500,
              height: 1500,
            },
            alt: "red vehicle in timelapse photography",
            copyright: null,
            url: "https://images.unsplash.com/photo-1554734867-bf3c00a49371?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHw1fHxzaXJlbnxlbnwwfHx8fDE3MDQ5OTk5MTd8MA&ixlib=rb-4.0.3&q=85?auto=compress,format&rect=0,168,5076,3046&w=2500&h=1500",
            id: "vGu08RYjO-s",
            edit: {
              x: 0,
              y: -82.74231678486997,
              zoom: 0.4925137903861308,
              background: "transparent",
            },
          },
          title: [
            {
              type: "heading5",
              text: "Anxiety Is a Siren. Listen to It.",
              spans: [],
              direction: "ltr",
            },
          ],
          link: {
            link_type: "Web",
            url: "https://www.healthline.com/health/anxiety-is-a-siren",
            target: "_blank",
          },
        },
      ],
    },
  };

  return articles;
}
