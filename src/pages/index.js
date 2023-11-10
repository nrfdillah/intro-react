import MyButton from "../button/MyButton"

export default function MyApp() {

  return (
    <section style={{
      display: 'flex',
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
    }}>
      <h1 style={{
        margin: 0,
        fontSize: "30px",
        fontFamily: "cursive"
      }}>Welcome to my app</h1>
      <MyButton buttonText="halaww" buttonText2="helooww" />
    </section>
  );
}