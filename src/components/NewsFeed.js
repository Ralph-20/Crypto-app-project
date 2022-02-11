import {useEffect, useState} from "react"
import axios from "axios"


const NewsFeed = () => {

  const [articles, setArticles] = useState(null)


  useEffect(() => {

      const options = {
        method: 'GET',
        url: 'https://crypto-news-live3.p.rapidapi.com/news',
        headers: {
          'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY // was trying to encrypt this so as to protect my info but wasn't working for some reason, 
        }                                                         // it still works, but only when I replace the input with the actual key, I'm sure I will fix this later
      }

      axios.request(options).then((response) => {
        console.log(response.data)
        setArticles(response.data)

      }).catch((error) => {
        console.error(error)
      })
  }, [])



  const first7Articles = articles?.slice(0,7)   // getting the first 7 items of the news article array 


    return (
      <div className="news-feed">
        <h2>News Feed</h2>
        {first7Articles?.map((article,_index) => (
          <div key={_index}>
              <a href={article.url}><p>{article.title}</p></a>
            </div>))}
        </div>
    )
  }
  
  export default NewsFeed
  
  
  