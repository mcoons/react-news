import React, {Component} from 'react';
import NewSingle from './NewSingle';
import Error from './Error';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      news: [],
      error: false,
      API_KEY: process.env.REACT_APP_NEWS_API_KEY
    };
    this.fetchNews = this.fetchNews.bind(this);    
  }

  componentDidMount(){
    this.fetchNews();
  }

  fetchNews(){
  //   let newStateNews = [], finalSources = []
  //   // let sources = this.props.news.query.replace('sources=','').split(',');
  //   sources.forEach( s => { 
  //     let timestamp=localStorage.getItem(s+"-timestamp");
  //     if (timestamp){
  //       if (Date.now() - Number(timestamp) > 3600000){
  //         finalSources.push(s);
  //       } else {
  //         newStateNews = newStateNews.concat(JSON.parse( localStorage.getItem(s)));
  //       }
  //     } else {
  //       finalSources.push(s);
  //     }
  //   })
    
  //   this.setState({
  //     news: newStateNews
  //   })
    
    // if (finalSources.length > 0){
      // let newQuery = "sources="+finalSources.join(',');
      // const url = `https://newsapi.org/v2/${this.props.news.type}?${newQuery}&pagesize=100&apiKey=${this.state.API_KEY}`;
      const url = ` https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${this.state.API_KEY}`;
     
      fetch(url)
      .then ((response) => {
        // console.log(response.json());
        return response.json();
      })
      .then ((data) => {
        let tempData = data.results.slice();
        console.log(tempData);
      //   finalSources.forEach( s => {localStorage.setItem(s+"-timestamp", Date.now()); localStorage.setItem(s, JSON.stringify( tempData.filter(d => d.source.id === s)))});
        this.setState({
          news: this.state.news.concat(data.results)  
        });
        console.log(".then reached")
      })
      // .catch((error) => {
      //   console.log(error);
      //   this.setState({
      //       error: true
      //   })
      // });
    }
  // }

  renderItems(){
    // console.log('this.state.news');
    // console.log(this.state.news);
    if(!this.state.error) {
      if (this.state.news && this.state.news.length){
        // console.log(this.state.news[0])
        // console.log(this.state.news[0]['media'][0]['media-metadata'][2].url)
      return this.state.news.map((item, index)=> (
        <NewSingle key={item.source+index} item={item} />
      ));
      }else{
        console.log("catch1");
        return <Error />
      }
    } else {
      console.log("catch2");
      return <Error />
    }
  }

  render(){
    return (
      <div className="row flex">
        {this.renderItems()}
      </div>
    );
  }
}

export default News;



// https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=yourkey




// DATA SET EXAMPLE

// [{ "source": { "id": "the-washington-post", "name": "The Washington Post" }, 
//    "author": null, 
//    "title": "Trump administration not to blame for ‘tragic’ death of 7-year-old girl in Border Patrol custody, White House says", 
//    "description": "Spokesman Hogan Gidley called on Congress to “disincentivize” migrants from making long treks to the U.S. border.", 
//    "url": "https://www.washingtonpost.com/politics/white-house-says-administration-takes-no-responsibility-for-death-of-girl-in-border-control-custody/2018/12/14/1f00d34e-ffbb-11e8-83c0-b06139e540e5_story.html", 
//    "urlToImage": "https://www.washingtonpost.com/resizer/jVu_zbE7jQXxymsJibUg1NRoB5k=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/D3LE7LX7XYI6RA6AWBQTTZKA4U.jpg", 
//    "publishedAt": "2018-12-14T17:42:00Z", 
//    "content": "A White House spokesman on Friday called the death of a 7-year-old girl in Border Patrol custody a tragic situation but said the Trump administration is not to blame and called on Congress to disincentivize migrants from making long treks to the southern U.S.… [+2391 chars]" }, 


      //  { "source": { "id": "the-washington-post", "name": "The Washington Post" }, "author": null, "title": "Trump routinely says things that aren’t true. Few Americans believe him, according to a Washington Post Fact Checker poll.", "description": "Take the quiz to see how your fact-checking skills stack up against others nationwide.", "url": "https://www.washingtonpost.com/graphics/2018/politics/political-knowledge-poll-trump-falsehoods/", "urlToImage": "https://www.washingtonpost.com/r/2010-2019/WashingtonPost/2018/12/14/National-Politics/Graphics/facepoll1216-promo.jpg", "publishedAt": "2018-12-14T17:30:00Z", "content": "For months, President Trump has claimed that U.S. Steel has announced plans to build more than six new plants. Throughout the midterm election, he repeatedly said that Democrats had signed onto an open borders bill. And he has long charged that millions of fr… [+13758 chars]" }, 
