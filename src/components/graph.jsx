/* eslint-disable react/prop-types */
export default function Graph({data}){
    return (
        <>
              {data.map(item => (
                <div className="graphBarContainer" key={item.day} >
                <p className="sum">${item.amount}</p>
                <div className={`graphbar ${item.day}`}>


                  <style>
                  {`
                  .${item.day}{
                    height: ${((item.amount)*100) / 75 }%;
                  }
                  .graphBarContainer{
                    display: flex;
                    align-items: end;
                    height: 190px;
                  }


                  `}
                  </style>
                </div>
                </div>

              ))}
        </>
    )
}