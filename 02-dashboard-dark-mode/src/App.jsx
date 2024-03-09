import { CardMedia } from "./components/CardMedia";
import { CardMediaToday } from "./components/CardMediaToday";
import { InfoMedia } from "./components/InfoMedia";
import { dataMedia } from "./mooks/data";
import { dataToday } from "./mooks/data-today";

console.log(dataMedia);

function App() {
  return (
    <div className="w-[80%] ">
      <header>
        <InfoMedia />
      </header>
      <section className="flex flex-wrap justify-center gap-4 mb-4">
        {dataMedia?.map((data) => (
          <CardMedia
            key={data.id}
            username={data.username}
            followers={data.followers}
            newFollowers={data.following}
            name={data.name}
          />
        ))}
      </section>
      <section className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-2xl text-slate-500 drak:text-white font-bold self-start ml-2">
          Overview - Today
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {dataToday.map((data) => (
            <CardMediaToday key={data.id} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
