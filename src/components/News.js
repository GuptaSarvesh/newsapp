import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log('News component constructor');
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }

    async componentDidMount() {

        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=885880414f704f86b5fb96364ed01af6&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({ articles: parsedata.articles,totalResults:parsedata.totalResults })
    }


    handlePrevClick= async()=>{

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=885880414f704f86b5fb96364ed01af6&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({
            page:this.state.page-1,
            articles: parsedata.articles 
        })

    }


    handleNextClick= async ()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=885880414f704f86b5fb96364ed01af6&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({
            page:this.state.page+1,
            articles: parsedata.articles 
        })}

    }

    render() {
        return (
            <div className='container my-3'>
                <h1>Top Headlines</h1>

                <div className="row">
                    {this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""}
                                description={element.description ? element.description.slice(0, 40) : ""} imageUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    })}



                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
