import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MoviesSlider from "./components/sliders/MoviesSlider";
import ShowsSlider from "./components/sliders/ShowsSlider";
import ShowCard from "./components/ui/ShowCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      
      <section className="px-15 space-y-10">
        <div className="space-y-7">
          <h1 className="text-2xl font-bold text-slate-800">Movies Premieres</h1>
          <MoviesSlider/>
        </div>

        <div className="space-y-7">
          <h1 className="text-2xl font-bold text-slate-800">India’s Top Events/Shows</h1>
          <ShowsSlider/>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
