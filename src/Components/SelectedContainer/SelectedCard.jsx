

const SelectedCard = ({ data,handleDelete }) => {
    const { id, name, rating, country, role, price, handedness, image } = data;
    return (
        <div className=" w-full flex border justify-between items-center">
       
        <div className=" flex justify-center items-center gap-8">
        <figure>
          <img className="w-[180px]  m-7 rounded-3xl"
            src={image}
            alt="Movie" />
        </figure>
          <div>
          <h2 className="card-title">{name}</h2>
          <p>{handedness}</p>
          </div>
         
        </div>
        <div className="card-actions justify-end">
            <button
            onClick={()=> handleDelete(id)}
             className="btn m-4 text-red-600"><i className="fa-solid fa-trash-can"></i></button>
          </div>
      </div>
    );
};

export default SelectedCard;