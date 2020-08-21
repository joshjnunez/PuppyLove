import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.jsx';
import Choice from './Choice.jsx';
import Login from './Login.jsx';
import MyProfile from './MyProfile.jsx';
import DogProfile from './DogProfile.jsx';
import PopularLocations from './PopularLocations.jsx';
import SignUp from './SignUp.jsx';
import Preferences from './Preferences.jsx';
import Matches from './Matches.jsx';
import MatchPopUp from './MatchPopUp.jsx';

function App(props) {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [sessUser, setSessUser] = useState({ id: 0 });
  const [sessDog, setSessDog] = useState('');
  const [dogViews, setDogViews] = useState([]);
  const [allDogs, setAllDogs] = useState([]);
  const [displayDogs, setDisplayDogs] = useState([]);
  const [matches, setMatches] = useState([]);
  const [matchViews, setMatchViews] = useState([]);
  const [newMatch, setNewMatch] = useState({});
  const [friends, setFriends] = useState('');
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState(0);
  const [loadComplete, setLoadComplete] = useState(false);

  useEffect(() => {
    axios
      .get('/session')
      .then((response) => {
        setSessUser(response.data);
        return response.data.id;
      })
      .then((id) => {
        getDogs(id);
      })
      .catch((err) => console.error(err));
  }, []);

  // useEffect(() => {
  //     axios
  //       .get('/currentDog')
  //       .then((response) => {
  //         console.log(response);
  //         setSessDog(response.data[0]);
  //       })
  //       .catch((err) => console.error('could not set session dog: ', err));

  // }, []);

  // useEffect(() => {
  //   axios
  //     .get('/dogs')
  //     .then((response) => {
  //       setAllDogs(response.data);
  //       setDogDisplayInfo(response.data[0]);
  //     })
  //     .catch((err) => console.error(err, 'Could not get all dogs.'));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get('/dogs')
  //     .then((response) => {
  //       return response.data.map((option) => {
  //         return (
  //           <div
  //             id="choice-box"
  //             key={option.id}
  //             style={{ backgroundImage: `url('${option.image}')` }}
  //           >
  //             <div id="title">{option.dog_name}</div>
  //             <div id="breed">{option.breed}</div>
  //             <div id="age">{`${option.age} Years Old`}</div>
  //           </div>
  //         );
  //       });
  //     })
  //     .then((choices) => setDogViews(choices))
  //     .catch((err) => console.error(err, 'Could not get all dogs.'));
  // }, []);

  const getDogs = (id) => {
    axios
      .get(`/dogs/${id}`)
      .then((response) => {
        const { dogs, matches } = response.data;
        console.log('the matches from the request body', matches);
        setLoadComplete(true);
        setDisplayDogs(dogs);
        setAllDogs(dogs);
        setMatches(matches);
        return { dogs, matches };
      })
      .then(({ dogs, matches }) => {
        if (dogs.length) {
          setDogViews(
            dogs.map((option) => {
              return (
                <div
                  id="choice-box"
                  key={option.id}
                  style={{ backgroundImage: `url('${option.image}')` }}
                >
                  <div id="title">{option.dog_name}</div>
                  <div id="breed">{option.breed}</div>
                  <div id="age">{`${option.age} Years Old`}</div>
                </div>
              );
            })
          );
        } else {
          setDogViews(
            <div id="choice-box">
              <div id="alt">
                Looks like you've made it through all the dogs in you're area.
                Please check back later.
              </div>
            </div>
          );
        }
        if (matches.length) {
          setMatchViews(
            matches.map((option) => {
              return (
                <div
                  id="choice-box"
                  key={option.id}
                  style={{ backgroundImage: `url('${option.image}')` }}
                >
                  <div id="title">{option.dog_name}</div>
                  <div id="breed">{option.breed}</div>
                  <div id="age">{`${option.age} Years Old`}</div>
                </div>
              );
            })
          );
        }
      })
      .catch((err) => console.error(err, 'Could not get all dogs.'));
  };

  useEffect(() => {
    const showPosition = (position) => {
      setLng(position.coords.longitude);
      setLat(position.coords.latitude);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('Geolocation is not supported by this browser....');
    }
  }, []);

  const open = () => {
    document.getElementById('mySidenav').style.width = '280px';
  };

  // const getSessDog = () => {
  //   axios
  //     .get('/currentDog')
  //     .then((response) => setSessDog(response.data[0]))
  //     .catch((err) => console.error('could not set session dog: ', err));
  // };

  // const open = () => {
  //   document.getElementById('mySidenav').style.width = '280px';
  // };

  const matchPopUp = (dog) => {
    console.log('the matched dog is:', dog);
    setNewMatch(dog);
    document.getElementById('matchPopUp').style.width = '800px';
  };

  const getSessDog = () => {
    axios
      .get('/currentDog')
      .then((response) => setSessDog(response.data[0]))
      .catch((err) => console.error('could not set session dog: ', err));
  };

  const filterDogs = ({ minAge, maxAge, breed }) => {
    let dogs = allDogs.slice();

    dogs = dogs.filter((dog) => {
      let bool = true;
      if (minAge && minAge !== '') {
        bool = dog.age >= minAge;
      }
      if (maxAge && bool && maxAge !== '') {
        bool = dog.age <= maxAge;
      }
      if (breed && bool && breed !== '') {
        bool = dog.breed.toUpperCase().includes(breed.toUpperCase());
      }
      return bool;
    });
    setDisplayDogs(dogs);
    setDogViews(
      dogs.map((option) => {
        return (
          <div
            id="choice-box"
            key={option.id}
            style={{ backgroundImage: `url('${option.image}')` }}
          >
            <div id="title">{option.dog_name}</div>
            <div id="breed">{option.breed}</div>
            <div id="age">{`${option.age} Years Old`}</div>
          </div>
        );
      })
    );
  };

  return (
    <Router>
      <Sidebar sessUser={sessUser} sessDog={sessDog} allDogs={allDogs} />
      <MatchPopUp dog={newMatch} />
      <div className="App">
        <Switch>
          <Route
            exact={true}
            path="/"
            render={() => (
              <Choice
                open={open}
                sessUser={sessUser}
                sessDog={sessDog}
                dogViews={dogViews}
                displayDogs={displayDogs}
                index={index}
                setIndex={setIndex}
                loadComplete={loadComplete}
                setMatches={setMatches}
                matches={matches}
                matchViews={matchViews}
                setMatchViews={setMatchViews}
                matchPopUp={matchPopUp}
              />
            )}
          />
          <Route exact path="/login" render={() => <Login />} />
          <Route
            path="/myprofile"
            render={() => (
              <MyProfile open={open} sessUser={sessUser} sessDog={sessDog} />
            )}
          />
          <Route
            path="/dogprofile"
            render={() => (
              <DogProfile
                open={open}
                sessUser={sessUser}
                sessDog={sessDog}
                allDogs={allDogs}
                friends={friends}
                matches={matches}
              />
            )}
          />
          <Route
            path="/popular"
            render={() => (
              <PopularLocations
                sessUser={sessUser}
                sessDog={sessDog}
                google={props.google}
                open={open}
                center={{ lat: 29.9511, lng: 90.0715 }}
                zoom={10}
              />
            )}
          />
          <Route
            path="/signUp"
            render={() => (
              <SignUp
                sessUser={sessUser}
                sessDog={sessDog}
                getSessDog={getSessDog}
              />
            )}
          />
          <Route
            path="/preferences"
            render={() => (
              <Preferences
                open={open}
                filterDogs={filterDogs}
                setFilter={setFilter}
                setIndex={setIndex}
              ></Preferences>
            )}
          />
          <Route
            path="/matches"
            render={() => (
              <Matches
                open={open}
                sessUser={sessUser}
                sessDog={sessDog}
                getSessDog={getSessDog}
                matches={matches}
                matchViews={matchViews}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
