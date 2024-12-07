import "../../public/css/invertCursor.css"

const Cursor = () => {
  
  document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
  }

  return(
    <>
      <div id="cursor" ></div>
    </>
  )
}

export default Cursor;