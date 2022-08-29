import React from "react";

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMeme(){
        const random = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[random].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return(
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    value={meme.topText}
                    name="topText"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    value={meme.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                />
                <br/>
                <button onClick={getMeme} type="button" className="form--button">Get a new meme image 👌</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}