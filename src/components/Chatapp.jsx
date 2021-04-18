import { ChatEngine } from "react-chat-engine";

const Chatapp = () => {
  return (
    <>
      <div className="ce-div-size">
        <ChatEngine
          height="35vh"
          projectID="c32b2e8f-b275-4180-b3cd-54bffc4d4a53"
          userName="amneet270"
          userSecret="amneet270"
        />
      </div>

      <style jsx global>
        {`
        
          /* CHAT STYLES */
          .ce-chat-list {
            display: none !important;
            color: black !important;
            background-color: rgb(209, 14, 14) !important ;
          }
          .ce-section-title ce-photo-title {
            display: none !important;
          }
          .ce-settings-container {
            display: none !important;
          }
          .ce-chat-feed {
            border: 3px solid #2175ad !important;
            padding: 0px 0px !important;
            margin: 4px !important;
          }

          div.ce-div-size {
            position: absolute;
            top: 61%;
            right: 3%;
            width: 30%;
            height: 37%;
            /* border: 3px solid #73AD21; */
          }
          .ce-chat-title-container {
            max-width: 100% !important;
            margin: 0px !important;
            right: 0px !important;
            top: 2px !important;
            left: 6px !important ;
            padding: 1px;
          }
          .ce-chat-title {
            top: 5px !important;
            width: 90% !important;
            margin-top: 2px;
          }
          .ce-message-input-form {
            width: 60% !important;
          }
          #msg-form-container {
            width: 90% !important;
          }
          .ce-chat-subtitle-text {
            font-size: 6px !important;
          }
          .ce-chat-title-text {
            font-size: 12px !important;
          }

          #upload-document-button {
            display: none !important;
          }
          .ce-primary-button {
          }
          .ce-input.ce-textarea-input {
            width: 62% !important;
            font-size: 10px !important;
            height: 100% !important;
          }

          .ce-message-bubble.ce-my-message-bubble {
            font-size: 10px !important;
          }
          .ce-message-date-text {
            font-size: 8px !important;
          }
        `}
      </style>
    </>
  );
};
export default Chatapp;
