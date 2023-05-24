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
          id={key.id}
          value={key.value}
          handleInput={handleInput}
        />
      ))}
    </div>
  );
};

export default Keyboard;
