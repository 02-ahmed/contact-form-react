interface Props {
  text: string;
  onClick: () => void
}

const Button = ({text, onClick}: Props) => {
  return (
    <>
      <button type="button" className="btn btn-success" onClick={onClick}>{text}</button>
    </>
  )
}

export default Button