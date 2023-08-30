export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <article className="flex flex-col min-w-[240px] max-w-[540px] bg-bgSecondary rounded-md">
        <header className="py-2 px-4">
          <h2 className="font-semibold text-lg">Full Moons of August</h2>
          <p>
            Near perigee, the closest point in its almost moonthly orbit, a Full Moon rose as the
            Sun set on August 1. Its brighter than average lunar disk was captured in this dramatic
            moonrise sequence over dense cloud banks along the eastern horizon from Ragusa, Sicily.
            Illuminating night skies around planet Earth it was the second supermoon of 2023. Yet
            again near perigee, the third supermoon of 2023 will also shine on an August night.
            Rising as the Sun sets tonight this second Full Moon in August will be known to some as
            a Blue Moon, even though scattered sunlight gives the lunar disk a reddened hue. Defined
            as the second full moon in a calendar month, blue moons occur only once every 2 or 3
            years. That's because lunar phases take 29.5 days, almost a calendar month, to go
            through a complete cycle. Tonight an August Blue Moon will find itself beside bright
            planet Saturn.
          </p>
        </header>
        <img
          className="w-full"
          alt="test"
          src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top"
        />
        <div className="py-2 px-4 flex justify-between">
          <div>Paweł Miłćzak</div>
          <div>30/04/2019</div>
        </div>
      </article>
      <div className="flex flex-row gap-2">
        <button className="bg-actionSecondary py-2 px-6 rounded-md font-semibold">Zapisz</button>
        <button className="bg-actionSecondary py-2 px-6 rounded-md font-semibold">Następne</button>
      </div>
    </div>
  );
}
