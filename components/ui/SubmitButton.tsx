type SubmitButtonProps = {
  textButton: string;
};

const SubmitButton = ({ textButton }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full bg-green-600 shadow rounded-lg px-3 py-2 text-white my-3 hover:bg-green-700 duration-500 cursor-pointer"
    >
      {textButton}
    </button>
  );
};

export default SubmitButton;
