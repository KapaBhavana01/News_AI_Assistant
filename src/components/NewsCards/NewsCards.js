import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard.js';

const infoCards = [
    { color: '#0D47A1', title: 'Latest News', text: 'Show me the latest news' },
    { color: '#1A237E', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Show me the latest Technology news' },
    { color: '#0A2153 ', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'Show me the news about PlayStation 5' },
    { color: '#003366', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Show me the news from CNN' },
  ];

const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles();
    
    if(!articles.length){
        return(
            <Grow in>
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    {infoCards.map((infoCard) =>(
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}> 
                            <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                                <Typography variant='h5'>{infoCard.title}</Typography>
                                {
                                infoCard.info ? (<Typography variant='h6'>
                                    <strong>{infoCard.title.split(' ')[2]} :
                                    </strong>
                                    <br/>
                                    {infoCard.info}
                                </Typography>) : null}
                                <Typography variant='h6'> Try saying: <br/> <i>{infoCard.text}</i></Typography>
                           </div>
                        </Grid>
                ))}
                </Grid>
            </Grow>

        );
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            {articles.map((article, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                <NewsCard article={article} activeArticle={activeArticle} i= {index}/> 
                </Grid>
            ))}
            </Grid>

        </Grow>
    );
};

export default NewsCards;
