import moment from "moment";

export default function NewsCard(props) {
  const {
    name,
    url,
    image: {
      thumbnail: { contentUrl }
    },
    description,
    datePublished,
    provider
  } = props.item;
  const dateTimeAgo = moment(new Date(datePublished)).fromNow();
  return (
    <a href={url} style={{ color: "black" }}>
      <div className="news-card">
        <div className="header">
          <h4>{name}</h4>
          <img src={contentUrl} alt="Image Not found" />
        </div>
        <p className="indent">{description.substr(0, 250)}</p>
        <div className="content">
          <p>{provider[0].name}</p>
          <p>{dateTimeAgo}</p>
        </div>
      </div>
    </a>
  );
}
