interface Props {
  formula: string;
}

const Formula = ({ formula }: Props) => {
  return (
    <span id="formula" className="formula">
      {formula}
    </span>
  );
};

export default Formula;
