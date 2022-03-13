import TrendingHighlight from './trendingHighlight';

const trendingVideo = () => {
  return (
    <section className="trendingVideo py-5">
        <div className="row mx-auto">
        <h1 className="text-center py-5 text-white text-uppercase">trending videos</h1>
            <div className="row mx-auto"><div className="col-6 col-md-4 mx-auto"><div className="row mx-auto d-flex"><button className="btn btn-dark col-6">Live<i class="fas fa-stream"></i></button><button className="btn btn-dark col-6">Highlight</button></div></div></div>
            <div className="row mx-auto py-5"><div className="col-10 col-md-6 mx-auto">
                {/* <TrendingLive
                    p="Started at 3PM"
                    url="https://youtu.be/fmoe1vqDQaE"
                    title="Lorem ipsum dolor sit amet"
                /> */}
                 <TrendingHighlight
                    p="Started at 3PM"
                    url="https://youtu.be/jRJyPGxbZmI"
                    title="Lorem ipsum dolor sit amet"
                />
            </div></div>
        </div>
    </section>
  )
}

export default trendingVideo