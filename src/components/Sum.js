function Sum({ numbers }) {
    return (
        <h1>La somma è: {numbers.reduce((a, b) => a + b)}</h1>
    );
}

export default Sum;