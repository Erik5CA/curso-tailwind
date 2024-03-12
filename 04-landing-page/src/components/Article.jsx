export default function Article({ title, paraghrap }) {
  return (
    <>
      <h1 className="text-4xl font-bold text-very-dark-blue md:text-5xl">
        {title}
      </h1>
      <p className="text-dark-grayish-blue">{paraghrap}</p>
    </>
  );
}
