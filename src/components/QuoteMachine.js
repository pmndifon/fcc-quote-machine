import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = (props) => (
    <Card>
        <CardContent>
            <Typography id="text">
                {props.selectedQuote.quote} - <span id="author">{props.selectedQuote.author}</span> 
            </Typography>
        </CardContent>
        <CardActions>
            <Button id="new-quote" size="small" onClick={props.assignNewQuoteIndex}>Next Quotes</Button>
            <IconButton
                id="tweet-quote"
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}&hashtags=psifon`}
            >
                <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
            </IconButton>
        </CardActions>
    </Card>
);

export default QuoteMachine;

 