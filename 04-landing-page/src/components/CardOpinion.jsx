import avatarAli from "../images/avatar-ali.png";
export default function CardOpinion() {
  return (
    <>
      <img
        src={avatarAli}
        alt=""
        className="absolute w-24 aspect-square -top-12 inset-x-0 mx-auto"
      />
      <h3 className="text-xl mb-4 pt-2 font-bold text-very-dark-blue">
        Anisha Li
      </h3>
      <p className="text-dark-grayish-blue">
        “Manage has supercharged our team’s workflow. The ability to maintain
        visibility on larger milestones at all times keeps everyone motivated.”
      </p>
    </>
  );
}
