import React from "react";
 

const getPages = (current,total)=>{
        const page =[]
        if(total <= 5){
            for(let i = 1; i <= total; i++){
                page.push(i)
            }
        }
            else{
                if(current <= 3){
                    page.push(1,2,3,'...', total)
                }else if(current >= total - 2){
                    page.push(1,'...', total-2, total-1, total)
                }else{
                    page.push(1, '...', current-1, current, current+1, '...', total)
                }
            }
            return page;
}

function Pagination({page, pageHandler, dynamicPage}) {
  return (
    <>
      <div className="mt-10 space-x-4 mb-10">
        <button
          className={`bg-[#e6b054ee] text-white px-4 py-2 rounded ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`} 
            onClick={() => pageHandler(page - 1)}
        >
          Prev
        </button>
        {
            getPages(page, dynamicPage).map((item, index) => {
              return (
                <button
                  key={index}
                  className={`px-4 py-2 rounded ${
                    item === page
                      ? "bg-[#e6b054ee] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => {
                    if (item !== '...') {
                      pageHandler(item);
                    }
                  }}
                >
                  {item}
                </button>
              );
            })
        }

        <button
          className={`bg-[#e6b054ee] text-white px-4 py-2 rounded ${
            page === dynamicPage ? "opacity-50 cursor-not-allowed" : ""
          }`} 
            onClick={() => pageHandler(page + 1)}
        >
            Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
