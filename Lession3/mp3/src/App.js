import './App.css';
import React from 'react';
import {AlbumCard, SongCard} from './components/Card'
import {Title} from './components/Title'
import {Tag} from './components/Tag'
import {FaArrowRight} from "react-icons/fa";

const dataSong = [
  {
    img: "https://i.scdn.co/image/ab67616d0000b273f1271839f8ad535dcb6c799c",
    title: "Lớn rồi còn khóc nhè",
    artist: "Trúc Nhân",
    date: 2,
    status: true
  },

  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/5/8/f/f58f15efbd084f255c540654dd23fcab.jpg",
    title: "Bài này không để đi diễn",
    artist: "Anh Tú Atus",
    date: 5
  },
  {
    img: "https://i.scdn.co/image/ab67616d0000b273947c6c2c4691e63545d015e3",
    title: "Hai mươi hai (22)",
    artist: "Amee",
    date: 9,
    status: true
  },
  {
    img: "https://i.ytimg.com/vi/fSWapNE3ZBc/maxresdefault.jpg",
    title: "Thanh xuân",
    artist: "Da LAB",
    date: 22
    
  },
  {
    img: "https://i1.sndcdn.com/artworks-000626912503-seu7o8-t500x500.jpg",
    title: "Lối nhỏ",
    artist: "Đen ft Đào Phương Anh",
    date: 15
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/vi/5/5d/Lac_troi_single_sontungmtp.jpg",
    title: "Lạc trôi",
    artist: "Sơn Tùng - MTP",
    date: 11,
    status: true
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/covers/8/6/8613a14b4d0d152ba9dd445c801b1ea5_1295407793.jpg",
    title: "Đôi mắt",
    artist: "Wanbi Tuấn Anh",
    date: 4
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/2/e/d/f2edcc68c1cf92d15e42d5ea37eea8c6.jpg",
    title: "Sài Gòn đau lòng quá",
    artist: "Hứa Kim Tuyền, Hoàng Duyên",
    date: 23,
    status: true
  },
  {
    img: "https://avatar-ex-swe.nixcdn.com/song/2017/11/26/0/6/4/e/1511706350321_640.jpg",
    title: "Mặt trời của em",
    artist: "Phương Ly",
    date: 14,
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/covers/d/a/dae7488899bf6ee55f4127cb6a889391_1510557125.jpg",
    title: "Đã lỡ yêu em nhiều",
    artist: "JustaTee",
    date: 5
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/1/6/a/716ad904bcbe6447f531f714a3148f5d.jpg",
    title: "Anh ơi ở lại",
    artist: "Chi Pu",
    date: 27,
    status: true
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/9/0/6/2906681d4b764cd4677342b66813f25d.jpg",
    title: "Bánh mì không",
    artist: "Đạt G ft DuUyen",
    date: 7
  },
]

const dataAlbum = [
  {
    img: "https://i.scdn.co/image/ab67616d0000b27300a928ccf7c014c3f6a95d54",
    name: "Hoang",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis accumsan nisi, ac efficitur purus mattis vel. Morbi posuere ac.",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
    name: "Divide",
    desc: "Nulla lobortis et dui vitae hendrerit. In in magna odio. Vivamus tempus, nulla id pulvinar dignissim, lectus libero pellentesque sapien.",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/ru/2/26/Black_Pink_-_Square_Up_artwork.png",
    name: "Square Up",
    desc: "Aliquam pulvinar, dui id condimentum mollis, quam lacus tempus arcu, id rhoncus libero risus vitae tortor. Aenean eu nulla ut.",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/en/7/79/Take_Me_Home_by_One_Direction.png",
    name: "Take Me Home",
    desc: "Donec ut turpis nisi. Nullam pharetra velit libero, sit amet sollicitudin velit ornare ac. Suspendisse aliquet, nisl quis efficitur ultrices.",
  },

  {
    img: "https://i.scdn.co/image/ab67616d0000b273654d7ee4f655f065fda47eb4",
    name: "25",
    desc: "Quisque eros libero, efficitur in tortor vel, efficitur lacinia massa. Cras luctus laoreet nunc, a dictum dolor rutrum vel. Fusce.",
  },
]

const dataTag = [
  {
    name:"V-Pop"
  },

  {
    name:"K-Pop"
  },

  {
    name:"US-UK"
  },

  {
    name:"Classic"
  }
]
const cardRender = dataSong.map(e => {
    return <SongCard img={e.img} title={e.title} artist={e.artist} date={e.date} status={e.status}></SongCard>
  }
)

const albumRender = dataAlbum.map(e => {
  return <AlbumCard img={e.img} name={e.name} desc={e.desc}></AlbumCard>
})

const tagRender = dataTag.map(e=> {
  return <Tag name={e.name}></Tag>
})

function App() {
  return (
    <div className="App">
      <header>
      </header>

      <body>
        <div className="main container">
          <div className="content1 container">
            <Title name="Thịnh Hành"></Title>
            <div className="tag_container container">
              <div className='tag_content'>
                {tagRender}
              </div>
              <div className="showAll">
                <a href="#!" className='showAll_link child'>TẤT CẢ</a>
                <FaArrowRight className='icon child'/>
              </div>
            </div>
            <div className="song_content container">
              {cardRender}
            </div>  
        </div>

        <div className="content2 container">
          <Title name="Hot HITS Album"></Title>
          <div className="album_content container">
            {albumRender}
          </div>
        </div>
      </div>
      </body>

      <footer>
      </footer>
    </div>
  );
}

export default App;
