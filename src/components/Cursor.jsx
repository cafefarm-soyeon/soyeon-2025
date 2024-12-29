import "../../public/css/invertCursor.css"

const Cursor = ({left, top, mouseClassName}) => {

  return(
    <>
      <div id="cursor" className={mouseClassName} style={{top:top, left:left}} >
      </div>
    </>
  )
}

export default Cursor;