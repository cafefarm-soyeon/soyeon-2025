import "../../public/css/invertCursor.css"

const Cursor = ({left, top, mouseName}) => {

  return(
    <>
      <div id="cursor" className={mouseName} style={{top:top, left:left}} >
      </div>
    </>
  )
}

export default Cursor;