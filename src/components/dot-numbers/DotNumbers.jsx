import "./dot-numbers.scss"

export default function DotNumbers(){
    return(
        <>
            <div className="d-numbers">
                <div className="dot-header">dotTerra in Numbers</div>
                <div className="numbers">
                    <div className="n-group">
                        <div className="numb">430</div>
                        <div className="numb-text">Subscribers</div>
                    </div>

                    <div className="n-group">
                        <div className="numb">75%</div>
                        <div className="numb-text">Adoption Rate</div>
                    </div>

                    <div className="n-group">
                        <div className="numb">5+</div>
                        <div className="numb-text">Countries</div>
                    </div>

                </div>
            </div>
        </>
    )
}