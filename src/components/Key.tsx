interface Props {
  keyData: { id:any, value:any },
  handleInput: any;
}

const Key = ({ keyData, handleInput }: Props) => {
  return (
    <button id={keyData.id} value={keyData.value} onClick={()=>handleInput(keyData.value)}>
      {keyData.value}
    </button>
  );
};

export default Key;
