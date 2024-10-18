import Link from "next/link";
function EventItem(props){
    const {title, image, date, location, id} = props;

    const date_data = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month:'long',
        year: "numeric"
    })

    const formattedAddress = location.replace(', ', '\n');
    const exploredLink = `/events/${id}`;

    return(
        <li>
            <img src={"/" + image} alt={title}  style={{height: "200px", width: "200px"}}/>
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{date_data}</time>
                    </div>
                    <div>
                        <address>{}</address>
                    </div>
                </div>
                <div>
                    <Link href={exploredLink} > Explore Event </Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem;