/* importamos nuestra hoja de styles */
import './styles/CardsBox.css'

/* se encarga de mostrar nuestra CardsBox */
const CardsBox = ({handleChangeBtn, information, currentBg }) => {
  return (
    <section className='cardsBox'>
      <h1 className='title'>INFOGALAX</h1>
      <section className='infoCardsBox'>
        <article className='phrasesCardsBox'>
          <p>{information.phrase}</p>  
        </article>
        {/* <button className='btnRecharge' onClick={handleChangeBtn}><i class='bx bxs-invader'></i></button> */}
        <button className='btnRecharge' onClick={handleChangeBtn}> <i class='bx bxs-analyse bx-spin'  ></i> </button>
      </section>
      <footer>
        <h4 style={{color: `${currentBg.bgColors}`}} >{information.author}</h4>
      </footer>
      <article className={`img_planet ${currentBg.bgLower}`} ></article>
    </section>
  )
}

export default CardsBox