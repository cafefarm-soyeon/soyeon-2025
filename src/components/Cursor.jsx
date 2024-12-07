import "../../public/css/invertCursor.css"

const Cursor = ({left, top}) => {

  return(
    <>
      <div id="cursor" style={{top:top, left:left}} >
      </div>
    </>
  )
}

export default Cursor;