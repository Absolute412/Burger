export const NewsCard = ({ image, title, content, link}) => {
    return (
        <>
            <div className="burger6">
                <img src={image}
                alt="" width={""} 
                className="image" 
                style={{marginTop: "0.5rem"}} 
                />

                <a href={link}>
                    <h2 className="title">{title}</h2>
                    <p className="content">{content}</p>
                </a>
            </div> 
        </>
    );
}