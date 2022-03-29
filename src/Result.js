const Result = ({isVisible,hex,isDark,copyImg,isbackgroundDark}) => {

  const copyText = ()=>{
    navigator.clipboard.writeText(hex)
  }

    return (
    <div className="Result">
        <div className='copy' style={{display: isVisible?'flex':'none'}}>
          <h1>{hex}</h1>
          <button className='copyIconBtn' style={{backgroundColor:  isDark?'white':'transparent'}} onClick={copyText}>
          <img src={copyImg}  alt='copyIcon'/></button>
        </div>
        <button className='toggleBtn' onClick={isbackgroundDark}>Toggle text</button>
    </div>
    )
}

export default Result