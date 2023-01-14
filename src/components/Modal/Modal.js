import React from "react";

const MyModal = (props) => {
  const { children, onClose } = props;
  return (
    <div className="bg-black/50 w-screen h-screen fixed top-0 left-0 right-0">
      <div className="bg-white max-w-screen-lg h-3/4 my-40 p-20 mx-auto rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default MyModal;
