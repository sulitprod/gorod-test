import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./Layout";
import { formatDate } from "./helpers";

const NewsInfo = async (id) => {
    const link = `https://api.vashgorod.ru/v1/news/${id}`;
    const data = await (await fetch(link)).json();

    return data
}

const News = () => {
    let { newsId } = useParams();
    const [news, setNews] = useState(null)

    useEffect(() => {
        const dataCheck = async () => {
            const newsData = await NewsInfo(newsId)
            
            setNews(newsData)
        }
        
        dataCheck();
    }, [])

    if (!news) {
        return false
    }

	return (
		<Layout>
            <div className="flex items-start flex-col space-y-4">
                <div className="flex flex-col">
                    <h1 className="text-lg font-medium">{news.header}</h1>
                    <p className="text-sm">{formatDate(news.dt_publish)}</p>
                </div>
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: news.body }}></p>
            </div>
		</Layout>
	)
}

export default News;