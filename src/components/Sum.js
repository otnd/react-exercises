function Sum({ numbers = [4, 7, 2, 9] }) {
    return (
        <h1>La somma è: {numbers.reduce((a, b) => a + b)}</h1>
    );
}

export default Sum;