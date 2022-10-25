import './card_style.css'
import {Status} from '../Status'

function SongCard(props) {
    return (
        <div className="card">
            <div className="card_img">
                <img src={props.img} alt="img-1" />
            </div>
            <div className="card_info">
                <div className="card_title">
                    <h3>{props.title}</h3>
                    {props.status && <Status/>}
                </div>
                <div className="card_artist">
                    <p>{props.artist}</p>
                </div>
                <div className="card_date">
                    <p>{props.date} ngày trước</p>     
                </div>
            </div>
        </div>
    )
}

function AlbumCard(props) {
    return (
        <div className="album">
            <div className="album_img">
                <img src={props.img} alt="img-1" />
            </div>
            <div className="album_title">
                <h2>{props.name}</h2>
            </div>
            <div className="album_desc">
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export {SongCard};
export {AlbumCard};