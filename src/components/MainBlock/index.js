import React from "react";
import "./styles.scss"

const MainBlock = () => {
    return(
        <div className="mainBlockWrapper">
            <div className="mainBlock"> 
                <div className="mainHeadingBlock">
                    <h1>Путешествие</h1>
                    <p>на красную планету</p>
                    <button>Начать путешествие</button>
                </div>
                <div className="mainBlocksInfo">
                    <div className="mainBlocksInfoTop">
                        <div>
                            <p>мы</p>
                            <h1>1</h1>
                            <p>на рынке</p>
                        </div>
                        <div>
                            <p>гарантируем</p>
                            <h1>50%</h1>
                            <p>безопасность</p>
                        </div>
                    </div>
                    <div className="mainBlocksInfoBottom">
                        <div>
                            <p>календарик</p>
                            <h1>2001<span style={{fontSize: "14px"}}>г.</span></h1>
                            <p style={{marginTop: "-18px"}}>в подарок</p>
                        </div>
                        <div>
                            <p>путешествие</p>
                            <h1>597</h1>
                            <p>дней</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBlock;