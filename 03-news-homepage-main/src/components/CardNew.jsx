import imagen from "../assets/images/image-retro-pcs.jpg";
export default function CardNew() {
  return (
    <div className="h-[30%] flex bg-white">
      <img className="mr-5" src={imagen} alt="" />
      <div className="flex flex-col  py-1">
        <h2 className="text-4xl font-semibold text-neutral-grayish-blue">02</h2>
        <h3 className="text-neutral-very-dark-blue text-2xl font-bold">
          Reviving Retro PCs
        </h3>
        <p className="text-neutral-grayish-blue text-base">
          {" "}
          What happens when old PCs are given modern upgrades?
        </p>
      </div>
    </div>
  );
}
