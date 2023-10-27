export const getFormattedText = (text: string): JSX.Element => {
  const subTexts: Array<string> = text.split("*");
  let toggle: boolean;

  return (
    <p>
      {subTexts.map((subText) => {
        toggle = !toggle;
        if (toggle) {
          return subText;
        } else {
          return <span className="text-gray-300">{subText}</span>;
        }
      })}
    </p>
  );
};
