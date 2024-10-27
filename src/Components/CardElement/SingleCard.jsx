
const SingleCard = ({ card,handleSelect }) => {
    // console.log(card)
    const { id, name, rating, country, role, price, handedness, image } = card;
    return (
        <div className="card border">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold mb-3 mr-10"><span><i className="fa-solid fa-user"></i></span> {name}</h2>
                <div className="grid grid-cols-2 ">
                    <p ><span className="mr-4"><i className="fa-solid fa-flag"></i></span>{country}</p>
                    <p className="bg-[#1313130D] ">All-rounder</p>
                </div>
                <div className="mr-[150px] mt-5 mb-[-20px]">
                <p className="justify-start font-bold">Rating : {rating}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-5">
                    <p className="font-bold">{handedness}</p>
                    <p className="bg-[#1313130D]">{handedness}</p>
                    <p className="font-bold">Price: ${price}M</p>
                    <button onClick={()=>handleSelect(card)} className="btn btn-sm">Choose Player</button>
                </div>
                
            </div>
        </div>
    );
};

export default SingleCard;