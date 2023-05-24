interface Props {
  id: string;
  value: string;
  handleInput: (id:string) => void;
}

const Key = ({ id, value, handleInput }: Props) => {
  return (
    <button id={id} value={value} onClick={()=>handleInput(value)}>
      {value}
    </button>
  );
};

export default Key;
