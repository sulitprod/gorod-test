import { Link } from "react-router-dom";

import { formatDate } from "./helpers";

const Card = ({ header, litera, image, dt_publish, id }) => {
	return (
		<Link to={`/${id}`}>
			<div className="p-6 rounded-2xl flex space-x-6 bg-white">
                <div className="rounded-lg w-32 h-32 flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
				<div className="flex flex-col space-y-4">
					<div className="flex-grow">
						<h2 className="text-lg font-medium">{header}</h2>
						<p className="text-sm">{litera}</p>
					</div>
					<p className="text-sm">{formatDate(dt_publish)}</p>
				</div>
			</div>
		</Link>
	)
}

export default Card;