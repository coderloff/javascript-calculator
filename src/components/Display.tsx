interface Props {
  input: string;
  output: string;
}

const Display = ({ input, output }: Props) => {
  /* return (
    <div id="display">{input}</div>
  ) */
  return (
    <div className="output">
      <span className="result">{output}</span>
      <span id="display" className="input">
        {input}
      </span>
    </div>
  );
};

export default Display;
