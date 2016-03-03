import React from 'react';
import ToolBar from '../containers/ToolBar.jsx';
import TopArticle from '../containers/TopArticle.jsx';

class MainForm extends React.Component {

  render() {
    return (
      <div>
      	<ToolBar />
        <TopArticle />	
      </div>
      );
  }
}

export default MainForm;