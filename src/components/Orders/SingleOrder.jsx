const SingleOrder = props => {
    const { image, name, author, price, date } = props.order
    let orderDate = new Date(date).toDateString()

    return (
        <>
            <div className="d-flex align-items-center mb-3">
                <div><img src={image} width="150px" alt="order" /></div>
                <div className="text-light ps-4">
                    <p>Book Name: {name}</p>
                    <p>Author: {author}</p>
                    <p>Price: ${price}</p>
                    <p>Order Time: {orderDate}</p>
                    <p><button className="btn btn-danger">Remove</button></p>
                </div>
            </div> <hr />
        </>
    )
}

export default SingleOrder