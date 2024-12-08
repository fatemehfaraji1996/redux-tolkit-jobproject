import React from "react";

// import data from "../../Data/data.json";
import data from "../Data/data.json";

export default function Box() {
  return (
    <>
      {/* {console.log(data)} */}

      <div className="bg-light">
        {data.map((x, i) => {
          return (
            <div className="box">
              <div className="pictureStyle">
                <img src={x.logo} alt="" />
              </div>
              {/* BTN LIGHT */}
              <div className="chaildBox1">
                <div className="ppppppppp">
                  {" "}
                  <p className="p-style">{x.company}</p>
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

                {/*  BTN DARK*/}
                {/* POSITION P */}
                <div className="coulemn">
                  <div className="positionStyle">
                    <p>{x.position}</p>
                  </div>
                  {/* THREE P */}
                  <div className="boxthreep">
                    <p>{x.postedAt}</p>
                    <p>{x.contract}</p>
                    <p>{x.location}</p>
                  </div>
                </div>
              </div>
              <div className="rightBax">
                <button className="skilsBtn">
                  <p className="skilsp">
                    {x.role}
                  </p>
                </button>
                <button className="skilsBtn">
                  <p className="skilsp">{x.level}</p>
                </button>
                <button className="skilsBtn">
                  <p className="skilsp">{x.languages[0]}</p>
                </button>
                <button className="skilsBtn">
                  <p className="skilsp">{x.languages[1]}</p>
                </button>
                <button className="skilsBtn">
                  <p className="skilsp">{x.languages[2]}</p>
                </button>
                <button className="skilsBtn">
                  <p className="skilsp">{x.tools[0]}</p>
                </button>
                <button className="skilsBtn">
                  <p className="skilsp">{x.tools[1]}</p>
                  
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
