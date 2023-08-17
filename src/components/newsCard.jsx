import moment from "moment";

export default function NewsCard(props) {
  const { name, url, image, description, datePublished, provider } = props.item;
  const dateTimeAgo = moment(new Date(datePublished)).fromNow();
  return (
    <a href={url} style={{ color: "black" }}>
      <div className="news-card">
        <div className="header">
          <h4>{name}</h4>
          {image === undefined ? (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pLeeX0QReL-OwCKl9c8VpoagAGZbFXn6hRN5bXMk2Q&s"
              alt="Not found"
            />
          ) : (
            <img src={image.thumbnail.contentUrl} alt="Not found" />
          )}
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
