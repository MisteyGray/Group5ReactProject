import  React from 'react'

const PhotoMaster = ({ pictureArray, bigImage, setBigImage, setTextArea, textArea }) => {

  return (

    <div className="photoContainer">
         <div className="bigImageContainer"><img className="bigImage" src={bigImage} alt="Location Pictures" />
            <h1 id="imageText">{textArea}</h1>  
            </div>
      <div className="linksContainer">

        {pictureArray.map((item, index) => {

          return (
            <div key={index}>
            <a onClick={(e) =>{ 
              setBigImage(item.image)
              setTextArea(item.text)}} 
              ><img className='photos' src={item.image} alt='Location Pictures' /></a>
            </div>

          )
        })}
      </div>
    </div>
  )
}


export default PhotoMaster