//  { "source": { "id": "the-washington-post", "name": "The Washington Post" }, "author": null, "title": "Opinion | All the things Trump didn’t count on", "description": "Trump really didn't think ahead.", "url": "https://www.washingtonpost.com/opinions/2018/12/14/all-things-trump-didnt-count/", "urlToImage": "https://www.washingtonpost.com/resizer/7o93drxGGvVUV7YuBxenLfaws8E=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EC76ULR44AI6RFK3PUXBTN4ZMY.jpg", "publishedAt": "2018-12-14T17:30:00Z", "content": "President Trumps inability to respond to one charge emanating from one witness, a charge not even within the purview of the special counsel, suggests he will be entirely overwhelmed when the closet full of shoes starts dropping. He never knew about the paymen… [+3945 chars]" }, { "source": { "id": "the-washington-post", "name": "The Washington Post" }, "author": null, "title": "George Conway calls Trump a liar on Twitter after Kellyanne Conway defends him on TV", "description": "The lawyer weighed in once more on a man for whom his wife works as a senior aide in the White House.", "url": "https://www.washingtonpost.com/politics/george-conway-calls-trump-a-liar-after-kellyanne-conway-defends-him-on-tv/2018/12/14/53d2704c-ffa1-11e8-83c0-b06139e540e5_story.html", "urlToImage": "https://www.washingtonpost.com/resizer/TjeZXj0xy2EhkJWU5Ai84_GWpOY=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EKCV3WRSXAI6RNV5ACCKCZTJQ4.jpg", "publishedAt": "2018-12-14T13:51:00Z", "content": "The sharply divergent views that White House counselor Kellyanne Conway and her husband hold of President Trump played out in public again on Thursday night, with George Conway calling Trump a liar on Twitter after his wife defended him on television. Kellyan… [+2433 chars]" }, { "source": { "id": "the-washington-post", "name": "The Washington Post" }, "author": null, "title": "Michael Flynn’s transformation from storied officer to heated partisan", "description": "Friends and colleagues of the three-star general say his public persona shifted dramatically after he left the military. But they remain at odds over why.", "url": "https://www.washingtonpost.com/graphics/2018/politics/michael-flynn-partisan-warrior/", "urlToImage": "https://www.washingtonpost.com/r/2010-2019/WashingtonPost/2018/11/21/National-Politics/Advance/Images/flynn-shareimage.jpg", "publishedAt": "2018-12-14T13:00:00Z", "content": "What happened to Michael Flynn? Before he pleaded guilty to lying to the FBI, before he became a folk hero to many of President Trumps most loyal supporters, before he pivoted from accomplished military officer to purveyor of shocking stories about the evils … [+22770 chars]" }, { "source": { "id": "the-washington-post", "name": "The Washington Post" }, "author": null, "title": "Analysis | Let’s hope Scott Walker’s next job doesn’t require chart-making", "description": "The outgoing Wisconsin governor tried to downplay his party's push to strip powers from his successor with a terrible graph.", "url": "https://www.washingtonpost.com/politics/2018/12/14/lets-hope-scott-walkers-next-job-doesnt-require-chart-making/", "urlToImage": "https://www.washingtonpost.com/resizer/1-TT9aHrLyFCXit8o0oybLordzc=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UPYIMNH73II6RIL6CYVXCLUPYI.jpg", "publishedAt": "2018-12-14T08:27:00Z", "content": "There was ostensible curiosity about whether Gov. Scott Walker (R-Wis.) would sign into law legislation introduced after his midterm election loss that stripped power from Wisconsins governor and gave it to the heavily Republican legislature in the state. I s… [+2114 chars]" }, { "source": { "id": "the-washington-post", "name": "The Washington Post" }, "author": null, "title": "Analysis | The media consumers most likely to believe Trump’s falsehoods? Fox News watchers.", "description": "Those most likely to believe untrue Democratic claims? MSNBC fans.", "url": "https://www.washingtonpost.com/politics/2018/12/14/media-consumers-most-likely-believe-trumps-falsehoods-fox-news-watchers/", "urlToImage": "https://www.washingtonpost.com/resizer/zgbC3RBIyGOT4baT1-Gst6YFBcc=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MIJSWOX6KUI6RIL6CYVXCLUPYI.jpg", "publishedAt": "2018-12-14T07:35:00Z", "content": "The good news in a new Washington Post Fact Checker poll is that most Americans dont believe the various untrue claims that President Trump makes. Nearly two-thirds of respondents, for example, know that Russia tried to interfere with the 2016 presidential el… [+2763 chars]" }, { "source": { "id": "the-washington-post", "name": "The Washington Post" }, "author": null, "title": "Wisconsin Gov. Walker signs lame-duck legislation to weaken incoming Democratic governor, attorney general", "description": "The outgoing GOP governor said the impact of the measures has been overstated, accusing the national media of “hysteria.”", "url": "https://www.washingtonpost.com/politics/wisconsin-gov-walker-signs-lame-duck-legislation-to-weaken-incoming-democratic-governor-attorney-general/2018/12/14/7e181990-ffd0-11e8-83c0-b06139e540e5_story.html", "urlToImage": "https://www.washingtonpost.com/resizer/w2Iw8bEvCJ9Js6hHMBeD8QWY5aw=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CA5XCKX72QI6RA6AWBQTTZKA4U.jpg", "publishedAt": "2018-12-14T07:20:00Z", "content": "Wisconsin Gov. Scott Walker (R) on Friday signed sweeping legislation that weakens the power of the incoming Democratic governor and attorney general, dismissing a national outcry over what Democrats have characterized as a blatant power grab. The legislation… [+3824 chars]" }, { "source": { "id": "the-washington-post", "name": "The Washington Post" }, "author": null, "title": "Cohen says Trump knew hush-money payments were wrong, contradicting his former boss", "description": "In a television interview, the president’s former lawyer said Trump “directed me to make the payments.”", "url": "https://www.washingtonpost.com/politics/cohen-says-trump-knew-hush-money-payments-were-wrong-contradicting-his-former-boss/2018/12/14/4ab6ea18-ff8f-11e8-83c0-b06139e540e5_story.html", "urlToImage": "https://www.washingtonpost.com/resizer/rbiuWoHgZeHD_gttXO3IyraiFdo=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EE4J5KH7EAI6RLKAZX6Q4DOWLI.jpg", "publishedAt": "2018-12-14T06:07:00Z", "content": "Michael Cohen, President Trumps former lawyer, said in a television interview Friday that Trump knew it was wrong to make hush-money payments to women who alleged they had affairs with him, directly contradicting claims from the president. Cohen, who has admi… [+4474 chars]" }, { "source": { "id": "the-washington-post", "name": "The Washington Post" }, "author": null, "title": "Opinion | No matter what Trump says, Michael Cohen’s accusations are a big deal", "description": "Michael Cohen’s sentencing makes clear that, at the very least, a fraud was perpetrated on American voters.", "url": "https://www.washingtonpost.com/opinions/no-matter-what-trump-says-michael-cohens-accusations-are-a-big-deal/2018/12/13/d40c531c-ff0c-11e8-83c0-b06139e540e5_story.html", "urlToImage": "https://www.washingtonpost.com/resizer/rbiuWoHgZeHD_gttXO3IyraiFdo=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EE4J5KH7EAI6RLKAZX6Q4DOWLI.jpg", "publishedAt": "2018-12-13T12:32:00Z", "content": "A FEDERAL JUDGE sentenced Michael Cohen, President Trumps former lawyer, to three years in prison on Wednesday. His misdeeds include criminal violations of campaign finance law, to which Mr. Cohen connected the president. Specifically, Mr. Cohen, in league wi… [+2303 chars]" }]