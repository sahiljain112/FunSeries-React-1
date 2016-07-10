
var SurveyItem = require('./SurveyItem');
var SurveyList = React.createClass({
  // the Surveylist component ,url attribute get from outside

  getInitialState: function(){
    return {
      data: []
    };
  },
  componentWillMount: function(){
    $.ajax({
      url: this.props.url,
      type:"GET",
      dataType: 'JSONP',
      cache: false,
      success: function(data){
        console.log(data);
        this.setState({data: data}) // state variable data will contain the fetched data
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err);
      }.bind(this)
    });
  },

  render: function(){
    return (
      <div className = "container-fluid">
      <h3 className = "main-header"> Survey List </h3>
      {this.state.data.map(function(obj,i){
        return <SurveyItem item={obj} key={i} onShowDes={this.onShowDes}/>;
      })}
      </div>
    );
  },

});


module.exports = SurveyList;  