import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from'./assets/home.svg';
import saved from'./assets/bookmark.svg';
import rocket from'./assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';


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
       <div className="chats">
        <div className="chat">
          <img className='chatimg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, voluptatem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam iure impedit repudiandae, veritatis dicta veniam atque sequi explicabo officiis nulla.</p></div>
          <div className="chat bot">
          <img className='chatimg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi officia rem accusamus. Cum quidem laudantium aspernatur error, sint reprehenderit, doloribus quia aliquam sunt unde quo quae molestiae similique voluptas maiores doloremque recusandae quod nesciunt modi. Atque quidem quaerat neque aliquam pariatur sequi assumenda eum ratione nam distinctio doloremque optio dolore nemo, enim cumque delectus asperiores recusandae, necessitatibus eligendi, nostrum vero explicabo molestiae aspernatur numquam? Quidem corporis quis asperiores optio, officia maxime. Error, earum neque, fugiat pariatur debitis eius suscipit commodi at ullam dignissimos quod nemo excepturi. Labore reiciendis, minus quia enim mollitia esse magnam tempora? Quas eligendi repellat exercitationem!</p></div>
       </div>
       
       <div className="chatFooter">
        <div className="inp">
          <input type="text" placeholder='Enter Message here' /> <button className="send"><img src={sendBtn} alt="SEnd" /></button>
          

        </div>
        <p>ChatGPT can make mistakes. Check important info.</p>
       </div>
      </div>
    </div>
  );
}

export default App;
