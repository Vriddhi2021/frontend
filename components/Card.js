
const Card = (props) => {
    return (
        <div className="col-10 col-md-4 mx-auto">
            <div className="card mx-auto my-4">
            <div className="img-bx">
                <img src={props.img} alt="img" />
            </div>
            <div className="content">
                <div className="detail">
                    <h2 >{props.name}<br/><span></span></h2><p>{props.post}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card