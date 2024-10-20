import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from'./assets/home.svg';
import saved from'./assets/bookmark.svg';
import rocket from'./assets/rocket.svg';

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="ChatGPT Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBt" />New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" className="" />What is programming?
            </button><br></br>
            <button className="query">
              <img src={msgIcon}  alt="Query" className="" />How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="home" className="listItemsImg" />Home</div> 
          <div className="listItems"><img src={saved} alt="save" className="listItemsImg" />Save</div> 
          <div className="listItems"><img src={rocket} alt="upgrade to pro" className="listItemsImg" />Upgrade To pro</div> 

          </div>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Main content can go here */}
      </div>
    </div>
  );
}

export default App;
