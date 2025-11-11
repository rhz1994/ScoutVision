import Hero from "../components/Hero";
import Wall from "../components/Wall";
import Articles from "../components/Articles";

function Home() {
  return (
    <>
      <Hero />
      <section style={{ display: "flex" }}>
        <Articles />
        <Wall />
      </section>
    </>
  );
}
export default Home;
