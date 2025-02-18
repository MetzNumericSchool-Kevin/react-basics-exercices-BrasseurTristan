
export const Title = (props) => {


    return (
        <>
            <section id="exercice1">
                <h1>{props.title}</h1>
                <p>
                    {props.text}
                </p>
            </section>

        </>
    );
}