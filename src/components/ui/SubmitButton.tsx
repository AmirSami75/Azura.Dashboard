type SubmitButtonProps = {
  textButton: string;
  bgColor: string;
  textColor: string;
  type: "submit" | "reset";
};

const colorMap = {
  secondary: "bg-secondary-foreground text-secondary",
  primary: "bg-primary-foreground text-primary",
};

const Button = ({
  textButton,
  bgColor,
  textColor,
  type,
}: SubmitButtonProps) => {
  return (
    <button
      type={type}
      className={`w-full   bg-green-400 text-white shadow-2xl rounded-lg px-3 py-2  my-3  duration-500 cursor-pointer`}
    >
      {textButton}
    </button>
  );
};

export default Button;
