import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const trendinghighlight = (props) => {
  return (
    <div>
        <Carousel>
        <Carousel.Item>
        <ReactPlayer style={{width: "100% !important"}} url={props.url} />
            <Carousel.Caption className='bg-dark'>
            <div className="row mx-auto">
                <div className="col-9 trendingHeading">
                    <p>{props.p}</p>
                    <h6>{props.title}</h6>
                </div>
                <div className="col-3">
                    <PlayCircleOutlineIcon style={{fontSize: "70px", color: "#AA1EF1"}}/>
                </div>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <ReactPlayer style={{width: "100% !important"}} url={props.url} />
            <Carousel.Caption className='bg-dark'>
            <div className="row mx-auto">
                <div className="col-9 trendingHeading">
                    <p>{props.p}</p>
                    <h6>{props.title}</h6>
                </div>
                <div className="col-3">
                    <PlayCircleOutlineIcon style={{fontSize: "70px", color: "#AA1EF1"}}/>
                </div>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default trendinghighlight;