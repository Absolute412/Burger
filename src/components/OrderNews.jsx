import News1 from "../assets/img/news1.jpeg"
import News2 from "../assets/img/news2.jpeg"
import News3 from "../assets/img/news3.png"

import { NewsCard } from "./NewsCard"

export const OrederNews = () => {
    const cards = [
        {
            id: 1,
            image: News1,
            alt: "image saying join the BK team",
            content: "JOIN THE BK TEAM",
            link: "https://www.burger-king.ng/news/whats-better-than-one-king",
        },
        {
            id: 2,
            image: News2,
            alt: "A picture saying new alert",
            content: "THE WHOPPER HAS A NEW HOME",
            link: "https://www.burger-king.ng/news/new-sides-alert",
          },
          {
            id: 3,
            image: News3,
            alt: "A picture of burger saying budgeat",
            content: "The 3K,4K,5K NAIRA MENU",
            link: "https://www.burger-king.ng/news",
          },
    ];

    return (
        <>
            <div className="news-container">
                <div className="news-title">
                    <h2 className="News">News</h2>
                    
                    <div className="card">
                        {cards.map((card, index) => {
                            return (
                                <NewsCard 
                                    image={card.image}
                                    content={card.content}
                                    link={card.link}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}