type SubmitButtonProps = {
  textButton: string;
  bgColor: string;
  textColor: string;
  type: "submit" | "reset";
};

const SubmitButton = ({
  textButton,
  bgColor,
  textColor,
  type,
}: SubmitButtonProps) => {
  return (
    <button
      type={type}
      className={`w-full   bg-${bgColor} text-${textColor}  shadow-2xl rounded-lg px-3 py-2  my-3  duration-500 cursor-pointer`}
    >
      {textButton}
    </button>
  );
};

export default SubmitButton;
