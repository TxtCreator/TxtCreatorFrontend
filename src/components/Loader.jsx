function Loader({error}) {
    if (error) {
        return <div className="loader"><h1>Błąd! Nie ma dostępnej takiej wersji.</h1></div>
    }
    return (
        <div className="loader">
            <div className="loadingio-spinner-rolling-ma394ftt1bl"><div className="ldio-miiu7u9rt1r">
            <div></div>
            </div></div>
        </div>
    )
}

export default Loader
