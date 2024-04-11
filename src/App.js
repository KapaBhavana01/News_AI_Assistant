import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';


const alanKey = '221bb2ea843c3757c17a6b077abca7532e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([])
    const [activeArticle, setActiveArticle]= useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command , articles, number }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } 
                else if(command === 'highlight'){
                    setActiveArticle((prevActive)=>prevActive+1);
                }
                else if( command ==='open'){
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number,{fuzzy: true} ): number;
                    const article = articles[parsedNumber - 1];

                    if(parsedNumber > 20){
                        alanBtn().playText('Please try with something else.');
                    }
                    else if(article){
                        window.open(article.url, '_blank');
                     
                    }
                }
            }
        });
    }, []);
    
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://media.tenor.com/CigpzapemsoAAAAi/hi-robot.gif" className={classes.logo} alt='Newsimage'/>
            </div>
            <div className={classes.animeText}>
            <h2>I'm your AI News Assistant.</h2>
            
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
};

export default App;
