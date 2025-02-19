export const Bouton = (props) => {
    const { cssStyle, text, cgColor } = props;
    return (

        <div className="col">
            <button className={`btn ${cssStyle}`} onClick={cgColor}> {text} </button>
        </div>

    );
}