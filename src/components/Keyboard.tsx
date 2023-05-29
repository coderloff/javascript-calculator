import Key from "./Key";

interface Props {
  data: any;
  handleInput: (id: string) => void;
}

const Keyboard = ({ data, handleInput }: Props) => {
  return (
    <div className="keys">
      {data.map((key: any) => (
        <Key
        key={key.id}
          keyData={key}
          handleInput={handleInput}
        />
      ))}
    </div>
  );
};

export default Keyboard;
