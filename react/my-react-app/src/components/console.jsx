import '../styling/console.css'

const Console = ({consoleText}) => {

    return(
        <>  
            <div id="consoleDiv">
                <p id="console">
                    {consoleText}
                </p>
            </div>
        </>
    );
}

export default Console