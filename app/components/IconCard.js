import React from "react";

const IconCard = ({ Icon }) => {
  return (
    <div className="w-28 h-28 flex flex-wrap justify-center items-center rounded-xl bg-primary">
      <Icon className={`w-[50%] h-[50%] text-[#dcff02]`} />
    </div>
  );
};

export default IconCard;
