interface Props{
    formula: string
}

const Formula = ({formula}:Props) => {
  return (
    <div id="formula">{formula}</div>
  )
}

export default Formula