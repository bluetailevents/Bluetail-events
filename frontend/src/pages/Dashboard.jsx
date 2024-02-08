import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/dashboard.css'
import book from '../Book.png'
import cocktails from '../Cocktails.jfif'
import menu from '../Menu2.png'
function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  

  useEffect(() => {

    if (!user) {
      navigate('/login')
    }


}, [dispatch, navigate, user])

return (
  <>
    <section className='heading'>
      <h1>Welcome {user && user.name}</h1>
      <p>Bluetail Dashboard</p>
    </section>
    <Carousel>
      <div>
        <img src={book} alt="Book" />
        <p className="legend">Book an Event</p>
      </div>
      <div>
        <img src={cocktails} alt="Cocktails" />
        <p className="legend">View Our Cocktails</p>
      </div>
      <div>
        <img src={menu} alt="Menus" />
        <p className="legend">View Previous Bespoke Menus</p>
      </div>
    </Carousel>
  </>
)



  
}

export default Dashboard
