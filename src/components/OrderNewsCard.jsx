export const OrderNewsCard = ({ image, content, link}) => {
    return (
        <>
            <div className="burger6">
                <img src={image}
                alt="" width={""} 
                className="image" 
                style={{marginTop: "0.5rem"}} 
                />

                <a href={link}>
                    <p className="content">{content}</p>
                </a>
            </div> 
        </>
    );
}