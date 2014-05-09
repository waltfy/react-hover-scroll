// react-hover-scroll
var ReactHoverScrollMixin = {
  displayName: 'ReactHoverScrollMixin',
  propTypes: {
    HS_time: React.PropTypes.number,
    HS_class: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      HS_time: 500,
      HS_class: 'disable-hover'
    };
  },
  getInitialState: function () {
    return { scrolling: false };
  },
  isScrolling: function () {
    return this.state.scrolling; 
  },
  removeHoverEffects: function () {
    this.setState({ scrolling: true }); // is scrolling
  },
  addHoverEffects: function () {
    this.setState({ scrolling: false }); // stopped scrolling
  },
  componentDidMount: function () {
        var self = this,
        timer = null;
        
    window.addEventListener('scroll', function () {
      clearTimeout(timer);
      if (!self.state.scrolling) self.removeHoverEffects();
      timer = setTimeout(self.addHoverEffects, self.props.HS_time);
    }, false);
  }
};
