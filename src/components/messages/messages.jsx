
import './messages.scss';
import { NavLink } from 'react-router-dom';

const  MessagesItem =(props) => {
  let path = "/messages/" + props.id;
  return(
    <div className="messages__item"><span className="messages__status"></span> <NavLink to={path}>{props.name}</NavLink> </div>
  );
}
const Mesage = (props) => {
  return (
    <div className="message-chat__meesage"> {props.message}</div>
  );
}



const Messages = () => {
  return (
    <div className="messages">
      <div className="messages__name">Dialogs</div>
      <div className="messages__row">
        <div className="messages__column">
          <MessagesItem name="Andrew" id="1"/>
          <MessagesItem name="Dmitry" id="2"/>
          <MessagesItem name="Sasha" id="3"/>
          <MessagesItem name="Vasea" id="4"/>
          <MessagesItem name="Jora" id="5"/>
          <MessagesItem name="Cristi" id="6"/>
          <MessagesItem name="Cristina" id="7"/>
        </div>
        <div className="messages__column message-chat">
          <div className="message-chat__message">
            <div className="message-chat__user">
              <span className="message-chat__avatar"></span>
            Dmitry
          </div>
            
          </div>
          <Mesage />
          <div className="message-chat__items">
            <div className="message-chat__user">
              <span className="message-chat__avatar"></span>
            Me
          </div>
            <Mesage message="it's fine"/>
            <Mesage message="it's fine"/>
          </div>

        </div>
      </div>

    </div>
  );

}
export default Messages;