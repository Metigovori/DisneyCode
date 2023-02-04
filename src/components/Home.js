import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Originals from './Originals';
import Tranding from './Tranding';
import Viewers from './Viewers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from "../firebase";
import  { setMovies} from "../features/movie/movieSlice";
import { selectUserName } from '../features/user/userSlice';
import Recommends from './Recommends';
import NewDisney from './NewDisney';

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = []; 
  let originals = [];
  let trendings = [];

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
   console.log(recommends);
        switch(doc.data().type) {
          case "recommend" :
            recommends = [...recommends, {id: doc.id, ...doc.data() }];
            break;

            case "new":
              newDisneys = [...newDisneys, {id: doc.id, ...doc.data() }];
              break;

              case "original":
                originals = [...originals, {id: doc.id, ...doc.data() }];
                break;

                case "trending":
                  trendings = [...trendings, {id: doc.id, ...doc.data() }];
              break;
              default:
        }
      });
    

    dispatch(setMovies({
      recommend:recommends,
      newDisney: newDisneys,
      original: originals,
      trending:trendings,
    })
    );
  });
  }, [userName]);
  

  return (
    <Container>
        <ImgSlider/>
        <Viewers/>
        <Recommends
        />
        <NewDisney/>
        <Originals/>
        <Tranding/>
    </Container>
  )
};

const Container = styled.main`
position:relative;
min-height:calc(100vk - 250px);
overflow-x:hidden;
display:block;
top:72px;
padding:calc(3.5vw + 5px);


&:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content:'';
    position:absolute;
    inset:0px;
    opacity:1;
    z-index:-1;
}
`

export default Home