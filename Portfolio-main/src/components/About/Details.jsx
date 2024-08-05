const Details = ({ des, value, color }) => {
  return (
    <>
      <h2 className="font-semibold ">
        <span className="text-[#FF00FF]">{des}:</span> <br />{" "}
        <span className={`${color} `}>{value}</span>
      </h2>
    </>
  );
};

export default Details;
