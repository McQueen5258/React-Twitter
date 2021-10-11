import React from "react";
import debounce from "./debounce";
import TweetCard from "./TweetCard.jsx";

const tweets = [
  {
    "name": "Kevin Ghadyani",
    "username": "Sawtaytoes",
    "imageURL": "https://twitter-scraper.now.sh/image/Sawtaytoes/?size=bigger",
    "retweets": 0,
    "likes": 0,
    "tweet": "One of these two observables will cause a bug in your application. Which do you think it is and why?\n#RxJS #JavaScript ",
    "timestamp": "2019-03-05T07:18:27.000Z"
  },
  {
    "name": "Coding",
    "username": "Coding_Fan",
    "imageURL": "https://twitter-scraper.now.sh/image/Coding_Fan/?size=bigger",
    "retweets": 3,
    "likes": 1,
    "tweet": "Writing Clean Asynchronous Code In Node.js\n\n☞ http://bit.ly/2JTkWVR \n\n#nodejs #javascript ",
    "timestamp": "2019-03-05T06:31:15.000Z"
  },
  {
    "name": "Tutorial Developer",
    "username": "tutorial_dev",
    "imageURL": "https://twitter-scraper.now.sh/image/tutorial_dev/?size=bigger",
    "retweets": 2,
    "likes": 1,
    "tweet": "Webpack 2: The Complete Developer’s Guide\n\n☞ http://bit.ly/2QruTAH \n\n#angular #javascript ",
    "timestamp": "2019-03-05T05:22:16.000Z"
  },
  {
    "name": "Maulik",
    "username": "fraindz",
    "imageURL": "https://twitter-scraper.now.sh/image/fraindz/?size=bigger",
    "retweets": 8,
    "likes": 10,
    "tweet": "A cool way to remove property from object without mutating it.\n\nvar o = { a:1, b:2, x:3 }\nvar { b, ...otherProps } = o;\n\nThis returns a copy of object `o` without the property `b`\n#100DaysOfCode #javascript ",
    "timestamp": "2019-03-05T04:51:16.000Z"
  },
  {
    "name": "jQuery",
    "username": "jquery_dv",
    "imageURL": "https://twitter-scraper.now.sh/image/jquery_dv/?size=bigger",
    "retweets": 0,
    "likes": 2,
    "tweet": "The Comprehensive Guide to JavaScript Design Patterns\nhttps://ift.tt/2NH5XQL \n#javascript #js https://ift.tt/2He61Gx ",
    "timestamp": "2019-03-05T04:07:15.000Z"
  }
]

const withTweets = WrappedComponent => {
  return class WithTweets extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        tweets: [],
        modalIsOpen: false,
        currentTweet: {}
      };
    }

    componentDidMount() {
      this.fetchTweets("from:reactjs");
    }

    onSelectTweet = tweet => {
      console.log(tweet);
      this.setState({ modalIsOpen: true, currentTweet: tweet });
    };

    fetchTweets(query) {
      this.setState({ isLoading: true });
      fetch(`https://twitter-scraper.now.sh/tweets/?q=${query}`)
        .then(resp => resp.json())
        .then(resp => {
          this.setState({
            isLoading: false,
            tweets: resp
          });
        })
        .catch(err => console.error(err));

      this.setState({
        sLoading: false,
        tweets: tweets
      })
    }

    render() {
      return (
        <>
          <WrappedComponent
            setTweets={debounce(query => this.fetchTweets(query), 1000)}
            onSelectTweet={this.onSelectTweet}
            {...this.state}
            {...this.props}
          />
          {this.state.modalIsOpen && (
            <div
              className="modal"
              onClick={() => this.setState({ modalIsOpen: false })}
            >
              <div
                className="modal__content"
                onClick={e => e.stopPropagation()}
              >
                <TweetCard tweet={this.state.currentTweet} />
              </div>
            </div>
          )}
        </>
      );
    }
  };
};

export default withTweets;
