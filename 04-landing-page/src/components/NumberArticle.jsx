export default function NumberArticle({ number, title, paragrahp }) {
  return (
    <>
      <article className="space-y-4">
        <p className="bg-very-pale-red rounded-l-full font-bold flex items-center md:bg-transparent">
          <span className="bg-bright-red text-white rounded-full py-2 px-6">
            {number}
          </span>
          <span className="flex-1 p-2">{title}</span>
        </p>
        <p className="text-dark-grayish-blue text-left">{paragrahp}</p>
      </article>
    </>
  );
}
