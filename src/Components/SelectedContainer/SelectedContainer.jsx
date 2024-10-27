import SelectedCard from "./SelectedCard";



const SelectedContainer = ({ selectData, handleDelete, handleToggle }) => {
    // console.log(selectData)


    return (
        <div className="py-10">
            {
                selectData.map(data => <SelectedCard handleDelete={handleDelete} key={data.id} data={data} />)
            }
            <button
                onClick={() => handleToggle(true)}
                className="btn mb-52  bg-yellow-300 my-4 md:mr-[1060px]">Add more player</button>
        </div>
    );
};

export default SelectedContainer;