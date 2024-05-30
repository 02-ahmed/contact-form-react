interface Props {
  onClick: () => void
}

const Button = ({onClick}: Props) => {
  return (
    <>
          <div className="col-12">
            <button className="btn btn-success col-12" type="button" onClick={onClick}>Submit</button>
          </div>
    </>
  )
}

export default Button