
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import CardContainer from './Components/CardElement/CardContainer'
import Navbar from './Components/Navbar/Navbar'
import SelectedContainer from './Components/SelectedContainer/SelectedContainer'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'


function App() {
  const [selectData, setSelectData] = useState([])
  const [toggle, setToggle] = useState(true);
  const [coin, SetCoin] = useState(0)

  const handleToggle = (status) => {
    setToggle(status)


  }
  const handleSelect = (data) => {

    if (coin < data.price) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You don't have enough money",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }

    const isExist = selectData.find(p => p.id == data.id)
    console.log(isExist)
    if (!isExist && 6 > selectData.length) {
      coinDecrease(data.price)
      setSelectData([...selectData, data])
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Added Successfully",
        showConfirmButton: false,
        timer: 1500
      });

    }
    else {
      notify()
    }


    // console.log(data)

  }


  const notify = () => {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You Cant add this",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  };
  // console.log(selectData)

  const handleDelete = (id) => {
    console.log(id)
    const datas = selectData.filter(el => el.id !== id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setSelectData(datas)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }

  const hanleCoin = () => {
    SetCoin(coin + 5)

    Swal.fire({
      position: "top",
      icon: "success",
      title: "5M creadit added",
      showConfirmButton: false,
      timer: 1500
    });

  }

  const coinDecrease = (amount) => {
    SetCoin(coin - amount)
  }

  return (
    <>
      <Navbar coin={coin} />
      <Banner hanleCoin={hanleCoin} />


      {/* btns and title  */}

      <div className='flex justify-between my-10'>
        <h1 className='text-3xl font-bold'>Available Players</h1>
        <div className='flex gap-4'>
          <button onClick={() => handleToggle(true)} className={toggle ? 'btn bg-yellow-300' : 'btn'}>Available</button>
          <button onClick={() => handleToggle(false)} className={!toggle ? 'btn bg-yellow-300' : 'btn'}>Selected {selectData.length}/6</button>
        </div>

      </div>

      <div>
        {
          toggle ? <CardContainer handleSelect={handleSelect} /> : <SelectedContainer handleToggle={handleToggle} handleDelete={handleDelete} selectData={selectData} />
        }
      </div>

      

      <Footer/>



    </>

  )
}

export default App
