import React from 'react'

export default function idont() {
  return (
    <>
  <div className=" relative bottom-10 left-6 mb-0 ">
                <img src={x.logo} alt="" />
              </div>
              <div className="">
                <div className=" flex  mt-10 gap-10 flex-start mr-0 ">
                  <p className="p-style   ">{x.company}</p>
                  <div className="lightBtnp">
                    <button className="lightBtn">
                      <p className="newP">NEW!</p>
                    </button>
                  </div>
                  <div className="darkBtnp">
                    <button className="darkBtn">
                      <p className="newP">FEATURED</p>
                    </button>
                  </div>
                </div>
                <div className=" bg-white">
                  <div className="positionStyle">
                    <p>{x.position}</p>
                  </div>
                  <div className="boxthreep">
                    <p>{x.postedAt}</p>
                    <p>{x.contract}</p>
                    <p>{x.location}</p>
                  </div>
                </div>
              </div>
    </>
  )
}
