import moment from "moment";

export default function NewsCard(props) {
  const {
    name,
    url,
    // image: {
    //   thumbnail: { contentUrl }
    // },
    description,
    datePublished,
    provider
  } = props.item;
  const dateTimeAgo = moment(new Date(datePublished)).fromNow();
  return (
    <a href={url} style={{ color: "black" }}>
      <div className="news-card">
        {/* <img src={contentUrl} alt="Image Not found" /> */}
        <h4>{name}</h4>
        <p className="indent">{description}</p>
        <div>
          <p>{provider[0].name}</p>
          <p>{dateTimeAgo}</p>
        </div>
      </div>
    </a>
  );
}
