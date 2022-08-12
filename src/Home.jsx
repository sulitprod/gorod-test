import { useEffect, useRef, useState } from "react";

import Card from "./Card";
import Layout from "./Layout";

const getNews = async (page) => {
    const link = `https://api.vashgorod.ru/v1/news/?city=1&group_id=1731&with_image=1&fields=id,url,header,litera,image,dt_publish&page=${page || 1}`;
    const data = await (await fetch(link)).json();

    return data.items
}

const Home = () => {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const newsList = useRef(null);

    useEffect(() => {
        const dataCheck = async () => {
            setLoading(true);

            const newsInfo = await getNews(page)
            
            setNews(news => [...news, ...newsInfo])
        }
        
        dataCheck();
    }, [page])

    useEffect(() => {
        const handleScroll = async () => {
            if (loading) {
                return;
            }
            
            if (window.innerHeight > newsList.current.lastChild.getBoundingClientRect().top) {
                setLoading(true);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [loading])

    useEffect(() => {
        setLoading(false)
    }, [news])

    useEffect(() => {
        if (!loading) {
            return
        }
        setPage(page => page + 1)
    }, [loading])

	return (
		<Layout>
			<h1 className="text-2xl font-bold py-3 sticky top-0">Новости</h1>
			<div className="w-full flex flex-col space-y-4 py-3 bg-inherit max-w-xl" ref={newsList}>
				{news.map(
					(data) => <Card key={data.id} {...data} />
				)}
			</div>
		</Layout>
	)
}

export default Home;