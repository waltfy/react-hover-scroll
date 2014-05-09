var ReactHoverScrollMixin = {
  displayName: 'ReactHoverScrollMixin',
  propTypes: {
    HS_time: React.PropTypes.number,
    HS_class: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      HS_time: 500,
      HS_active: false
      HS_class: 'disable-hover',
    };
  },
  removeHoverEffects: function () {
    this.setProps({ HS_active: true }); // is scrolling
  },
  addHoverEffects: function () {
    this.setProps({ HS_active: false }); // stopped scrolling
  },
  componentDidMount: function () {
      var self = this,
      timer = null;
        
    window.addEventListener('scroll', function () {
      clearTimeout(timer);
      if (!self.props.HS_active) self.removeHoverEffects();
      timer = setTimeout(self.addHoverEffects, self.props.HS_time);
    }, false);
  }
};
