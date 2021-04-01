const Spinner = () => {
    return (
        <div className="text-center pt-5">
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p>Please wait...</p>
        </div>
    )
}

export default Spinner
