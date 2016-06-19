var SurveyDescription = require('./SurveyDescription');
var SurveyQuestionsWizard = require('./SurveyQuestionsWizard');

var SurveyItem = React.createClass({

   getInitialState: function(){
    return {
      show: false
    };
  },

  toggleDes: function () {
    console.log('this.state.show:', this.state.show);
    this.setState({ show: !this.state.show });
  },

  render: function(){
    const desc = this.state.show ?
      <SurveyDescription des={this.props.item.description}/>
      : null;
    return (
      <div id = "5" className = "content" onClick={this.toggleDes}>
        <p>{this.props.item.id}</p>
        <p>{this.props.item.title}</p>
        <p>{this.props.item.creation_date}</p>
        <p>{this.props.item.short_description}</p>
        {desc}
        <button className = "btn btn-primary"> <a href = "html/survey.html"> </button>

      </div>
    );
  }
});

module.exports = SurveyItem;
