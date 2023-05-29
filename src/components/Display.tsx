interface Props {
  input: string;
}

const Display = ({ input }: Props) => {
  /* return (
    <div id="display">{input}</div>
  ) */
  return (
    <span id="display" className="input">
      {input}
    </span>
  );
};

export default Display;
