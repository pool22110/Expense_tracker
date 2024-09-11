import React, { Dispatch, SetStateAction } from "react";

import Modal from "react-modal";

interface ModalType {
  showModal: boolean;
  handleCloseModal: () => void;
  type: "INCOME" | "EXPENSE";
  setModalType: Dispatch<SetStateAction<"" | "INCOME" | "EXPENSE">>;
}

const Modals: React.FC<ModalType> = ({
  showModal,
  handleCloseModal,
  type,
  setModalType,
}) => {
  return (
    <Modal
      isOpen={showModal}
      contentLabel="onRequestClose Example"
      onRequestClose={() => {
        handleCloseModal();
        setModalType("");
      }}
      shouldCloseOnOverlayClick={true}
      className={
        "h-max w-[538px] px-[30px] py-[34px] rounded-[15px] bg-[#efefef] m-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      }
    >
      <p className="text-[30px] leading-[34.47px] font-bold text-black">
        {type === "INCOME" ? "Add Balance" : "Add Expense"}
      </p>
      {type === "INCOME" ? (
        <form className="flex gap-[14px] mt-5">
          <input type="number" placeholder="Income Amount" className="inputfield"/>
          <button type="submit" className="h-[51px] w-[223px] bg-[#F4BB4A] rounded-[15px]">Add Balance</button>
          <button
            onClick={() => {
              handleCloseModal();
              setModalType("");
            }}
            className="w-28 h-[51px] bg-[#E3E3E3] text-black rounded-[15px] shadow-2xl"
          >
            Cancel
          </button>
        </form>
      ) : (
        <form className="flex gap-[14px] flex-wrap mt-5">
          <input type="text" placeholder="Title" className="inputfield"/>
          <input type="number" placeholder="Price" className="inputfield"/>
          <input type="text" placeholder="Select Category" className="inputfield"/>
          <input type="date" placeholder="dd/mm/yyyy" className="inputfield"/>
          <button type="submit" className="h-[51px] w-[223px] bg-[#F4BB4A] rounded-[15px]">Add Expense</button>
          <button
            onClick={() => {
              handleCloseModal();
              setModalType("");
            }}
            className="w-28 h-[51px] bg-[#E3E3E3] text-black rounded-[15px] shadow-2xl"
          >
            Cancel
          </button>
        </form>
      )}
    </Modal>
  );
};

export default Modals;
