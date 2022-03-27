const Result = ({isVivible,hex,isDark,copyImg,isbackgroundDark,copyText}) => {
  return (
    <div className="Result">
        <div className='copy' style={{display: isVivible?'flex':'none'}}>
          <h1>{hex}</h1>
          <button className='copyIconBtn' style={{backgroundColor:  isDark?'white':'transparent'}} onClick={copyText}>
          <img src={copyImg}  alt='copyIcon'/></button>
        </div>
        <button className='toggleBtn' onClick={isbackgroundDark}>Toggle text</button>
    </div>
  )
}

export default Result