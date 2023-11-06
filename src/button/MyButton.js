export default function MyButton({ buttonText, buttonText2 }) {
    const buttonStyle = {
        width: "180px",
        height: "36px",
        marginTop: "10px",
    };

    return (
        <>
        <button style={buttonStyle}>{buttonText}</button>
        <button style={buttonStyle}>{buttonText2}</button>
        </>
    );
}