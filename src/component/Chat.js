// import React, {Component} from 'react'


// export class Chat extends Component {
//     componentDidMount(){
       
//     (function(d, m){
//         var kommunicateSettings = 
//             {"appId":"cefed03f7b5b2469ad9de70a89e61429","popupWidget":true,"automaticChatOpenOnNavigation":true};
//         var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//         s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//         var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//         window.kommunicate = m; m._globals = kommunicateSettings;
//     })(document, window.kommunicate || {});

// }
//     render(){
//         return(
//             <div>
//                 <h1 style={{ fontSize: '13px' }}>The AI ChatBot for University FAQ utilizes the power of the Dialogue Flow API to provide an efficient and interactive experience for students seeking information about the university.</h1>
//             </div>
//         )
//     }

// }

// export default Chat


import React, { Component } from 'react';

export class Chat extends Component {
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: 'cefed03f7b5b2469ad9de70a89e61429',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      var h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  render() {
    return (
      <div>
        <h1 style={{ fontSize: '13px' }}>
          The AI ChatBot for University FAQ utilizes the power of the Dialogue Flow API to provide an efficient and interactive experience for students seeking information about the university.
        </h1>
      </div>
    );
  }
}

export default Chat;

 


