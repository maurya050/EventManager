import Link from "next/link";
import classes from "./EventItem.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const date_data = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploredLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img
        src={"/" + image}
        alt={title}
        style={{ height: "200px", width: "200px" }}
      />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{date_data}</time>
          </div>
          <div  className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploredLink}> Explore Event </Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
