

const Hamburuger = ({ hamburguer, setHamburuger }) => {

    return (
        <>
            <button className={"hamburguer-button"} onClick={() => setHamburuger(!hamburguer)} id="hamburguer">
                <span className={hamburguer ? "hamburguer-line" + " " + 'top-hamb' : "hamburguer-line"}></span>
                <span className={hamburguer ? "hamburguer-line" + " " + 'middle-hamb' : "hamburguer-line"}></span>
                <span className={hamburguer ? "hamburguer-line" + " " + 'bottom-hamb' : "hamburguer-line"}></span>
            </button >
        </>
    );
}

export default Hamburuger;